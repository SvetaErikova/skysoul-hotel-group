import {Form_policy} from "./form_policy.jsx";
import {Input} from "./inputs/input/input_comp.jsx";
import {Button} from "../_ui/button/button.jsx";

export const Form_subscription = () =>{
  return (
      <div class="form -dark-mode">
        <div class="form--subscription">
          <Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} autocomplete={"autocomplete"}></Input>
          <Button type={'link'} color={'primary'} htmlType={'submit'} dark={true} icon={'icon-arrow-right'}></Button>
        </div>
        <Form_policy></Form_policy>
        <Form_policy></Form_policy>
      </div>
  )
}
