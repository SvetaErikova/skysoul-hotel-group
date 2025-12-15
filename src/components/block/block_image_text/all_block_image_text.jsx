import { Button } from '../../_ui/button/button.jsx';
import { Block_Head } from '../_ui/block--head/block--head.jsx';
import { Block_image_text } from './block_image_text.jsx';
import { Is_cascade_full } from '../../_ui/is_cascade/is_cascade-full.jsx';

export const All_block_image_text = () => {
  const demoContent = (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet harum ipsum mollitia, quibusdam
        voluptates?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit.</p>
    </>
  );

  const demoActions = (
    <>
      <Button type={'filled'} color={'primary'}>
        <span>Кнопка 1</span>
      </Button>
      <Button type={'filled'} color={'secondary'}>
        <span>Кнопка 2</span>
      </Button>
    </>
  );

  const demoHead = (title) => (
    <Block_Head
      title={title || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, repellat?'}
      subtitle="Subheader"
      caption="Pretium nisi aenean vitae tristique pulvinar vestibulum habitasse velit vitae. Amet et aliquet arcu leo."
      headingLevel={2}
      action={demoActions}
    />
  );

  return (
    <>
      {/* Без изображения */}
      <Block_image_text title={demoHead('Картинка текст без картинки')} content={demoContent} />
      <Block_image_text title={demoHead('Картинка текст без картинки Реверсивный')} content={demoContent} reversed />

      {/* Базовые варианты */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Базовый блок')}
        content={demoContent}
      />

      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Реверсивный блок')}
        content={demoContent}
        reversed
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Блок с высотой картинки в высоту контента')}
        content={demoContent}
        reversed
        rarioFill={true}
      />


      {/* С видео */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg', video: '../../assets/video/@lepragram.mp4' },
        ]}
        title={demoHead('Блок с видео')}
        content={demoContent}
      />

      {/* фоновые вариации */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Дефолт фон')}
        content={demoContent}

      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Темный фон')}
        content={demoContent}
        backgroundMode={'-dark-mode'}
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Белый фон фон')}
        content={demoContent}
        backgroundMode={'-light-mode'}
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Акцентный фон')}
        content={demoContent}
        backgroundMode={'-accent-mode'}
      />

      {/* Слайдер */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg', video: '../../assets/video/@lepragram.mp4' },
          { src: '../../assets/img/1.jpg' },
          { src: '../../assets/img/footer.jpg' },
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Блок со слайдером')}
        content={demoContent}
      />

    </>
  );
};
