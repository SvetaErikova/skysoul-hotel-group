import clsx from "clsx";
import { Block } from '../../block/block.jsx';

export const Faq = ({ title, children, section, className }) => {
	return (
    <Block  className={clsx("content_faq ", className)}>
        {title}
        {section && section}
        <div class="block--content is_cascade">{children}</div>
    </Block>

	);
};
