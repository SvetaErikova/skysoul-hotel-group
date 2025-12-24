import { Button } from "../components/_ui/button/button.jsx";
import MainLayout from "../layouts/MainLoyout.jsx";
import { metaPages } from "../shared/meta-pages";
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Info } from '../components/content/info/info.jsx';
import { Advantages } from '../components/content/advantages/advantages-comp.jsx';
import { Block_form } from '../components/form/block_form.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>
      <Info title={
        <Block_Head
          accentTitleBefore={'Партнёрство, <br>'}
          title={'приносящее доход и уверенность'}
          subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
          action={
            <>
              <Button type="filled" color="primary" icon-arrow-right link={'/boiler-method'}>
                <span>Котловой метод</span>
              </Button>
              <Button type="outlined" color="secondary" className={'widsterForm'}>Оставить заявку</Button>
            </>
          }
        >
        </Block_Head>
      }
            images={['../../assets/img/ruslans-content/main-page-partners-3.jpg', '../../assets/img/ruslans-content/main-page-partners-2.jpg', '../../assets/img/ruslans-content/main-page-partners-1.jpg']}>
      </Info>

      <Advantages></Advantages>

      <Info title={
        <Block_Head
          accentTitleBefore={'Партнёрство, <br>'}
          title={'приносящее доход и уверенность'}
          subtitle={'Партнёрство, которым можно гордиться: увеличивайте доходность, сохраняйте контроль и доверяйте экспертам. Ваш актив — наша ответственность, ваше доверие — наша мотивация.'}
          action={
            <>
              <Button type="filled" color="primary" icon-arrow-right link={'/boiler-method'}>
                <span>Котловой метод</span>
              </Button>
              <Button type="outlined" color="secondary" className={'widsterForm'}>Оставить заявку</Button>
            </>
          }
        >
        </Block_Head>
      }
            reversed={true}
            images={['../../assets/img/ruslans-content/main-page-partners-3.jpg', '../../assets/img/ruslans-content/main-page-partners-2.jpg', '../../assets/img/ruslans-content/main-page-partners-1.jpg']}>
      </Info>

      <Block_form></Block_form>
    </MainLayout>
  );
}
