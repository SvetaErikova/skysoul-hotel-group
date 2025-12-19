import { Block } from '../../block/block.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';
import { Input } from '../../form/inputs/input/input_comp.jsx';
import { Button } from '../../_ui/button/button.jsx';

export const Calculator = () =>{
  return (
    <Block
      className={'content_calculator'}
      title={<Block_Head title={'Калькулятор<br> доходности'} caption={'Рассчитайте, как ваши инвестиции превращаются в стабильный доход. Прозрачная математика, за которой стоит реальная ценность.'}/>}>
      <div className="calculator">
        <div className="calculator_form ">
          <div class="calculator_form_container_title">Площадь аппартаментов в управлении, м2</div>
          <div class="calculator_form_container">
            <Input type={"number"} name={"number"} placeholder={"Введите цифры, без пробелов и запятых. В качестве разделителя используйте точку"} required={true} inputMode="numeric" min="1" max="123"></Input>
            <span>Введите цифры, без пробелов и запятых. В качестве разделителя используйте точку</span>
            <Button type={'filled'} color={'primary'} className={'js-btn-calc'} icon={'icon-arrow-right'}>Расчитать</Button>
          </div>
        </div>
        <div class="calculator_result">
          <span>Ваш результат</span>
          <p class={'js-calc-result'}>0</p>
        </div>
      </div>

    </Block>
  )
}
