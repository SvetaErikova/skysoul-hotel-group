import { Button } from "../../components/_ui/button/button.jsx";

import MainLayout from "../../layouts/MainLoyout.jsx";
import { metaPages } from "../../shared/meta-pages";

export default function Home() {
	return (
		<MainLayout meta={metaPages.home}>
			<div class="block" style={{backgroundColor: '#fff'}}>
        <div className="block--wrapper" style={"margin: 2em;"}>
          <h1 class='f-h1'>Кнопки</h1>
          <br></br>
          <br></br>
          <h2 className='f-h3'>Кнопки c контентом</h2>
          <div className="button_wrapper">
            <Button type="filled" color="secondary">Кнопка без иконки</Button>
            <Button type="filled" color="secondary" icon={"icon-play"}>
              Кнопка с иконкой
            </Button>
            <Button type="filled" color="secondary" icon={"icon-play"}></Button>
          </div>
          <br></br>
          <h2 className='f-h3'>Кнопки по типу</h2>
          <div className="button_wrapper">
            <Button type="filled" color="primary">Кнопка с заливкой secondary </Button>
            <Button type="outlined" color="primary">Кнопка с бордером </Button>
            <Button type="link" color="primary">Кнопка ссылка</Button>
          </div>
          <br></br>
          <h2 className='f-h3'>Кнопки по цвету</h2>
          <div className="ui_grid-2">
            <Button type="filled" color="secondary">filled secondary</Button>
            <Button type="filled" color="primary">filled primary</Button>

            <Button type="outlined" color="secondary">filled secondary</Button>
            <Button type="outlined" color="primary">filled primary</Button>

            <Button type="link" color="secondary">link secondary</Button>
            <Button type="link" color="primary">link primary</Button>
          </div>

          <div className="ui_grid-2" style={'background-color: var(--bg-footer); padding: 3em 2em;'}>
            <Button type="filled" color="secondary" dark>filled dark secondary</Button>

            <Button type="filled" color="primary" dark>filled dark primary</Button>

            <Button type="outlined" color="secondary" dark>filled dark secondary</Button>

            <Button type="outlined" color="primary" dark>filled dark primary</Button>

            <Button type="link" color="secondary" dark>link dark secondary</Button>
            <Button type="link" color="primary" dark>link dark primary</Button>
          </div>

          <h2 className='f-h3'>Кнопки disabled</h2>
          <div className="ui_grid-2">
            <Button type="filled" color="secondary" disabled>filled secondary</Button>
            <Button type="filled" color="primary" disabled>filled primary</Button>
          </div>
          <div className="ui_grid-2" style={'background-color: var(--bg-footer); padding: 3em 2em;'}>
            <Button type="filled" color="secondary" dark disabled>filled dark secondary</Button>

            <Button type="filled" color="primary" dark disabled>filled dark primary</Button>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}
