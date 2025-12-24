import clsx from 'clsx';
import { Button } from '../_ui/button/button.jsx';
import { menuSections } from '../../shared/menu-sections.js';
const groups = menuSections?.[0]?.groups || [];

export const Menu = () => {
  return (
    <>
      <div className="menu">
        <div class="menu--wrapper">
          <div class="menu--top">
            <a href={'/'} class="menu--logo">
              <img src="/assets/img/logo-white.svg" />
            </a>
            <Button type={'filled'} color="secondary"  data-closepopup icon={'icon-close'}>
            </Button>
          </div>
          <div class="menu--main">
            <div className="button--wrapper">
              <Button type={'filled'} color={'primary'} icon={'icon-arrow-right'}>Передать в управление</Button>
              <Button type={'outlined'} color={'secondary'} icon={'icon-user'}>Личный кабинет</Button>
            </div>
            <div className="menu--nav">
              {groups.map((group, groupIndex) => (
                <ul key={groupIndex} className="menu--nav_list">
                  <li className="menu--nav_list_item">
                    <p className="menu--nav_list_title">{group.title}</p>
                  </li>
                  {group.links.map((link, linkIndex) => (
                    <li key={`${groupIndex}-${linkIndex}`} className="menu--nav_list_item">
                      <a href={link.href}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className='menu--contacts'>

              <div className="menu--contacts_item">
                <span>Адрес</span>
                <p>Крым, ул. Ленина, дом 10, офис 320</p>
              </div>
              <div className="menu--contacts_item">
                <span>Контакты</span>
                <a href="tel:+7 999 999 99 99">8 800 888 88 88</a>
                <a href="mailto:info@skysoulresort.com">info@skysoulresort.com</a>
              </div>
              <div className="menu--contacts_item">
                <span>По вопросам сотрудничества</span>
                <div>
                  <a href="mailto:info@skysoulresort.com">info@skysoulresort.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu--note">
            <div className="menu--note_nav">
              <div className="menu--note_nav-item">
                <a href="">О компании</a>
              </div>
              <div className="menu--note_nav-item">
                <a href="">Новости</a>
              </div>
              <div className="menu--note_nav-item">
                <a href="">Карьера</a>
              </div>
              <div className="menu--note_nav-item">
                <a href="">Купить недвижимость</a>
              </div>
              <div className="menu--note_nav-item">
                <a href="">Медиа для инвесторов</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
