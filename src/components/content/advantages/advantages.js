function initScrollingAdvantages() {
  let block = document.querySelector('.advantages');
  if (!block) return;

  let cards = Array.from(block.querySelectorAll('.item'));

  // Храним состояние для каждой карточки
  cards.forEach((card, index) => {
    card.dataset.index = index;
    card.dataset.isActive = 'false';
  });

  // Функция для обновления смещения
  function updateCardPosition(cardIndex, isEntering) {
    cards.forEach((card, index) => {
      if (index < cardIndex) {
        const distance = cardIndex - index;
        let shiftAmount;

        if (isEntering) {
          // При входе в центр - полное смещение
          shiftAmount = -22 * distance;
        } else {
          // При выходе из центра - уменьшаем смещение
          shiftAmount = -22 * Math.max(0, distance - 1);
        }

        gsap.to(card, {
          y: `${shiftAmount}%`,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: true
        });
      }
    });
  }

  // Создаем триггеры для каждой карточки
  cards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      markers: true,
      onEnter: () => updateCardPosition(index, true),
      onLeave: () => updateCardPosition(index, false),
      onEnterBack: () => updateCardPosition(index, true),
      onLeaveBack: () => {
        if (index > 0) {
          // При выходе назад - обновляем позицию предыдущей карточки
          updateCardPosition(index - 1, true);
        } else {
          // Если это первая карточка - сбрасываем все
          cards.forEach(card => {
            gsap.to(card, {
              y: '0%',
              duration: 0.5,
              ease: 'power2.out',
              overwrite: true
            });
          });
        }
      }
    });
  });
}

initScrollingAdvantages();
