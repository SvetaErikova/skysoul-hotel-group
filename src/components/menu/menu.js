const initMenu = () => {
	const menu = document.querySelector(".menu");
	if (!menu) {
		return;
	}

	const mediaDesktop = window.matchMedia("(min-width: 1024px)");
	const navButtons = Array.from(menu.querySelectorAll(".menu--nav_item"));
	const panels = Array.from(menu.querySelectorAll(".menu--content_panel"));

	const setActiveTab = (targetId) => {
		navButtons.forEach((button) => {
			const isActive = button.dataset.id === targetId;
			button.classList.toggle("is-active", isActive);
		});

		panels.forEach((panel) => {
			const isActive = panel.dataset.id === targetId;
			panel.classList.toggle("is-active", isActive);
		});
	};

	navButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if (!mediaDesktop.matches) {
				return;
			}
			setActiveTab(button.dataset.id);
		});
	});

	const mobileItems = menu.querySelectorAll(".menu--mobile_item");

	const setMobileState = (item, body, isOpen) => {
		item.classList.toggle("is-open", isOpen);
	};

	mobileItems.forEach((item) => {
		const toggle = item.querySelector(".menu--mobile_toggle");
		const body = item.querySelector(".menu--mobile_body");
		if (!toggle || !body) {
			return;
		}

		const defaultOpen = item.classList.contains("is-open");
		setMobileState(item, body, defaultOpen);

		toggle.addEventListener("click", () => {
			const willOpen = !item.classList.contains("is-open");
			setMobileState(item, body, willOpen);
		});
	});

	const handleViewportChange = () => {
		if (mediaDesktop.matches && navButtons.length) {
			const currentActive = menu.querySelector(".menu--nav_item.is-active");
			if (!currentActive) {
				setActiveTab(navButtons[0].dataset.id);
			}
		}

		mobileItems.forEach((item) => {
			const body = item.querySelector(".menu--mobile_body");
			if (body && item.classList.contains("is-open")) {
				body.style.maxHeight = `${body.scrollHeight}px`;
			}
		});
	};
	mediaDesktop.addEventListener("change", handleViewportChange);
};

document.addEventListener("DOMContentLoaded", initMenu);

