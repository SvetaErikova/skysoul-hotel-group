import { Button } from "../../_ui/button/button.jsx";
import { Block_Head } from "../_ui/block--head/block--head.jsx";
import { Block_banner, Block_banner_cascade } from './block_banner.jsx';
import {Form_subscription} from "../../form/form-subscription.jsx";
import {Booking} from "../../booking/booking-comp.jsx";

export const All_block_banner = () => {
	return (
		<>
      {/*Баннер Hero с букингом*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-hero" subtitle="Подзаголовок" headingSize={'f-h1'}  caption="Баннер Hero" headingLevel={1} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      ></Block_banner>
      <Booking></Booking>
      <br></br>


      {/*Баннер Hero*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-hero" subtitle="Подзаголовок" headingSize={'f-h1'}  caption="Баннер Hero" headingLevel={1} />,
						imageSrc: "/assets/img/1.jpg",
					},
				]}
				className={"block_banner-hero"}
			></Block_banner>
      <br/>

      {/*Баннер Hero сдайдер*/}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner-group" subtitle="Подзаголовок" caption="Баннер Hero + Слайдер " headingLevel={2} />,
						imageSrc: "/assets/img/1.jpg",
					},
					{
						title: <Block_Head title="block_banner-group" subtitle="Подзаголовок" caption="Дополнительное описание" headingLevel={2} />,
						imageSrc: "/assets/img/2.png",
					},
				]}
				className={"block_banner-hero"}
			></Block_banner>
      <br/>
      {/*обычный Баннер*/}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер обычный" headingLevel={2} />,
						imageSrc: "/assets/img/1.jpg",
					},
				]}
				className={""}
			></Block_banner>
      <br/>
      {/*обычный Баннер слайдер*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер обычный" headingLevel={2} />,
            imageSrc: "/assets/img/1.jpg",
          },
          {
            title: <Block_Head title="block_banner_2" subtitle="Подзаголовок" caption="Баннер обычный" headingLevel={2} />,
            imageSrc: "/assets/img/1.jpg",
          },

        ]}
        className={""}
      ></Block_banner>
      <br/>
      {/*обычный no_media*/}

      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-no_media без colormode" subtitle="Подзаголовок" caption="Баннер без картинки" headingLevel={2} action={<>          <Button type={'filled'} color={'secondary'}>Подробнее</Button>
              <Button type={'filled'} color={'primary'}>Условия</Button></>}/>,
          },
        ]}
        className={"block_banner-no_media"}
      ></Block_banner>
      <br/>
      <Block_banner
        colorMode={'-light-mode'}
        banners={[
          {
            title: <Block_Head title="block_banner-no_media -light-mode" subtitle="Подзаголовок" caption="Баннер без картинки" headingLevel={2} action={<>          <Button type={'filled'} color={'secondary'}>Подробнее</Button>
              <Button type={'filled'} color={'primary'}>Условия</Button></>}/>,
          },
        ]}
        className={"block_banner-no_media"}
      ></Block_banner>
      <br/>
      <Block_banner
        colorMode={'-dark-mode'}
        banners={[
          {
            title: <Block_Head title="block_banner-no_media -dark-mode" subtitle="Подзаголовок" caption="Баннер без картинки" headingLevel={2} action={<>          <Button type={'filled'} color={'secondary'}>Подробнее</Button>
              <Button type={'filled'} color={'primary'}>Условия</Button></>}/>,
          },
        ]}
        className={"block_banner-no_media"}
      ></Block_banner>
      <br/>
      {/*Баннер с видео */}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер без картинки с видео " headingLevel={2} />,
						imageSrc: "/assets/img/1.jpg",
						videoSrc: "/assets/video/@lepragram.mp4",
					},
				]}
			></Block_banner>
      <br/>
    {/*Баннер каскад*/}
      <Block_banner_cascade
        banners={[
          {
            imageSrc: "/assets/img/1.jpg",
            labels: [
              {text: "🔥 Доступно до 19.09.2025", className: "-accent"},
              {text: "🔥 Доступно до 19.09.2025",className: "-dark"},
            ],
            title: (
              <Block_Head
                title="Заголовок энного уровня."
                subtitle="Программа лояльности"
                caption="Не упустите шанс воплотить свои мечты в реальность – идеальное путешествие ждет вас!"
                headingLevel={2}
              />
            ),
            text: (
              <div className="is_cascade">
                <p>
                  Дети от природы активны, много двигаются и непрерывно ищут новые впечатления. В автомобиле им быстро
                  надоедает сидеть на одном месте, становится скучно, а некоторых и вовсе укачивает.
                </p>
                <div className="button_wrapper">
                  <Button type={'filled'} color={'secondary'}>Подробнее</Button>
                  <Button type={'filled'} color={'primary'}>Условия</Button>
                </div>
              </div>
            )
          },
        ]}
      ></Block_banner_cascade>

      {/*Баннер каскад с формой подписки*/}
      <Block_banner_cascade
        banners={[
          {
            imageSrc: "/assets/img/1.jpg",

            title: (
              <Block_Head
                title="Подпишитесьна обновления"
                headingLevel={2}
              />
            ),
            text: (
              <div className="is_cascade">
                <p>
                  Не упустите шанс воплотить свои мечты в реальность – идеальное путешествие ждет вас!
                </p>
                  <Form_subscription></Form_subscription>
              </div>
            )
          },
        ]}
      ></Block_banner_cascade>
		</>
	);
};
