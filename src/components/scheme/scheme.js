let SCHEME_PLACEMARKS = {
	0: {
		title: "Название объекта",
		description: "Краткое описание объекта",
		image: ["/assets/img/1.jpg"],
		link: "",
		tour: "",
	},
	// mini
	1: {
		title: "Верхняя канатная станция",
		description: "",
		image: "/assets/img/scheme/1.jpg",
		link: "",
	},
	2: {
		title: "Канатная станция Сосновый бор",
		description: "",
		image: "/assets/img/scheme/1.jpg",
		link: "",
	},
	3: {
		title: "Мисхорская тропа",
		description: "",
		image: "/assets/img/scheme/1.jpg",
		link: "",
	},
	4: {
		title: "Экзотрора к озеру",
		description: "",
		image: "/assets/img/scheme/1.jpg",
		link: "",
	},
	5: {
		title: "Таракташская тропа",
		description: "",
		image: "/assets/img/scheme/1.jpg",
		link: "",
	},
	6: {
		title: "Экскурсионный маршрут на трансфере до Верхней канатной станции",
		description: "",
		image: "/assets/img/scheme/1.jpg",
		link: "",
	},
};

let scheme = document.querySelector(".scheme");
if (scheme) {

	// placemarks
	let placemarks = scheme.querySelectorAll(" [data-placemark]");
	if (window.matchMedia("(min-width:769px)").matches) {
		function getCoords(pm) {
			return pm.getBBox();
		}
		function getCoeff() {
			return scheme.querySelector("svg").getBoundingClientRect().width / 1920;
		}

		placemarks.forEach((pm) => {
			let tooltip = document.createElement("div");
			let tooltip_title = document.createElement("p");

			scheme.append(tooltip);
			tooltip.append(tooltip_title);
			tooltip.append(tooltip_texr);

			if (pm.dataset.image) {
				let tooltip_image = document.createElement("img");
				tooltip_image.src = SCHEME_PLACEMARKS[pm.dataset.placemark].image;
				tooltip.append(tooltip_image);
				tooltip.classList.add("scheme--tooltip-img");
			} else {
				let title;
				SCHEME_PLACEMARKS[pm.dataset.placemark] ? (title = SCHEME_PLACEMARKS[pm.dataset.placemark].title) : (title = SCHEME_PLACEMARKS[0].title);
				tooltip_title.textContent = title;
			}

			tooltip.classList.add("scheme--tooltip");

			pm.addEventListener("mouseenter", (e) => {
				let cursorX = e.clientX;
				let cursorY = e.clientY;

				tooltip.style.top = cursorY + "px";
				tooltip.style.left = cursorX + "px";
				tooltip.classList.add("is_active");
			});
			pm.addEventListener("mouseleave", (e) => {
				tooltip.classList.remove("is_active");
			});
		});
	}
}
