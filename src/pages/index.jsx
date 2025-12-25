import { Button } from "../components/_ui/button/button.jsx";
import MainLayout from "../layouts/MainLoyout.jsx";
import { metaPages } from "../shared/meta-pages";

export default function Home() {
  return (
		<MainLayout meta={metaPages.home}>
			<section className="block dev-nav" style={{ margin: "2em 0" }}>
				<div className="block--wrapper">
					<h1>Pages</h1>
					<div className="button_wrapper">
						<Button link={"/main"} >
							Главная
						</Button>
            {/*<Button link={"/accommodation-detail"} >*/}
            {/*  Проживание детальная*/}
            {/*</Button>*/}
            {/*<Button link={"/offer"} >*/}
            {/*  Спецпредложения*/}
            {/*</Button>*/}
            {/*<Button link={"/offer-detail"} >*/}
            {/*  Спецпредложения детальная*/}
            {/*</Button>*/}
            <Button link={"/career"} >
              Вакансии
            </Button>
            <Button link={"/career-detail"} >
              Вакансии детальная
            </Button>
            <Button link={"/article"} >
              Статья
            </Button>
            <Button link={"/career"} >
              Карьера
            </Button>
						<Button link={"/faq"} >
							FAQ
						</Button>
						<Button link={"/contacts"} >
							Контакты
						</Button>
						<Button link={"/404"} >
							404
						</Button>
						<Button link={"/503"} >
							503
						</Button>
					</div>
					<h2>DEV</h2>
					<div className="button_wrapper">
						<Button link={"/backend/buttons"} >
							Buttons
						</Button>
            <Button link={"/backend/head"} >
              Заголовки
            </Button>
            <Button link={"/backend/header"} >
              Шапки
            </Button>
						<Button link={"/backend/cascade"} >
							Каскад
						</Button>
						<Button link={"/backend/banner"} >
							Баннеры
						</Button>
            {/*<Button link={"/backend/color-mode"} >*/}
            {/*  Цветовые темы*/}
            {/*</Button>*/}
						<Button link={"/backend/image-text"} >
							Картинка текст
						</Button>
						{/*<Button link={"/backend/gallery"} >*/}
						{/*	Галерея*/}
						{/*</Button>*/}
						<Button link={"/backend/list"} >
							Списки
						</Button>
						<Button link={"/backend/html-code"} >
							html code
						</Button>
						<Button link={"/backend/form"} >
							Форма
						</Button>
						<Button popup={"popup_for_form"} >
							Попап форм
						</Button>
            <Button popup={"popup_for_cascade"} >
              Попап каскад
            </Button>
            <Button data-popup-personnel='1'>
              Попап персонал 1
            </Button>
            <Button data-popup-personnel='2'>
              Попап персонал 2
            </Button>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
