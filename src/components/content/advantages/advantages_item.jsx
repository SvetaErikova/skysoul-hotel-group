import {Card} from "../../_ui/card/card.jsx";

export const Advantages_item = ({title= 'Опыт команды более 10 лет  в международном гостиничном бизнесе', text='Наши специалисты много лет работали в ведущих отелях мира, мы управляем объектами по международным стандартам.', image='/assets/img/1.jpg',}) =>{
  return (
    <div class={'item'}>
      <div class="item--content">
        <div class="item--title">{title}</div>
        <div class="item--text">{text}</div>
      </div>
      <div class="item--image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
