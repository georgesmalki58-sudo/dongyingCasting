// French / Italian / Russian / Portuguese article bodies. English lives in blog.ts
// (POSTS), Simplified Chinese in blog.ts (ZH_CONTENT), DE/ES/AR in blog-content.ts.
// Keyed by slug. Backtick strings so apostrophes/quotes need no escaping.
import type { LocalizedContent } from './blog';

export const FR_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: `Comment fonctionne le moulage de précision, les métaux qui lui conviennent, les tolérances qu'il tient, et quand il surpasse le moulage au sable, le forgeage ou l'usinage dans la masse.`,
    intro: `Le moulage de précision — aussi appelé moulage à la cire perdue — produit des pièces métalliques de forme quasi finie avec une excellente qualité de surface et des tolérances serrées. C'est le procédé de choix lorsqu'un composant est géométriquement complexe, fait d'un alliage difficile à usiner, ou requis en séries répétables et de haute qualité. Ce guide parcourt le procédé, les matériaux qui lui conviennent, les tolérances atteignables et comment concevoir des pièces qui se moulent bien.`,
    sections: [
      { h: `Qu'est-ce que le moulage de précision ?`, p: [
        `Le moulage de précision construit une carapace céramique autour d'un modèle en cire, fait fondre la cire, puis coule le métal en fusion dans la cavité obtenue. Comme le modèle est consommé et la carapace sans joint, le procédé reproduit les détails fins et les géométries internes complexes qu'il serait impossible ou coûteux d'usiner.`,
        `Le terme « investment » (moulage de précision) renvoie à la barbotine céramique « investie » autour du modèle en cire. « Cire perdue » renvoie au modèle fondu. Les deux noms décrivent la même famille de procédés.`
      ]},
      { h: `Le procédé, étape par étape`, p: [
        `Un moule de précision en aluminium produit les modèles en cire par injection. Les modèles sont assemblés sur une descente de coulée centrale en cire pour former une « grappe », maximisant le rendement par coulée.`,
        `La grappe est trempée à plusieurs reprises dans la barbotine céramique et sablée de sable réfractaire, puis séchée, jusqu'à former une carapace de plusieurs millimètres d'épaisseur. La carapace est cuite pour éliminer la cire et gagner en résistance.`,
        `Le métal en fusion est coulé dans la carapace chaude — par gravité, sous vide ou sous pression. Après solidification, la carapace est décochée, les pièces sont séparées de la grappe, et les attaques sont meulées, traitées thermiquement et contrôlées.`
      ]},
      { h: `Quels métaux et alliages conviennent`, p: [
        `Le moulage de précision traite une très large gamme d'alliages : aciers inoxydables (CF8, CF8M / 304, 316), aciers au carbone et faiblement alliés, aciers réfractaires, superalliages à base de nickel et de cobalt, aciers à outils et alliages de cuivre.`,
        `Cette étendue explique pourquoi le procédé couvre aussi bien les aubes de turbine aéronautiques, les implants médicaux, les accessoires marins que les corps de vannes industriels.`
      ]},
      { h: `Tolérances, finition et dimensions`, p: [
        `Les tolérances linéaires typiques sont d'environ ±0,1 mm pour les premiers 25 mm et d'environ ±0,05 mm par tranche de 25 mm supplémentaire, avec une finition de surface de Ra 3,2–6,3 µm brut de fonderie. Les caractéristiques critiques sont ensuite usinées à des limites plus serrées.`,
        `Les poids de pièces vont couramment de quelques grammes à des dizaines de kilogrammes. Des parois minces jusqu'à ~2 mm sont réalisables avec le bon alliage et le bon système de coulée.`
      ]},
      { h: `Quand le préférer aux autres procédés`, p: [
        `Préférez le moulage de précision au moulage au sable quand il faut une meilleure finition et plus de détail ; à l'usinage dans la masse quand la géométrie est complexe ou le gaspillage de matière élevé ; et au forgeage quand les formes sont complexes plutôt que simplement résistantes.`,
        `Pour de très gros volumes de formes simples, le moulage sous pression ou l'emboutissage peuvent être moins chers. Pour des prototypes unitaires, des modèles imprimés en 3D peuvent alimenter la même voie de moulage sans outillage rigide.`
      ]},
      { h: `Conseils de conception pour la coulabilité`, p: [
        `Utilisez une épaisseur de paroi uniforme, des rayons généreux et des transitions progressives pour éviter les points chauds et la porosité de retrait. N'ajoutez de la surépaisseur d'usinage que là où les tolérances l'exigent.`,
        `Partagez vos plans ou fichiers STEP tôt — de petits changements de géométrie au stade de la conception éliminent souvent le coût et le risque qualité avant la fabrication de l'outillage.`
      ]}
    ],
    faq: [
      { q: `Quelle tolérance le moulage de précision peut-il tenir ?`, a: `Environ ±0,1 mm pour les premiers 25 mm, resserrée par usinage de finition si nécessaire.` },
      { q: `Lequel est le moins cher, le moulage ou l'usinage dans la masse ?`, a: `Pour les formes complexes ou les alliages coûteux, le moulage de précision l'emporte généralement sur le rendement matière et la main-d'œuvre ; les formes simples peuvent être moins chères à usiner.` }
    ]
  },
  'lost-wax-casting': {
    excerpt: `Le moulage à la cire perdue expliqué : fabrication des modèles, carapace céramique, décirage, coulée, et les avantages qui en font un pilier de la fabrication B2B.`,
    intro: `Le moulage à la cire perdue est une idée vieille de 5 000 ans, affinée en un procédé industriel moderne. En formant une pièce en cire, en l'enrobant de céramique et en faisant fondre la cire, les fabricants obtiennent une cavité de moule précise et reproductible pour des pièces métalliques de haute qualité. Voici comment le procédé moderne livre des composants industriels répétables.`,
    sections: [
      { h: `Du modèle à la coulée`, p: [
        `La cire est injectée dans un moule métallique pour former un modèle identique à la pièce finale, plus une légère surcote de retrait. Les modèles sont assemblés sur une descente de coulée, trempés pour construire une carapace céramique, et décirés en autoclave ou au four à cuisson rapide.`,
        `La carapace cuite est remplie de métal en fusion, refroidie, puis cassée pour libérer la pièce moulée. Chaque carapace produit un jeu de pièces, mais le moule à cire est réutilisé des milliers de fois.`
      ]},
      { h: `Pourquoi les fabricants le choisissent`, p: [
        `Il offre une forme quasi finie, une excellente finition de surface, des détails fins et la liberté de couler des passages internes complexes. L'outillage, bien que non gratuit, est bien moins cher que le coût d'usinage cumulé de pièces complexes en série.`,
        `Il prend aussi en charge une énorme gamme d'alliages, de sorte qu'un seul fournisseur peut servir les clients du naval, de l'automobile, de la robinetterie, des pompes et des machines agroalimentaires.`
      ]},
      { h: `Applications typiques`, p: [
        `Composants de turbine et de pompe, corps de vannes, accastillage marin, pièces automobiles et de machines, raccords d'équipements agroalimentaires, et composants médicaux et de sport sont tous courants.`,
        `Le procédé est aussi à l'aise pour réaliser un prototype unique à partir d'un modèle imprimé que des milliers de pièces de production identiques.`
      ]},
      { h: `Qualité et contrôle`, p: [
        `Les fonderies réputées maîtrisent la qualité à chaque étape — contrôle des matières entrantes, contrôle dimensionnel et (si spécifié) vérification par ressuage, radiographie ou spectromètre — sous un système qualité ISO 9001.`
      ]}
    ],
    faq: [
      { q: `Le moulage à la cire perdue est-il identique au moulage de précision ?`, a: `Oui — ce sont deux noms pour le même procédé.` },
      { q: `Combien de pièces un moule peut-il produire ?`, a: `Chaque carapace céramique sert à une coulée, mais le moule d'injection de cire est réutilisé pour des milliers de modèles.` }
    ]
  },
  'stainless-steel-casting': {
    excerpt: `Un regard pratique sur le moulage de précision d'acier inoxydable : nuances courantes (304/CF8, 316/CF8M), critères de sélection, et où chaque nuance convient.`,
    intro: `Les pièces moulées en acier inoxydable combinent résistance à la corrosion, solidité et hygiène, ce qui les rend indispensables dans les applications marines, agroalimentaires, chimiques et médicales. Choisir la bonne nuance fait la différence entre une pièce qui dure des décennies et une qui défaille tôt. Cet article couvre les équivalents moulés des nuances inox courantes et comment choisir entre elles.`,
    sections: [
      { h: `Nuances moulées vs nuances corroyées`, p: [
        `Les 304 et 316 corroyés ont des équivalents moulés — respectivement CF8 et CF8M — avec une chimie légèrement ajustée pour la coulabilité. Le CF8M (forme moulée du 316) ajoute du molybdène pour une résistance supérieure aux chlorures et à la piqûre.`,
        `Spécifier la désignation moulée (par ex. CF8M) plutôt que la corroyée lève toute ambiguïté pour la fonderie.`
      ]},
      { h: `Comment choisir une nuance`, p: [
        `Adaptez la nuance à l'environnement : CF8 (304) pour une résistance générale à la corrosion et le contact alimentaire ; CF8M (316) pour l'eau de mer, les chlorures et les produits chimiques agressifs ; les nuances duplex là où résistance mécanique et résistance aux chlorures sont toutes deux critiques.`,
        `Tenez compte de la température, de la charge mécanique, de la soudabilité et du coût. Surspécifier gaspille de l'argent ; sous-spécifier risque une corrosion prématurée.`
      ]},
      { h: `Où les pièces inox excellent`, p: [
        `L'accastillage marin et les composants de pompes/vannes profitent de la résistance à la corrosion ; les équipements agroalimentaires et médicaux profitent de surfaces hygiéniques et faciles à nettoyer ; la transformation chimique repose sur l'inertie chimique.`
      ]},
      { h: `Finition et passivation`, p: [
        `L'inox brut de fonderie peut être grenaillé, meulé, poli, électropoli ou passivé. La passivation restaure la couche protectrice d'oxyde de chrome et est recommandée pour les services critiques en corrosion.`
      ]}
    ],
    faq: [
      { q: `Quel est l'équivalent moulé de l'inox 316 ?`, a: `Le CF8M — il possède la teneur en molybdène qui donne au 316 sa résistance aux chlorures.` },
      { q: `Les pièces inox moulées nécessitent-elles une passivation ?`, a: `Pour les pièces critiques en corrosion, oui ; la passivation restaure la couche d'oxyde protectrice après usinage.` }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: `Pourquoi les pièces moulées sont usinées en finition, comment planifier la surépaisseur d'usinage et les références, et ce que l'usinage CNC 4/5 axes apporte à un programme de moulage.`,
    intro: `Les pièces de moulage de précision atteignent une forme quasi finie, mais les caractéristiques critiques — alésages, portées d'étanchéité, filetages, références de montage — nécessitent généralement un usinage CNC jusqu'à la tolérance finale. Intégrer moulage et usinage sous un même toit raccourcit les délais et resserre la responsabilité. Cet article explique comment les deux procédés fonctionnent ensemble.`,
    sections: [
      { h: `Pourquoi usiner une pièce moulée quasi finie ?`, p: [
        `Les tolérances brutes de fonderie conviennent à la plupart des surfaces, mais les caractéristiques d'accouplement nécessitent un usinage à des ajustements au micron. Mouler d'abord et n'usiner que les caractéristiques critiques minimise l'enlèvement de matière, le temps de cycle et le coût.`
      ]},
      { h: `Concevoir pour l'usinage`, p: [
        `Ajoutez une surépaisseur d'usinage localisée (généralement 0,5–2 mm) seulement là où c'est nécessaire, définissez des références claires pour le bridage, et évitez les coupes interrompues quand c'est possible. Indiquez quelles surfaces sont critiques pour que la fonderie oriente le système de coulée et la surépaisseur en conséquence.`
      ]},
      { h: `Ce qu'apporte l'usinage CNC 4 et 5 axes`, p: [
        `L'usinage multi-axes atteint des géométries complexes en un seul montage, améliorant la précision en éliminant les erreurs de rebridage. Combiné au fraisage CNC, à l'électroérosion à miroir et à la découpe par fil, il couvre tout, du prototype à la production.`
      ]},
      { h: `Un seul fournisseur, une seule responsabilité`, p: [
        `Confier le moulage et l'usinage ensemble évite les renvois de responsabilité qui surviennent quand des fournisseurs séparés se disputent sur la tolérance fautive. Cela comprime aussi la logistique et les délais.`
      ]}
    ],
    faq: [
      { q: `Faut-il usiner les pièces moulées avant ou après le traitement thermique ?`, a: `Ébauchez, traitez thermiquement, puis usinez en finition — cela maîtrise la déformation tout en atteignant la tolérance finale.` },
      { q: `Quelle surépaisseur d'usinage dois-je laisser ?`, a: `Généralement 0,5–2 mm sur les seules surfaces critiques ; davantage gaspille matière et temps.` }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: `Du grenaillage à l'électropolissage, en passant par le placage et le revêtement — un tour d'horizon des options de finition pour pièces métalliques moulées et quand utiliser chacune.`,
    intro: `La finition de surface protège les pièces moulées, améliore l'aspect et prépare les surfaces à l'étanchéité, à l'assemblage ou à un revêtement ultérieur. La bonne finition dépend de l'alliage, de l'environnement de service et des exigences esthétiques. Ce guide passe en revue les options les plus courantes.`,
    sections: [
      { h: `Nettoyage et décochage des attaques`, p: [
        `Après décochage, les pièces sont séparées de la grappe et les talons d'attaque sont meulés à ras. Le grenaillage ou le sablage retire la céramique résiduelle et produit une surface mate uniforme — le point de départ habituel de toute finition ultérieure.`
      ]},
      { h: `Finitions mécaniques`, p: [
        `Meulage, tonnelage et polissage vont de l'ébavurage fonctionnel aux finitions miroir. L'électropolissage va plus loin sur l'inox, lissant au niveau microscopique pour l'hygiène et la performance anticorrosion.`
      ]},
      { h: `Revêtements protecteurs et décoratifs`, p: [
        `Passivation (inox), placage (zinc, nickel, chrome), anodisation (le cas échéant), revêtement poudre et peinture ajoutent protection anticorrosion ou aspect. Choisissez selon l'environnement et le coût.`
      ]},
      { h: `Spécifier une finition`, p: [
        `Indiquez la rugosité cible (Ra), la norme de revêtement et toute exigence de masquage sur le plan. Des indications de finition ambiguës sont une source fréquente de reprise.`
      ]}
    ],
    faq: [
      { q: `Quelle est la finition par défaut d'une pièce de moulage de précision ?`, a: `Une surface mate grenaillée, typiquement Ra 3,2–6,3 µm, prête pour une finition ultérieure.` },
      { q: `Quelle finition convient le mieux aux pièces marines ?`, a: `Des alliages résistants à la corrosion plus une passivation ou un placage/revêtement adapté à l'exposition.` }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: `Recuit, normalisation, trempe-revenu et mise en solution — comment le traitement thermique ajuste la résistance et la ténacité des pièces moulées en acier.`,
    intro: `Le traitement thermique transforme les propriétés mécaniques des pièces moulées en acier — résistance, dureté, ductilité et ténacité — sans changer leur forme. Choisir le bon cycle est essentiel pour satisfaire une spécification. Cet article explique les principaux traitements et ce qu'ils accomplissent.`,
    sections: [
      { h: `Pourquoi les pièces moulées sont traitées thermiquement`, p: [
        `La microstructure brute de fonderie est rarement optimale. Le traitement thermique relâche les contraintes de moulage, affine la structure granulaire et développe l'équilibre résistance-ténacité dont une pièce a besoin en service.`
      ]},
      { h: `Cycles courants`, p: [
        `Le recuit adoucit et relâche les contraintes ; la normalisation affine le grain et améliore l'uniformité ; la trempe-revenu augmente résistance et dureté tout en conservant la ténacité ; la mise en solution est utilisée sur l'inox et certains alliages pour dissoudre les carbures et maximiser la résistance à la corrosion.`
      ]},
      { h: `Enchaînement avec l'usinage`, p: [
        `La déformation est maîtrisée en ébauchant, traitant thermiquement, puis usinant en finition. Les pièces à tolérance critique peuvent nécessiter un détensionnement entre les opérations.`
      ]},
      { h: `Vérification`, p: [
        `Essai de dureté, essai de traction et examen de la microstructure confirment que le traitement a satisfait la spécification — documenté dans le rapport matière/essais fourni avec les pièces.`
      ]}
    ],
    faq: [
      { q: `Le traitement thermique modifie-t-il les dimensions d'une pièce moulée ?`, a: `Il peut causer une légère déformation, c'est pourquoi les caractéristiques critiques sont usinées en finition ensuite.` },
      { q: `Quel traitement maximise la résistance à la corrosion de l'inox ?`, a: `La mise en solution dissout les carbures et restaure la microstructure résistante à la corrosion.` }
    ]
  }
};

export const IT_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: `Come funziona la microfusione, i metalli adatti, le tolleranze che mantiene e quando supera la fusione in sabbia, la forgiatura o la lavorazione dal pieno.`,
    intro: `La microfusione — chiamata anche fusione di precisione o fusione a cera persa — produce pezzi metallici near-net-shape con eccellente finitura superficiale e tolleranze strette. È il processo d'elezione quando un componente è geometricamente complesso, realizzato in una lega difficile da lavorare, o richiesto in lotti ripetibili di alta qualità. Questa guida illustra il processo, i materiali adatti, le tolleranze raggiungibili e come progettare pezzi che si fondono bene.`,
    sections: [
      { h: `Che cos'è la microfusione?`, p: [
        `La microfusione costruisce un guscio ceramico attorno a un modello in cera, fa fondere la cera e cola il metallo fuso nella cavità risultante. Poiché il modello viene consumato e il guscio è senza giunzioni, il processo riproduce dettagli fini e geometrie interne complesse che sarebbe impossibile o costoso lavorare.`,
        `Il termine inglese « investment » si riferisce alla barbottina ceramica « investita » attorno al modello in cera. « Cera persa » si riferisce al modello fuso. Entrambi i nomi descrivono la stessa famiglia di processi.`
      ]},
      { h: `Il processo, passo per passo`, p: [
        `Uno stampo di precisione in alluminio produce i modelli in cera per iniezione. I modelli vengono assemblati su un canale di colata centrale in cera per formare un « grappolo », massimizzando la resa per colata.`,
        `Il grappolo viene immerso ripetutamente nella barbottina ceramica e cosparso di sabbia refrattaria, poi essiccato, fino a formare un guscio spesso diversi millimetri. Il guscio viene cotto per rimuovere la cera e acquisire resistenza.`,
        `Il metallo fuso viene colato nel guscio caldo — assistito per gravità, sottovuoto o a pressione. Dopo la solidificazione il guscio viene distaccato, i pezzi vengono tagliati dal grappolo e gli attacchi vengono molati, trattati termicamente e ispezionati.`
      ]},
      { h: `Quali metalli e leghe sono adatti`, p: [
        `La microfusione tratta una gamma di leghe molto ampia: acciai inossidabili (CF8, CF8M / 304, 316), acciai al carbonio e bassolegati, acciai resistenti al calore, superleghe a base di nichel e cobalto, acciai per utensili e leghe di rame.`,
        `Questa ampiezza spiega perché il processo copre indifferentemente palette di turbina aeronautiche, impianti medicali, accessori navali e corpi valvola industriali.`
      ]},
      { h: `Tolleranze, finitura e dimensioni`, p: [
        `Le tolleranze lineari tipiche sono circa ±0,1 mm per i primi 25 mm e circa ±0,05 mm per ogni 25 mm aggiuntivi, con finitura superficiale Ra 3,2–6,3 µm grezza di fusione. Le caratteristiche critiche vengono poi finite a limiti più stretti.`,
        `I pesi dei pezzi vanno comunemente da pochi grammi a decine di chilogrammi. Pareti sottili fino a ~2 mm sono raggiungibili con la lega e il sistema di colata giusti.`
      ]},
      { h: `Quando preferirla ad altri processi`, p: [
        `Preferite la microfusione alla fusione in sabbia quando servono finitura e dettaglio migliori; alla lavorazione dal pieno quando la geometria è complessa o lo scarto di materiale è elevato; e alla forgiatura quando le forme sono intricate anziché semplicemente resistenti.`,
        `Per volumi molto elevati di forme semplici, la pressofusione o lo stampaggio possono essere più economici. Per prototipi singoli, modelli stampati in 3D possono alimentare la stessa via di fusione senza attrezzatura rigida.`
      ]},
      { h: `Consigli di progettazione per la fondibilità`, p: [
        `Usate spessore di parete uniforme, raggi generosi e transizioni graduali per evitare punti caldi e porosità da ritiro. Aggiungete sovrametallo di lavorazione solo dove le tolleranze lo richiedono.`,
        `Condividete presto i vostri disegni o file STEP — piccole modifiche geometriche in fase di progettazione eliminano spesso costi e rischi qualitativi prima di realizzare l'attrezzatura.`
      ]}
    ],
    faq: [
      { q: `Quale tolleranza può mantenere la microfusione?`, a: `Circa ±0,1 mm per i primi 25 mm, resa più stretta con la lavorazione di finitura dove richiesto.` },
      { q: `Cosa costa meno, la fusione o la lavorazione dal pieno?`, a: `Per forme complesse o leghe costose, la microfusione di solito vince su resa materiale e manodopera; le forme semplici possono costare meno da lavorare.` }
    ]
  },
  'lost-wax-casting': {
    excerpt: `La fusione a cera persa spiegata: realizzazione dei modelli, guscio ceramico, deceratura, colata e i vantaggi che ne fanno un pilastro della produzione B2B.`,
    intro: `La fusione a cera persa è un'idea vecchia di 5.000 anni, perfezionata in un processo industriale moderno. Formando un pezzo in cera, rivestendolo di ceramica e facendo fondere la cera, i produttori ottengono una cavità di stampo precisa e ripetibile per pezzi metallici di alta qualità. Ecco come il processo moderno fornisce componenti industriali ripetibili.`,
    sections: [
      { h: `Dal modello alla colata`, p: [
        `La cera viene iniettata in uno stampo metallico per formare un modello identico al pezzo finale più un piccolo sovrametallo di ritiro. I modelli vengono assemblati su un canale di colata, immersi per costruire un guscio ceramico e decerati in autoclave o in forno a cottura rapida.`,
        `Il guscio cotto viene riempito di metallo fuso, raffreddato e rotto per liberare il getto. Ogni guscio produce un set di pezzi, ma lo stampo per cera viene riutilizzato migliaia di volte.`
      ]},
      { h: `Perché i produttori la scelgono`, p: [
        `Offre forma near-net, eccellente finitura superficiale, dettagli fini e libertà di fondere passaggi interni complessi. L'attrezzatura, pur non essendo gratuita, è molto più economica del costo cumulativo di lavorazione di pezzi complessi in volume.`,
        `Supporta inoltre un'enorme gamma di leghe, così un unico fornitore può servire clienti navali, automotive, della rubinetteria, delle pompe e delle macchine alimentari.`
      ]},
      { h: `Applicazioni tipiche`, p: [
        `Componenti di turbine e pompe, corpi valvola, ferramenta navale, pezzi automotive e di macchine, raccordi per attrezzature alimentari e componenti medicali e sportivi sono tutti comuni.`,
        `Il processo è altrettanto a suo agio nel realizzare un singolo prototipo da un modello stampato o migliaia di pezzi di produzione identici.`
      ]},
      { h: `Qualità e controllo`, p: [
        `Le fonderie affidabili controllano la qualità in ogni fase — controlli dei materiali in ingresso, controllo dimensionale e (se specificato) verifica con liquidi penetranti, raggi X o spettrometro — nell'ambito di un sistema qualità ISO 9001.`
      ]}
    ],
    faq: [
      { q: `La fusione a cera persa è la stessa cosa della microfusione?`, a: `Sì — sono due nomi per lo stesso processo.` },
      { q: `Quanti pezzi può produrre uno stampo?`, a: `Ogni guscio ceramico serve per una colata, ma lo stampo di iniezione della cera viene riutilizzato per migliaia di modelli.` }
    ]
  },
  'stainless-steel-casting': {
    excerpt: `Uno sguardo pratico alla microfusione di acciaio inossidabile: gradi comuni (304/CF8, 316/CF8M), criteri di scelta e dove si colloca ciascun grado.`,
    intro: `I getti in acciaio inossidabile combinano resistenza alla corrosione, robustezza e igiene, rendendoli indispensabili nelle applicazioni navali, alimentari, chimiche e medicali. Scegliere il grado giusto fa la differenza tra un pezzo che dura decenni e uno che cede presto. Questo articolo tratta gli equivalenti fusi dei gradi inox comuni e come scegliere tra essi.`,
    sections: [
      { h: `Gradi fusi vs gradi deformati`, p: [
        `I 304 e 316 deformati hanno equivalenti fusi — rispettivamente CF8 e CF8M — con chimica leggermente modificata per la fondibilità. Il CF8M (forma fusa del 316) aggiunge molibdeno per una resistenza superiore a cloruri e vaiolatura.`,
        `Specificare la designazione fusa (es. CF8M) anziché quella deformata elimina ogni ambiguità per la fonderia.`
      ]},
      { h: `Come scegliere un grado`, p: [
        `Adattate il grado all'ambiente: CF8 (304) per resistenza generale alla corrosione e contatto alimentare; CF8M (316) per acqua di mare, cloruri e sostanze chimiche aggressive; i gradi duplex dove sia la resistenza meccanica sia quella ai cloruri sono critiche.`,
        `Considerate temperatura, carico meccanico, saldabilità e costo. Sovradimensionare spreca denaro; sottodimensionare rischia una corrosione prematura.`
      ]},
      { h: `Dove eccellono i getti inox`, p: [
        `La ferramenta navale e i componenti di pompe/valvole beneficiano della resistenza alla corrosione; le attrezzature alimentari e medicali beneficiano di superfici igieniche e facili da pulire; i processi chimici si affidano all'inerzia chimica.`
      ]},
      { h: `Finitura e passivazione`, p: [
        `L'inox grezzo di fusione può essere granigliato, molato, lucidato, elettrolucidato o passivato. La passivazione ripristina lo strato protettivo di ossido di cromo ed è consigliata per servizi critici alla corrosione.`
      ]}
    ],
    faq: [
      { q: `Qual è l'equivalente fuso dell'inox 316?`, a: `Il CF8M — ha il contenuto di molibdeno che conferisce al 316 la sua resistenza ai cloruri.` },
      { q: `I getti inox necessitano di passivazione?`, a: `Per i pezzi critici alla corrosione, sì; la passivazione ripristina lo strato di ossido protettivo dopo la lavorazione.` }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: `Perché i getti vengono finiti con lavorazione meccanica, come pianificare sovrametallo e riferimenti, e cosa aggiunge la lavorazione CNC 4/5 assi a un programma di fusione.`,
    intro: `I getti di microfusione raggiungono una forma near-net, ma le caratteristiche critiche — fori, superfici di tenuta, filettature, riferimenti di montaggio — di solito richiedono lavorazione CNC fino alla tolleranza finale. Integrare fusione e lavorazione sotto un unico tetto accorcia i tempi e rafforza la responsabilità. Questo articolo spiega come i due processi lavorano insieme.`,
    sections: [
      { h: `Perché lavorare un getto near-net?`, p: [
        `Le tolleranze grezze di fusione vanno bene per la maggior parte delle superfici, ma le caratteristiche di accoppiamento richiedono lavorazione per accoppiamenti al micron. Fondere prima e lavorare solo le caratteristiche critiche minimizza asportazione di materiale, tempo ciclo e costo.`
      ]},
      { h: `Progettare per la lavorazione`, p: [
        `Aggiungete sovrametallo di lavorazione localizzato (tipicamente 0,5–2 mm) solo dove necessario, definite riferimenti chiari per il bloccaggio ed evitate tagli interrotti quando possibile. Indicate quali superfici sono critiche così la fonderia può orientare colata e sovrametallo di conseguenza.`
      ]},
      { h: `Cosa aggiunge la CNC a 4 e 5 assi`, p: [
        `La lavorazione multiasse raggiunge geometrie complesse in un unico piazzamento, migliorando la precisione eliminando errori di ribloccaggio. Combinata con fresatura CNC, elettroerosione a specchio e taglio a filo, copre tutto, dal prototipo alla produzione.`
      ]},
      { h: `Un fornitore, una responsabilità`, p: [
        `Affidare fusione e lavorazione insieme evita gli scaricabarile che si verificano quando fornitori separati discutono su chi abbia sbagliato la tolleranza. Comprime anche logistica e tempi di consegna.`
      ]}
    ],
    faq: [
      { q: `I getti vanno lavorati prima o dopo il trattamento termico?`, a: `Sgrossate, trattate termicamente, poi finite — così si controlla la distorsione raggiungendo la tolleranza finale.` },
      { q: `Quanto sovrametallo devo lasciare?`, a: `Tipicamente 0,5–2 mm solo sulle superfici critiche; di più spreca materiale e tempo.` }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: `Dalla granigliatura all'elettrolucidatura, placcatura e rivestimento — una panoramica delle opzioni di finitura per pezzi metallici fusi e quando usare ciascuna.`,
    intro: `La finitura superficiale protegge i pezzi fusi, ne migliora l'aspetto e prepara le superfici a tenuta, montaggio o ulteriore rivestimento. La finitura giusta dipende dalla lega, dall'ambiente di servizio e dai requisiti estetici. Questa guida passa in rassegna le opzioni più comuni.`,
    sections: [
      { h: `Pulizia e distacco degli attacchi`, p: [
        `Dopo la distaffatura, i pezzi vengono tagliati dal grappolo e i monconi di attacco molati a filo. Granigliatura o sabbiatura rimuovono la ceramica residua e producono una superficie opaca uniforme — il consueto punto di partenza per qualsiasi finitura successiva.`
      ]},
      { h: `Finiture meccaniche`, p: [
        `Molatura, burattatura e lucidatura spaziano dalla sbavatura funzionale alle finiture a specchio. L'elettrolucidatura va oltre sull'inox, levigando a livello microscopico per igiene e prestazioni anticorrosione.`
      ]},
      { h: `Rivestimenti protettivi e decorativi`, p: [
        `Passivazione (inox), placcatura (zinco, nichel, cromo), anodizzazione (ove applicabile), verniciatura a polvere e pittura aggiungono protezione anticorrosione o estetica. Scegliete in base ad ambiente e costo.`
      ]},
      { h: `Specificare una finitura`, p: [
        `Indicate la rugosità target (Ra), lo standard di rivestimento ed eventuali requisiti di mascheratura sul disegno. Indicazioni di finitura ambigue sono una frequente fonte di rilavorazione.`
      ]}
    ],
    faq: [
      { q: `Qual è la finitura predefinita di un getto di microfusione?`, a: `Una superficie opaca granigliata, tipicamente Ra 3,2–6,3 µm, pronta per ulteriore finitura.` },
      { q: `Quale finitura è migliore per i pezzi navali?`, a: `Leghe resistenti alla corrosione più passivazione o placcatura/rivestimento adeguati all'esposizione.` }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: `Ricottura, normalizzazione, tempra e rinvenimento e solubilizzazione — come il trattamento termico regola resistenza e tenacità dei getti in acciaio.`,
    intro: `Il trattamento termico trasforma le proprietà meccaniche dei getti in acciaio — resistenza, durezza, duttilità e tenacità — senza cambiarne la forma. Scegliere il ciclo giusto è essenziale per soddisfare una specifica. Questo articolo spiega i principali trattamenti e cosa ottengono.`,
    sections: [
      { h: `Perché i getti vengono trattati termicamente`, p: [
        `La microstruttura grezza di fusione è raramente ottimale. Il trattamento termico allenta le tensioni di fusione, affina la struttura dei grani e sviluppa l'equilibrio resistenza-tenacità di cui un pezzo ha bisogno in servizio.`
      ]},
      { h: `Cicli comuni`, p: [
        `La ricottura ammorbidisce e allenta le tensioni; la normalizzazione affina il grano e migliora l'uniformità; tempra e rinvenimento aumentano resistenza e durezza mantenendo la tenacità; la solubilizzazione è usata su inox e alcune leghe per dissolvere i carburi e massimizzare la resistenza alla corrosione.`
      ]},
      { h: `Sequenza con la lavorazione`, p: [
        `La distorsione si gestisce sgrossando, trattando termicamente e poi finendo con lavorazione. I pezzi a tolleranza critica possono richiedere una distensione tra le operazioni.`
      ]},
      { h: `Verifica`, p: [
        `Prova di durezza, prova di trazione ed esame della microstruttura confermano che il trattamento ha soddisfatto la specifica — documentato nel rapporto materiale/prove fornito con i pezzi.`
      ]}
    ],
    faq: [
      { q: `Il trattamento termico cambia le dimensioni di un getto?`, a: `Può causare una leggera distorsione, motivo per cui le caratteristiche critiche vengono finite con lavorazione successiva.` },
      { q: `Quale trattamento massimizza la resistenza alla corrosione dell'inox?`, a: `La solubilizzazione dissolve i carburi e ripristina la microstruttura resistente alla corrosione.` }
    ]
  }
};

export const RU_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: `Как работает литьё по выплавляемым моделям, какие металлы ему подходят, какие допуски оно выдерживает и когда оно превосходит литьё в песок, ковку или обработку из цельной заготовки.`,
    intro: `Литьё по выплавляемым моделям — также называемое точным литьём — производит металлические детали, близкие к готовой форме, с отличным качеством поверхности и жёсткими допусками. Это предпочтительный процесс, когда деталь геометрически сложна, изготавливается из труднообрабатываемого сплава или нужна повторяемыми партиями высокого качества. Это руководство описывает процесс, подходящие материалы, достижимые допуски и как проектировать детали, которые хорошо отливаются.`,
    sections: [
      { h: `Что такое литьё по выплавляемым моделям?`, p: [
        `В этом процессе вокруг восковой модели формируется керамическая оболочка, воск выплавляется, а в полученную полость заливается расплавленный металл. Поскольку модель расходуется, а оболочка бесшовная, процесс воспроизводит тонкие детали и сложную внутреннюю геометрию, которые было бы невозможно или дорого обрабатывать.`,
        `Английский термин « investment » относится к керамической суспензии, «наносимой» вокруг восковой модели. «Выплавляемая модель» относится к выплавлению модели. Оба названия описывают одно семейство процессов.`
      ]},
      { h: `Процесс шаг за шагом`, p: [
        `Точная алюминиевая пресс-форма производит восковые модели литьём под давлением. Модели собираются на центральный восковой стояк, образуя «ёлку», что максимизирует выход за одну заливку.`,
        `Ёлку многократно погружают в керамическую суспензию и обсыпают огнеупорным песком, затем сушат, пока не образуется оболочка толщиной несколько миллиметров. Оболочку обжигают, чтобы удалить воск и придать прочность.`,
        `Расплавленный металл заливают в горячую оболочку — под действием силы тяжести, вакуума или давления. После затвердевания оболочку отбивают, детали отрезают от ёлки, а литники зачищают, термообрабатывают и контролируют.`
      ]},
      { h: `Какие металлы и сплавы подходят`, p: [
        `Процесс работает с очень широким спектром сплавов: нержавеющие стали (CF8, CF8M / 304, 316), углеродистые и низколегированные стали, жаропрочные стали, суперсплавы на основе никеля и кобальта, инструментальные стали и медные сплавы.`,
        `Эта широта объясняет, почему процесс одинаково охватывает авиационные лопатки турбин, медицинские имплантаты, судовую фурнитуру и промышленные корпуса арматуры.`
      ]},
      { h: `Допуски, поверхность и размеры`, p: [
        `Типичные линейные допуски составляют около ±0,1 мм на первые 25 мм и примерно ±0,05 мм на каждые дополнительные 25 мм, при шероховатости поверхности Ra 3,2–6,3 мкм в литом состоянии. Критичные элементы затем дообрабатываются до более жёстких пределов.`,
        `Масса деталей обычно от нескольких граммов до десятков килограммов. Тонкие стенки до ~2 мм достижимы при правильном сплаве и литниковой системе.`
      ]},
      { h: `Когда предпочесть его другим процессам`, p: [
        `Предпочитайте литьё по выплавляемым моделям литью в песок, когда нужны лучшее качество поверхности и детализация; обработке из цельной заготовки — при сложной геометрии или большом отходе материала; и ковке — когда формы сложные, а не просто прочные.`,
        `Для очень больших объёмов простых форм литьё под давлением или штамповка могут быть дешевле. Для единичных прототипов напечатанные на 3D модели могут питать тот же маршрут литья без жёсткой оснастки.`
      ]},
      { h: `Советы по проектированию под литьё`, p: [
        `Используйте равномерную толщину стенок, щедрые радиусы и плавные переходы, чтобы избежать горячих точек и усадочной пористости. Добавляйте припуск на обработку только там, где требуют допуски.`,
        `Делитесь чертежами или файлами STEP заранее — небольшие изменения геометрии на этапе проектирования часто устраняют затраты и риски качества до изготовления оснастки.`
      ]}
    ],
    faq: [
      { q: `Какой допуск выдерживает литьё по выплавляемым моделям?`, a: `Около ±0,1 мм на первые 25 мм, с ужесточением за счёт финишной обработки при необходимости.` },
      { q: `Что дешевле — литьё или обработка из цельной заготовки?`, a: `Для сложных форм или дорогих сплавов литьё по выплавляемым моделям обычно выигрывает по выходу материала и трудозатратам; простые формы могут быть дешевле в обработке.` }
    ]
  },
  'lost-wax-casting': {
    excerpt: `Литьё по выплавляемым моделям: изготовление моделей, керамическая оболочка, выплавление, заливка и преимущества, делающие его опорой B2B-производства.`,
    intro: `Литьё по выплавляемым моделям — идея возрастом 5 000 лет, доведённая до современного промышленного процесса. Формируя деталь из воска, заключая её в керамику и выплавляя воск, производители получают точную, воспроизводимую полость формы для качественных металлических деталей. Вот как современный процесс обеспечивает повторяемые промышленные компоненты.`,
    sections: [
      { h: `От модели к заливке`, p: [
        `Воск впрыскивается в металлическую пресс-форму для образования модели, идентичной конечной детали плюс небольшой припуск на усадку. Модели собираются на стояк, погружаются для построения керамической оболочки и обезвосковываются в автоклаве или печи быстрого обжига.`,
        `Обожжённая оболочка заполняется расплавленным металлом, охлаждается и разбивается для освобождения отливки. Каждая оболочка даёт один комплект деталей, но восковая пресс-форма используется тысячи раз.`
      ]},
      { h: `Почему производители его выбирают`, p: [
        `Оно даёт форму, близкую к готовой, отличную поверхность, тонкие детали и свободу отливать сложные внутренние каналы. Оснастка, хоть и не бесплатна, намного дешевле суммарной стоимости обработки сложных деталей в объёме.`,
        `Оно также поддерживает огромный спектр сплавов, так что один поставщик может обслуживать клиентов судостроения, автопрома, арматуры, насосов и пищевого машиностроения.`
      ]},
      { h: `Типовые применения`, p: [
        `Компоненты турбин и насосов, корпуса арматуры, судовая фурнитура, детали автопрома и машин, фитинги пищевого оборудования, медицинские и спортивные компоненты — всё это распространено.`,
        `Процесс одинаково хорош как для единичного прототипа из напечатанной модели, так и для тысяч идентичных серийных деталей.`
      ]},
      { h: `Качество и контроль`, p: [
        `Надёжные литейные предприятия контролируют качество на каждом этапе — входной контроль материалов, размерный контроль и (при указании) проверка капиллярным методом, рентгеном или спектрометром — в рамках системы качества ISO 9001.`
      ]}
    ],
    faq: [
      { q: `Литьё по выплавляемым моделям — это то же, что точное литьё?`, a: `Да — это два названия одного процесса.` },
      { q: `Сколько деталей может дать одна форма?`, a: `Каждая керамическая оболочка — на одну заливку, но пресс-форма для впрыска воска используется для тысяч моделей.` }
    ]
  },
  'stainless-steel-casting': {
    excerpt: `Практический обзор литья нержавеющей стали по выплавляемым моделям: распространённые марки (304/CF8, 316/CF8M), критерии выбора и где подходит каждая марка.`,
    intro: `Отливки из нержавеющей стали сочетают коррозионную стойкость, прочность и гигиеничность, что делает их незаменимыми в судовых, пищевых, химических и медицинских применениях. Выбор правильной марки — это разница между деталью, служащей десятилетиями, и отказывающей рано. В статье рассмотрены литейные эквиваленты распространённых марок нержавейки и как выбирать между ними.`,
    sections: [
      { h: `Литейные марки против деформируемых`, p: [
        `Деформируемые 304 и 316 имеют литейные эквиваленты — CF8 и CF8M соответственно — с немного изменённым химическим составом для литейности. CF8M (литейная форма 316) добавляет молибден для превосходной стойкости к хлоридам и питтингу.`,
        `Указание литейного обозначения (например, CF8M) вместо деформируемого устраняет неоднозначность для литейного завода.`
      ]},
      { h: `Как выбрать марку`, p: [
        `Подбирайте марку под среду: CF8 (304) — для общей коррозионной стойкости и пищевого контакта; CF8M (316) — для морской воды, хлоридов и агрессивных химикатов; дуплексные марки — там, где критичны и прочность, и стойкость к хлоридам.`,
        `Учитывайте температуру, механическую нагрузку, свариваемость и стоимость. Избыточные требования тратят деньги; недостаточные — рискуют преждевременной коррозией.`
      ]},
      { h: `Где отливки из нержавейки превосходны`, p: [
        `Судовая фурнитура и компоненты насосов/арматуры выигрывают от коррозионной стойкости; пищевое и медицинское оборудование — от гигиеничных, легко очищаемых поверхностей; химическая переработка опирается на химическую инертность.`
      ]},
      { h: `Финишная обработка и пассивация`, p: [
        `Литую нержавейку можно подвергать дробеструйной обработке, шлифовке, полировке, электрополировке или пассивации. Пассивация восстанавливает защитный слой оксида хрома и рекомендуется для ответственных по коррозии применений.`
      ]}
    ],
    faq: [
      { q: `Каков литейный эквивалент нержавейки 316?`, a: `CF8M — он содержит молибден, придающий 316 стойкость к хлоридам.` },
      { q: `Нужна ли отливкам из нержавейки пассивация?`, a: `Для ответственных по коррозии деталей — да; пассивация восстанавливает защитный оксидный слой после обработки.` }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: `Почему отливки дообрабатывают на станках, как планировать припуск и базы, и что даёт 4/5-осевая ЧПУ-обработка литейной программе.`,
    intro: `Отливки по выплавляемым моделям достигают формы, близкой к готовой, но критичные элементы — отверстия, уплотнительные поверхности, резьбы, установочные базы — обычно требуют ЧПУ-обработки до конечного допуска. Объединение литья и обработки под одной крышей сокращает сроки и усиливает ответственность. В статье объясняется, как два процесса работают вместе.`,
    sections: [
      { h: `Зачем обрабатывать отливку, близкую к готовой?`, p: [
        `Литые допуски подходят для большинства поверхностей, но сопрягаемые элементы требуют обработки до посадок микронного уровня. Сначала отлить, а обработать только критичные элементы — это минимизирует съём материала, время цикла и стоимость.`
      ]},
      { h: `Проектирование под обработку`, p: [
        `Добавляйте локальный припуск на обработку (обычно 0,5–2 мм) только там, где нужно, задавайте чёткие базы для закрепления и по возможности избегайте прерывистых резов. Укажите, какие поверхности критичны, чтобы литейный завод ориентировал литниковую систему и припуск соответственно.`
      ]},
      { h: `Что даёт 4- и 5-осевая ЧПУ`, p: [
        `Многоосевая обработка достигает сложной геометрии за одну установку, повышая точность за счёт устранения ошибок переустановки. В сочетании с ЧПУ-фрезерованием, зеркальной электроэрозией и проволочной резкой она охватывает всё — от прототипа до производства.`
      ]},
      { h: `Один поставщик, одна ответственность`, p: [
        `Заказ литья и обработки вместе избавляет от перекладывания вины, возникающего, когда отдельные поставщики спорят, чей допуск был виноват. Это также сжимает логистику и сроки.`
      ]}
    ],
    faq: [
      { q: `Обрабатывать отливки до или после термообработки?`, a: `Черновая обработка, термообработка, затем финишная — так контролируется коробление при достижении конечного допуска.` },
      { q: `Какой припуск на обработку оставлять?`, a: `Обычно 0,5–2 мм только на критичных поверхностях; больше — трата материала и времени.` }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: `От дробеструйной обработки до электрополировки, гальваники и покрытий — обзор вариантов финишной обработки литых металлических деталей и когда применять каждый.`,
    intro: `Финишная обработка поверхности защищает литые детали, улучшает внешний вид и подготавливает поверхности к уплотнению, сборке или дальнейшему покрытию. Правильная отделка зависит от сплава, среды эксплуатации и косметических требований. Это руководство рассматривает наиболее распространённые варианты.`,
    sections: [
      { h: `Очистка и удаление литников`, p: [
        `После выбивки детали отрезают от ёлки, а остатки литников зачищают заподлицо. Дробеструйная или пескоструйная обработка удаляет остатки керамики и создаёт равномерную матовую поверхность — обычную отправную точку для любой дальнейшей отделки.`
      ]},
      { h: `Механические виды отделки`, p: [
        `Шлифовка, галтовка и полировка — от функционального снятия заусенцев до зеркальной отделки. Электрополировка идёт дальше на нержавейке, сглаживая на микроскопическом уровне ради гигиены и коррозионных характеристик.`
      ]},
      { h: `Защитные и декоративные покрытия`, p: [
        `Пассивация (нержавейка), гальваника (цинк, никель, хром), анодирование (где применимо), порошковое покрытие и окраска добавляют защиту от коррозии или внешний вид. Выбирайте по среде и стоимости.`
      ]},
      { h: `Как задать отделку`, p: [
        `Укажите целевую шероховатость (Ra), стандарт покрытия и любые требования к маскированию на чертеже. Неоднозначные указания по отделке — частый источник переделок.`
      ]}
    ],
    faq: [
      { q: `Какова отделка отливки по выплавляемым моделям по умолчанию?`, a: `Матовая дробеструйная поверхность, обычно Ra 3,2–6,3 мкм, готовая к дальнейшей отделке.` },
      { q: `Какая отделка лучше для судовых деталей?`, a: `Коррозионностойкие сплавы плюс пассивация или подходящая гальваника/покрытие для условий эксплуатации.` }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: `Отжиг, нормализация, закалка с отпуском и закалка на твёрдый раствор — как термообработка настраивает прочность и вязкость стальных отливок.`,
    intro: `Термообработка преобразует механические свойства стальных отливок — прочность, твёрдость, пластичность и вязкость — не меняя их формы. Выбор правильного цикла необходим для соответствия спецификации. В статье объясняются основные виды обработки и чего они достигают.`,
    sections: [
      { h: `Почему отливки термообрабатывают`, p: [
        `Литая микроструктура редко оптимальна. Термообработка снимает литейные напряжения, измельчает зерно и формирует баланс прочности и вязкости, нужный детали в эксплуатации.`
      ]},
      { h: `Распространённые циклы`, p: [
        `Отжиг смягчает и снимает напряжения; нормализация измельчает зерно и повышает однородность; закалка с отпуском повышает прочность и твёрдость, сохраняя вязкость; закалка на твёрдый раствор применяется для нержавейки и некоторых сплавов, чтобы растворить карбиды и максимизировать коррозионную стойкость.`
      ]},
      { h: `Последовательность с обработкой`, p: [
        `Коробление контролируют черновой обработкой, термообработкой, затем финишной обработкой. Детали с критичными допусками могут требовать снятия напряжений между операциями.`
      ]},
      { h: `Контроль`, p: [
        `Испытание на твёрдость, испытание на растяжение и исследование микроструктуры подтверждают, что обработка соответствует спецификации — документируется в акте о материале/испытаниях, поставляемом с деталями.`
      ]}
    ],
    faq: [
      { q: `Меняет ли термообработка размеры отливки?`, a: `Она может вызвать небольшое коробление, поэтому критичные элементы дообрабатывают после.` },
      { q: `Какая обработка максимизирует коррозионную стойкость нержавейки?`, a: `Закалка на твёрдый раствор растворяет карбиды и восстанавливает коррозионностойкую микроструктуру.` }
    ]
  }
};

export const PT_CONTENT: Record<string, LocalizedContent> = {
  'investment-casting-guide': {
    excerpt: `Como funciona a fundição de precisão, os metais que lhe convêm, as tolerâncias que mantém e quando supera a fundição em areia, o forjamento ou a usinagem a partir do sólido.`,
    intro: `A fundição de precisão — também chamada fundição por cera perdida — produz peças metálicas de forma quase final com excelente acabamento superficial e tolerâncias apertadas. É o processo de escolha quando um componente é geometricamente complexo, feito de uma liga difícil de usinar ou necessário em lotes repetíveis de alta qualidade. Este guia percorre o processo, os materiais adequados, as tolerâncias alcançáveis e como projetar peças que fundem bem.`,
    sections: [
      { h: `O que é a fundição de precisão?`, p: [
        `A fundição de precisão constrói uma casca cerâmica em torno de um modelo de cera, derrete a cera e verte metal fundido na cavidade resultante. Como o modelo é consumido e a casca não tem juntas, o processo reproduz detalhes finos e geometrias internas complexas que seriam impossíveis ou caras de usinar.`,
        `O termo em inglês « investment » refere-se à pasta cerâmica « investida » em torno do modelo de cera. « Cera perdida » refere-se ao modelo derretido. Ambos os nomes descrevem a mesma família de processos.`
      ]},
      { h: `O processo, passo a passo`, p: [
        `Um molde de precisão em alumínio produz os modelos de cera por injeção. Os modelos são montados num canal de vazamento central de cera para formar um « cacho », maximizando o rendimento por vazamento.`,
        `O cacho é mergulhado repetidamente na pasta cerâmica e revestido com areia refratária, depois seco, até formar uma casca de vários milímetros de espessura. A casca é queimada para remover a cera e ganhar resistência.`,
        `O metal fundido é vertido na casca quente — por gravidade, vácuo ou pressão. Após a solidificação, a casca é destacada, as peças são cortadas do cacho, e os canais são esmerilhados, tratados termicamente e inspecionados.`
      ]},
      { h: `Quais metais e ligas convêm`, p: [
        `A fundição de precisão trabalha com uma gama muito ampla de ligas: aços inoxidáveis (CF8, CF8M / 304, 316), aços-carbono e de baixa liga, aços resistentes ao calor, superligas à base de níquel e cobalto, aços-ferramenta e ligas de cobre.`,
        `Essa amplitude explica por que o processo abrange igualmente pás de turbina aeronáuticas, implantes médicos, acessórios navais e corpos de válvula industriais.`
      ]},
      { h: `Tolerâncias, acabamento e tamanho`, p: [
        `As tolerâncias lineares típicas são de cerca de ±0,1 mm para os primeiros 25 mm e aproximadamente ±0,05 mm a cada 25 mm adicionais, com acabamento superficial de Ra 3,2–6,3 µm no estado bruto. As características críticas são então usinadas até limites mais apertados.`,
        `Os pesos das peças variam comumente de alguns gramas a dezenas de quilogramas. Paredes finas de até ~2 mm são alcançáveis com a liga e o sistema de vazamento certos.`
      ]},
      { h: `Quando preferi-la a outros processos`, p: [
        `Prefira a fundição de precisão à fundição em areia quando precisar de melhor acabamento e detalhe; à usinagem a partir do sólido quando a geometria for complexa ou o desperdício de material for alto; e ao forjamento quando as formas forem intrincadas em vez de simplesmente resistentes.`,
        `Para volumes muito altos de formas simples, a fundição sob pressão ou a estampagem podem ser mais baratas. Para protótipos únicos, modelos impressos em 3D podem alimentar a mesma rota de fundição sem ferramental rígido.`
      ]},
      { h: `Dicas de projeto para fundibilidade`, p: [
        `Use espessura de parede uniforme, raios generosos e transições graduais para evitar pontos quentes e porosidade de contração. Acrescente sobremetal de usinagem apenas onde as tolerâncias exigirem.`,
        `Compartilhe seus desenhos ou arquivos STEP cedo — pequenas mudanças de geometria na fase de projeto frequentemente eliminam custo e risco de qualidade antes de o ferramental ser feito.`
      ]}
    ],
    faq: [
      { q: `Que tolerância a fundição de precisão consegue manter?`, a: `Cerca de ±0,1 mm para os primeiros 25 mm, apertando com usinagem de acabamento quando necessário.` },
      { q: `O que é mais barato, fundir ou usinar a partir do sólido?`, a: `Para formas complexas ou ligas caras, a fundição de precisão costuma vencer em rendimento de material e mão de obra; formas simples podem ser mais baratas de usinar.` }
    ]
  },
  'lost-wax-casting': {
    excerpt: `A fundição por cera perdida explicada: fabricação de modelos, casca cerâmica, desceragem, vazamento e os benefícios que a tornam um pilar da manufatura B2B.`,
    intro: `A fundição por cera perdida é uma ideia de 5.000 anos refinada num processo industrial moderno. Formando uma peça em cera, revestindo-a de cerâmica e derretendo a cera, os fabricantes obtêm uma cavidade de molde precisa e reproduzível para peças metálicas de alta qualidade. Veja como o processo moderno entrega componentes industriais repetíveis.`,
    sections: [
      { h: `Do modelo ao vazamento`, p: [
        `A cera é injetada num molde metálico para formar um modelo idêntico à peça final mais uma pequena sobremedida de contração. Os modelos são montados num canal de vazamento, mergulhados para construir uma casca cerâmica e descerados em autoclave ou forno de queima rápida.`,
        `A casca queimada é preenchida com metal fundido, resfriada e quebrada para liberar a peça fundida. Cada casca produz um conjunto de peças, mas o molde de cera é reutilizado milhares de vezes.`
      ]},
      { h: `Por que os fabricantes a escolhem`, p: [
        `Ela entrega forma quase final, excelente acabamento superficial, detalhes finos e liberdade para fundir passagens internas complexas. O ferramental, embora não gratuito, é muito mais barato que o custo acumulado de usinagem de peças complexas em volume.`,
        `Ela também suporta uma enorme gama de ligas, de modo que um único fornecedor pode atender clientes navais, automotivos, de válvulas, de bombas e de máquinas alimentícias.`
      ]},
      { h: `Aplicações típicas`, p: [
        `Componentes de turbinas e bombas, corpos de válvula, ferragens navais, peças automotivas e de máquinas, conexões de equipamentos alimentícios e componentes médicos e esportivos são todos comuns.`,
        `O processo é igualmente à vontade fazendo um único protótipo a partir de um modelo impresso ou milhares de peças de produção idênticas.`
      ]},
      { h: `Qualidade e inspeção`, p: [
        `Fundições idôneas controlam a qualidade em cada etapa — verificação de materiais recebidos, inspeção dimensional e (quando especificado) verificação por líquido penetrante, raios X ou espectrômetro — sob um sistema de qualidade ISO 9001.`
      ]}
    ],
    faq: [
      { q: `Fundição por cera perdida é o mesmo que fundição de precisão?`, a: `Sim — são dois nomes para o mesmo processo.` },
      { q: `Quantas peças um molde pode produzir?`, a: `Cada casca cerâmica serve para um vazamento, mas o molde de injeção de cera é reutilizado para milhares de modelos.` }
    ]
  },
  'stainless-steel-casting': {
    excerpt: `Um olhar prático sobre a fundição de precisão de aço inoxidável: graus comuns (304/CF8, 316/CF8M), critérios de seleção e onde cada grau se encaixa.`,
    intro: `As peças fundidas em aço inoxidável combinam resistência à corrosão, resistência mecânica e higiene, tornando-as indispensáveis em aplicações navais, alimentícias, químicas e médicas. Escolher o grau certo é a diferença entre uma peça que dura décadas e uma que falha cedo. Este artigo aborda os equivalentes fundidos dos graus inox comuns e como escolher entre eles.`,
    sections: [
      { h: `Graus fundidos vs. graus trabalhados`, p: [
        `Os 304 e 316 trabalhados têm equivalentes fundidos — CF8 e CF8M respectivamente — com química levemente ajustada para a fundibilidade. O CF8M (forma fundida do 316) acrescenta molibdênio para resistência superior a cloretos e corrosão por pite.`,
        `Especificar a designação fundida (ex.: CF8M) em vez da trabalhada elimina ambiguidade para a fundição.`
      ]},
      { h: `Como selecionar um grau`, p: [
        `Combine o grau com o ambiente: CF8 (304) para resistência geral à corrosão e contato com alimentos; CF8M (316) para água do mar, cloretos e químicos agressivos; graus duplex onde tanto a resistência mecânica quanto a resistência a cloretos são críticas.`,
        `Considere temperatura, carga mecânica, soldabilidade e custo. Superespecificar desperdiça dinheiro; subespecificar arrisca corrosão prematura.`
      ]},
      { h: `Onde as peças inox se destacam`, p: [
        `Ferragens navais e componentes de bombas/válvulas se beneficiam da resistência à corrosão; equipamentos alimentícios e médicos se beneficiam de superfícies higiênicas e fáceis de limpar; o processamento químico depende da inércia química.`
      ]},
      { h: `Acabamento e passivação`, p: [
        `O inox bruto de fundição pode ser jateado, esmerilhado, polido, eletropolido ou passivado. A passivação restaura a camada protetora de óxido de cromo e é recomendada para serviço crítico à corrosão.`
      ]}
    ],
    faq: [
      { q: `Qual é o equivalente fundido do inox 316?`, a: `O CF8M — tem o teor de molibdênio que dá ao 316 sua resistência a cloretos.` },
      { q: `As peças fundidas inox precisam de passivação?`, a: `Para peças críticas à corrosão, sim; a passivação restaura a camada de óxido protetora após a usinagem.` }
    ]
  },
  'cnc-machining-cast-components': {
    excerpt: `Por que as peças fundidas são usinadas em acabamento, como planejar o sobremetal e os referenciais, e o que a usinagem CNC 4/5 eixos acrescenta a um programa de fundição.`,
    intro: `As peças de fundição de precisão atingem forma quase final, mas as características críticas — furos, faces de vedação, roscas, referenciais de montagem — geralmente precisam de usinagem CNC até a tolerância final. Integrar fundição e usinagem sob o mesmo teto encurta prazos e reforça a responsabilidade. Este artigo explica como os dois processos trabalham juntos.`,
    sections: [
      { h: `Por que usinar uma peça fundida quase final?`, p: [
        `As tolerâncias de fundição servem para a maioria das superfícies, mas as características de acoplamento exigem usinagem para ajustes de nível micrométrico. Fundir primeiro e usinar apenas as características críticas minimiza a remoção de material, o tempo de ciclo e o custo.`
      ]},
      { h: `Projetar para a usinagem`, p: [
        `Acrescente sobremetal de usinagem localizado (tipicamente 0,5–2 mm) apenas onde necessário, defina referenciais claros para a fixação e evite cortes interrompidos quando possível. Indique quais superfícies são críticas para que a fundição oriente o sistema de vazamento e o sobremetal de acordo.`
      ]},
      { h: `O que a CNC de 4 e 5 eixos acrescenta`, p: [
        `A usinagem multieixos alcança geometrias complexas numa única fixação, melhorando a precisão ao eliminar erros de refixação. Combinada com fresamento CNC, eletroerosão a espelho e corte a fio, cobre tudo, do protótipo à produção.`
      ]},
      { h: `Um fornecedor, uma responsabilidade`, p: [
        `Contratar fundição e usinagem juntas evita a troca de culpas que ocorre quando fornecedores separados discutem sobre a tolerância de quem falhou. Também comprime a logística e o prazo.`
      ]}
    ],
    faq: [
      { q: `As peças fundidas devem ser usinadas antes ou depois do tratamento térmico?`, a: `Desbaste, trate termicamente, depois faça o acabamento — isso controla a distorção atingindo a tolerância final.` },
      { q: `Quanto sobremetal de usinagem devo deixar?`, a: `Tipicamente 0,5–2 mm apenas nas superfícies críticas; mais desperdiça material e tempo.` }
    ]
  },
  'surface-finishing-cast-parts': {
    excerpt: `Do jateamento ao eletropolimento, passando por revestimento galvânico e pintura — um panorama das opções de acabamento para peças metálicas fundidas e quando usar cada uma.`,
    intro: `O acabamento superficial protege as peças fundidas, melhora a aparência e prepara as superfícies para vedação, montagem ou revestimento posterior. O acabamento certo depende da liga, do ambiente de serviço e dos requisitos estéticos. Este guia examina as opções mais comuns.`,
    sections: [
      { h: `Limpeza e remoção de canais`, p: [
        `Após a desmoldagem, as peças são cortadas do cacho e os tocos de canal esmerilhados rentes. Jateamento com granalha ou areia remove a cerâmica residual e produz uma superfície fosca uniforme — o ponto de partida habitual para qualquer acabamento posterior.`
      ]},
      { h: `Acabamentos mecânicos`, p: [
        `Esmerilhamento, tamboreamento e polimento vão da rebarbação funcional aos acabamentos espelhados. O eletropolimento vai além no inox, alisando em nível microscópico por higiene e desempenho anticorrosivo.`
      ]},
      { h: `Revestimentos protetores e decorativos`, p: [
        `Passivação (inox), revestimento galvânico (zinco, níquel, cromo), anodização (quando aplicável), pintura a pó e pintura acrescentam proteção anticorrosiva ou aparência. Escolha com base no ambiente e no custo.`
      ]},
      { h: `Especificar um acabamento`, p: [
        `Indique a rugosidade alvo (Ra), a norma de revestimento e quaisquer requisitos de mascaramento no desenho. Indicações de acabamento ambíguas são uma fonte frequente de retrabalho.`
      ]}
    ],
    faq: [
      { q: `Qual é o acabamento padrão de uma peça de fundição de precisão?`, a: `Uma superfície fosca jateada, tipicamente Ra 3,2–6,3 µm, pronta para acabamento posterior.` },
      { q: `Qual acabamento é melhor para peças navais?`, a: `Ligas resistentes à corrosão mais passivação ou revestimento galvânico/pintura adequados à exposição.` }
    ]
  },
  'heat-treatment-steel-castings': {
    excerpt: `Recozimento, normalização, têmpera e revenido e solubilização — como o tratamento térmico ajusta a resistência e a tenacidade das peças fundidas de aço.`,
    intro: `O tratamento térmico transforma as propriedades mecânicas das peças fundidas de aço — resistência, dureza, ductilidade e tenacidade — sem mudar sua forma. Selecionar o ciclo certo é essencial para atender a uma especificação. Este artigo explica os principais tratamentos e o que alcançam.`,
    sections: [
      { h: `Por que as peças fundidas são tratadas termicamente`, p: [
        `A microestrutura bruta de fundição raramente é ótima. O tratamento térmico alivia as tensões de fundição, refina a estrutura de grãos e desenvolve o equilíbrio resistência-tenacidade que a peça precisa em serviço.`
      ]},
      { h: `Ciclos comuns`, p: [
        `O recozimento amolece e alivia tensões; a normalização refina o grão e melhora a uniformidade; a têmpera e revenido elevam resistência e dureza mantendo a tenacidade; a solubilização é usada em inox e algumas ligas para dissolver carbonetos e maximizar a resistência à corrosão.`
      ]},
      { h: `Sequência com a usinagem`, p: [
        `A distorção é gerida desbastando, tratando termicamente e depois fazendo o acabamento. Peças de tolerância crítica podem precisar de alívio de tensões entre as operações.`
      ]},
      { h: `Verificação`, p: [
        `Ensaio de dureza, ensaio de tração e exame da microestrutura confirmam que o tratamento atendeu à especificação — documentado no relatório de material/ensaios fornecido com as peças.`
      ]}
    ],
    faq: [
      { q: `O tratamento térmico muda as dimensões de uma peça fundida?`, a: `Pode causar leve distorção, razão pela qual as características críticas são usinadas em acabamento depois.` },
      { q: `Qual tratamento maximiza a resistência à corrosão do inox?`, a: `A solubilização dissolve os carbonetos e restaura a microestrutura resistente à corrosão.` }
    ]
  }
};
