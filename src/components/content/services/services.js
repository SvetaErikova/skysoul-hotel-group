function initServicesHoverCard() {
  const servicesContainer = document.querySelector('.content_services');
  if (!servicesContainer) return;

  const cards = Array.from(servicesContainer.querySelectorAll('.block--elements .card'));
  const bgImages = Array.from(servicesContainer.querySelectorAll('.block--image img'));

  if (!cards.length || !bgImages.length) return;

  let activeIndex = 0;

  const showState = (index) => {
    const normalizedIndex = index % cards.length;

    cards.forEach((card, idx) => {
      card.classList.toggle('is_active', idx === normalizedIndex);
    });

    bgImages.forEach((img, idx) => {
      img.classList.toggle('is_visible', idx === normalizedIndex % bgImages.length);
    });

    activeIndex = normalizedIndex;
  };

  const handleActivate = (event) => {
    const card = event.target.closest('.card');
    if (!card) return;

    const index = cards.indexOf(card);
    if (index === -1 || index === activeIndex) return;

    showState(index);
  };

  showState(0);

  servicesContainer.addEventListener('mouseover', handleActivate);
  servicesContainer.addEventListener('focusin', handleActivate);
  servicesContainer.addEventListener('click', handleActivate);
  servicesContainer.addEventListener('touchstart', handleActivate);
}

initServicesHoverCard();
