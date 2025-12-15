import clsx from "clsx";
import {Button} from '../button/button.jsx';
import {Labels} from '../labels/labels.jsx';

const renderField = (content, className) => {
  if (!content) return null;

  if (typeof content === 'string') {
    return (
      <div
        class={className}
        dangerouslySetInnerHTML={{__html: content}}
      ></div>
    );
  }

  return <div class={className}>{content}</div>;
};

export const Card = ({link, popup, images = [], title, text, action, image, labels = [], announce, children}) => {
  const cardContent = (
    <>


      {images.length > 0 && (
        <div class="card--image">
          {images.map((img) => (
            <img class={clsx(images.length > 1 && "card__image_slide")} src={img.src} alt="" loading="lazy"/>
          ))}
        </div>
      )}
      {image && (
        <div class="card--image">
          <img src={image} alt="" loading="lazy"/>
        </div>
      )}


      <div class="card--content">
        <Labels items={labels}/>
        {renderField(title, 'card--title')}
        {renderField(text, 'card--text')}
        {action && <div class="card--action">{action}</div>}
        {children}
      </div>
    </>
  );

  return link ? (
    <a class="card" href={link}>
      {cardContent}
    </a>
  ) : (
    <div class="card" data-openpopup={popup}>
      {cardContent}
    </div>
  );
};


export const Card_offers = ({link, popup, image, title, text, labels = [], action}) => {
  return <Card title={title} text={text} image={image} popup={popup} link={link} labels={labels} action={action}></Card>;
};



export const Card_article = ({image, title, text, labels, action, link}) => {
  return (
    <Card title={title} text={text} image={image} labels={labels} action={action} link={link}></Card>
  )
}

export const Card_personnel = ({title, text}) => {
  return (
    <Card title={title} text={text} image={'/assets/img/2.jpg'} popup={'popup_for_cascade'} action={<Button icon={'icon-eye'} className={'button-arrow button-dark'}/>} labels={[{text: 'Специальность', accent: true}, 'Категория']}></Card>
  )
}
export const Card_job = ({title, text}) => {
  return (
    <Card title={title} text={text} link={'/'} labels={[{text: 'Зарплата', accent: true, icon: 'icon-calendar'}, {text: 'Зарплата', icon: 'icon-calendar'}]}>
      <div class="card--list">
        <p>Условие работы 1</p>
        <p>Условие работы 2</p>
        <p>Условие работы 3</p>
      </div>
    </Card>
  )
}



