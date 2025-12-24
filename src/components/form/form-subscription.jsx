import {Form_policy} from "./form_policy.jsx";
import {Input} from "./inputs/input/input_comp.jsx";
import {Button} from "../_ui/button/button.jsx";

export const Form_subscription = () =>{
  return (
    <form class="form">
      <div class="form--subtitle">Подписаться на получение актуальных новостей</div>
      <div class="form--subscription">
        <Input type={"email"}
               name={"name"}
               placeholder={"Ваш адрес электронной почты example@skygrouphotel.ru"}
               required={true}
               autocomplete={"autocomplete"}></Input>
        <Button type={'link'}
                color={'primary'}
                htmlType={'submit'}
                dark={true}
                icon={'icon-arrow-right'}></Button>
      </div>
      <div className="form--policy">
        <div className="form--input">
          <label>
            <input name="policy-agree" type="checkbox" value="" required="required"/>
            <div className="checkbox"></div>
            <span>
              Я даю согласие на&nbsp;<a href="https://skygrouphotel.ru/policy-doc.html" target="_blank" rel="noopener">обработку персональных данных</a>
            </span>
          </label>
        </div>
      </div>
      <div className="form--policy">
        <div className="form--input">
          <label>
            <input name="adv-agree" type="checkbox" value="" required="required"/>
            <div className="checkbox"></div>
            <span>
              Я даю согласие на&nbsp;<a href="https://skygrouphotel.ru/adv-doc.html" target="_blank" rel="noopener">получение рассылки рекламно-информационных материалов</a>
            </span>
          </label>
        </div>
      </div>
    </form>
  )
}
