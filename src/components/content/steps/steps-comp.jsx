import {Block_List} from "../../block/block_list/block_list.jsx";
import {Block_Head} from "../../block/_ui/block--head/block--head.jsx";
import {All_card_steps} from "../../_ui/card/all_card.jsx";

export const Steps = () =>{
  return (
    <Block_List
      className="content_steps"
      colorMode={'-accent-mode'}
      title={
        <Block_Head
          title={'Как передать '}
          accentTitleAfter={"объект в управление? "}
          caption={"Помогаем нашим инвесторам на каждом этапе — от оформления документов до получения стабильного дохода."}
          headingLevel={2}
        ></Block_Head>
      }
    >
      <All_card_steps></All_card_steps>

    </Block_List>
  )
}
