import {Block_Head} from "../../components/block/_ui/block--head/block--head.jsx";
import HeroLayout from "../../layouts/HeroLayout.jsx";
import {metaPages} from "../../shared/meta-pages";
import MainLayout from "../../layouts/MainLoyout.jsx";
import {Button} from "../../components/_ui/button/button.jsx";

export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>
      <section className={'block'}>
        <div class="block--wrapper">
          <Block_Head title={'Стандартный заголвок'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}></Block_Head>
          <br></br>
          <Block_Head title={'Стандартный заголвок fs-h1'} headingSize={'f-h1'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'}  subtitle={'subtitle'}></Block_Head>
          <br></br>
          <Block_Head title={'Стандартный заголвок f-h2'} headingSize={'f-h2'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}></Block_Head>
          <br></br>
          <Block_Head title={'Стандартный заголвок f-h3'} headingSize={'f-h3'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}></Block_Head>
          <br></br>
          <Block_Head title={'Стандартный заголвок f-h4'} headingSize={'f-h4'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}></Block_Head>
          <br></br>
          <Block_Head title={'Стандартный заголвок f-h5'} headingSize={'f-h5'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}></Block_Head>
          <br></br>
          <Block_Head title={'Заголовок с кнопками'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}
                      action={<><Button type="filled" color="primary">Кнопка 1</Button>
                        <Button type="filled" color="primary">Кнопка 2</Button>
          </>}></Block_Head>
          <br></br>
          {/*Заголовок с акцентным цветом*/}
          <Block_Head accentTitle={'Акцентный заголовок '} title={'обычный заголвоок '} headingSize={'f-h5'} caption={'Особым гостям — особые условия. Чем чаще вы с нами, тем больше получаете.'} subtitle={'subtitle'}></Block_Head>

        </div>
      </section>
    </MainLayout>
  );
}
