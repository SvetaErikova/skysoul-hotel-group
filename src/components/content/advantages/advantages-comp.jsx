import { Block } from '../../block/block.jsx';
import { Advantages_item } from './advantages_item.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';
import { Button } from '../../_ui/button/button.jsx';

export const Advantages = () => {
  return (
    <Block className={`block_html-code content_advantages advantages`  } >
      <Block_Head accentTitleBefore={'9 Причин '}
                  title={'доверить номер отельному оператору'}
                  subtitle={'Опыт, технологии и сервис мирового уровня — для стабильного дохода и идеального отдыха ваших гостей.'}

      ></Block_Head>
      <div className="block--elements">
        <Advantages_item title={'Опыт команды более 10 лет  в международном гостиничном бизнесе'}
                         text={'Наши специалисты много лет работали в ведущих отелях мира, мы управляем объектами по международным стандартам.'}
                         image={'/assets/img/ruslans-content/adv/1.jpg'}></Advantages_item>
        <Advantages_item title={'Стабильный доход круглый год'}
                         text={'Котловой метод распределения выручки и прогнозируемая загрузка позволяют получать прибыль вне зависимости от сезона.'}
                         image={'/assets/img/ruslans-content/adv/2.jpg'}></Advantages_item>
        <Advantages_item title={'Комплексный маркетинг'}
                         text={'Реклама, PR, SMM, партнёрские проекты и программа лояльности — ваш номер всегда в фокусе внимания потенциальных гостей.'}
                         image={'/assets/img/ruslans-content/adv/3.jpg'}></Advantages_item>
        <Advantages_item title={'Идеальный гостевой опыт'}
                         text={'Личный подход, внимание к деталям, консьерж сервис 24/7 и сопровождение на каждом этапе пребывания гостя на курорте.'}
                         image={'/assets/img/ruslans-content/adv/4.jpg'}></Advantages_item>
        <Advantages_item title={'Круглогодичная загрузка'}
                         text={'Пляжный, оздоровительный, гастрономический и деловой туризм — приток гостей в любое время года.'}
                         image={'/assets/img/ruslans-content/adv/5.jpg'}></Advantages_item>
        <Advantages_item title={'Развитая инфраструктура'}
                         text={'Каждый наш объект спроектирован по международным критериям качества и предлагает максимальный комфорт даже для самых требовательных гостей. Бассейны, SPA, рестораны, детские клубы, собственный пляж и сервисы на территории — всё, чтобы отдых был безупречным.'}
                         image={'/assets/img/ruslans-content/adv/6.jpg'}></Advantages_item>
        <Advantages_item title={'Современные технологии управления'}
                         text={'Интеграция с международными системами бронирования, электронные гостевые сервисы, автоматизация процессов и личный кабинет собственника для полного контроля над доходностью и загрузкой.'}
                         image={'/assets/img/ruslans-content/adv/7.jpg'}></Advantages_item>
        <Advantages_item title={'Прозрачная финансовая отчётность'}
                         text={'Ежемесячные данные о загрузке, доходности и работе вашего объекта доступны в личном кабинете.'}
                         image={'/assets/img/ruslans-content/adv/8.jpg'}></Advantages_item>
        <Advantages_item title={'Юридическая и бухгалтерская поддержка'}
                         text={'Оформление документов, расчёты с гостями и партнёрами, полное соответствие законодательству.'}
                         image={'/assets/img/ruslans-content/adv/9.jpg'}></Advantages_item>
      </div>
      <Button className={'advantages_btn_scrolling'} icon={'icon-arrow-down-1'}></Button>
    </Block>
  );
};

