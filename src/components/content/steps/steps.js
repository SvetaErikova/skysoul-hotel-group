export function initSteps() {
  if (typeof window.LeaderLine === 'undefined') return;

  const LeaderLine = window.LeaderLine;
  const container = document.querySelector('.content_steps .block--elements');
  if (!container) return;

  const cards = container.querySelectorAll('.card');
  if (cards.length < 6) return;

  const lines = [];

  // Конфигурация с разными gravity для каждой линии
  const anchorConfigs = [
    {
      from: 0, to: 1,
      fromX: '60%', fromY: '0%',
      toX: '40%', toY: '0%',
      startGravity: [60, -60],
      endGravity: [-60, -60]
    },
    {
      from: 1, to: 2,
      fromX: '60%', fromY: '0%',
      toX: '40%', toY: '0%',
      startGravity: [60, -60],
      endGravity: [-60, -60]
    },
    {
      from: 2, to: 3,
      fromX: '100%', fromY: '50%',
      toX: '50%', toY: '0%',
      startGravity: [250, 250],
      endGravity: [250, -250]
    },
    {
      from: 3, to: 4,
      fromX: '60%', fromY: '100%',
      toX: '40%', toY: '100%',
      startGravity: [60, 60],
      endGravity: [-60, 60]
    },
    {
      from: 4, to: 5,
      fromX: '60%', fromY: '100%',
      toX: '40%', toY: '100%',
      startGravity: [60, 60],
      endGravity: [-60, 60]
    }
  ];

  anchorConfigs.forEach(config => {
    const startAnchor = LeaderLine.pointAnchor(cards[config.from], {
      x: config.fromX,
      y: config.fromY
    });

    const endAnchor = LeaderLine.pointAnchor(cards[config.to], {
      x: config.toX,
      y: config.toY
    });

    lines.push(new LeaderLine(startAnchor, endAnchor, {
      color: '#007FFF',
      path: 'fluid',
      endPlug: 'arrow1',
      size: 2,
      dash: { len: 4, gap: 4 },
      startSocketGravity: config.startGravity,
      endSocketGravity: config.endGravity,
    }));
  });
  container.appendChild(line.svg);

  const resizeHandler = () => lines.forEach(line => line.position());
  window.addEventListener('resize', resizeHandler);

  window._stepsLines = lines;
  window._stepsResizeHandler = resizeHandler;

  console.log(`✅ Линии созданы внутри контейнера:`, container);
}
initSteps()
