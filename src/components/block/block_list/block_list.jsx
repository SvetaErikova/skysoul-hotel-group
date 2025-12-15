import clsx from "clsx";

export const Block_List = ({ children, title, className, link, filter, pagination, selection, slider = false, colorMode='', pattern = false, col= ''}) => {
	return (
		<section className={clsx("block block_list", className ,slider ? 'block_list-slider' : null, { '-pattern': pattern },colorMode? colorMode: null, col ? col : null)  }>
			<div className="block--wrapper">
				{title && title}

				{link && <div className="block--link">{link}</div>}

				{selection &&  selection }

				{filter && <div className="block--filter">{filter}</div>}

				{children && <div className="block--elements">{children}</div>}

				{pagination && pagination}
			</div>
		</section>
	);
};
