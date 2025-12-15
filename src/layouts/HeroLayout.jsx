import { Footer } from "../components/footer/footer-comp.jsx";
import { Header } from "../components/header/header-comp.jsx";
import { Popups } from "../components/popups/popups.comp.jsx";
import BaseHtml from "../templates/BaseHtml";

export default function HeroLayout({ children, meta, lightmode = false , className, colorMode = '' }) {
	return (
		<BaseHtml meta={meta} lightmode={lightmode} className={className} colorMode={colorMode}>
			<Header transparent={true} pagePath={meta.path} />
			<main>{children}</main>
			<Footer></Footer>
			<Popups></Popups>
		</BaseHtml>
	);
}
