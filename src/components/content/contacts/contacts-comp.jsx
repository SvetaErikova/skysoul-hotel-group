import {Block} from "../../block/block.jsx";
import {Map_contacts} from "../../map/map-comp.jsx";
import {Button} from "../../_ui/button/button.jsx";

export const Contacts = () => {
  return (
    <Block className={'content_contacts'}>
      <>
        <div class="block--contacts">
          <div class="block--contacts_title">Контакты</div>
          <div class="block--contacts_info">
            <div>
              <span>Адрес</span>
              <p>Крым, улица, номер дома</p>
            </div>
            <div>
              <span>Телефон</span>
              <p><a href="tel:+7 499 999 99 99">+7 499 999 99 99</a></p>
            </div>
            <div>
              <span>Email</span>
              <p><a href="mailto:info@skysoulresort.com">info@skysoulresort.com</a></p>
            </div>
            <div>
              <span>Социальные сети</span>
              <div>
                <Button link="/" type="link" color="secondary" size={'sm'} icon={'icon-telegram'}></Button>
                <Button link="/" type="link" color="secondary" size={'sm'} icon={'icon-youtube'}></Button>
                <Button link="/" type="link" color="secondary" size={'sm'} icon={'icon-vk'}></Button>
                <Button link="/" type="link" color="secondary" size={'sm'} icon={'icon-ok'}></Button>
              </div>
            </div>
          </div>
          <div class="block--actions">
            <Button type={'filled'} color={'primary'} size={'sm'}>Построить маршрут</Button>
            <Button type={'filled'} color={'secondary'} size={'sm'}>Как добраться</Button>
          </div>
        </div>
        <Map_contacts></Map_contacts>
      </>
    </Block>
  )
}
