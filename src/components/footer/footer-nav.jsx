import { menuSections } from '../../shared/menu-sections.js';

export const FooterNav = () => {
	// Берем только первую секцию и её группы
	const groups = menuSections?.[0]?.groups || [];

	return (
		<nav className="footer--nav">
				{groups.map((group, groupIndex) => (
					<ul key={groupIndex} className="footer--nav_list">
						<li className="footer--nav_list_item">
							<p className="footer--nav_list_title">{group.title}</p>
						</li>
						{group.links.map((link, linkIndex) => (
							<li key={`${groupIndex}-${linkIndex}`} className="footer--nav_list_item">
								<a href={link.href}>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				))}
		</nav>
	);
};

