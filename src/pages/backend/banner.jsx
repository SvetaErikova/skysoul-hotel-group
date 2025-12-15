import { All_block_banner } from "../../components/block/block_banner/all_block_banner.jsx";
import HeroLayout from "../../layouts/HeroLayout.jsx";
import { metaPages } from "../../shared/meta-pages";
import { Booking } from '../../components/booking/booking-comp.jsx';

export default function Home() {
	return (
		<HeroLayout meta={metaPages.home}>
			<All_block_banner></All_block_banner>
      {/*<Booking></Booking>*/}
		</HeroLayout>
	);
}
