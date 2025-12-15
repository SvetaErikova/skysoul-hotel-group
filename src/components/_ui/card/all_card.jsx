import {Button} from '../button/button.jsx';
import {
  Card, Card_article, Card_job, Card_personnel,
} from './card.jsx';

export const All_card_default = () => {
  return (
    <>
      <Card title={'Карточка ссылка с лейблами'}
            text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
            image={'../../assets/img/2.jpg'} link={'/'}
            action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>}
            labels={[{text: '3 по цене 2', accent: true}, {text: 'До 22.12.2025', dark: true}]}/>
      <Card
        title={'Карточка попап c очень очень очень очень очень очень очень очень большим заголовком'}
        text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
        image={'../../assets/img/2.jpg'}
        popup={'popup_for_cascade'}
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-eye'}/>
        }

      />
      <Card
        title="Карточка с ссылкой на документ"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        action={
          <Button type={'outlined'} color={'primary'} icon={'icon-file'}/>
        }
        link={'/'}
      />
      <Card
        title="Карточка информационная с лейблами"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        labels={[{text: '3 по цене 2', accent: true}, 'До 22.12.2025']}
      />
    </>
  );
};

export const All_card_article = () => {
  return (
    <>
      <Card_article title={'Заголовок статьи для проверки переносов и сокращений'}
                    text={'Проведите 3 ночи по цене 2 — идеально для короткого побега от рутины а также третья и четвертая строка, для текста уходящего в точечки'}
                    image={'../../assets/img/2.jpg'} link={'/'}
                    action={<><Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>
                      <Button type={'link'} icon_left={true} color={'primary'} icon={'icon-calendar'}>Дата</Button>
                      <Button type={'link'} icon_left={true} color={'secondary'}>Категория</Button></>}
      />
      <Card_article title={'Заголовок статьи для проверки переносов и сокращений'}
                    text={'Проведите 3 ночи по цене 2 — идеально для короткого побега от рутины а также третья и четвертая строка, для текста уходящего в точечки'}
                    image={'../../assets/img/2.jpg'} link={'/'}
                    action={<><Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>
                      <Button type={'link'} icon_left={true} color={'primary'} icon={'icon-calendar'}>Дата</Button>
                      <Button type={'link'} icon_left={true} color={'secondary'}>Категория</Button></>}
      />
      <Card_article title={'Заголовок статьи для проверки переносов и сокращений'}
                    text={'Проведите 3 ночи по цене 2 — идеально для короткого побега от рутины а также третья и четвертая строка, для текста уходящего в точечки'}
                    image={'../../assets/img/2.jpg'} link={'/'}
                    action={<><Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>
                      <Button type={'link'} icon_left={true} color={'primary'} icon={'icon-calendar'}>Дата</Button>
                      <Button type={'link'} icon_left={true} color={'secondary'}>Категория</Button></>}
      />
      <Card_article title={'Заголовок статьи для проверки переносов и сокращений'}
                    text={'Проведите 3 ночи по цене 2 — идеально для короткого побега от рутины а также третья и четвертая строка, для текста уходящего в точечки'}
                    image={'../../assets/img/2.jpg'} link={'/'}
                    action={<><Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>
                      <Button type={'link'} icon_left={true} color={'primary'} icon={'icon-calendar'}>Дата</Button>
                      <Button type={'link'} icon_left={true} color={'secondary'}>Категория</Button></>}

      />
    </>
  );
};
export const All_card_personnel = () => {
  return (
    <>
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
                      action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>}
                      labels={[{text: '3 по цене 2', accent: true}, 'До 22.12.2025']}/>
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
                      action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow_r'}/>}
                      labels={[{text: '3 по цене 2', accent: true}, 'До 22.12.2025']}/>
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
                      labels={[{text: '3 по цене 2', accent: true}, 'До 22.12.2025']}/>
      <Card_personnel title={'Карточка ссылка'}
                      text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
                      labels={[{text: '3 по цене 2', accent: true}, 'До 22.12.2025']}/>
    </>
  );
};

export const All_card_job = () => {
  return (
    <>
      <Card_job title={'Название вакансии'} text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '}/>
      <Card_job title={'Название вакансии'} text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '}/>
      <Card_job title={'Название вакансии'} text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '}/>
      <Card_job title={'Название вакансии'} text={'Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. '}/>

    </>
  );
};
