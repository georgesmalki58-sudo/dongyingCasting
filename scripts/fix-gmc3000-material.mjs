// GMC 3000: materials = stainless steel throughout (Georges, 2026-10-28)
import fs from 'node:fs';
const NEW = {
  en: 'Stainless steel throughout (all load-bearing parts per UN ECE R55 §4.2)',
  de: 'Komplett aus Edelstahl (alle tragenden Teile gemäß UN ECE R55 §4.2)',
  fr: 'Entièrement en acier inoxydable (toutes les pièces porteuses selon UN ECE R55 §4.2)',
  es: 'Totalmente de acero inoxidable (todas las piezas portantes según UN ECE R55 §4.2)',
  it: 'Interamente in acciaio inossidabile (tutte le parti portanti secondo UN ECE R55 §4.2)',
  pt: 'Totalmente em aço inoxidável (todas as peças portantes conforme UN ECE R55 §4.2)',
  ar: 'فولاذ مقاوم للصدأ بالكامل (جميع الأجزاء الحاملة للأحمال وفق UN ECE R55 البند 4.2)',
  ru: 'Полностью из нержавеющей стали (все несущие детали согласно UN ECE R55 п. 4.2)',
  zh: '全不锈钢（所有承载部件，符合 UN ECE R55 §4.2）',
};
for (const [l, v] of Object.entries(NEW)) {
  const f = `src/i18n/dictionaries/${l}.json`;
  const t = fs.readFileSync(f, 'utf8');
  const re = /("materials":\s*")([^"]*4\.2[^"]*)(")/;
  if (!re.test(t)) throw new Error('materials not found in ' + l);
  fs.writeFileSync(f, t.replace(re, (_, a, _old, c) => a + v + c));
  console.log(l, 'ok');
}
