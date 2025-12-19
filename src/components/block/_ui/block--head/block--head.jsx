export const Block_Head = ({
  title,
  subtitle,
  caption,
  headingLevel = 2,
  action,
  headingSize = 'f-h2',
  accentTitleBefore,
  accentTitleAfter,
}) => {
  const HeadingTag = `h${headingLevel}`;

  return (
    <div class="block--head">
        <div className={'block--head_subtitle '}>
          <p>{subtitle}</p>
        </div>
      <div className="block--head_title">
        {accentTitleBefore || accentTitleAfter ? (
          <HeadingTag className={headingSize}>
            {accentTitleBefore && <span className="-accent"  dangerouslySetInnerHTML={{ __html: accentTitleBefore }}></span>}
            <span>{title}</span>
            {accentTitleAfter && <span className="-accent" dangerouslySetInnerHTML={{ __html: accentTitleAfter }}></span>}
          </HeadingTag>
        ) : (
          <HeadingTag
            className={headingSize}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </div>

      {caption && (
        <div class="block--head_caption">
          {typeof caption === 'string' ? <p>{caption}</p> : caption}
        </div>
      )}

      {action && <div className={'block--actions'}>{action}</div>}
    </div>
  );
};
