export const Block_Head = ({
  title,
  subtitle,
  caption,
  headingLevel = 2,
  action,
  headingSize = 'f-h2',
  accentTitle,
}) => {
  const HeadingTag = `h${headingLevel}`;

  return (
    <div class="block--head">
        <div className={'block--head_subtitle '}>
          <p>{subtitle}</p>
        </div>
      <div className="block--head_title">
        {accentTitle ? (
          <HeadingTag class={headingSize}>
            <span className="-accent">{accentTitle}</span>
            <span>{title}</span>
          </HeadingTag>
        ) : (
          <HeadingTag class={headingSize} dangerouslySetInnerHTML={{ __html: title }}></HeadingTag>
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
