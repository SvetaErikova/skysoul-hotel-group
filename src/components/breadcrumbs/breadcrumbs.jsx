export const Breadcrumbs = () => {
	return (
		<div class="breadcrumbs" itemscope="" itemtype="https://schema.org/BreadcrumbList">
			<a itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem" href="/riders-lodge/">
				<span itemProp="name">Riders Lodge</span>
			</a>
			<a itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem" href="/riders-lodge/offers">
				<span itemProp="name">Акции</span>
			</a>
		</div>
	);
};
