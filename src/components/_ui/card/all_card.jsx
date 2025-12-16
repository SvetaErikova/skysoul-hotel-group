import { Button } from '../button/button.jsx';
import {
  Card, Card_job, Card_personnel, Card_resort,
} from './card.jsx';

export const All_card_default = () => {
  return (
    <>
      <Card title={'Карточка ссылка с лейблами'}
            text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
            image={'../../assets/img/2.jpg'} link={'/'}
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />} />
      <Card
        title={'Карточка попап c очень очень очень очень очень очень очень очень большим заголовком'}
        text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
        image={'../../assets/img/2.jpg'}
        popup={'popup_for_cascade'}
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-eye'} />
        }

      />
      <Card
        title="Карточка с ссылкой на документ"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-file'} />
        }
        link={'/'}
      />
      <Card
        title="Карточка информационная с лейблами"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-file'} />
        }
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
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-pin' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} />
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-pin' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} />
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-pin' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} />
      <Card_resort image={'../../assets/img/2.jpg'} title={'«Птица»'} subtitle={'Санаторный курорт будущего'}
                   text={'Уже возведено 60% комплекса. Уникальное сочетание курорта и апарт-отеля. Санаторная база, экология, архитектура нового уровня'}
                   labels={[{ text: 'Курорт 5+' }, { text: 'г.Саки', icon: 'icon-pin' }]}
                   action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} />
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
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'} />
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'} />
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'} />
      <Card title="Клининг" image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'} />
    </>
  );
};


export const All_card_article = () => {
  return (
    <>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
            labels={[{ text: 'Новости' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
            labels={[{ text: 'Статья' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
            labels={[{ text: 'Аналитика' }]}><span>24.11.2025</span></Card>
      <Card title={'Как повысить доходность на 30%?'} link={'/'}
            text={'Котловой метод — это система, которая обеспечивает вас пассивным доходом в размере 60% от общей cуммы, распределённой ...'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
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
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'}><span>24.11.2025</span></Card>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'}><span>24.11.2025</span></Card>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'}><span>24.11.2025</span></Card>
      <Card title="Lorem ipsum dolor sit amet, consectetur." image={'../../assets/img/1.jpg'}
            text="Вернём ваше время и комфорт. Мы берём на себя всю рутину, чтобы вы могли наслаждаться жизнью в безупречно чистом пространстве."
            action={<Button type={'outlined'} color={'primary'} icon={'icon-file'} />} actionsout={true} link={'/'}><span>24.11.2025</span></Card>
    </>
  );
};
export const All_card_advantages = () =>{
  return(
    <>

    </>
  )
}
export const All_card_steps = () =>{
  return(
    <>
      <Card title={'Подача заявки на сайте'}
            text={'Обсуждаем цели, условия сотрудничества и отвечаем на вопросы.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
            />
      <Card title={'Заключение договора'}
            text={'Оформляем соглашение с указанием всех условий и обязательств сторон.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
      />
      <Card title={'Подготовка к приёму гостей'}
            text={'Дизайн-аудит, комплектация, фотосъёмка, настройка сервисов бронирования.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
      />
      <Card title={'Интеграция  в систему управления'}
            text={'Вносим апартамент в каналы продаж и подключаем личный кабинет собственника.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
      />
      <Card title={'Запуск программы аренды'}
            text={'Открываем бронирование, проводим маркетинговое продвижение и принимаем первых гостей.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
      />
      <Card title={'Отчётность и выплаты'}
            text={'Предоставляем ежемесячные отчёты и перечисляем доход по согласованной схеме.'}
            actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'} />}
      />
    </>
  )
}
