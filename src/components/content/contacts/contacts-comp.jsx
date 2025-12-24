import {Block} from "../../block/block.jsx";
import {Map_contacts} from "../../map/map-comp.jsx";
import {Button} from "../../_ui/button/button.jsx";
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';

export const Contacts = () => {
  return (
    <Block className={'content_contacts'} title={<Block_Head title={'Контакты'}></Block_Head>}>
      <>
        <div className="block--map">
        <div class="block--contacts">
          <div class="block--contacts_title">Центральный офис</div>
          <div class="block--contacts_info">
            <div>
              <span>Адрес</span>
              <p>Республика Крым, г. Симферополь, ул.Евпаторийское шоссе, 8</p>
            </div>
            <div>
              <span>Телефоны</span>
              <p><a href="tel:+79790241160">+7 979 024 11 60</a></p>
              <p><a href="tel:+79790241159">+7 979 024 11 59</a></p>
            </div>
            <div>
              <span>Email</span>
              <p><a href="mailto:info@skysoulresort.com">info@skysoulresort.com</a></p>
            </div>
            <div>
              <span>Социальные сети</span>
              <div>
                <a href="https://t.me/skysoul_hotel" target="_blank">
                  <img src="/assets/img/soc/tg.svg"/>
                </a>
              </div>
            </div>
          </div>
          <div class="block--actions">
            <Button type={'filled'} color={'secondary'} dark={true} >Построить маршрут</Button>
          </div>
        </div>
        <Map_contacts></Map_contacts>
        </div>
        <div class="block--contacts_note">
          <div class="block--contacts_note_title">По вопросам сотрудничества</div>
          <div className="block--contacts_note_list">
            <div className="item">
              <p>Поставщикам</p>
              <Button type={'link'} color={'secondary'} href={'mailto:info@skygrouphotel.ru'}>info@skygrouphotel.ru</Button>
            </div>
            <div className="item">
              <p>Туроператорам</p>
              <Button type={'link'} color={'secondary'} href={'mailto:info@skygrouphotel.ru'}>info@skygrouphotel.ru</Button>
            </div>
            <div className="item">
              <p>Сотрудничество</p>
              <Button type={'link'} color={'secondary'} href={'mailto:info@skygrouphotel.ru'}>info@skygrouphotel.ru</Button>
            </div>
            <div className="item">
              <p>Реклама на курортах</p>
              <Button type={'link'} color={'secondary'} href={'mailto:info@skygrouphotel.ru'}>info@skygrouphotel.ru</Button>
            </div>
          </div>
        </div>
      </>
    </Block>
  )
}
