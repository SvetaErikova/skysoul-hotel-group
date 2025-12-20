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

export const Card = ({link, popup, images = [], title,subtitle, text, action, image, labels = [], children, actionsout = false }) => {
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
      {title && (
        <div class="card--content">
            <Labels items={labels}/>
          {renderField(title, 'card--title')}
          {renderField(subtitle, 'card--subtitle')}
          {renderField(text, 'card--text')}
          {action && !actionsout && <div class="card--action">{action}</div>}
          {children}
        </div>
      )}

    </>
  );

  return link ? (
    <a class="card" href={link}>
      {cardContent}
      {action && actionsout && <div class="card--action">{action}</div>}
    </a>
  ) : (
    <div class="card" data-openpopup={popup}>
      {cardContent}
      {action && actionsout && <div class="card--action">{action}</div>}
    </div>
  );
};
export const Card_resort =({image, title, subtitle, text, action, labels, link='/'}) => {
  return (
    <a className="card" href={link}>
        <div class="card--image">
          <img src={image} alt="" loading="lazy"/>
        </div>
      <div class="card--content">
        {renderField(title, 'card--title')}
        {renderField(subtitle, 'card--subtitle')}
        {renderField(text, 'card--text')}
      </div>
      <Labels items={labels}/>
      {action && <div class="card--action">{action}</div>}
    </a>
  )
}

export const Card_personnel = ({title, text, image}) => {
  return (
    <Card title={title} text={text}  image={image ? image : '/assets/img/2.jpg'}  popup={'popup_for_cascade'} actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-eyes-closed-line'} />}></Card>
  )
}
export const Card_job = ({title, text}) => {
  return (
    <Card title={title} text={text} link={'/'} labels={[{text: 'Зарплата'}, {text: 'Зарплата'}]} actionsout={true} action={<Button type={'outlined'} color={'primary'} icon={'icon-arrow-up-right'} />}>
      <div class="card--list">
        <p>Условие работы 1</p>
        <p>Условие работы 2</p>
        <p>Условие работы 3</p>
      </div>
    </Card>
  )
}

export const Card_advantages = ({title, text, icon}) => {
  return (
    <Card title={title} text={text}><div class={'card--icon'}><span class={`icon-${icon}`}></span></div></Card>
  )
}

