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
          <Button className={'popup--close'}  icon={'icon-close'} data-closepopup></Button>
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

export const PopupPersonnel = () =>{
  return (
    <PopupsLayout className={'popup_personnel'} data={"popup_for_personnel"}>
      <div className="personnel">
        <div className="personnel--main">
          <div className="personnel--image">
            <img src={'/'} alt={'/'} />
          </div>
          <p className="personnel--name"></p>
          <p className="personnel--position"></p>
        </div>
        <div className="personnel--info">
          <div className="personnel--info_contacts">
            <Button className={'personnel--email'} type={'link'} color={'primary'} href={''}> </Button>
            <Button className={'personnel--telegram'} type={'link'} color={'primary'} href={''} icon={''}></Button>
          </div>
          <div className="personnel--info_content is_cascade"></div>
        </div>
      </div>
    </PopupsLayout>
  )
}

export const PopupCookies = () => {
  return <PopupsLayout data={'popup_for_cookies'} btnClose={false}>
    <strong>Этот сайт использует cookies</strong>
    <p>Чтобы улучшить работу сайта, мы собираем данные о ваших посещениях. Оставаясь на сайте, вы соглашаетесь с нашей политикой использования cookies.</p>
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
      <PopupFilter></PopupFilter>
      <PopupPersonnel></PopupPersonnel>
    </>
  );
};
