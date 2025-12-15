import { Accordion_full } from '../accordion/accordion-full.jsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';

export const Is_cascade_full = () => {
  return (
    <div className={'is_cascade'}>
      <h1 id={'title'}>Заголовок первого уровня</h1>
      <h2>Заголовок второго уровня</h2>
      <h3>Заголовок третьего уровня</h3>
      <h4>Заголовок четвертого уровня</h4>
      <h5>Заголовок пятого уровня</h5>
      <h6>Заголовок шестого уровня</h6>
      <p class='-accent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
        voluptatem.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iste iure, molestiae nihil perferendis
        possimus praesentium quasi reprehenderit sed sunt tempore vero! <a href="" target="_blank">ссылка</a></p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
        voluptatem.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim impedit in laboriosam nam
        necessitatibus rerum. A fugiat reiciendis repellendus rerum tempore totam unde voluptate.</p>
      <ul id={'ul'}>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos, laboriosam minima modi sapiente
        voluptates? <a href={''}>Ссылка</a></p>
      <strong>Lorem ipsum</strong>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
      </ol>
      <blockquote class='blockquote' id={'blockquote'}>
        <div className="blockquote--decor"></div>
        <div className="blockquote--text">
          <p>Просто потрясающе!</p>
          <span>Я не просто расслабилась — я впервые за годы почувствовала, что моё тело и разум говорят на одном языке</span>
        </div>
        <div className="blockquote--author">
          <div className="blockquote--author_img">
            <img src="/assets/img/1.jpg" alt=""/>
          </div>
          <div className="blockquote--author_text">
            <p>Иван Иванов</p>
            <span>Гость</span>
          </div>
        </div>
      </blockquote>
      <figure>
        <img src="/assets/img/1.jpg" alt=""/>
        <figcaption>Подпись к картинке</figcaption>
      </figure>
      <div className="is_cascade--table">
        <table>
          <thead>
          <tr>
            <td>Услуга</td>
            <td>Цена</td>
            <td>Место</td>
            <td>Для детей</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Программа 1</td>
            <td>1200</td>
            <td>Медицинский центр</td>
            <td>Да</td>
          </tr>
          <tr>
            <td>Программа 2</td>
            <td>1300</td>
            <td>SPA</td>
            <td>Нет</td>
          </tr>
          </tbody>
        </table>
      </div>
      <img src="/assets/img/2.png" alt=""/>
      <Accordion_full/>
      <Gallery
        isSlider={true}
        images={[
          {src: '../../assets/img/1.jpg'},
          {src: '../../assets/img/2.jpg'},
          {src: '../../assets/img/4.jpg', video: '../../assets/video/@lepragram.mp4'},
        ]}
      ></Gallery>

    </div>
  );
}
