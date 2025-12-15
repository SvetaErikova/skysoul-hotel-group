import clsx from "clsx";

export const Button = ({
  link,
  popup,
  closePopup,
  children,
  icon,
  icon_left = false,
  className,
  type = "filled" | 'outlined' | "link" ,
  dark,
  color = "primary" | "secondary",
  // size= "sm" | "md",
  htmlType = "button",
  ...attr
}) => {
  const Tag = link ? "a" : "button";
  const props = link
    ? { href: link }
    : { type: htmlType, "data-openpopup": popup, "data-closepopup": closePopup };

  const buttonClasses = clsx(
    "button",
    type && `button-${type}`,
    dark && "button-dark",
    color && `button-${color}`,
    // size && `button-${size}`,
    className
  );

  return (
    <Tag {...props} class={buttonClasses} {...attr}>
      {icon && icon_left && <span class={icon} />}
      {children && <span>{children}</span>}
      {icon && !icon_left && <span class={icon} />}
    </Tag>
  );
};
