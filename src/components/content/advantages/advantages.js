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
          duration: 0.6,
          ease: 'easeInOut',
        });
      } else {
        gsap.to(card, {
          y: '0%',
          duration: 0.6,
          ease: 'easeInOut',
        });
      }
    });

    activeCardIndex = newActiveIndex;
  }
  cards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      onEnter: () => updateCardPosition(index),
      onEnterBack: () => updateCardPosition(index)
    });
  });
}

initScrollingAdvantages();
