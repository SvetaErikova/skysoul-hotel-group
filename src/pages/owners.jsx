import { Button } from "../components/_ui/button/button.jsx";
import MainLayout from "../layouts/MainLoyout.jsx";
import { metaPages } from "../shared/meta-pages";
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Info } from '../components/content/info/info.jsx';
import { Advantages } from '../components/content/advantages/advantages-comp.jsx';
import { Block_form } from '../components/form/block_form.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Steps } from '../components/content/steps/steps-comp.jsx';
import { Calculator } from '../components/content/calculator/calculator-comp.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>
      <Block_image_text
        contentBottom={true}
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />

      <Advantages></Advantages>

      <Block_image_text
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />
      <Block_image_text
        reversed={true}
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />
<Steps></Steps>
      <Calculator></Calculator>
      <Block_image_text
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />
      <Block_image_text
        reversed={true}
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />
      <Block_image_text
        images={[
          { src: '/assets/img/ruslans-content/main-page-finance-and-sales.jpg' },
        ]}
        title={<Block_Head
          title={'Финансы и продажи'} subtitle={'Финансы — это не просто цифры, а отражение доверия, устойчивости и роста. Мы выстраиваем прозрачные механизмы сотрудничества, чтобы каждая сделка приносила не только результат, но и уверенность в завтрашнем дне. В Sky Group цифры работают на вашу репутацию.'}></Block_Head>}
      />
      <Block_form></Block_form>
    </MainLayout>
  );
}
