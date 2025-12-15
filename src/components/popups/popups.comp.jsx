import { Navigation } from "swiper/modules";
import { Is_cascade_full } from "../_ui/is_cascade/is_cascade-full.jsx";
import { Form } from "../form/form-comp.jsx";
import { Menu } from "../menu/menu-comp.jsx";
import { Is_cascade_mini } from '../_ui/is_cascade/is_cascade_mini.jsx';
import {Button} from "../_ui/button/button.jsx";

const PopupsLayout = ({ data, className, classNameContent, children, btnClose = true }) => {
	return (
		<div className={`popup ${className || ''}`} data-popup={data}>
			<div className={`popup--content ${classNameContent || ''}`}>
        {btnClose && (
          <div className="popup--close button button-arrow button-dark" data-closepopup="">
            <span className={'icon-close'}></span>
          </div>

        )}
				{children}
			</div>
		</div>
	);
};

export const PopupMenu = () => {
	return (
		<PopupsLayout data={"popup_for_menu"} className={'popup-menu'} btnClose={false}>
			<Menu></Menu>
		</PopupsLayout>
	);
};
export const PopupContacts = () => {
  return (
    <PopupsLayout data={"popup_for_contacts"} className={'popup-contacts'} >
      <div className="dropdown--item">
        <span>Телефон</span>
        <Button type="link" color="secondary" size={'md'}>+7 999 999 99 99</Button>
      </div>
      <div className="dropdown--item">
        <span>E-mail</span>
        <Button type="link" color="secondary" size={'md'}>info@skysoulresort.com</Button>
      </div>
      <div className="dropdown--item">
        <span>Адрес</span>
        <p>Республика Крым, г. Феодосия,<br/>пгт. Коктебель, ул. Арматлукская, 2</p>
        <Button type="link" color="secondary" size={'md'}>Проложить маршрут →</Button>
      </div>
      <div className="dropdown--item">
        <span>Социальные сети</span>
        <div>
          <Button link='/' type="link" color="secondary" size={'md'} icon={'icon-telegram'}></Button>
          <Button link='/' type="link" color="secondary" size={'md'} icon={'icon-youtube'}></Button>
          <Button link='/' type="link" color="secondary" size={'md'} icon={'icon-vk'}></Button>
          <Button link='/' type="link" color="secondary" size={'md'} icon={'icon-ok'}></Button>
        </div>
      </div>
    </PopupsLayout>
  );
};

export const PopupCascade = () => {
  return (
    <PopupsLayout data={"popup_for_cascade"}>
      <Is_cascade_mini></Is_cascade_mini>
    </PopupsLayout>
  );
};


export const PopupForm = () => {
  return (
    <PopupsLayout data={"popup_for_form"}>
      <Form></Form>
    </PopupsLayout>
  );
};
export const PopupFilter = () => {
  return (
    <PopupsLayout data={"popup_for_filters"} className={'popup-filters'}>
      <div class="popup--filters">

      </div>
    </PopupsLayout>
  );
};

export const PopupRoomAdvantages = () => {
  return (
    <PopupsLayout data={"popup_for_room_advantages"}>
      <div class="popup__content">

      </div>
    </PopupsLayout>
  );
};
export const PopupReview = () => {
  return <PopupsLayout data={'popup_for_review'} className={'popup-review'} btnClose={true}>
    <div class="popup_content-wrapper">

    </div>
  </PopupsLayout>;
};
export const PopupCookies = () => {
  return <PopupsLayout data={'popup_for_cookies'} btnClose={false}>
    <strong>Сайт использует Cookies</strong>
    <p>Без них всё работало бы хуже</p>
    <button class="button button-filled button-primary" data-closepopup="" data-accept="">
      <span>Хорошо!</span>
    </button>
  </PopupsLayout>;
};
export const PopupNotification = () => {
  return <PopupsLayout data={"popup_for_notification"}></PopupsLayout>;
};

export const Popups = () => {
  return (
    <>
      <PopupMenu></PopupMenu>
      <PopupForm></PopupForm>
      <PopupCascade></PopupCascade>
      <PopupCookies></PopupCookies>
      <PopupReview></PopupReview>
      <PopupContacts></PopupContacts>
      <PopupFilter></PopupFilter>
      <PopupRoomAdvantages></PopupRoomAdvantages>
    </>
  );
};
