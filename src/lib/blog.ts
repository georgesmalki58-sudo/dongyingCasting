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

// ---- Simplified-Chinese article content (used when locale === 'zh') ----
export type LocalizedContent = {
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  faq: { q: string; a: string }[];
};

const ZH_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: '熔模铸造（精密铸造）的工作原理、适用金属、可达公差，以及它何时优于砂型铸造、锻造或棒料机加工。',
    intro:
      '熔模铸造，又称精密铸造或失蜡铸造，可生产表面光洁、尺寸精确的近净成形金属零件。当零件结构复杂、材料难以机加工，或需要稳定批量的高品质铸件时，它是首选工艺。本文介绍工艺流程、适用材料、可达公差，以及如何设计出易于铸造的零件。',
    sections: [
      { h: '什么是熔模铸造？', p: [
        '熔模铸造是在蜡模外包覆陶瓷壳，熔失蜡料后将熔融金属浇入型腔的工艺。由于蜡模被消耗、型壳无分型面，工艺能复制机加工难以实现的精细细节与复杂内腔。',
        '“熔模”指包覆在蜡模外的陶瓷浆料，“失蜡”指蜡模被熔化去除——两者描述的是同一类工艺。'
      ]},
      { h: '工艺流程', p: [
        '精密铝模通过注蜡成形蜡模；蜡模组装到中央浇道上形成“模组（蜡树）”，提高单次浇注的产出率。',
        '模组反复蘸浆并撒砂、干燥，直至形成数毫米厚的型壳；随后焙烧脱蜡并获得强度。',
        '将熔融金属浇入热型壳（重力、真空或压力辅助）；凝固后破壳、从模组切下零件，再打磨浇口、热处理并检验。'
      ]},
      { h: '适用金属与合金', p: [
        '熔模铸造适用合金范围极广：不锈钢（CF8、CF8M / 304、316）、碳钢与低合金钢、耐热钢、镍基与钴基高温合金、工具钢及铜合金。',
        '正因如此，该工艺可同时服务航空涡轮叶片、医疗植入件、船舶配件与工业阀体等领域。'
      ]},
      { h: '公差、光洁度与尺寸', p: [
        '典型线性公差约为首段25mm内±0.1mm，之后每25mm约±0.05mm，铸态表面光洁度Ra 3.2–6.3µm；关键部位再经机加工达到更高精度。',
        '零件重量通常从数克到数十千克；在合适合金与浇注系统下，最薄壁厚可达约2mm。'
      ]},
      { h: '何时选择熔模铸造', p: [
        '当需要更好的光洁度与细节时优于砂型铸造；当结构复杂或材料浪费大时优于棒料机加工；当形状精巧而非单纯求强度时优于锻造。',
        '对于简单形状的超大批量，压铸或冲压可能更省；对于单件样品，3D打印蜡模可无需硬模即进入同一铸造流程。'
      ]},
      { h: '可铸性设计建议', p: [
        '采用均匀壁厚、大圆角与渐变过渡，避免热节与缩松；仅在公差需要处预留加工余量。',
        '尽早提供图纸或STEP文件——在设计阶段做微小调整，往往能在开模前消除成本与质量风险。'
      ]}
    ],
    faq: [
      { q: '熔模铸造能达到什么公差？', a: '首段25mm约±0.1mm，关键部位经机加工可进一步收紧。' },
      { q: '铸造与棒料机加工哪个更省？', a: '对于复杂形状或昂贵合金，熔模铸造通常在材料利用率与工时上更优；简单形状可能机加工更便宜。' }
    ]
  },
  'lost-wax-casting': {
    excerpt: '失蜡铸造详解：蜡模制作、制壳、脱蜡、浇注，以及它成为B2B制造主力工艺的优势。',
    intro:
      '失蜡铸造是一项有数千年历史并被现代工业精炼的工艺。通过先以蜡成形、再以陶瓷包覆并熔失蜡料，制造商可获得精密、可复制的型腔，用于生产高品质金属零件。以下介绍现代工艺如何稳定地交付工业部件。',
    sections: [
      { h: '从蜡模到浇注', p: [
        '蜡料注入金属模具形成与成品一致（含少量收缩余量）的蜡模；蜡模组装到浇道上，蘸浆制壳，再在高压釜或快速焙烧炉中脱蜡。',
        '焙烧后的型壳浇入熔融金属，冷却后破壳取出铸件；每个型壳只浇一次，但注蜡金属模可重复使用数千次。'
      ]},
      { h: '制造商为何选择它', p: [
        '它能实现近净成形、优良表面光洁度、精细细节与复杂内腔。模具虽非免费，但远低于复杂零件批量机加工的累计成本。',
        '它还支持极广的合金范围，因此单一供应商即可服务船舶、汽车、阀门、泵及食品机械等客户。'
      ]},
      { h: '典型应用', p: [
        '涡轮与泵部件、阀体、船舶五金、汽车与机械零件、食品设备配件，以及医疗与运动器材部件均很常见。',
        '该工艺既可用打印蜡模制作单件样品，也可批量生产数千件一致的零件。'
      ]},
      { h: '质量与检验', p: [
        '正规铸造厂在每个环节把控质量——来料检验、尺寸检验，以及（按需）着色渗透、X射线或光谱检测——并在ISO 9001质量体系下运行。'
      ]}
    ],
    faq: [
      { q: '失蜡铸造与熔模铸造是一回事吗？', a: '是的，两者是同一工艺的不同叫法。' },
      { q: '一个模具能做多少件？', a: '每个陶瓷型壳只浇注一次，但注蜡金属模可重复使用数千次。' }
    ]
  },
  'stainless-steel-casting': {
    excerpt: '不锈钢熔模铸造实务：常见牌号（304/CF8、316/CF8M）、选材标准及各牌号的适用场景。',
    intro:
      '不锈钢铸件兼具耐腐蚀、强度与卫生性，在船舶、食品、化工与医疗领域不可或缺。选对牌号，决定了零件是耐用数十年还是过早失效。本文介绍常见不锈钢牌号的铸造对应牌号及如何选择。',
    sections: [
      { h: '铸造牌号与变形牌号', p: [
        '变形304与316有对应的铸造牌号——分别为CF8与CF8M，化学成分略作调整以利铸造。CF8M（316的铸造形态）添加钼，对氯化物与点蚀的抵抗力更强。',
        '向铸造厂标注铸造牌号（如CF8M）而非变形牌号，可消除歧义。'
      ]},
      { h: '如何选择牌号', p: [
        '根据工况匹配牌号：CF8（304）用于一般耐蚀与食品接触；CF8M（316）用于海水、氯化物与强腐蚀化学介质；双相钢用于同时要求强度与耐氯化物的场合。',
        '兼顾温度、机械载荷、可焊性与成本。过度选材浪费成本，选材不足则有过早腐蚀风险。'
      ]},
      { h: '不锈钢铸件的优势场景', p: [
        '船舶五金与泵阀部件受益于耐腐蚀；食品与医疗设备受益于卫生、易清洁的表面；化工受益于化学惰性。'
      ]},
      { h: '表面处理与钝化', p: [
        '铸态不锈钢可经抛丸、打磨、抛光、电解抛光或钝化。钝化可恢复保护性氧化铬层，建议用于耐蚀要求高的零件。'
      ]}
    ],
    faq: [
      { q: '316不锈钢的铸造对应牌号是什么？', a: 'CF8M——含有赋予316耐氯化物性能的钼。' },
      { q: '不锈钢铸件需要钝化吗？', a: '对耐蚀关键件需要；机加工后钝化可恢复保护性氧化层。' }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: '为什么铸件要再做CNC加工、如何规划加工余量与基准，以及四/五轴CNC为铸造项目带来什么。',
    intro:
      '熔模铸件可达近净成形，但关键特征——孔、密封面、螺纹、安装基准——通常需CNC加工到最终公差。将铸造与加工整合于一家，可缩短交期并明确责任。本文说明两道工序如何协同。',
    sections: [
      { h: '为何对近净成形铸件再加工？', p: [
        '铸态公差适合多数表面，但配合特征需机加工到微米级配合。先铸造、仅对关键特征加工，可最大限度减少去除量、节拍与成本。'
      ]},
      { h: '面向加工的设计', p: [
        '仅在需要处局部预留加工余量（通常0.5–2mm），明确装夹基准，尽量避免断续切削。标注哪些表面为关键，便于铸造厂据此安排浇口与余量。'
      ]},
      { h: '四轴与五轴CNC的价值', p: [
        '多轴加工可在一次装夹中到达复杂几何，消除重复装夹误差、提高精度。结合CNC铣削、镜面电火花与线切割，可覆盖从样品到量产的全过程。'
      ]},
      { h: '一家供应商，统一责任', p: [
        '将铸造与加工一并采购，可避免分供商在公差责任上的互相推诿，同时压缩物流与交期。'
      ]}
    ],
    faq: [
      { q: '铸件应在热处理前还是后机加工？', a: '先粗加工、再热处理、最后精加工——既控制变形又达到最终公差。' },
      { q: '应预留多少加工余量？', a: '通常仅在关键表面留0.5–2mm；过多会浪费材料与工时。' }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: '从抛丸到电解抛光、电镀与涂装——铸件表面处理选项一览及各自的适用场景。',
    intro:
      '表面处理可保护铸件、改善外观，并为密封、装配或后续涂层做准备。合适的处理取决于合金、使用环境与外观要求。本文概览最常见的选项。',
    sections: [
      { h: '清理与去浇口', p: [
        '落砂后从模组切下零件并磨平浇口残根。抛丸或喷砂去除残余陶瓷并形成均匀的哑光表面——这是任何后续处理的常规起点。'
      ]},
      { h: '机械处理', p: [
        '打磨、滚抛与抛光，从功能性去毛刺到镜面光洁不等。对不锈钢，电解抛光可在微观层面进一步平滑，提升卫生与耐蚀性能。'
      ]},
      { h: '防护与装饰涂层', p: [
        '钝化（不锈钢）、电镀（锌、镍、铬）、阳极氧化（适用时）、喷粉与喷漆可提供防腐或外观。依环境与成本选择。'
      ]},
      { h: '如何标注表面要求', p: [
        '在图纸上注明目标粗糙度（Ra）、涂层标准及任何遮蔽要求。模糊的表面标注是返工的常见根源。'
      ]}
    ],
    faq: [
      { q: '熔模铸件的默认表面是什么？', a: '抛丸哑光表面，通常Ra 3.2–6.3µm，可直接进行后续处理。' },
      { q: '船舶零件适合哪种表面处理？', a: '耐蚀合金配合钝化或适当的电镀/涂层，依暴露环境而定。' }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: '退火、正火、淬火回火与固溶处理——热处理如何调控钢铸件的强度与韧性。',
    intro:
      '热处理可在不改变形状的前提下，改变钢铸件的力学性能——强度、硬度、塑性与韧性。选择正确的工艺是满足规范的关键。本文介绍主要热处理方式及其作用。',
    sections: [
      { h: '为何要对铸件热处理', p: [
        '铸态组织通常并非最佳。热处理可消除铸造应力、细化晶粒，并发展零件在使用中所需的强度—韧性平衡。'
      ]},
      { h: '常见工艺', p: [
        '退火软化并消除应力；正火细化晶粒、提高均匀性；淬火回火在保持韧性的同时提升强度与硬度；固溶处理用于不锈钢及部分合金，以溶解碳化物、最大化耐蚀性。'
      ]},
      { h: '与机加工的顺序', p: [
        '通过“粗加工—热处理—精加工”控制变形；高公差零件可能需在工序间增加去应力处理。'
      ]},
      { h: '验证', p: [
        '硬度、拉伸与金相检验确认处理达到规范——并记录在随件提供的材质/检测报告中。'
      ]}
    ],
    faq: [
      { q: '热处理会改变铸件尺寸吗？', a: '可能产生轻微变形，因此关键特征在其后精加工。' },
      { q: '哪种处理最大化不锈钢耐蚀性？', a: '固溶处理可溶解碳化物，恢复耐蚀组织。' }
    ]
  }
};

// Returns the article content in the requested locale (Simplified Chinese for zh,
// otherwise the English source).
export function postContent(post: BlogPost, locale: string): LocalizedContent {
  if (locale === 'zh' && ZH_CONTENT[post.slug]) return ZH_CONTENT[post.slug];
  return { excerpt: post.excerpt, intro: post.intro, sections: post.sections, faq: post.faq };
}

export function hasLocalizedBody(slug: string, locale: string): boolean {
  return locale === 'en' || (locale === 'zh' && !!ZH_CONTENT[slug]);
}
