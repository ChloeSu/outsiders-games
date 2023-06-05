export interface RabbitGameItem {
  icon: string;
  score: number;
  position: { top: number; left: number };
}

export const additionalItems: RabbitGameItem[] = (() => {
  const radius = window.innerHeight < 775 ? 120 : 150; // 圓的半徑
  const centerX = window.innerHeight < 775 ? 13500 : 15000; // 圓心的 x 座標
  const centerY = window.innerHeight < 775 ? 18500 : 22500; // 圓心的 y 座標
  const totalPoints = window.innerHeight < 775 ? 10 : 15; // 總點數

  // position用法先保留
  const IconScoreMap = [
    { icon: "🍎", score: 10, position: { top: 100, left: 100 } },
    { icon: "🍌", score: 20, position: { top: 90, left: 190 } },
    { icon: "🍇", score: 45, position: { top: 130, left: 260 } },
    { icon: "🍓", score: 32, position: { top: 100, left: 100 } },
    { icon: "🍉", score: 18, position: { top: 100, left: 100 } },
    { icon: "🥕", score: 48, position: { top: 100, left: 100 } },
    { icon: "🍔", score: -5, position: { top: 100, left: 100 } },
    { icon: "🍟", score: -3, position: { top: 100, left: 100 } },
    { icon: "🍕", score: -14, position: { top: 100, left: 100 } },
    { icon: "🌮", score: -16, position: { top: 100, left: 100 } },
    { icon: "🍦", score: 37, position: { top: 100, left: 100 } },
    { icon: "🍧", score: 46, position: { top: 100, left: 100 } },
    { icon: "🍗", score: 39, position: { top: 100, left: 100 } },
    { icon: "🍖", score: -6, position: { top: 100, left: 100 } },
    { icon: "🥩", score: 8, position: { top: 100, left: 100 } },
    { icon: "🥦", score: 15, position: { top: 100, left: 100 } },
    { icon: "🌽", score: 27, position: { top: 100, left: 100 } },
    { icon: "🥔", score: 4, position: { top: 100, left: 100 } },
    { icon: "🍞", score: -3, position: { top: 100, left: 100 } },
    { icon: "🧀", score: 6, position: { top: 100, left: 100 } },
    { icon: "🥗", score: 5, position: { top: 100, left: 100 } },
    { icon: "🍅", score: -3, position: { top: 100, left: 100 } },
    { icon: "🍪", score: 2, position: { top: 100, left: 100 } },
    { icon: "🍰", score: 8, position: { top: 100, left: 100 } },
  ];

  const points = [];

  for (let i = 0; i < totalPoints; i++) {
    const angle = (2 * Math.PI * i) / totalPoints; // 角度 = (2π * i) / 總點數
    const x = Math.round(centerX + radius * Math.cos(angle) * 100) / 100;
    const y = Math.round(centerY + radius * Math.sin(angle) * 100) / 100;
    points.push({ x, y });
  }

  return points.map((point, index) => {
    return {
      icon: IconScoreMap[index].icon,
      score: IconScoreMap[index].score,
      position: { top: point.y, left: point.x }
    };
  });
})();

