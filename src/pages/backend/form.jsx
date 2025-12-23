import { Form } from "../../components/form/form-comp.jsx";
import MainLayout from "../../layouts/MainLoyout.jsx";
import { metaPages } from "../../shared/meta-pages";
import { Block_form } from '../../components/form/block_form.jsx';
import { Block } from '../../components/block/block.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';
import { Input } from '../../components/form/inputs/input/input_comp.jsx';
import { Form_policy } from '../../components/form/form_policy.jsx';
import { Button } from '../../components/_ui/button/button.jsx';
import { Input_select } from '../../components/form/inputs/input_select/input_select_comp.jsx';

export default function Home() {
	return (
		<MainLayout meta={metaPages.home}>
      <Block_form></Block_form>
      <Block className={'block_html-code content_form inputs-row-2-3'} colorMode={'-light-mode'}
             title={<Block_Head title={'content_form inputs-row-2-3'} caption={'Наш менеджер свяжется с вами в ближайшее время.'}></Block_Head>}>
        <div className="form">
          <Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
          <Input type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>
          <Input type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Email"} autocomplete={"email"}></Input>
          <Form_policy />
          <div className="form--button">
            <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled">Отправить</Button>
          </div>
        </div>
      </Block>

      <Block className={'block_html-code content_form inputs-row-4-5'} colorMode={'-light-mode'}
             title={<Block_Head  title={'content_form inputs-row-4-5'} caption={'Наш менеджер свяжется с вами в ближайшее время.'}></Block_Head>}>
        <div className="form">
          <Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
          <Input type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>
          <Input type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Email"} autocomplete={"email"}></Input>
          <Input_select
            text={"Выбрать объект"}
            options={[
              { value: "Выбранная опция 1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam earum minus totam! Porro, vel." },
              { value: "Выбранная опция 2", text: "Выбранная опция 1" },
              { value: "Выбранная опция 3", text: "Выбранная опция 3" },
            ]}
          ></Input_select>
          <Input type={"number"} name={"number"} placeholder={"0"} required={true} text={"Номер лота"} inputMode="numeric" min="1" max="123"></Input>

          <Form_policy />
          <div className="form--button">
            <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled">Отправить</Button>
          </div>
        </div>
      </Block>

      <Block className={'block_html-code content_form inputs-row-2-3 inputs-row-4-5 '} colorMode={'-light-mode'}
             title={<Block_Head  title={'content_form inputs-row-2-3 inputs-row-4-5 '} caption={'Наш менеджер свяжется с вами в ближайшее время.'}></Block_Head>}>
        <div className="form">
          <Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
          <Input type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>
          <Input type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Email"} autocomplete={"email"}></Input>
          <Input_select
            text={"Выбрать объект"}
            options={[
              { value: "Выбранная опция 1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam earum minus totam! Porro, vel." },
              { value: "Выбранная опция 2", text: "Выбранная опция 1" },
              { value: "Выбранная опция 3", text: "Выбранная опция 3" },
            ]}
          ></Input_select>
          <Input type={"number"} name={"number"} placeholder={"0"} required={true} text={"Номер лота"} inputMode="numeric" min="1" max="123"></Input>


          <Form_policy />
          <div className="form--button">
            <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled">Отправить</Button>
          </div>
        </div>
      </Block>

			<div style={"max-width: 900px; margin: auto;"}>
				<Form></Form>
			</div>
		</MainLayout>
	);
}
