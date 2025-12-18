import { Button } from '../button/button.jsx';
import {
  Card, Card_advantages, Card_job, Card_personnel, Card_resort,
} from './card.jsx';

export const All_card_default = () => {
  return (
    <>
      <Card title={'Карточка ссылка '}
            text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
            image={'../../assets/img/2.jpg'} link={'/'}
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
      <Card
        title={'Карточка попап c очень очень очень очень очень очень очень очень большим заголовком'}
        text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
        image={'../../assets/img/2.jpg'}
        popup={'popup_for_cascade'}
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-eyes-closed-line'} />
        }

      />
      <Card
        title="Карточка с ссылкой"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />
        }
        link={'/'}
      />
      <Card
        title="Карточка информационная "
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </>
  );
};
export const All_card_personnel = () => {
  return (
    <>
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
      />
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
      />
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
      />
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'} />
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'} />
    </>
  );
};
export const All_card_resort = () => {
  return (
    <>
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-location' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-location' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-location' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-location' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} />
    </>
  );

};


export const All_card_job = () => {
  return (
    <>
      <Card_job title={'Название вакансии'}
                text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '} />
      <Card_job title={'Название вакансии'}
                text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '} />
      <Card_job title={'Название вакансии'}
                text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '} />
      <Card_job title={'Название вакансии'}
                text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '} />

    </>
  );
};

export const All_card_services = () => {
  return (
    <>
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'} />
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'} />
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'} />
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'} />
    </>
  );
};


export const All_card_article = () => {
  return (
    <>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
            labels={[{ text: 'Новости' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
            labels={[{ text: 'Статья' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
    </>
  );
};
export const All_card_media = () => {
  return (
    <>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            labels={[{ text: 'Аргументы и факты ', icon: 'icon-arrow-r' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'} labels={[{ text: 'Новости' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            labels={[{ text: 'Статья' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
    </>
  );
};

export const All_card_blog = () => {
  return (
    <>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'}><span>24.11.2025</span></Card>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'}><span>24.11.2025</span></Card>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'}><span>24.11.2025</span></Card>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />} actionsout={true}
            link={'/'}><span>24.11.2025</span></Card>
    </>
  );
};
export const All_card_steps = () => {
  return (
    <>
      <Card title={'Подача заявки на сайте'}
            text={'Обсуждаем цели, условия сотрудничества и отвечаем на вопросы.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
      />
      <Card title={'Заключение договора'}
            text={'Оформляем соглашение с указанием всех условий и обязательств сторон.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
      />
      <Card title={'Подготовка к приёму гостей'}
            text={'Дизайн-аудит, комплектация, фотосъёмка, настройка сервисов бронирования.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
      />
      <Card title={'Интеграция  в систему управления'}
            text={'Вносим апартамент в каналы продаж и подключаем личный кабинет собственника.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
      />
      <Card title={'Запуск программы аренды'}
            text={'Открываем бронирование, проводим маркетинговое продвижение и принимаем первых гостей.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
      />
      <Card title={'Отчётность и выплаты'}
            text={'Предоставляем ежемесячные отчёты и перечисляем доход по согласованной схеме.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}
      />
    </>
  );
};

export const All_card_advantages = () => {
  return (
    <>
      <Card_advantages title={'Без скрытых платежей'} text={'Единая ставка 40%/60%.'}
                       icon={'bill-chek'}></Card_advantages>
      <Card_advantages title={'28 дней отдыха'} text={'Для собственников на любом Курорте SkyGroup.'}
                       icon={'sun-fog'}></Card_advantages>
      <Card_advantages title={'365 дней в году'} text={'Загрузка курорта 365 дней в году.'}
                       icon={'like'}></Card_advantages>
      <Card_advantages title={'Котловой метод'}
                       text={'Пропорциональное распределение стабильного и предсказуемого дохода'}
                       icon={'chat-square-2'}></Card_advantages>
      <Card_advantages title={'Включены все сервисы'} text={'Включены все гостиничные сервисы.'}
                       icon={'check--circle'}></Card_advantages>
      <Card_advantages title={'Организация оплат'} text={'Организация оплаты коммунальных услуг и страхования.'}
                       icon={'card-transfer'}></Card_advantages>
      <Card_advantages title={'Прозрачность'} text={'Все отчёты в личном кабинете.'}
                       icon={'clipboard-check'}></Card_advantages>
    </>
  );
};
export const All_card_directions = () => {
  return (
    <>
      <Card title={'Туроператорам'} image={'../../assets/img/1.jpg'} action={
        <Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />
      }></Card>
      <Card title={'Поставщикам'} image={'../../assets/img/1.jpg'} action={
        <Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />
      }></Card>
      <Card title={'Сотрудничество'} image={'../../assets/img/1.jpg'} action={
        <Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />
      }></Card>
      <Card title={'Реклама на Курортах'} image={'../../assets/img/1.jpg'} action={
        <Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />
      }></Card>
      <Card title={'Туроператорам'} image={'../../assets/img/1.jpg'} action={
        <Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />
      }></Card>
    </>
  );
};
export const All_card_partners = () =>{
  return (
    <>
      <Card image={'../../assets/img/partner.svg'}></Card>
      <Card image={'../../assets/img/logo.svg'}></Card>
      <Card image={'../../assets/img/partner.svg'}></Card>
      <Card image={'../../assets/img/logo.svg'}></Card>
      <Card image={'../../assets/img/logo.svg'}></Card>
    </>
  )
}
