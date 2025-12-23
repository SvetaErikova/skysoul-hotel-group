export function initSteps() {
  const LeaderLine = window.LeaderLine;
  const container = document.querySelector('.content_steps .block--elements');
  if (!container) return;

  const cards = container.querySelectorAll('.card');
  if (cards.length < 6) return;

  const lines = [];

  const getConfigByBreakpoint = () => {
    const width = window.innerWidth;
    
    if (width >= 1241) {
      // min 1241px
      return [
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
          fromX: '60%', fromY: '100%',
          toX: '50%', toY: '0%',
          startGravity: [-50, 80],
          endGravity: [50, -80]
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
    } else if (width >= 640) {
      return [
        {
          from: 0, to: 1,
          fromX: '60%', fromY: '0%',
          toX: '40%', toY: '0%',
          startGravity: [60, -60],
          endGravity: [-60, -60]
        },
        {
          from: 1, to: 2,
          fromX: '50%', fromY: '100%',
          toX: '40%', toY: '0%',
          startGravity: [-10, 60],
          endGravity: [60, -60]
        },
        {
          from: 2, to: 3,
          fromX: '100%', fromY: '30%',
          toX: '0%', toY: '80%',
          startGravity: [50, -50],
          endGravity: [-50, 50]
        },
        {
          from: 3, to: 4,
          fromX: '50%', fromY: '100%',
          toX: '40%', toY: '0%',
          startGravity: [-10, 60],
          endGravity: [60, -60]
        },
        {
          from: 4, to: 5,
          fromX: '60%', fromY: '100%',
          toX: '40%', toY: '100%',
          startGravity: [60, 60],
          endGravity: [-60, 60]
        }
      ];
    } else {
      return [
        {
          from: 0, to: 1,
          fromX: '20%', fromY: '100%',
          toX: '80%', toY: '0%',
          startGravity: [20, 70],
          endGravity: [-70, -70]
        },
        {
          from: 1, to: 2,
          fromX: '80%', fromY: '100%',
          toX: '20%', toY: '0%',
          startGravity: [-60, 60],
          endGravity: [60, -60]
        },
        {
          from: 2, to: 3,
          fromX: '20%', fromY: '100%',
          toX: '80%', toY: '0%',
          startGravity: [20, 70],
          endGravity: [-70, -70]
        },
        {
          from: 3, to: 4,
          fromX: '80%', fromY: '100%',
          toX: '20%', toY: '0%',
          startGravity: [-60, 60],
          endGravity: [60, -60]
        },
        {
          from: 4, to: 5,
          fromX: '20%', fromY: '100%',
          toX: '80%', toY: '0%',
          startGravity: [20, 70],
          endGravity: [-70, -70]
        }
      ];
    }
  };

  const anchorConfigs = getConfigByBreakpoint();

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
      dash: {len: 4, gap: 4},
      startSocketGravity: config.startGravity,
      endSocketGravity: config.endGravity,
    }));
  });

  const resizeHandler = () => {
    // Пересоздаем линии при изменении разрешения
    lines.forEach(line => line.remove());
    lines.length = 0;
    
    const newConfigs = getConfigByBreakpoint();
    newConfigs.forEach(config => {
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
        dash: {len: 4, gap: 4},
        startSocketGravity: config.startGravity,
        endSocketGravity: config.endGravity,
      }));
    });
    
    lines.forEach(line => line.position());
  };
  window.addEventListener('resize', resizeHandler);

  window._stepsLines = lines;
  window._stepsResizeHandler = resizeHandler;
}

document.addEventListener("DOMContentLoaded", () => {
  initSteps();

})
