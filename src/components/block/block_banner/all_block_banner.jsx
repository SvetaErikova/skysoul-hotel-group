import { Button } from "../../_ui/button/button.jsx";
import { Block_Head } from "../_ui/block--head/block--head.jsx";
import { Block_banner, Block_banner_cascade } from './block_banner.jsx';
import {Form_subscription} from "../../form/form-subscription.jsx";
import {Booking} from "../../booking/booking-comp.jsx";

export const All_block_banner = () => {
	return (
		<>
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

		</>
	);
};
