/**
 * OverflowNav — чистый модуль динамического меню с пунктом «Ещё». Используется для перераспределения элементов меню при изменении ширины окна.
 *
 * @param {Object} options - настройки
 * @param {number} options.comfortCount - количество элементов в запасе (default: 1)
 * @param {number} options.debounce - debounce для перераспределения (default: 0)
 * @param {Object} options.selectors - селекторы (default: { root: "[data-js-nav]", more: "[data-js-more]", dropdown: "[data-js-dropdown]" })
 * @param {Function} options.changeItemFn - функция для изменения элемента (default: null)
 * @param {boolean} options.autoInit - автоматически инициализировать (default: true)
 */
export class OverflowNav {
  constructor(options = {}) {
    // дефолтные настройки
    const defaults = {
      comfortCount: 0,
      debounce: 0,
      selectors: {
        root: ".header .nav",
        more: ".header .nav--item-more ",
        dropdown: ".header .nav--item-more .dropdown--list",
      },
      changeItemFn: null,
      autoInit: true,
    };
    this.opts = Object.assign({}, defaults, options);

    // поиск элементов
    this.root = document.querySelector(this.opts.selectors.root);
    if (!this.root) throw new Error("[OverflowNav] Root element not found");
    this.more = this.root.querySelector(this.opts.selectors.more);
    this.dropdown = this.root.querySelector(this.opts.selectors.dropdown);
    if (!this.more || !this.dropdown)
      throw new Error("[OverflowNav] Missing elements");

    // состояние
    this._ro = null;
    this._boundSchedule = null;
    this._onLoad = null;
    this._inited = false;

    if (this.opts.autoInit) this.init();
  }

  // инициализация
  init() {
    if (this._inited) return this;
    const schedule =
      this.opts.debounce > 0
        ? this._debounce(() => this.redistribute(), this.opts.debounce)
        : () => this.redistribute();
    this._boundSchedule = schedule;

    this._ro = new ResizeObserver(() => schedule());
    this._ro.observe(this.root);
    window.addEventListener("resize", schedule);
    this._onLoad = () => this.redistribute();
    window.addEventListener("load", this._onLoad);

    this.redistribute();
    this._inited = true;
    return this;
  }

  // уничтожение
  destroy() {
    if (!this._inited) return this;
    if (this._ro) {
      try {
        this._ro.disconnect();
      } catch (e) {}
      this._ro = null;
    }
    if (this._boundSchedule)
      window.removeEventListener("resize", this._boundSchedule);
    if (this._onLoad) window.removeEventListener("load", this._onLoad);

    // Возвращаем элементы из dropdown обратно в навигацию
    Array.from(this.dropdown.children).forEach((dropdownItem) => {
      const link = dropdownItem.querySelector('a');
      if (link) {
        // Создаем новый nav--item
        const navItem = document.createElement('div');
        navItem.className = 'nav--item';
        navItem.appendChild(link.cloneNode(true));
        this._change(navItem, false);
        this.root.insertBefore(navItem, this.more);
      }
      dropdownItem.remove();
    });

    this.more.hidden = this.dropdown.children.length === 0;
    this._inited = false;
    return this;
  }

  // утилиты
  _debounce(fn, ms) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, a), ms);
    };
  }
  _children() {
    return Array.from(this.root.children).filter(
      (el) => el !== this.more && el.classList.contains('nav--item')
    );
  }
  _outerWidth(el) {
    // Для элементов с дропдауном учитываем только видимую часть (ссылку)
    // игнорируя скрытый dropdown--wrapper
    if (el.classList.contains('dropdown')) {
      const link = el.querySelector('a');
      if (link) {
        return link.getBoundingClientRect().width;
      }
    }
    // Для обычных nav--item тоже берем ширину ссылки
    const link = el.querySelector('a');
    if (link) {
      return link.getBoundingClientRect().width;
    }
    return el.getBoundingClientRect().width;
  }
  _extractLink(el) {
    // Извлекаем ссылку из nav--item (Button с type="link" рендерится как <a>)
    const link = el.querySelector('a');
    if (!link) return null;
    
    // Клонируем ссылку со всеми атрибутами и содержимым
    const clonedLink = link.cloneNode(true);
    return clonedLink;
  }
  _createDropdownItem(link) {
    // Создаем новый dropdown--item с ссылкой
    const item = document.createElement('div');
    item.className = 'dropdown--item';
    item.appendChild(link);
    return item;
  }
  _menuGap() {
    const cs = getComputedStyle(this.root);
    return parseFloat(cs.gap) || 0;
  }
  _change(el, hidden) {
    if (typeof this.opts.changeItemFn === "function")
      this.opts.changeItemFn(el, {
        hidden,
        direction: hidden ? "toOverflow" : "toMain",
      });
  }

  // перераспределение элементов
  redistribute() {
    // вернуть всё из дропдауна обратно в навигацию
    Array.from(this.dropdown.children).forEach((dropdownItem) => {
      const link = dropdownItem.querySelector('a');
      if (link) {
        // Создаем новый nav--item из ссылки
        const navItem = document.createElement('div');
        navItem.className = 'nav--item';
        // Клонируем ссылку (Button с type="link" уже является <a>)
        navItem.appendChild(link.cloneNode(true));
        this._change(navItem, false);
        this.root.insertBefore(navItem, this.more);
      }
      dropdownItem.remove();
    });

    const available = Math.floor(this.root.getBoundingClientRect().width);
    const gap = this._menuGap();
    this.root.appendChild(this.more);
    this.more.hidden = false;
    const moreW = this._outerWidth(this.more);

    const items = this._children();
    const widths = items.map(
      (el, i) => this._outerWidth(el) + (i > 0 ? gap : 0),
    );
    const total = widths.reduce((a, b) => a + b, 0);

    if (total <= available) {
      this.more.hidden = true;
      return;
    }

    let used = 0,
      last = -1;
    for (let i = 0; i < items.length; i++) {
      const w = widths[i];
      const cap = available - moreW - gap;
      if (used + w <= cap) {
        used += w;
        last = i;
      } else break;
    }

    // Переносим элементы, которые не влезают, в dropdown
    for (let j = last + 1; j < items.length; j++) {
      const navItem = items[j];
      const link = this._extractLink(navItem);
      if (link) {
        const dropdownItem = this._createDropdownItem(link);
        this._change(dropdownItem, true);
        this.dropdown.appendChild(dropdownItem);
        navItem.remove(); // Удаляем оригинальный nav--item
      }
    }

    // запас
    const comfort = Math.max(0, Number(this.opts.comfortCount || 0));
    for (let k = 0; k < comfort; k++) {
      const still = this._children();
      const lastEl = still[still.length - 1];
      if (lastEl && lastEl !== this.more) {
        const link = this._extractLink(lastEl);
        if (link) {
          const dropdownItem = this._createDropdownItem(link);
          this._change(dropdownItem, true);
          this.dropdown.prepend(dropdownItem);
          lastEl.remove(); // Удаляем оригинальный nav--item
        }
      }
    }

    this.more.hidden = this.dropdown.children.length === 0;
  }
}
