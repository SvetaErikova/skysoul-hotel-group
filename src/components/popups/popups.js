PopupManager.register("popup_for_cascade", {
  additional_close_controls: true,
  is_block_scroll: true,
});

PopupManager.register(
  "popup_for_form",
  {
    is_block_scroll: true,
    additional_close_controls: true,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelector("form").reset();
    },
  },
);

PopupManager.register(
  "popup_for_cookies",
  {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
      sessionStorage.setItem("cookie", "shown");
    },
  },
);
PopupManager.register("popup_for_menu",   {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelectorAll('.menu--mobile_item').forEach(item => {
        item.classList.remove('is-open');
      });

    },
  },
);

const personnelData = [
  {
    id: 1,
    name: "Анастасия",
    position: "Директор по маркетингу и рекламе",
    image: "/assets/img/1.jpg",
    email: "nihiquoicufre-9737@gmail.com",
    telegram: "https://t.me/username",
    html: `
      <b>На посту Директора по маркетингу и рекламе Анастасия отвечает за всю маркетинговую стратегию холдинга.</b>
      <p>В её обязанности входит:</p>
      <ul>
        <li>Разработка и реализация комплексной маркетинговой стратегии для всех отелей группы.</li>
        <li>Управление брендом и его позиционирование на конкурентном рынке гостиничного бизнеса.</li>
        <li>Цифровой маркетинг: управление сайтами, SEO/SEM, маркетинг в социальных сетях, работа с блогерами и лидерами мнений.</li>
      </ul>
    `
  },
  {
    id: 2,
    name: "Иван",
    position: "Директор по маркетингу и рекламе",
    image: "/assets/img/2.jpg",
    email: "ivan@example.com",
    telegram: "https://t.me/ivan",
    html: `
      <b>На посту Директора по маркетингу и рекламе Иван отвечает за всю маркетинговую стратегию холдинга.</b>
    `
  },
  {
    id: 3,
    name: "Мария",
    position: "Директор по маркетингу и рекламе",
    image: "/assets/img/4.jpg",
    email: "maria@example.com",
    telegram: "https://t.me/maria",
  },
  {
    id: 4,
    name: "Дмитрий",
    position: "Директор по маркетингу и рекламе",
    image: "/assets/img/5.jpg",
    email: "dmitriy@example.com",
    telegram: "https://t.me/dmitriy",
  }
  // Добавьте больше элементов массива по необходимости
];

PopupManager.register(
  "popup_for_personnel",
  {
    additional_close_controls: false,
    is_block_scroll: true,
  },
  {
    on_open: (popup_element, params) => {
        const personnel = personnelData[params.index];
        if (personnel) {
          let name = popup_element.querySelector(".personnel--name"),
              position = popup_element.querySelector(".personnel--position"),
              image = popup_element.querySelector(".personnel--image img"),
              email = popup_element.querySelector(".personnel--email"),
              telegram = popup_element.querySelector(".personnel--telegram"),
              content = popup_element.querySelector(".personnel--info_content")
          image.src = personnel.image;
          name.textContent = personnel.name;
          position.textContent = personnel.position;
          if (email) {
            email.href = `mailto:${personnel.email}`;
            email.textContent = personnel.email;
          }
          if (telegram) {
            telegram.href = personnel.telegram;
            telegram.textContent = "Telegram";
          }
          if (content) {
            content.innerHTML = personnel.html;
          }
        }
    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        const card = popup_element.querySelector(".personnel_card");
        const nameEl = popup_element.querySelector(".personnel--name");
        const positionEl = popup_element.querySelector(".personnel--position");
        const emailBtn = popup_element.querySelector(".personnel--email");
        const telegramBtn = popup_element.querySelector(".personnel--telegram");
        const contentEl = popup_element.querySelector(".personnel--info_content");

        if (card) {
          card.style.backgroundImage = "";
        }
        if (nameEl) nameEl.textContent = "";
        if (positionEl) positionEl.textContent = "";
        if (emailBtn) {
          emailBtn.href = "";
          emailBtn.textContent = "";
        }
        if (telegramBtn) {
          telegramBtn.href = "";
          telegramBtn.textContent = "";
        }
        if (contentEl) {
          contentEl.innerHTML = "";
        }
      }, 110);
    },
  },
);

PopupManager.register(
  "popup_for_filters",
  {
    additional_close_controls: true,
    is_block_scroll: true
  },
  {
    on_open: (popup_element, params) => {
      let filters = document.querySelector(".popup--filters");
      console.log(filters);
      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      filters.appendChild(block_content);
    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector(".popup--filters").innerHTML = "";
      }, 110);
    }
  }
);

// Add event Listeners to open Popups

function activatePopupButtons(block) {
  let open_popup_buttons = block.querySelectorAll("[data-openpopup]");
  open_popup_buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      if (b.dataset.openpopup === "popup_for_filters") {
        let block_to_clone = b.parentElement.querySelector(".filter");
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone});
        }
      } else {
        PopupManager.open(b.dataset.openpopup);
      }
    });
  });

  // Обработчик для кнопок с data-popup-personnel
  let personnel_buttons = block.querySelectorAll("[data-popup-personnel]");
  personnel_buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      const index = parseInt(b.dataset.popupPersonnel) - 1; // -1 потому что индексы с 0, а data с 1
      if (index >= 0 && index < personnelData.length) {
        PopupManager.open("popup_for_personnel", { index: index });
      }
    });
  });
}

activatePopupButtons(document);
window.activatePopupButtons = activatePopupButtons;

window.addEventListener('load', () => {
  if (sessionStorage.getItem('cookie') !== 'shown' && localStorage.getItem('cookie') !== 'shown') {
    PopupManager.open('popup_for_cookies');
    document.querySelector('[data-accept]').addEventListener('click', function () {
      sessionStorage.setItem('cookie', 'shown');
      localStorage.setItem('cookie', 'shown');
    })
  }
});
// PopupManager.open('popup_for_cookies');
// PopupManager.open('popup_for_notification', { title: 'Произошла ошибка', text: 'Попробуйте обновить страницу или попробовать позже', type: 'error' })
