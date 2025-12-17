import clsx from 'clsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';

export const Block_image_text = ({
  images,
  title,
  content,
  reversed = false,
  backgroundMode = '' | '-light-mode' | '-dark-mode' | '-accent-mode',
  contentBottom = false
  // rarioFill = false,
}) => {
  const wrapperClasses = clsx(
    'block block_image_text',
    reversed && 'block_image_text-reversed',
    backgroundMode && `${backgroundMode}`,
    contentBottom && 'block_image_text-position-bottom',
    // rarioFill && 'block_image_text-ratio-fill'
  );

  const renderMedia = () => {
    return (
      images && (
        <div className="block--image">
          <Gallery images={images}></Gallery>
        </div>
      )
    );
  };

  return (
    <section className={wrapperClasses}>
      <div className="block--wrapper">
        {renderMedia()}
        <div className="block--content">
          {title}
          {content && <div className="is_cascade">{content}</div>}
        </div>
      </div>
    </section>
  );
};
