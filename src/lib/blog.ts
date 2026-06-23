import { IMAGES } from './site';
import type { Dictionary } from '@/i18n/config';

export type PostKey = keyof Dictionary['blog']['posts'];

export type BlogSection = { h: string; p: string[] };
export type BlogPost = {
  slug: string;
  key: PostKey;          // title comes from the locale dictionary (blog.posts[key])
  image: string;
  date: string;          // ISO date
  readMins: number;
  keywords: string[];
  excerpt: string;       // English SEO excerpt
  intro: string;
  sections: BlogSection[];
  faq: { q: string; a: string }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: 'investment-casting-guide',
    key: 'investment',
    image: IMAGES.investmentSvc,
    date: '2026-01-15',
    readMins: 7,
    keywords: ['investment casting', 'precision casting', 'lost wax casting', 'metal casting China'],
    excerpt: 'How investment casting works, the metals it suits, the tolerances it holds, and when it beats sand casting, forging, or machining from solid.',
    intro:
      'Investment casting — also called precision casting or lost-wax casting — produces near-net-shape metal parts with excellent surface finish and tight tolerances. It is the process of choice when a component is geometrically complex, made from a hard-to-machine alloy, or needed in repeatable, high-quality batches. This guide walks through the process, the materials it suits, the tolerances it can hold, and how to design parts that cast well.',
    sections: [
      { h: 'What is investment casting?', p: [
        'Investment casting builds a ceramic shell around a wax pattern, melts the wax out, and pours molten metal into the resulting cavity. Because the pattern is consumed and the shell is seamless, the process reproduces fine detail and complex internal geometry that would be impossible or expensive to machine.',
        'The name "investment" refers to the ceramic slurry that is "invested" around the wax pattern. "Lost wax" refers to the pattern being melted away. Both names describe the same family of processes.'
      ]},
      { h: 'The process, step by step', p: [
        'A precision aluminium die produces wax patterns by injection. Patterns are assembled onto a central wax sprue to form a "tree", maximising yield per pour.',
        'The tree is repeatedly dipped in ceramic slurry and stuccoed with refractory sand, then dried, until a shell several millimetres thick forms. The shell is fired to remove the wax and gain strength.',
        'Molten metal is poured into the hot shell — gravity, vacuum, or pressure assisted. After solidification the shell is knocked off, parts are cut from the tree, and gates are ground, heat-treated, and inspected.'
      ]},
      { h: 'Which metals and alloys suit it', p: [
        'Investment casting handles a very wide alloy range: stainless steels (CF8, CF8M / 304, 316), carbon and low-alloy steels, heat-resistant steels, nickel- and cobalt-based superalloys, tool steels, and copper alloys.',
        'This breadth is one reason the process spans aerospace turbine blades, medical implants, marine fittings, and industrial valve bodies alike.'
      ]},
      { h: 'Tolerances, finish, and size', p: [
        'Typical linear tolerances are around ±0.1 mm for the first 25 mm and roughly ±0.05 mm for each additional 25 mm, with surface finish of Ra 3.2–6.3 µm as-cast. Critical features are then finish-machined to tighter limits.',
        'Part weights commonly range from a few grams to tens of kilograms. Thin walls down to ~2 mm are achievable with the right alloy and gating.'
      ]},
      { h: 'When to choose it over other processes', p: [
        'Prefer investment casting over sand casting when you need better finish and detail; over machining-from-solid when geometry is complex or material waste is high; and over forging when shapes are intricate rather than simply strong.',
        'For very high volumes of simple shapes, die casting or stamping may be cheaper. For one-off prototypes, 3D-printed patterns can feed the same casting route without hard tooling.'
      ]},
      { h: 'Design tips for castability', p: [
        'Use uniform wall thickness, generous radii, and gradual transitions to avoid hot spots and shrinkage porosity. Add machining stock only where tolerances demand it.',
        'Share your drawings or STEP files early — small geometry changes at the design stage often remove cost and quality risk before tooling is cut.'
      ]}
    ],
    faq: [
      { q: 'What tolerance can investment casting hold?', a: 'Around ±0.1 mm for the first 25 mm, tightening with finish machining where required.' },
      { q: 'Which is cheaper, casting or machining from solid?', a: 'For complex shapes or expensive alloys, investment casting usually wins on material yield and labour; simple shapes may machine cheaper.' }
    ]
  },
  {
    slug: 'lost-wax-casting',
    key: 'lostWax',
    image: IMAGES.lostWax,
    date: '2026-02-03',
    readMins: 6,
    keywords: ['lost wax casting', 'investment casting process', 'wax pattern', 'ceramic shell'],
    excerpt: 'Lost-wax casting explained: pattern making, ceramic shelling, burnout, pouring, and the benefits that make it a B2B manufacturing staple.',
    intro:
      'Lost-wax casting is a 5,000-year-old idea refined into a modern industrial process. By forming a part in wax, encasing it in ceramic, and melting the wax away, manufacturers obtain a precise, reusable mould cavity for high-quality metal parts. Here is how the modern process delivers repeatable industrial components.',
    sections: [
      { h: 'From pattern to pour', p: [
        'Wax is injected into a metal die to form a pattern identical to the final part plus a small allowance for shrinkage. Patterns are assembled onto a sprue, dipped to build a ceramic shell, and dewaxed in an autoclave or flash-fire furnace.',
        'The fired shell is filled with molten metal, cooled, and broken away to free the casting. Each shell makes one set of parts, but the wax die is reused thousands of times.'
      ]},
      { h: 'Why manufacturers choose it', p: [
        'It delivers near-net shape, excellent surface finish, fine detail, and freedom to cast complex internal passages. Tooling, while not free, is far cheaper than the cumulative machining cost of complex parts at volume.',
        'It also supports an enormous alloy range, so a single supplier can serve marine, automotive, valve, pump, and food-machinery customers.'
      ]},
      { h: 'Typical applications', p: [
        'Turbine and pump components, valve bodies, marine hardware, automotive and machinery parts, food-equipment fittings, and medical and sporting components are all common.',
        'The process is equally at home making one prototype from a printed pattern or thousands of identical production parts.'
      ]},
      { h: 'Quality and inspection', p: [
        'Reputable foundries control quality at every stage — incoming material checks, dimensional inspection, and (where specified) dye-penetrant, X-ray, or spectrometer verification — under an ISO 9001 quality system.'
      ]}
    ],
    faq: [
      { q: 'Is lost-wax casting the same as investment casting?', a: 'Yes — they are two names for the same process.' },
      { q: 'How many parts can one mould make?', a: 'Each ceramic shell makes one pour, but the wax injection die is reused for thousands of patterns.' }
    ]
  },
  {
    slug: 'stainless-steel-casting',
    key: 'stainless',
    image: IMAGES.investment1,
    date: '2026-02-20',
    readMins: 6,
    keywords: ['stainless steel casting', 'CF8M', '316 casting', 'corrosion resistant casting'],
    excerpt: 'A practical look at stainless steel investment casting: common grades (304/CF8, 316/CF8M), selection criteria, and where each grade fits.',
    intro:
      'Stainless steel castings combine corrosion resistance, strength, and hygiene, making them indispensable in marine, food, chemical, and medical applications. Choosing the right grade is the difference between a part that lasts decades and one that fails early. This article covers the cast equivalents of common stainless grades and how to select between them.',
    sections: [
      { h: 'Cast grades vs. wrought grades', p: [
        'Wrought 304 and 316 have cast equivalents — CF8 and CF8M respectively — with slightly adjusted chemistry for castability. CF8M (the cast form of 316) adds molybdenum for superior resistance to chlorides and pitting.',
        'Specifying the cast designation (e.g. CF8M) rather than the wrought one removes ambiguity for the foundry.'
      ]},
      { h: 'How to select a grade', p: [
        'Match the grade to the environment: CF8 (304) for general corrosion resistance and food contact; CF8M (316) for seawater, chlorides, and aggressive chemicals; duplex grades where both strength and chloride resistance are critical.',
        'Consider temperature, mechanical load, weldability, and cost. Over-specifying wastes money; under-specifying risks premature corrosion.'
      ]},
      { h: 'Where stainless castings excel', p: [
        'Marine hardware and pump/valve components benefit from corrosion resistance; food and medical equipment benefit from hygienic, easily cleaned surfaces; chemical processing relies on chemical inertness.'
      ]},
      { h: 'Finishing and passivation', p: [
        'As-cast stainless can be shot-blasted, ground, polished, electropolished, or passivated. Passivation restores the protective chromium-oxide layer and is recommended for corrosion-critical service.'
      ]}
    ],
    faq: [
      { q: 'What is the cast equivalent of 316 stainless?', a: 'CF8M — it has the molybdenum content that gives 316 its chloride resistance.' },
      { q: 'Do stainless castings need passivation?', a: 'For corrosion-critical parts, yes; passivation restores the protective oxide layer after machining.' }
    ]
  },
  {
    slug: 'cnc-machining-cast-components',
    key: 'cnc',
    image: IMAGES.image2,
    date: '2026-03-10',
    readMins: 6,
    keywords: ['cnc machining', 'post-cast machining', '5-axis machining', 'precision parts'],
    excerpt: 'Why castings are finish-machined, how to plan machining stock and datums, and what 4/5-axis CNC adds to a casting program.',
    intro:
      'Investment castings reach near-net shape, but critical features — bores, sealing faces, threads, mounting datums — usually need CNC machining to final tolerance. Integrating casting and machining under one roof shortens lead time and tightens accountability. This article explains how the two processes work together.',
    sections: [
      { h: 'Why machine a near-net casting?', p: [
        'As-cast tolerances suit most surfaces, but mating features need machining to micron-level fits. Casting first and machining only the critical features minimises material removal, cycle time, and cost.',
      ]},
      { h: 'Designing for machining', p: [
        'Add localized machining stock (typically 0.5–2 mm) only where needed, define clear datums for fixturing, and avoid interrupted cuts where possible. Call out which surfaces are critical so the foundry can orient gating and stock accordingly.'
      ]},
      { h: 'What 4- and 5-axis CNC adds', p: [
        'Multi-axis machining reaches complex geometry in a single setup, improving accuracy by eliminating re-fixturing errors. Combined with CNC milling, mirror EDM, and wire-cutting, it covers everything from prototype to production.'
      ]},
      { h: 'One supplier, one accountability', p: [
        'Sourcing casting and machining together avoids the finger-pointing that occurs when separate vendors disagree over whose tolerance was at fault. It also compresses logistics and lead time.'
      ]}
    ],
    faq: [
      { q: 'Should castings be machined before or after heat treatment?', a: 'Rough machine, heat treat, then finish machine — this controls distortion while hitting final tolerance.' },
      { q: 'How much machining stock should I leave?', a: 'Typically 0.5–2 mm on critical surfaces only; more wastes material and time.' }
    ]
  },
  {
    slug: 'surface-finishing-cast-parts',
    key: 'finishing',
    image: IMAGES.product3,
    date: '2026-03-28',
    readMins: 5,
    keywords: ['surface finishing', 'shot blasting', 'electropolishing', 'powder coating castings'],
    excerpt: 'From shot-blasting to electropolishing, plating, and coating — a tour of finishing options for cast metal parts and when to use each.',
    intro:
      'Surface finishing protects cast parts, improves appearance, and prepares surfaces for sealing, assembly, or further coating. The right finish depends on the alloy, the service environment, and cosmetic requirements. This guide surveys the most common options.',
    sections: [
      { h: 'Cleaning and de-gating', p: [
        'After knockout, parts are cut from the tree and gate stubs are ground flush. Shot- or sand-blasting removes residual ceramic and produces a uniform matte surface — the usual starting point for any further finishing.'
      ]},
      { h: 'Mechanical finishes', p: [
        'Grinding, tumbling, and polishing range from functional deburring to mirror finishes. Electropolishing goes further on stainless, smoothing at the microscopic level for hygiene and corrosion performance.'
      ]},
      { h: 'Protective and decorative coatings', p: [
        'Passivation (stainless), plating (zinc, nickel, chrome), anodizing (where applicable), powder coating, and painting add corrosion protection or appearance. Choose based on environment and cost.'
      ]},
      { h: 'Specifying a finish', p: [
        'State the target roughness (Ra), the coating standard, and any masking requirements on the drawing. Ambiguous finish callouts are a common source of rework.'
      ]}
    ],
    faq: [
      { q: 'What is the default finish on an investment casting?', a: 'A shot-blasted matte surface, typically Ra 3.2–6.3 µm, ready for further finishing.' },
      { q: 'Which finish is best for marine parts?', a: 'Corrosion-resistant alloys plus passivation or appropriate plating/coating for the exposure.' }
    ]
  },
  {
    slug: 'heat-treatment-steel-castings',
    key: 'heat',
    image: IMAGES.product4,
    date: '2026-04-12',
    readMins: 6,
    keywords: ['heat treatment', 'annealing', 'quenching tempering', 'solution treatment castings'],
    excerpt: 'Annealing, normalizing, quench-and-temper, and solution treatment — how heat treatment tunes the strength and toughness of steel castings.',
    intro:
      'Heat treatment transforms the mechanical properties of steel castings — strength, hardness, ductility, and toughness — without changing their shape. Selecting the right cycle is essential to meeting a specification. This article explains the main treatments and what they achieve.',
    sections: [
      { h: 'Why castings are heat treated', p: [
        'As-cast microstructure is rarely optimal. Heat treatment relieves casting stresses, refines grain structure, and develops the strength-toughness balance a part needs in service.'
      ]},
      { h: 'Common cycles', p: [
        'Annealing softens and relieves stress; normalizing refines grain and improves uniformity; quench-and-temper raises strength and hardness while retaining toughness; solution treatment is used on stainless and some alloys to dissolve carbides and maximize corrosion resistance.'
      ]},
      { h: 'Sequencing with machining', p: [
        'Distortion is managed by rough-machining, heat-treating, then finish-machining. Critical-tolerance parts may need stress-relief between operations.'
      ]},
      { h: 'Verification', p: [
        'Hardness testing, tensile testing, and microstructure examination confirm that the treatment met the specification — documented in the material/test report supplied with the parts.'
      ]}
    ],
    faq: [
      { q: 'Does heat treatment change a casting’s dimensions?', a: 'It can cause slight distortion, which is why critical features are finish-machined afterward.' },
      { q: 'What treatment maximizes stainless corrosion resistance?', a: 'Solution treatment dissolves carbides and restores the corrosion-resistant microstructure.' }
    ]
  }
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
