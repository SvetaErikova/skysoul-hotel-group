PopupManager.register("popup_for_cascade", {
  additional_close_controls: true,
  is_block_scroll: true,
});

PopupManager.register(
  "popup_for_form",
  {
    is_block_scroll: true,
    additional_close_controls: true,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelector("form").reset();
    },
  },
);
PopupManager.register('popup_for_review',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {
      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      let gallery = block_to_clone.querySelectorAll('[data-fancybox]')
      gallery.forEach(it => {
        it.dataset.fancybox = "gallery_popup"
      })
      popup_element.querySelector('.popup_content-wrapper').append(block_content);

    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector('.popup_content-wrapper').innerHTML = '';
      }, 100)
    }

  }
);

PopupManager.register('popup_for_room_advantages',
  {
    is_block_scroll: true,
    close_controls: true,
  },
  {
    on_open: (popup_element, params) => {

      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      popup_element.querySelector('.popup__content').append(block_content);

    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector('.accommodation--info').remove()
      }, 100)
    }

  }
);

PopupManager.register(
  "popup_for_cookies",
  {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
      sessionStorage.setItem("cookie", "shown");
    },
  },
);

PopupManager.register(
  "popup_for_contacts",
  {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
    },
  },
);

PopupManager.register("popup_for_menu",   {
    additional_close_controls: false,
    is_block_scroll: false,
  },
  {
    on_close: (popup_element, params) => {
      popup_element.querySelectorAll('.menu--mobile_item').forEach(item => {
        item.classList.remove('is-open');
      });

    },
  },
);
PopupManager.register(
  "popup_for_filters",
  {
    additional_close_controls: true,
    is_block_scroll: true
  },
  {
    on_open: (popup_element, params) => {
      let filters = document.querySelector(".popup--filters");
      console.log(filters);
      let block_to_clone = params.block;
      let block_content = block_to_clone.cloneNode(true);
      filters.appendChild(block_content);
    },
    on_close: (popup_element, params) => {
      setTimeout(() => {
        popup_element.querySelector(".popup--filters").innerHTML = "";
      }, 110);
    }
  }
);

// PopupManager.register(
// 	"popup_for_notification",
// 	{
// 		additional_close_controls: true,
// 		is_block_scroll: false,
// 	},
// 	{
// 		on_open: (popup_element, params) => {
// 			if (params) {
// 				let text = popup_element.querySelector(".popup--content_text") ? popup_element.querySelector(".popup--content_text") : false;
// 				text && params.text ? (text.textContent = params.text) : "";
//
// 				let title = popup_element.querySelector(".popup--content_title") ? popup_element.querySelector(".popup--content_title") : false;
// 				title && params.title ? (title.textContent = params.title) : "";
//
// 				if (params.type) {
// 					popup_element.classList.add(params.type);
// 				} else {
// 					popup_element.querySelector(".popup--title") ? popup_element.querySelector(".popup--title").classList.add("is_hidden") : false;
// 				}
//
// 				if (params.autoClose) {
// 					popup_element.querySelector(".popup--close") ? popup_element.querySelector(".popup--close").classList.add("is_hidden") : false;
// 					setTimeout(() => {
// 						PopupManager.close("popup_for_notification");
// 					}, params.autoClose);
// 				}
// 			}
// 		},
// 		on_close: (popup_element, params) => {
// 			setTimeout(() => {
// 				let text = popup_element.querySelector(".popup--content_text") ? popup_element.querySelector(".popup--content_text") : false;
// 				text.textContent = "";
// 				let title = popup_element.querySelector(".popup--content_title") ? popup_element.querySelector(".popup--content_title") : false;
// 				title.textContent = "";
// 				popup_element.querySelector(".popup--close") ? popup_element.querySelector(".popup--close").classList.remove("is_hidden") : false;
// 				popup_element.querySelector(".popup--title") ? popup_element.querySelector(".popup--title").classList.remove("is_hidden") : false;
// 			}, 110);
// 		},
// 	},
// );

// Add event Listeners to open Popups

function activatePopupButtons(block) {
  let open_popup_buttons = block.querySelectorAll("[data-openpopup]");
  open_popup_buttons.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      if (b.dataset.openpopup === "popup_for_filters") {
        let block_to_clone = b.parentElement.querySelector(".filter");
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone});
        }
      } else if (b.dataset.openpopup === "popup_for_room_advantages") {
        let block_to_clone = b.previousElementSibling;
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      } else if (b.dataset.openpopup === "popup_for_review") {
        let block_to_clone = b.closest('.review');
        if (block_to_clone) {
          PopupManager.open(b.dataset.openpopup, {block: block_to_clone})
        }
      } else {
        PopupManager.open(b.dataset.openpopup);
      }
    });
  });
}

activatePopupButtons(document);
window.activatePopupButtons = activatePopupButtons;

window.addEventListener('load', () => {
  if (sessionStorage.getItem('cookie') !== 'shown' && localStorage.getItem('cookie') !== 'shown') {
    PopupManager.open('popup_for_cookies');
    document.querySelector('[data-accept]').addEventListener('click', function () {
      sessionStorage.setItem('cookie', 'shown');
      localStorage.setItem('cookie', 'shown');
    })
  }
});
// PopupManager.open('popup_for_cookies');
// PopupManager.open('popup_for_notification', { title: 'Произошла ошибка', text: 'Попробуйте обновить страницу или попробовать позже', type: 'error' })
