import { Block } from '../block/block.jsx';
import { Block_Head } from '../block/_ui/block--head/block--head.jsx';
import { Form } from './form-comp.jsx';
import { Form_short } from './form_short.jsx';
import { Input } from './inputs/input/input_comp.jsx';
import { Form_policy } from './form_policy.jsx';
import { Button } from '../_ui/button/button.jsx';

export const Block_form = () =>{
  return(
    <Block className={'block_html-code content_form'} colorMode={'-light-mode'}
           title={<Block_Head accentTitleBefore={'Оставьте заявку <br>'} title={'на бесплатную консультацию'} caption={'Наш менеджер свяжется с вами в ближайшее время.'}></Block_Head>}>
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
  )
}
