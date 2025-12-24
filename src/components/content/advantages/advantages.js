function initScrollingAdvantages() {
  let block = document.querySelector('.advantages');
  if (!block) return;

  let cards = Array.from(block.querySelectorAll('.item'));
  let activeCardIndex = -1;
  function updateCardPosition(newActiveIndex) {
    if (newActiveIndex === activeCardIndex) return;
    cards.forEach((card, index) => {
      if (index < newActiveIndex) {
        const distance = newActiveIndex - index;
        const shiftAmount = -22 * distance;

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
        top: '50vh'
      },
      {
        top: '30vh',
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5, // Или scrub: 0.5 для плавности
          markers: false,
          onEnter: () => updateCardPosition(index),
          onEnterBack: () => updateCardPosition(index)
          // Это тот же самый триггер, что у тебя был!
        }
      }
    );
  });
}

initScrollingAdvantages();
