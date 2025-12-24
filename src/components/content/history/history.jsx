import { Block } from '../../block/block.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';

export const History = () =>{
  return (
    <Block className={'block_html-code content_history'} title={<Block_Head accentTitleBefore={'История '} title={'успеха'}></Block_Head>}></Block>
  )
}
