function initScrollingAdvantages() {
  let block = document.querySelector('.advantages');
  if (!block) return;

  let cards = Array.from(block.querySelectorAll('.item')),
    activeCardIndex = -1;

  function updateCardPosition(newActiveIndex) {
    if (newActiveIndex === activeCardIndex) return;
    cards.forEach((card, index) => {
      if (index < newActiveIndex) {
        const distance = newActiveIndex - index;
        const shiftAmount = (window.innerWidth < 768 ? -13 : -22) * distance;

        gsap.to(card, {
          y: `${shiftAmount}%`,
          duration: 0.5,
          ease: 'power1.out',
        });
      } else {
        gsap.to(card, {
          y: '0%',
          duration: 0.5,
          ease: 'power1.out',
        });
      }
    });

    activeCardIndex = newActiveIndex;
  }

  cards.forEach((card, index) => {
    // Создаем fromTo анимацию с триггером внутри
    gsap.fromTo(card,
      {
      },
      {
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          end: 'bottom center',
          scrub: 0.5, // Или scrub: 0.5 для плавности
          markers: false,
          onEnter: () => updateCardPosition(index),
          onEnterBack: () => updateCardPosition(index),
          // Это тот же самый триггер, что у тебя был!
        },
      },
    );
  });
}


function AdvantagesAction() {
  let block = document.querySelector('.advantages'),
    btnScrollingBottom = block.querySelector('.advantages_btn_scrolling');
  if (!btnScrollingBottom) return;
  btnScrollingBottom.addEventListener('click', (e) => {
    let nextBlock = document.querySelector('.advantages + *');
    if (nextBlock) {
      nextBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  });

  function checkAdvantagesVisibility() {
    ScrollTrigger.create({
      trigger: block,
      start: 'top 20%',
      end: 'bottom 100%',
      markers: false,
      onToggle: (self) => {
        btnScrollingBottom.classList.toggle('is_show', self.isActive);
      }
    });
  }
  checkAdvantagesVisibility()
}

AdvantagesAction();
initScrollingAdvantages();
window.addEventListener('resize', initScrollingAdvantages);
