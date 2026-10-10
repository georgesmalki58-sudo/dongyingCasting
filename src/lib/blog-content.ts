// German / Spanish / Arabic article bodies. English lives in blog.ts (POSTS),
// Simplified Chinese in blog.ts (ZH_CONTENT). Keyed by slug.
import type { LocalizedContent } from './blog';

export const DE_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: 'Wie Feinguss funktioniert, für welche Metalle er geeignet ist, welche Toleranzen er hält und wann er dem Sandguss, dem Schmieden oder dem Zerspanen aus dem Vollen überlegen ist.',
    intro:
      'Feinguss — auch Präzisionsguss oder Wachsausschmelzguss genannt — erzeugt endkonturnahe Metallteile mit hervorragender Oberflächengüte und engen Toleranzen. Es ist das Verfahren der Wahl, wenn ein Bauteil geometrisch komplex ist, aus einer schwer zerspanbaren Legierung besteht oder in wiederholbaren, hochwertigen Serien benötigt wird. Dieser Leitfaden erläutert den Prozess, die geeigneten Werkstoffe, die erreichbaren Toleranzen und wie man gut gießbare Teile konstruiert.',
    sections: [
      { h: 'Was ist Feinguss?', p: [
        'Beim Feinguss wird eine Keramikschale um ein Wachsmodell aufgebaut, das Wachs ausgeschmolzen und flüssiges Metall in den entstandenen Hohlraum gegossen. Da das Modell verbraucht wird und die Schale fugenlos ist, bildet das Verfahren feine Details und komplexe Innengeometrien ab, die sich nur schwer oder teuer zerspanen ließen.',
        'Der Begriff „Feinguss" (engl. investment) bezieht sich auf die keramische Masse, die um das Wachsmodell gelegt wird. „Wachsausschmelz" (lost wax) beschreibt das Ausschmelzen des Modells. Beide Namen beschreiben dieselbe Verfahrensfamilie.'
      ]},
      { h: 'Der Prozess Schritt für Schritt', p: [
        'Eine Präzisions-Aluminiumform erzeugt durch Spritzen Wachsmodelle. Die Modelle werden an einem zentralen Wachsanguss zu einer „Traube" montiert, was die Ausbeute pro Abguss maximiert.',
        'Die Traube wird wiederholt in Keramikschlicker getaucht und mit feuerfestem Sand bestreut, dann getrocknet, bis eine mehrere Millimeter dicke Schale entsteht. Die Schale wird gebrannt, um das Wachs zu entfernen und Festigkeit zu gewinnen.',
        'Flüssiges Metall wird in die heiße Schale gegossen — schwerkraft-, vakuum- oder druckunterstützt. Nach dem Erstarren wird die Schale abgeschlagen, die Teile von der Traube getrennt, die Anschnitte verschliffen, wärmebehandelt und geprüft.'
      ]},
      { h: 'Welche Metalle und Legierungen geeignet sind', p: [
        'Feinguss verarbeitet eine sehr breite Legierungspalette: Edelstähle (CF8, CF8M / 304, 316), Kohlenstoff- und niedriglegierte Stähle, hitzebeständige Stähle, Nickel- und Kobaltbasis-Superlegierungen, Werkzeugstähle und Kupferlegierungen.',
        'Diese Vielfalt ist ein Grund, warum das Verfahren Turbinenschaufeln für die Luftfahrt, Medizinimplantate, Schiffsbeschläge und industrielle Ventilkörper gleichermaßen abdeckt.'
      ]},
      { h: 'Toleranzen, Oberfläche und Größe', p: [
        'Typische Längentoleranzen liegen bei etwa ±0,1 mm für die ersten 25 mm und rund ±0,05 mm je weitere 25 mm, mit einer Gussoberfläche von Ra 3,2–6,3 µm. Kritische Merkmale werden anschließend auf engere Grenzen fertigbearbeitet.',
        'Die Teilegewichte reichen üblicherweise von wenigen Gramm bis zu einigen zehn Kilogramm. Mit der richtigen Legierung und Anschnitttechnik sind Wandstärken bis hinab zu etwa 2 mm erreichbar.'
      ]},
      { h: 'Wann man es anderen Verfahren vorzieht', p: [
        'Feinguss ist dem Sandguss vorzuziehen, wenn bessere Oberfläche und Detailtreue gefragt sind; dem Zerspanen aus dem Vollen bei komplexer Geometrie oder hohem Materialabtrag; und dem Schmieden, wenn Formen eher filigran als rein belastbar sind.',
        'Für sehr hohe Stückzahlen einfacher Formen können Druckguss oder Stanzen günstiger sein. Für Einzelprototypen können 3D-gedruckte Modelle denselben Gussweg ohne feste Werkzeuge nutzen.'
      ]},
      { h: 'Konstruktionstipps für die Gießbarkeit', p: [
        'Gleichmäßige Wandstärken, großzügige Radien und sanfte Übergänge verwenden, um Hotspots und Schwindungsporosität zu vermeiden. Bearbeitungsaufmaß nur dort vorsehen, wo Toleranzen es verlangen.',
        'Teilen Sie Ihre Zeichnungen oder STEP-Dateien frühzeitig — kleine Geometrieänderungen in der Konstruktionsphase vermeiden oft Kosten- und Qualitätsrisiken, bevor das Werkzeug gefertigt wird.'
      ]}
    ],
    faq: [
      { q: 'Welche Toleranz kann Feinguss halten?', a: 'Etwa ±0,1 mm für die ersten 25 mm, mit Fertigbearbeitung dort enger, wo erforderlich.' },
      { q: 'Was ist günstiger, Gießen oder Zerspanen aus dem Vollen?', a: 'Bei komplexen Formen oder teuren Legierungen gewinnt der Feinguss meist bei Materialausbeute und Arbeitsaufwand; einfache Formen lassen sich evtl. günstiger zerspanen.' }
    ]
  },
  'lost-wax-casting': {
    excerpt: 'Wachsausschmelzguss erklärt: Modellherstellung, Keramikschale, Ausbrennen, Abguss und die Vorteile, die ihn zu einem Grundpfeiler der B2B-Fertigung machen.',
    intro:
      'Der Wachsausschmelzguss ist eine 5.000 Jahre alte Idee, verfeinert zu einem modernen Industrieprozess. Indem ein Teil in Wachs geformt, in Keramik eingeschlossen und das Wachs ausgeschmolzen wird, erhalten Hersteller einen präzisen, wiederverwendbaren Formhohlraum für hochwertige Metallteile. So liefert der moderne Prozess reproduzierbare Industriebauteile.',
    sections: [
      { h: 'Vom Modell zum Abguss', p: [
        'Wachs wird in eine Metallform gespritzt, um ein Modell zu formen, das dem Endteil plus einem kleinen Schwindungsaufmaß entspricht. Die Modelle werden an einem Anguss montiert, zur Keramikschale getaucht und in einem Autoklaven oder Flash-Fire-Ofen entwachst.',
        'Die gebrannte Schale wird mit flüssigem Metall gefüllt, abgekühlt und zerschlagen, um das Gussteil freizulegen. Jede Schale erzeugt einen Teilesatz, die Wachsform wird jedoch tausendfach wiederverwendet.'
      ]},
      { h: 'Warum Hersteller es wählen', p: [
        'Es liefert endkonturnahe Form, hervorragende Oberflächengüte, feine Details und die Freiheit, komplexe innere Kanäle zu gießen. Das Werkzeug ist zwar nicht kostenlos, aber weit günstiger als die kumulierten Zerspanungskosten komplexer Teile in Serie.',
        'Es unterstützt zudem eine enorme Legierungspalette, sodass ein einziger Lieferant Kunden aus Schiffbau, Automobil, Ventil-, Pumpen- und Nahrungsmittelmaschinenbau bedienen kann.'
      ]},
      { h: 'Typische Anwendungen', p: [
        'Turbinen- und Pumpenteile, Ventilkörper, Schiffsbeschläge, Automobil- und Maschinenteile, Beschläge für Nahrungsmittelausrüstung sowie Medizin- und Sportkomponenten sind allesamt verbreitet.',
        'Das Verfahren eignet sich gleichermaßen für einen Prototyp aus einem gedruckten Modell wie für Tausende identischer Serienteile.'
      ]},
      { h: 'Qualität und Prüfung', p: [
        'Seriöse Gießereien steuern die Qualität in jeder Phase — Wareneingangsprüfung, Maßkontrolle und (sofern spezifiziert) Farbeindring-, Röntgen- oder Spektrometerprüfung — unter einem ISO-9001-Qualitätssystem.'
      ]}
    ],
    faq: [
      { q: 'Ist Wachsausschmelzguss dasselbe wie Feinguss?', a: 'Ja — es sind zwei Namen für dasselbe Verfahren.' },
      { q: 'Wie viele Teile erzeugt eine Form?', a: 'Jede Keramikschale ergibt einen Abguss, aber die Wachsspritzform wird für Tausende Modelle wiederverwendet.' }
    ]
  },
  'stainless-steel-casting': {
    excerpt: 'Ein praxisnaher Blick auf den Edelstahl-Feinguss: gängige Güten (304/CF8, 316/CF8M), Auswahlkriterien und wo jede Güte passt.',
    intro:
      'Edelstahlgussteile vereinen Korrosionsbeständigkeit, Festigkeit und Hygiene und sind damit in Schiffbau, Lebensmittel-, Chemie- und Medizinanwendungen unverzichtbar. Die Wahl der richtigen Güte entscheidet zwischen einem Teil, das Jahrzehnte hält, und einem, das früh versagt. Dieser Artikel behandelt die Gussäquivalente gängiger Edelstahlgüten und wie man zwischen ihnen auswählt.',
    sections: [
      { h: 'Guss- gegenüber Knetgüten', p: [
        'Die Knetgüten 304 und 316 haben Gussäquivalente — CF8 bzw. CF8M — mit leicht angepasster Chemie für die Gießbarkeit. CF8M (die Gussform von 316) enthält Molybdän für überlegene Beständigkeit gegen Chloride und Lochfraß.',
        'Die Angabe der Gussbezeichnung (z. B. CF8M) statt der Knetbezeichnung beseitigt Unklarheiten für die Gießerei.'
      ]},
      { h: 'Wie man eine Güte auswählt', p: [
        'Die Güte an die Umgebung anpassen: CF8 (304) für allgemeine Korrosionsbeständigkeit und Lebensmittelkontakt; CF8M (316) für Meerwasser, Chloride und aggressive Chemikalien; Duplexgüten, wenn sowohl Festigkeit als auch Chloridbeständigkeit entscheidend sind.',
        'Temperatur, mechanische Last, Schweißbarkeit und Kosten berücksichtigen. Überspezifizieren verschwendet Geld; Unterspezifizieren riskiert vorzeitige Korrosion.'
      ]},
      { h: 'Wo Edelstahlguss glänzt', p: [
        'Schiffsbeschläge und Pumpen-/Ventilteile profitieren von der Korrosionsbeständigkeit; Lebensmittel- und Medizingeräte von hygienischen, leicht zu reinigenden Oberflächen; die chemische Verarbeitung von der chemischen Beständigkeit.'
      ]},
      { h: 'Nachbearbeitung und Passivierung', p: [
        'Gussedelstahl kann gestrahlt, geschliffen, poliert, elektropoliert oder passiviert werden. Die Passivierung stellt die schützende Chromoxidschicht wieder her und wird für korrosionskritischen Einsatz empfohlen.'
      ]}
    ],
    faq: [
      { q: 'Was ist das Gussäquivalent von Edelstahl 316?', a: 'CF8M — es enthält das Molybdän, das 316 seine Chloridbeständigkeit verleiht.' },
      { q: 'Benötigen Edelstahlgussteile eine Passivierung?', a: 'Für korrosionskritische Teile ja; die Passivierung stellt die schützende Oxidschicht nach der Bearbeitung wieder her.' }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: 'Warum Gussteile fertigbearbeitet werden, wie man Bearbeitungsaufmaß und Bezugsflächen plant und was 4-/5-Achsen-CNC einem Gussprogramm bringt.',
    intro:
      'Feingussteile erreichen eine endkonturnahe Form, doch kritische Merkmale — Bohrungen, Dichtflächen, Gewinde, Montagebezüge — benötigen meist eine CNC-Bearbeitung auf Endtoleranz. Die Integration von Guss und Bearbeitung unter einem Dach verkürzt die Durchlaufzeit und schärft die Verantwortlichkeit. Dieser Artikel erklärt, wie die beiden Prozesse zusammenwirken.',
    sections: [
      { h: 'Warum ein endkonturnahes Gussteil bearbeiten?', p: [
        'Gusstoleranzen genügen den meisten Flächen, aber Passflächen benötigen eine Bearbeitung auf Passungen im Mikrometerbereich. Zuerst gießen und nur die kritischen Merkmale bearbeiten minimiert Materialabtrag, Taktzeit und Kosten.'
      ]},
      { h: 'Konstruieren für die Bearbeitung', p: [
        'Lokales Bearbeitungsaufmaß (typisch 0,5–2 mm) nur dort vorsehen, wo nötig, klare Bezüge für die Aufspannung definieren und unterbrochene Schnitte nach Möglichkeit vermeiden. Angeben, welche Flächen kritisch sind, damit die Gießerei Anschnitt und Aufmaß entsprechend ausrichten kann.'
      ]},
      { h: 'Was 4- und 5-Achsen-CNC bringt', p: [
        'Mehrachsige Bearbeitung erreicht komplexe Geometrie in einer einzigen Aufspannung und erhöht die Genauigkeit, indem Umspannfehler entfallen. Kombiniert mit CNC-Fräsen, Senkerodieren und Drahtschneiden deckt sie alles vom Prototyp bis zur Serie ab.'
      ]},
      { h: 'Ein Lieferant, eine Verantwortung', p: [
        'Guss und Bearbeitung gemeinsam zu beziehen vermeidet das Schwarze-Peter-Spiel, das entsteht, wenn getrennte Lieferanten darüber streiten, wessen Toleranz schuld war. Es verdichtet zudem Logistik und Durchlaufzeit.'
      ]}
    ],
    faq: [
      { q: 'Sollten Gussteile vor oder nach der Wärmebehandlung bearbeitet werden?', a: 'Schruppen, wärmebehandeln, dann fertigbearbeiten — das steuert den Verzug und erreicht die Endtoleranz.' },
      { q: 'Wie viel Bearbeitungsaufmaß sollte ich lassen?', a: 'Typisch 0,5–2 mm nur an kritischen Flächen; mehr verschwendet Material und Zeit.' }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: 'Von Strahlen über Elektropolieren bis Galvanik und Beschichtung — ein Überblick über Nachbearbeitungsoptionen für Gussteile und wann man welche einsetzt.',
    intro:
      'Die Oberflächenbearbeitung schützt Gussteile, verbessert das Aussehen und bereitet Flächen für Abdichtung, Montage oder weitere Beschichtung vor. Die richtige Oberfläche hängt von der Legierung, der Einsatzumgebung und den kosmetischen Anforderungen ab. Dieser Leitfaden gibt einen Überblick über die gängigsten Optionen.',
    sections: [
      { h: 'Reinigen und Entanschnitten', p: [
        'Nach dem Ausschlagen werden die Teile von der Traube getrennt und Angussreste bündig verschliffen. Kugel- oder Sandstrahlen entfernt restliche Keramik und erzeugt eine gleichmäßige matte Oberfläche — der übliche Ausgangspunkt für jede weitere Bearbeitung.'
      ]},
      { h: 'Mechanische Oberflächen', p: [
        'Schleifen, Trommeln und Polieren reichen vom funktionalen Entgraten bis zu Spiegeloberflächen. Das Elektropolieren geht bei Edelstahl weiter und glättet auf mikroskopischer Ebene für Hygiene und Korrosionsverhalten.'
      ]},
      { h: 'Schutz- und Dekorbeschichtungen', p: [
        'Passivierung (Edelstahl), Galvanik (Zink, Nickel, Chrom), Eloxieren (wo anwendbar), Pulverbeschichtung und Lackierung verleihen Korrosionsschutz oder Aussehen. Die Wahl richtet sich nach Umgebung und Kosten.'
      ]},
      { h: 'Eine Oberfläche spezifizieren', p: [
        'Die Zielrauheit (Ra), den Beschichtungsstandard und etwaige Maskierungsanforderungen auf der Zeichnung angeben. Unklare Oberflächenangaben sind eine häufige Quelle von Nacharbeit.'
      ]}
    ],
    faq: [
      { q: 'Was ist die Standardoberfläche eines Feingussteils?', a: 'Eine gestrahlte matte Oberfläche, typisch Ra 3,2–6,3 µm, bereit für die weitere Bearbeitung.' },
      { q: 'Welche Oberfläche eignet sich für Schiffsteile?', a: 'Korrosionsbeständige Legierungen plus Passivierung oder passende Galvanik/Beschichtung für die Exposition.' }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: 'Glühen, Normalglühen, Vergüten und Lösungsglühen — wie die Wärmebehandlung Festigkeit und Zähigkeit von Stahlgussteilen einstellt.',
    intro:
      'Die Wärmebehandlung verändert die mechanischen Eigenschaften von Stahlgussteilen — Festigkeit, Härte, Duktilität und Zähigkeit — ohne ihre Form zu ändern. Den richtigen Zyklus zu wählen ist entscheidend, um eine Spezifikation zu erfüllen. Dieser Artikel erklärt die wichtigsten Behandlungen und was sie bewirken.',
    sections: [
      { h: 'Warum Gussteile wärmebehandelt werden', p: [
        'Das Gussgefüge ist selten optimal. Die Wärmebehandlung baut Gussspannungen ab, verfeinert das Korngefüge und entwickelt das Festigkeits-Zähigkeits-Gleichgewicht, das ein Teil im Einsatz benötigt.'
      ]},
      { h: 'Gängige Zyklen', p: [
        'Glühen weicht aus und baut Spannungen ab; Normalglühen verfeinert das Korn und verbessert die Gleichmäßigkeit; Vergüten erhöht Festigkeit und Härte bei erhaltener Zähigkeit; Lösungsglühen wird bei Edelstählen und einigen Legierungen angewendet, um Karbide aufzulösen und die Korrosionsbeständigkeit zu maximieren.'
      ]},
      { h: 'Abfolge mit der Bearbeitung', p: [
        'Verzug wird durch Schruppen, Wärmebehandeln und anschließendes Fertigbearbeiten gesteuert. Teile mit kritischer Toleranz benötigen evtl. ein Spannungsarmglühen zwischen den Arbeitsgängen.'
      ]},
      { h: 'Verifizierung', p: [
        'Härteprüfung, Zugversuch und Gefügeuntersuchung bestätigen, dass die Behandlung die Spezifikation erfüllt hat — dokumentiert im Werkstoff-/Prüfbericht, der mit den Teilen geliefert wird.'
      ]}
    ],
    faq: [
      { q: 'Verändert die Wärmebehandlung die Maße eines Gussteils?', a: 'Sie kann leichten Verzug verursachen, weshalb kritische Merkmale danach fertigbearbeitet werden.' },
      { q: 'Welche Behandlung maximiert die Korrosionsbeständigkeit von Edelstahl?', a: 'Das Lösungsglühen löst Karbide auf und stellt das korrosionsbeständige Gefüge wieder her.' }
    ]
  }
};

export const ES_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: 'Cómo funciona la microfusión, los metales que admite, las tolerancias que mantiene y cuándo supera a la fundición en arena, la forja o el mecanizado desde macizo.',
    intro:
      'La microfusión —también llamada fundición de precisión o fundición a la cera perdida— produce piezas metálicas de forma casi neta con excelente acabado superficial y tolerancias estrechas. Es el proceso de elección cuando un componente es geométricamente complejo, está hecho de una aleación difícil de mecanizar o se necesita en lotes repetibles y de alta calidad. Esta guía recorre el proceso, los materiales que admite, las tolerancias que puede mantener y cómo diseñar piezas que se fundan bien.',
    sections: [
      { h: '¿Qué es la microfusión?', p: [
        'La microfusión construye una cáscara cerámica alrededor de un modelo de cera, funde la cera y vierte metal líquido en la cavidad resultante. Como el modelo se consume y la cáscara no tiene juntas, el proceso reproduce detalles finos y geometrías internas complejas que serían imposibles o costosas de mecanizar.',
        'El término «microfusión» (en inglés investment) se refiere a la pasta cerámica que se «inviste» alrededor del modelo de cera. «Cera perdida» alude a que el modelo se funde. Ambos nombres describen la misma familia de procesos.'
      ]},
      { h: 'El proceso, paso a paso', p: [
        'Un molde de aluminio de precisión produce modelos de cera por inyección. Los modelos se ensamblan en un bebedero central formando un «árbol», maximizando el rendimiento por colada.',
        'El árbol se sumerge repetidamente en pasta cerámica y se recubre con arena refractaria, y se seca, hasta formar una cáscara de varios milímetros. La cáscara se cuece para eliminar la cera y ganar resistencia.',
        'El metal líquido se vierte en la cáscara caliente —asistido por gravedad, vacío o presión—. Tras la solidificación se rompe la cáscara, se cortan las piezas del árbol y se esmerilan las entradas, se tratan térmicamente y se inspeccionan.'
      ]},
      { h: 'Qué metales y aleaciones admite', p: [
        'La microfusión maneja una gama muy amplia de aleaciones: aceros inoxidables (CF8, CF8M / 304, 316), aceros al carbono y de baja aleación, aceros refractarios, superaleaciones base níquel y cobalto, aceros de herramienta y aleaciones de cobre.',
        'Esta amplitud es una razón por la que el proceso abarca por igual álabes de turbina aeronáuticos, implantes médicos, herrajes marinos y cuerpos de válvula industriales.'
      ]},
      { h: 'Tolerancias, acabado y tamaño', p: [
        'Las tolerancias lineales típicas son de unos ±0,1 mm para los primeros 25 mm y de aproximadamente ±0,05 mm por cada 25 mm adicionales, con acabado superficial de Ra 3,2–6,3 µm en bruto de colada. Los elementos críticos se mecanizan después a límites más estrechos.',
        'Los pesos de pieza suelen ir de unos gramos a decenas de kilogramos. Con la aleación y el sistema de alimentación adecuados se alcanzan paredes de hasta ~2 mm.'
      ]},
      { h: 'Cuándo elegirla frente a otros procesos', p: [
        'Prefiera la microfusión a la fundición en arena cuando necesite mejor acabado y detalle; al mecanizado desde macizo cuando la geometría es compleja o el desperdicio de material alto; y a la forja cuando las formas son intrincadas en lugar de simplemente resistentes.',
        'Para volúmenes muy altos de formas sencillas, la fundición a presión o el estampado pueden ser más baratos. Para prototipos únicos, los modelos impresos en 3D pueden alimentar la misma ruta de fundición sin utillaje rígido.'
      ]},
      { h: 'Consejos de diseño para la colabilidad', p: [
        'Use espesores de pared uniformes, radios generosos y transiciones graduales para evitar puntos calientes y porosidad por contracción. Añada sobreespesor de mecanizado solo donde las tolerancias lo exijan.',
        'Comparta sus planos o archivos STEP pronto: pequeños cambios de geometría en la fase de diseño a menudo eliminan riesgos de coste y calidad antes de fabricar el utillaje.'
      ]}
    ],
    faq: [
      { q: '¿Qué tolerancia puede mantener la microfusión?', a: 'Alrededor de ±0,1 mm para los primeros 25 mm, estrechándose con mecanizado de acabado donde se requiera.' },
      { q: '¿Qué es más barato, fundir o mecanizar desde macizo?', a: 'Para formas complejas o aleaciones caras, la microfusión suele ganar en aprovechamiento de material y mano de obra; las formas sencillas pueden mecanizarse más barato.' }
    ]
  },
  'lost-wax-casting': {
    excerpt: 'La fundición a la cera perdida explicada: fabricación de modelos, encascarillado cerámico, descerado, colada y las ventajas que la hacen un pilar de la fabricación B2B.',
    intro:
      'La fundición a la cera perdida es una idea de 5.000 años refinada hasta convertirse en un proceso industrial moderno. Al formar una pieza en cera, encerrarla en cerámica y fundir la cera, los fabricantes obtienen una cavidad de molde precisa y reutilizable para piezas metálicas de alta calidad. Así entrega el proceso moderno componentes industriales repetibles.',
    sections: [
      { h: 'Del modelo a la colada', p: [
        'La cera se inyecta en un molde metálico para formar un modelo idéntico a la pieza final más una pequeña tolerancia de contracción. Los modelos se ensamblan en un bebedero, se sumergen para construir una cáscara cerámica y se desceran en autoclave u horno de quemado rápido.',
        'La cáscara cocida se llena de metal líquido, se enfría y se rompe para liberar la pieza. Cada cáscara produce un juego de piezas, pero el molde de cera se reutiliza miles de veces.'
      ]},
      { h: 'Por qué la eligen los fabricantes', p: [
        'Entrega forma casi neta, excelente acabado superficial, detalle fino y libertad para fundir conductos internos complejos. El utillaje, aunque no es gratis, es mucho más barato que el coste acumulado de mecanizar piezas complejas en volumen.',
        'También admite una enorme gama de aleaciones, de modo que un solo proveedor puede atender a clientes marinos, de automoción, de válvulas, de bombas y de maquinaria alimentaria.'
      ]},
      { h: 'Aplicaciones típicas', p: [
        'Componentes de turbina y bomba, cuerpos de válvula, herrajes marinos, piezas de automoción y maquinaria, accesorios para equipos alimentarios y componentes médicos y deportivos son todos habituales.',
        'El proceso es igual de válido para fabricar un prototipo a partir de un modelo impreso que miles de piezas de producción idénticas.'
      ]},
      { h: 'Calidad e inspección', p: [
        'Las fundiciones serias controlan la calidad en cada etapa —verificación del material entrante, inspección dimensional y, cuando se especifica, líquidos penetrantes, rayos X o verificación por espectrómetro— bajo un sistema de calidad ISO 9001.'
      ]}
    ],
    faq: [
      { q: '¿Es la fundición a la cera perdida lo mismo que la microfusión?', a: 'Sí: son dos nombres para el mismo proceso.' },
      { q: '¿Cuántas piezas produce un molde?', a: 'Cada cáscara cerámica da una colada, pero el molde de inyección de cera se reutiliza para miles de modelos.' }
    ]
  },
  'stainless-steel-casting': {
    excerpt: 'Una mirada práctica a la microfusión de acero inoxidable: grados comunes (304/CF8, 316/CF8M), criterios de selección y dónde encaja cada grado.',
    intro:
      'Las piezas fundidas de acero inoxidable combinan resistencia a la corrosión, resistencia mecánica e higiene, lo que las hace indispensables en aplicaciones marinas, alimentarias, químicas y médicas. Elegir el grado correcto marca la diferencia entre una pieza que dura décadas y otra que falla pronto. Este artículo cubre los equivalentes de fundición de los grados inoxidables comunes y cómo seleccionar entre ellos.',
    sections: [
      { h: 'Grados de fundición frente a forjados', p: [
        'Los grados forjados 304 y 316 tienen equivalentes de fundición —CF8 y CF8M respectivamente— con una química ligeramente ajustada para la colabilidad. CF8M (la forma fundida del 316) añade molibdeno para una resistencia superior a los cloruros y la picadura.',
        'Especificar la designación de fundición (p. ej. CF8M) en lugar de la forjada elimina ambigüedades para la fundición.'
      ]},
      { h: 'Cómo seleccionar un grado', p: [
        'Adapte el grado al entorno: CF8 (304) para resistencia a la corrosión general y contacto alimentario; CF8M (316) para agua de mar, cloruros y químicos agresivos; grados dúplex cuando tanto la resistencia como la resistencia a cloruros son críticas.',
        'Considere temperatura, carga mecánica, soldabilidad y coste. Sobreespecificar malgasta dinero; infraespecificar arriesga corrosión prematura.'
      ]},
      { h: 'Dónde destacan las piezas inoxidables', p: [
        'Los herrajes marinos y los componentes de bomba/válvula se benefician de la resistencia a la corrosión; los equipos alimentarios y médicos, de superficies higiénicas y fáciles de limpiar; el procesado químico, de la inercia química.'
      ]},
      { h: 'Acabado y pasivado', p: [
        'El inoxidable en bruto de colada puede granallarse, esmerilarse, pulirse, electropulirse o pasivarse. El pasivado restaura la capa protectora de óxido de cromo y se recomienda para servicio crítico de corrosión.'
      ]}
    ],
    faq: [
      { q: '¿Cuál es el equivalente de fundición del acero inoxidable 316?', a: 'CF8M: contiene el molibdeno que da al 316 su resistencia a los cloruros.' },
      { q: '¿Las piezas inoxidables necesitan pasivado?', a: 'Para piezas críticas de corrosión, sí; el pasivado restaura la capa de óxido protectora tras el mecanizado.' }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: 'Por qué las piezas fundidas se mecanizan de acabado, cómo planificar el sobreespesor y las referencias, y qué aporta el CNC de 4/5 ejes a un programa de fundición.',
    intro:
      'Las piezas de microfusión alcanzan una forma casi neta, pero los elementos críticos —agujeros, caras de sellado, roscas, referencias de montaje— suelen necesitar mecanizado CNC hasta la tolerancia final. Integrar fundición y mecanizado bajo un mismo techo acorta el plazo y afianza la responsabilidad. Este artículo explica cómo colaboran ambos procesos.',
    sections: [
      { h: '¿Por qué mecanizar una pieza casi neta?', p: [
        'Las tolerancias de colada sirven para la mayoría de superficies, pero los elementos de acoplamiento necesitan mecanizado hasta ajustes de nivel micrométrico. Fundir primero y mecanizar solo los elementos críticos minimiza la eliminación de material, el tiempo de ciclo y el coste.'
      ]},
      { h: 'Diseñar para el mecanizado', p: [
        'Añada sobreespesor de mecanizado localizado (típicamente 0,5–2 mm) solo donde haga falta, defina referencias claras para el amarre y evite cortes interrumpidos cuando sea posible. Indique qué superficies son críticas para que la fundición oriente la alimentación y el sobreespesor en consecuencia.'
      ]},
      { h: 'Qué aporta el CNC de 4 y 5 ejes', p: [
        'El mecanizado multieje alcanza geometrías complejas en una sola fijación, mejorando la precisión al eliminar errores de reamarre. Combinado con fresado CNC, electroerosión por penetración y corte por hilo, cubre desde el prototipo hasta la producción.'
      ]},
      { h: 'Un proveedor, una responsabilidad', p: [
        'Contratar fundición y mecanizado juntos evita el juego de echar culpas que ocurre cuando proveedores separados discuten sobre quién falló en la tolerancia. También comprime la logística y el plazo.'
      ]}
    ],
    faq: [
      { q: '¿Las piezas fundidas deben mecanizarse antes o después del tratamiento térmico?', a: 'Desbaste, trate térmicamente y luego mecanice de acabado: así controla la distorsión y alcanza la tolerancia final.' },
      { q: '¿Cuánto sobreespesor de mecanizado debo dejar?', a: 'Típicamente 0,5–2 mm solo en superficies críticas; más malgasta material y tiempo.' }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: 'Del granallado al electropulido, el recubrimiento galvánico y la pintura: un recorrido por las opciones de acabado para piezas fundidas y cuándo usar cada una.',
    intro:
      'El acabado superficial protege las piezas fundidas, mejora el aspecto y prepara las superficies para el sellado, el montaje o un recubrimiento posterior. El acabado adecuado depende de la aleación, el entorno de servicio y los requisitos estéticos. Esta guía repasa las opciones más comunes.',
    sections: [
      { h: 'Limpieza y desbarbado de entradas', p: [
        'Tras el desmoldeo, las piezas se cortan del árbol y los restos de entrada se esmerilan a ras. El granallado o chorro de arena elimina la cerámica residual y produce una superficie mate uniforme, el punto de partida habitual para cualquier acabado posterior.'
      ]},
      { h: 'Acabados mecánicos', p: [
        'El esmerilado, el vibrado y el pulido van del desbarbado funcional a los acabados espejo. El electropulido va más allá en el inoxidable, alisando a nivel microscópico para la higiene y el comportamiento frente a la corrosión.'
      ]},
      { h: 'Recubrimientos protectores y decorativos', p: [
        'El pasivado (inoxidable), el recubrimiento galvánico (cinc, níquel, cromo), el anodizado (donde proceda), el recubrimiento en polvo y la pintura añaden protección contra la corrosión o aspecto. Elija según el entorno y el coste.'
      ]},
      { h: 'Especificar un acabado', p: [
        'Indique la rugosidad objetivo (Ra), la norma de recubrimiento y cualquier requisito de enmascarado en el plano. Las indicaciones de acabado ambiguas son una fuente común de retrabajo.'
      ]}
    ],
    faq: [
      { q: '¿Cuál es el acabado por defecto de una pieza de microfusión?', a: 'Una superficie mate granallada, típicamente Ra 3,2–6,3 µm, lista para el acabado posterior.' },
      { q: '¿Qué acabado es mejor para piezas marinas?', a: 'Aleaciones resistentes a la corrosión más pasivado o el recubrimiento galvánico/pintura adecuado para la exposición.' }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: 'Recocido, normalizado, temple y revenido, y tratamiento de solución: cómo el tratamiento térmico ajusta la resistencia y la tenacidad de las piezas de acero fundido.',
    intro:
      'El tratamiento térmico transforma las propiedades mecánicas de las piezas de acero fundido —resistencia, dureza, ductilidad y tenacidad— sin cambiar su forma. Seleccionar el ciclo correcto es esencial para cumplir una especificación. Este artículo explica los principales tratamientos y qué consiguen.',
    sections: [
      { h: 'Por qué se tratan térmicamente las piezas fundidas', p: [
        'La microestructura de colada rara vez es óptima. El tratamiento térmico alivia las tensiones de fundición, afina la estructura de grano y desarrolla el equilibrio resistencia-tenacidad que una pieza necesita en servicio.'
      ]},
      { h: 'Ciclos comunes', p: [
        'El recocido ablanda y alivia tensiones; el normalizado afina el grano y mejora la uniformidad; el temple y revenido eleva la resistencia y la dureza conservando la tenacidad; el tratamiento de solución se usa en inoxidables y algunas aleaciones para disolver carburos y maximizar la resistencia a la corrosión.'
      ]},
      { h: 'Secuenciación con el mecanizado', p: [
        'La distorsión se gestiona desbastando, tratando térmicamente y luego mecanizando de acabado. Las piezas de tolerancia crítica pueden necesitar un alivio de tensiones entre operaciones.'
      ]},
      { h: 'Verificación', p: [
        'Los ensayos de dureza, de tracción y el examen de microestructura confirman que el tratamiento cumplió la especificación, documentado en el informe de material/ensayo que se entrega con las piezas.'
      ]}
    ],
    faq: [
      { q: '¿El tratamiento térmico cambia las dimensiones de una pieza fundida?', a: 'Puede causar una leve distorsión, por lo que los elementos críticos se mecanizan de acabado después.' },
      { q: '¿Qué tratamiento maximiza la resistencia a la corrosión del inoxidable?', a: 'El tratamiento de solución disuelve los carburos y restaura la microestructura resistente a la corrosión.' }
    ]
  }
};

export const AR_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: 'كيف يعمل الصب الدقيق، وأي المعادن يناسبها، وما التفاوتات التي يحقّقها، ومتى يتفوّق على الصب الرملي أو الطرق أو التشغيل من الكتلة الصلبة.',
    intro:
      'الصب الدقيق — ويُسمّى أيضاً الصب الدقيق أو صب الشمع المفقود — ينتج قطعاً معدنية قريبة من الشكل النهائي بسطح ممتاز وتفاوتات ضيقة. وهو الخيار الأمثل عندما تكون القطعة معقّدة هندسياً، أو مصنوعة من سبيكة يصعب تشغيلها، أو مطلوبة بدفعات متكرّرة عالية الجودة. يستعرض هذا الدليل العملية، والمواد التي تناسبها، والتفاوتات الممكنة، وكيفية تصميم قطع سهلة الصب.',
    sections: [
      { h: 'ما هو الصب الدقيق؟', p: [
        'يبني الصب الدقيق قشرة خزفية حول نموذج شمعي، ثم يُذاب الشمع ويُصبّ المعدن المنصهر في التجويف الناتج. ولأن النموذج يُستهلك والقشرة بلا خط فصل، تستنسخ العملية التفاصيل الدقيقة والتجاويف الداخلية المعقّدة التي يصعب أو يكلّف تشغيلها.',
        'كلمة "investment" تشير إلى العجينة الخزفية التي تُكسى بها النماذج الشمعية، و"الشمع المفقود" تشير إلى إذابة النموذج وإزالته — وكلا الاسمين يصفان العائلة نفسها من العمليات.'
      ]},
      { h: 'العملية خطوة بخطوة', p: [
        'ينتج قالب ألمنيوم دقيق نماذج شمعية بالحقن. تُجمَّع النماذج على مصبّ مركزي لتشكّل "شجرة"، ما يرفع الإنتاجية لكل عملية صب.',
        'تُغمَّس الشجرة مراراً في العجينة الخزفية وتُرَشّ برمل حراري ثم تُجفَّف، حتى تتكوّن قشرة بسماكة عدة مليمترات. تُحرَق القشرة لإزالة الشمع واكتساب المتانة.',
        'يُصبّ المعدن المنصهر في القشرة الساخنة — بمساعدة الجاذبية أو التفريغ أو الضغط. بعد التجمّد تُكسَر القشرة، وتُقطَع القطع عن الشجرة، وتُجلَخ المصبّات، ثم تُعالَج حرارياً وتُفحَص.'
      ]},
      { h: 'أي المعادن والسبائك تناسبها', p: [
        'يتعامل الصب الدقيق مع مدى واسع جداً من السبائك: الفولاذ المقاوم للصدأ (CF8 وCF8M / 304 و316)، والفولاذ الكربوني ومنخفض السبائكية، والفولاذ المقاوم للحرارة، وسبائك النيكل والكوبالت الفائقة، وفولاذ العُدد، وسبائك النحاس.',
        'هذا الاتساع أحد أسباب شمول العملية لريش التوربينات في الطيران، والزرعات الطبية، والمعدّات البحرية، وأجسام الصمامات الصناعية على حدٍّ سواء.'
      ]},
      { h: 'التفاوتات والتشطيب والحجم', p: [
        'التفاوتات الخطية النموذجية نحو ±0.1 مم لأول 25 مم، ونحو ±0.05 مم لكل 25 مم إضافية، مع خشونة سطح Ra 3.2–6.3 ميكرومتر بحالة الصب. ثم تُشغَّل المعالم الحرجة نهائياً إلى حدود أضيق.',
        'تتراوح أوزان القطع عادةً من بضعة غرامات إلى عشرات الكيلوغرامات. وتُمكن جدران رقيقة حتى نحو 2 مم بالسبيكة ونظام التغذية المناسبين.'
      ]},
      { h: 'متى تختارها على غيرها من العمليات', p: [
        'فضّل الصب الدقيق على الصب الرملي عند الحاجة لتشطيب وتفاصيل أفضل؛ وعلى التشغيل من الكتلة عند تعقّد الهندسة أو ارتفاع هدر المادة؛ وعلى الطرق عندما تكون الأشكال دقيقة التفصيل لا مجرد قوية.',
        'للكميات الكبيرة جداً من الأشكال البسيطة قد يكون الصب تحت الضغط أو الكبس أرخص. وللنماذج الأولية الفردية يمكن للنماذج المطبوعة ثلاثياً أن تغذّي مسار الصب نفسه دون عُدد صلبة.'
      ]},
      { h: 'نصائح تصميمية لقابلية الصب', p: [
        'استخدم سماكة جدار منتظمة، وأنصاف أقطار سخية، وانتقالات تدريجية لتجنّب النقاط الساخنة والمسامية الانكماشية. أضف بدل تشغيل حيث تتطلّب التفاوتات فقط.',
        'شارك رسوماتك أو ملفات STEP مبكراً — فالتعديلات الهندسية الصغيرة في مرحلة التصميم كثيراً ما تزيل مخاطر التكلفة والجودة قبل تصنيع العُدة.'
      ]}
    ],
    faq: [
      { q: 'ما التفاوت الذي يحقّقه الصب الدقيق؟', a: 'نحو ±0.1 مم لأول 25 مم، ويضيق بالتشغيل النهائي عند الحاجة.' },
      { q: 'أيّهما أرخص، الصب أم التشغيل من الكتلة؟', a: 'للأشكال المعقّدة أو السبائك الغالية يتفوّق الصب الدقيق عادةً في استثمار المادة والعمالة؛ أما الأشكال البسيطة فقد تُشغَّل بتكلفة أقل.' }
    ]
  },
  'lost-wax-casting': {
    excerpt: 'شرح صب الشمع المفقود: صناعة النماذج، والتغليف الخزفي، وإزالة الشمع، والصب، والمزايا التي تجعله ركيزة في التصنيع بين الشركات.',
    intro:
      'صب الشمع المفقود فكرة عمرها 5000 عام صُقِلت لتصبح عملية صناعية حديثة. فبتشكيل القطعة من الشمع، وتغليفها بالخزف، وإذابة الشمع، يحصل المصنّعون على تجويف قالب دقيق قابل لإعادة الاستخدام لإنتاج قطع معدنية عالية الجودة. وهكذا تقدّم العملية الحديثة مكوّنات صناعية قابلة للتكرار.',
    sections: [
      { h: 'من النموذج إلى الصب', p: [
        'يُحقَن الشمع في قالب معدني لتشكيل نموذج مطابق للقطعة النهائية مع بدل انكماش صغير. تُجمَّع النماذج على مصبّ، وتُغمَّس لبناء قشرة خزفية، ويُزال شمعها في أوتوكلاف أو فرن حرق سريع.',
        'تُملأ القشرة المحروقة بالمعدن المنصهر، تُبرَّد، ثم تُكسَر لتحرير المصبوب. كل قشرة تنتج مجموعة قطع واحدة، أما قالب الشمع فيُعاد استخدامه آلاف المرات.'
      ]},
      { h: 'لماذا يختارها المصنّعون', p: [
        'تقدّم شكلاً قريباً من النهائي، وتشطيباً ممتازاً، وتفاصيل دقيقة، وحرية صب مجارٍ داخلية معقّدة. والعُدة، وإن لم تكن مجانية، أرخص بكثير من تكلفة التشغيل التراكمية للقطع المعقّدة بالكميات.',
        'كما تدعم مدى هائلاً من السبائك، فيستطيع مورّد واحد خدمة عملاء القطاع البحري والسيارات والصمامات والمضخات وآلات الأغذية.'
      ]},
      { h: 'التطبيقات النموذجية', p: [
        'قطع التوربينات والمضخات، وأجسام الصمامات، والمعدّات البحرية، وقطع السيارات والآلات، وتجهيزات معدّات الأغذية، والمكوّنات الطبية والرياضية، كلها شائعة.',
        'العملية صالحة بالقدر نفسه لصنع نموذج أولي واحد من نموذج مطبوع أو آلاف القطع الإنتاجية المتطابقة.'
      ]},
      { h: 'الجودة والفحص', p: [
        'تضبط المسابك الموثوقة الجودة في كل مرحلة — فحص المواد الواردة، والفحص الأبعادي، و(عند التحديد) فحص السائل النافذ أو الأشعة السينية أو المطياف — ضمن نظام جودة ISO 9001.'
      ]}
    ],
    faq: [
      { q: 'هل صب الشمع المفقود هو نفسه الصب الدقيق؟', a: 'نعم — هما اسمان للعملية ذاتها.' },
      { q: 'كم قطعة ينتج القالب الواحد؟', a: 'كل قشرة خزفية تنتج عملية صب واحدة، أما قالب حقن الشمع فيُعاد استخدامه لآلاف النماذج.' }
    ]
  },
  'stainless-steel-casting': {
    excerpt: 'نظرة عملية على صب الفولاذ المقاوم للصدأ: الدرجات الشائعة (304/CF8 و316/CF8M)، ومعايير الاختيار، وأين تناسب كل درجة.',
    intro:
      'تجمع مسبوكات الفولاذ المقاوم للصدأ بين مقاومة التآكل والمتانة والنظافة، ما يجعلها لا غنى عنها في التطبيقات البحرية والغذائية والكيميائية والطبية. واختيار الدرجة الصحيحة هو الفارق بين قطعة تدوم عقوداً وأخرى تفشل مبكراً. يتناول هذا المقال المكافئات الصبّية للدرجات الشائعة وكيفية الاختيار بينها.',
    sections: [
      { h: 'درجات الصب مقابل درجات التشكيل', p: [
        'للدرجتين المشكّلتين 304 و316 مكافئات صبّية — CF8 وCF8M على التوالي — بكيمياء معدّلة قليلاً لتحسين قابلية الصب. ويضيف CF8M (الصورة الصبّية من 316) الموليبدينوم لمقاومة متفوّقة للكلوريدات والتنقّر.',
        'تحديد التسمية الصبّية (مثل CF8M) بدلاً من المشكّلة يزيل الالتباس لدى المسبك.'
      ]},
      { h: 'كيف تختار درجة', p: [
        'طابِق الدرجة مع البيئة: CF8 (304) لمقاومة التآكل العامة والتلامس الغذائي؛ وCF8M (316) لمياه البحر والكلوريدات والكيماويات العدوانية؛ والدرجات المزدوجة (Duplex) حين تكون المتانة ومقاومة الكلوريدات حرجتين معاً.',
        'راعِ درجة الحرارة والحمل الميكانيكي وقابلية اللحام والتكلفة. فالمبالغة في المواصفات تهدر المال، والتقصير فيها يُخاطر بتآكل مبكر.'
      ]},
      { h: 'أين تتفوّق مسبوكات الفولاذ المقاوم للصدأ', p: [
        'تستفيد المعدّات البحرية وقطع المضخات/الصمامات من مقاومة التآكل؛ وتستفيد معدّات الأغذية والطب من الأسطح الصحية السهلة التنظيف؛ وتعتمد المعالجة الكيميائية على الخمول الكيميائي.'
      ]},
      { h: 'التشطيب والتخميل', p: [
        'يمكن سفع الفولاذ المقاوم للصدأ بحالة الصب أو جلخه أو صقله أو صقله كهربائياً أو تخميله. ويعيد التخميل طبقة أكسيد الكروم الواقية، ويُوصى به للخدمة الحرجة تجاه التآكل.'
      ]}
    ],
    faq: [
      { q: 'ما المكافئ الصبّي للفولاذ المقاوم للصدأ 316؟', a: 'CF8M — يحوي الموليبدينوم الذي يمنح 316 مقاومته للكلوريدات.' },
      { q: 'هل تحتاج مسبوكات الفولاذ المقاوم للصدأ إلى تخميل؟', a: 'للقطع الحرجة تجاه التآكل، نعم؛ إذ يعيد التخميل طبقة الأكسيد الواقية بعد التشغيل.' }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: 'لماذا تُشغَّل المسبوكات نهائياً، وكيف تخطّط لبدل التشغيل والمراجع، وما الذي يضيفه التشغيل CNC رباعي/خماسي المحاور لبرنامج الصب.',
    intro:
      'تبلغ مسبوكات الصب الدقيق شكلاً قريباً من النهائي، لكن المعالم الحرجة — الثقوب وأسطح الإحكام والأسنان ومراجع التثبيت — تحتاج عادةً إلى تشغيل CNC حتى التفاوت النهائي. ودمج الصب والتشغيل تحت سقف واحد يختصر المهلة ويشدّد المسؤولية. يشرح هذا المقال كيف تتكامل العمليتان.',
    sections: [
      { h: 'لماذا نشغّل مصبوباً قريباً من النهائي؟', p: [
        'تفاوتات الصب تكفي معظم الأسطح، لكن معالم التزاوج تحتاج تشغيلاً حتى تطابقات بدقة الميكرومتر. فالصب أولاً وتشغيل المعالم الحرجة فقط يقلّل إزالة المادة وزمن الدورة والتكلفة.'
      ]},
      { h: 'التصميم من أجل التشغيل', p: [
        'أضف بدل تشغيل موضعياً (عادةً 0.5–2 مم) حيث يلزم فقط، وحدّد مراجع واضحة للتثبيت، وتجنّب القطع المتقطّع قدر الإمكان. وبيّن أي الأسطح حرجة ليوجّه المسبك التغذية والبدل تبعاً لذلك.'
      ]},
      { h: 'ما يضيفه التشغيل رباعي وخماسي المحاور', p: [
        'يبلغ التشغيل متعدّد المحاور الهندسة المعقّدة في تثبيت واحد، فيرفع الدقة بإلغاء أخطاء إعادة التثبيت. ومع فرز CNC والتفريغ الكهربائي بالقطب والقطع بالسلك، يغطّي كل شيء من النموذج إلى الإنتاج.'
      ]},
      { h: 'مورّد واحد ومسؤولية واحدة', p: [
        'يتجنّب شراء الصب والتشغيل معاً تبادل الاتهامات الذي يحدث حين يختلف مورّدان منفصلان حول خطأ تفاوت مَن. كما يضغط اللوجستيات والمهلة.'
      ]}
    ],
    faq: [
      { q: 'هل تُشغَّل المسبوكات قبل المعالجة الحرارية أم بعدها؟', a: 'تشغيل خشن، ثم معالجة حرارية، ثم تشغيل نهائي — هكذا يُضبط الالتواء ويُبلَغ التفاوت النهائي.' },
      { q: 'كم بدل تشغيل ينبغي أن أترك؟', a: 'عادةً 0.5–2 مم على الأسطح الحرجة فقط؛ والزيادة تهدر المادة والوقت.' }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: 'من السفع إلى الصقل الكهربائي والطلاء المعدني والطلاء — جولة في خيارات تشطيب القطع المصبوبة ومتى تُستخدم كل منها.',
    intro:
      'يحمي التشطيب السطحي القطع المصبوبة، ويحسّن مظهرها، ويهيّئ الأسطح للإحكام أو التجميع أو طلاء لاحق. ويعتمد التشطيب المناسب على السبيكة وبيئة الخدمة والمتطلّبات الجمالية. يستعرض هذا الدليل أكثر الخيارات شيوعاً.',
    sections: [
      { h: 'التنظيف وإزالة المصبّات', p: [
        'بعد فكّ القالب، تُقطَع القطع عن الشجرة وتُجلَخ بقايا المصبّات حتى المستوى. ويزيل السفع بالخرز أو الرمل بقايا الخزف وينتج سطحاً مطفياً منتظماً — نقطة البدء المعتادة لأي تشطيب لاحق.'
      ]},
      { h: 'التشطيبات الميكانيكية', p: [
        'يتدرّج الجلخ والتنعيم بالبراميل والصقل من إزالة الحواف الوظيفية إلى تشطيبات المرآة. ويذهب الصقل الكهربائي أبعد على الفولاذ المقاوم للصدأ، فيملّس على المستوى المجهري لأجل النظافة وأداء مقاومة التآكل.'
      ]},
      { h: 'الطلاءات الواقية والتزيينية', p: [
        'يضيف التخميل (للفولاذ المقاوم للصدأ)، والطلاء المعدني (زنك ونيكل وكروم)، والأنودة (حيثما أمكن)، والطلاء بالمسحوق، والدهان حمايةً من التآكل أو مظهراً. اختر بحسب البيئة والتكلفة.'
      ]},
      { h: 'تحديد التشطيب', p: [
        'بيّن الخشونة المستهدفة (Ra)، ومعيار الطلاء، وأي متطلّبات تقنيع على الرسم. فإشارات التشطيب الغامضة مصدر شائع لإعادة العمل.'
      ]}
    ],
    faq: [
      { q: 'ما التشطيب الافتراضي لمصبوب الصب الدقيق؟', a: 'سطح مطفي مسفوع، عادةً Ra 3.2–6.3 ميكرومتر، جاهز للتشطيب اللاحق.' },
      { q: 'أي تشطيب أفضل للقطع البحرية؟', a: 'سبائك مقاومة للتآكل مع تخميل أو طلاء معدني/طلاء مناسب للتعرّض.' }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: 'التلدين والتسوية والتقسية والمراجعة والمعالجة بالإذابة — كيف تضبط المعالجة الحرارية متانة وصلابة مسبوكات الفولاذ.',
    intro:
      'تحوّل المعالجة الحرارية الخواص الميكانيكية لمسبوكات الفولاذ — المتانة والصلادة والمطيلية والصلابة — دون تغيير شكلها. واختيار الدورة الصحيحة أساسي لتحقيق المواصفة. يشرح هذا المقال أهم المعالجات وما تحقّقه.',
    sections: [
      { h: 'لماذا تُعالَج المسبوكات حرارياً', p: [
        'نادراً ما يكون بناء بنية الصب المجهرية مثالياً. وتُخفّف المعالجة الحرارية إجهادات الصب، وتُنعّم بنية الحبيبات، وتطوّر توازن المتانة والصلابة الذي تحتاجه القطعة في الخدمة.'
      ]},
      { h: 'الدورات الشائعة', p: [
        'يُليّن التلدين ويُخفّف الإجهاد؛ وتُنعّم التسوية الحبيبات وتحسّن الانتظام؛ وترفع التقسية والمراجعة المتانة والصلادة مع الاحتفاظ بالصلابة؛ وتُستخدم المعالجة بالإذابة للفولاذ المقاوم للصدأ وبعض السبائك لإذابة الكربيدات وتعظيم مقاومة التآكل.'
      ]},
      { h: 'الترتيب مع التشغيل', p: [
        'يُدار الالتواء بالتشغيل الخشن ثم المعالجة الحرارية ثم التشغيل النهائي. وقد تحتاج القطع ذات التفاوت الحرج إلى تخفيف إجهاد بين العمليات.'
      ]},
      { h: 'التحقّق', p: [
        'تؤكّد اختبارات الصلادة والشدّ وفحص البنية المجهرية أن المعالجة حقّقت المواصفة — موثّقة في تقرير المادة/الاختبار المرفق بالقطع.'
      ]}
    ],
    faq: [
      { q: 'هل تغيّر المعالجة الحرارية أبعاد المصبوب؟', a: 'قد تسبّب التواءً طفيفاً، ولذلك تُشغَّل المعالم الحرجة نهائياً بعدها.' },
      { q: 'أي معالجة تعظّم مقاومة الفولاذ المقاوم للصدأ للتآكل؟', a: 'المعالجة بالإذابة تذيب الكربيدات وتعيد البنية المجهرية المقاومة للتآكل.' }
    ]
  }
};
