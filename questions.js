const QUESTIONS = [
  // Chapitre 1 — Le véhicule et le conducteur
  {
    q: "Combien de roues possède un véhicule de tourisme, roue de secours comprise ?",
    options: ["4", "5", "6"],
    answer: 1,
    explanation: "Un véhicule de tourisme a 4 roues de marche plus la roue de secours, soit 5 au total."
  },
  {
    q: "La roue de secours est obligatoire :",
    options: ["Seulement en agglomération", "Seulement pour un long voyage", "Pour tout déplacement"],
    answer: 2,
    explanation: "La roue de secours est obligatoire pour tout déplacement, quelle que soit la distance ou le lieu."
  },
  {
    q: "Combien de rétroviseurs sont obligatoires sur un véhicule de tourisme (sur les 3 présents) ?",
    options: ["1", "2", "3"],
    answer: 1,
    explanation: "Sur les 3 rétroviseurs (2 extérieurs + 1 intérieur), seuls l'intérieur et celui du côté conducteur (gauche) sont obligatoires."
  },
  {
    q: "Les essuie-glaces servent à :",
    options: ["Éclairer la route", "Essuyer le pare-brise", "Refroidir le moteur"],
    answer: 1,
    explanation: "Les essuie-glaces, avec le lave-glace, permettent d'essuyer le pare-brise (pluie, saleté) pour garder la visibilité."
  },
  {
    q: "La ceinture de sécurité sert à :",
    options: ["Attacher les bagages", "Maintenir le conducteur et les passagers en cas de choc", "Signaler un véhicule en panne"],
    answer: 1,
    explanation: "La ceinture maintient les occupants sur leur siège en cas d'arrêt brusque, de choc ou d'accident ; elle ne sert jamais à arrimer des bagages."
  },
  {
    q: "Que ne doit-on JAMAIS utiliser pour éteindre un feu d'hydrocarbure ?",
    options: ["L'extincteur à poudre", "Le sable", "L'eau"],
    answer: 2,
    explanation: "L'eau aggrave un feu d'hydrocarbure (essence, huile) car elle disperse le liquide enflammé ; on utilise poudre, sable, mousse, CO2 ou une bâche ignifugée."
  },
  {
    q: "En cas de panne, à quelle distance faut-il placer les triangles de pré-signalisation ?",
    options: ["10 m à l'avant et à l'arrière", "30 m à l'avant et à l'arrière", "100 m à l'avant et à l'arrière"],
    answer: 1,
    explanation: "En cas de panne, les triangles se placent à 30 m à l'avant et à l'arrière du véhicule, pour être visibles à 100 m."
  },
  {
    q: "En cas d'accident, à quelle distance faut-il placer les triangles de pré-signalisation ?",
    options: ["30 m de part et d'autre", "100 m de part et d'autre", "200 m de part et d'autre"],
    answer: 2,
    explanation: "En cas d'accident (situation plus dangereuse qu'une simple panne), les triangles se placent à 200 m de part et d'autre."
  },
  {
    q: "Que ne doit-on jamais utiliser pour signaler un véhicule en panne ou accidenté ?",
    options: ["Le triangle de pré-signalisation", "Les feux de détresse", "Des touffes d'herbe ou des branchages"],
    answer: 2,
    explanation: "Le code de la route ne reconnaît pas les touffes d'herbe ou branchages comme dispositif de signalisation ; seuls le triangle, les feux de détresse ou une lampe sont valables."
  },
  {
    q: "Les feux de route (phares) éclairent à quelle distance ?",
    options: ["30 mètres", "100 mètres", "150 mètres"],
    answer: 1,
    explanation: "Les feux de route (phares), de couleur jaune, éclairent à 100 mètres."
  },
  {
    q: "Les feux de croisement (codes) éclairent à quelle distance ?",
    options: ["30 mètres", "100 mètres", "150 mètres"],
    answer: 0,
    explanation: "Les feux de croisement (codes) éclairent à 30 mètres, moins loin que les feux de route pour ne pas éblouir les autres usagers."
  },
  {
    q: "Les feux de position (veilleuses) sont visibles à quelle distance ?",
    options: ["30 mètres", "100 mètres", "150 mètres"],
    answer: 2,
    explanation: "Les feux de position (veilleuses) n'éclairent pas mais sont visibles à 150 mètres ; ils signalent la présence du véhicule."
  },
  {
    q: "Combien de sortes de feux trouve-t-on à l'arrière d'un véhicule de tourisme ?",
    options: ["5", "6", "7"],
    answer: 2,
    explanation: "À l'arrière, il y a 7 sortes de feux : 5 obligatoires (position, stop, cataphotes, clignotants, plaque) et 2 facultatifs (recul, antibrouillard arrière)."
  },
  {
    q: "Les dispositifs réfléchissants (cataphotes) à l'arrière du véhicule sont-ils obligatoires ?",
    options: ["Oui", "Non"],
    answer: 0,
    explanation: "Les cataphotes (ou catadioptres) rouges à l'arrière sont obligatoires ; ils réfléchissent la lumière et sont visibles à 100 m."
  },
  {
    q: "Quand peut-on allumer les feux de détresse ?",
    options: ["Au milieu d'un convoi", "En cas de panne/accident, ou en tant que dernier véhicule d'un convoi", "Pour doubler un autre véhicule"],
    answer: 1,
    explanation: "Les feux de détresse (4 clignotants ensemble) s'utilisent en cas de panne/accident sans triangle disponible, ou pour signaler qu'on est le dernier véhicule d'un convoi — jamais au milieu ou en tête."
  },
  {
    q: "La carte grise renseigne sur :",
    options: ["L'identité du véhicule (propriétaire, poids, dimensions...)", "L'identité du conducteur", "Le code de la route"],
    answer: 0,
    explanation: "La carte grise est la carte d'identité du véhicule : propriétaire, dimensions, PTAC, charge utile, date de mise en circulation, etc."
  },
  {
    q: "La vignette fiscale concerne :",
    options: ["Tous les véhicules sans exception", "Les véhicules de transport de marchandises et de personnes", "Uniquement les véhicules administratifs"],
    answer: 1,
    explanation: "La vignette fiscale est prélevée sur les véhicules à moteur affectés au transport de marchandises ou de personnes, sauf les véhicules administratifs."
  },
  {
    q: "Sans la visite technique, l'assurance est-elle valable ?",
    options: ["Oui", "Non"],
    answer: 1,
    explanation: "La visite technique atteste du bon état du véhicule ; sans elle, l'assurance ne peut pas être mise en jeu valablement."
  },
  {
    q: "Quel est le dépassement maximal autorisé à l'arrière du véhicule pour un chargement ?",
    options: ["1 mètre", "3 mètres", "5 mètres"],
    answer: 1,
    explanation: "Un chargement peut dépasser au maximum 3 mètres à l'arrière du véhicule (jamais à l'avant)."
  },
  {
    q: "À partir de quelle distance de dépassement le chargement doit-il être signalé par un dispositif réfléchissant rouge ?",
    options: ["1 mètre", "2 mètres", "3 mètres"],
    answer: 0,
    explanation: "Dès 1 mètre de dépassement, il faut signaler le chargement par un dispositif réfléchissant rouge visible à 150 m (les chiffons ou sachets ne sont pas reconnus)."
  },
  {
    q: "Peut-on mélanger passagers et marchandises dans un même véhicule ?",
    options: ["Oui, sans restriction", "Non"],
    answer: 1,
    explanation: "Un véhicule affecté au transport de marchandises ne doit transporter que des marchandises, et inversement pour les personnes ; en cas d'accident, l'assurance ne couvre pas ce qui est hors de l'usage déclaré."
  },
  {
    q: "Face à une flaque d'eau, le conducteur doit :",
    options: ["Accélérer", "Ralentir pour ne pas éclabousser les autres usagers", "Klaxonner"],
    answer: 1,
    explanation: "Il faut ralentir avant une flaque d'eau pour ne pas éclabousser les piétons ou autres usagers."
  },
  {
    q: "Quelle distance minimale doit-on laisser en doublant un piéton engagé sur le passage piéton ?",
    options: ["0,5 mètre", "1 mètre", "2 mètres"],
    answer: 1,
    explanation: "On doit laisser au moins 1 mètre d'écart en passant devant ou derrière un piéton engagé sur le passage, qui est prioritaire."
  },

  // Chapitre 2 — Catégories de permis de conduire (chiffres officiels : ANaTT / Présidence de la République du Bénin, 2020)
  {
    q: "Âge minimum pour passer le permis catégorie A1 (vélomoteur, cyclomoteur) ?",
    options: ["16 ans", "18 ans", "21 ans"],
    answer: 0,
    explanation: "Le permis A1 (vélomoteur, cyclomoteur) peut être passé dès 16 ans."
  },
  {
    q: "Le permis A1 concerne les véhicules à moteur thermique dont la cylindrée n'excède pas :",
    options: ["50 cm³", "75 cm³", "125 cm³"],
    answer: 1,
    explanation: "Selon le document officiel de l'ANaTT, le permis A1 couvre les véhicules dont la cylindrée n'excède pas 75 cm³."
  },
  {
    q: "Âge minimum pour passer le permis catégorie A2 (motocyclette, tricycle, quadricycle) ?",
    options: ["16 ans", "18 ans", "21 ans"],
    answer: 1,
    explanation: "Le permis A2 se passe à partir de 18 ans."
  },
  {
    q: "Le permis A2 concerne les véhicules dont la cylindrée est comprise entre 75 cm³ et :",
    options: ["250 cm³", "400 cm³", "500 cm³"],
    answer: 1,
    explanation: "Le permis A2 couvre les motocyclettes, tricycles et quadricycles de plus de 75 cm³ n'excédant pas 400 cm³."
  },
  {
    q: "Âge minimum pour passer le permis catégorie A3 (motocyclette de plus de 400 cm³) ?",
    options: ["18 ans", "21 ans", "25 ans"],
    answer: 1,
    explanation: "Le permis A3 (motocyclettes de plus de 400 cm³) se passe à partir de 21 ans."
  },
  {
    q: "Âge minimum pour passer le permis catégorie B ?",
    options: ["16 ans", "18 ans", "21 ans"],
    answer: 1,
    explanation: "Le permis B (véhicule de tourisme) se passe à partir de 18 ans."
  },
  {
    q: "Le permis B concerne les véhicules de moins de 10 places dont le poids total autorisé n'excède pas :",
    options: ["2 500 kg", "3 500 kg", "7 500 kg"],
    answer: 1,
    explanation: "Le permis B couvre les véhicules de moins de 10 places (conducteur compris) et un PTAC n'excédant pas 3 500 kg."
  },
  {
    q: "Le permis catégorie C concerne les véhicules de transport de marchandises ou de matériels de plus de 3 500 kg et n'excédant pas :",
    options: ["10 000 kg", "18 000 kg", "25 000 kg"],
    answer: 1,
    explanation: "Le permis C couvre les véhicules de transport de marchandises dont le PTAC est compris entre 3 500 kg et 18 000 kg."
  },
  {
    q: "Âge minimum pour passer le permis catégorie C ?",
    options: ["18 ans", "21 ans", "25 ans"],
    answer: 1,
    explanation: "Le permis C se passe à partir de 21 ans, et au moins un an après l'obtention du permis B."
  },
  {
    q: "Le permis catégorie C1 concerne les poids lourds de plus de :",
    options: ["3 500 kg", "10 000 kg", "18 tonnes"],
    answer: 2,
    explanation: "Le permis C1 concerne les poids lourds dont le PTAC dépasse 18 tonnes, au-delà du champ du permis C."
  },
  {
    q: "Le permis catégorie DR (21 ans) concerne :",
    options: ["Les minibus de 18 places et 3,5 tonnes", "Les poids lourds de plus de 18 tonnes", "Les véhicules à deux roues"],
    answer: 0,
    explanation: "Le permis DR est destiné aux minibus (18 places, 3,5 tonnes), une catégorie intermédiaire entre B et D."
  },
  {
    q: "Le permis catégorie D (21 ans) concerne le transport en commun de personnes de plus de :",
    options: ["9 places", "18 places", "30 places"],
    answer: 1,
    explanation: "Le permis D concerne les véhicules de transport en commun de personnes de plus de 18 places (grands bus)."
  },
  {
    q: "Le permis catégorie E (21 ans) permet d'atteler des remorques de plus de :",
    options: ["250 kg", "750 kg", "1 500 kg"],
    answer: 1,
    explanation: "Le permis E permet d'atteler des remorques ou caravanes de plus de 750 kg au véhicule tracteur."
  },
  {
    q: "Âge minimum pour passer le permis catégorie F (véhicules aménagés pour handicapés) ?",
    options: ["16 ans", "18 ans", "21 ans"],
    answer: 1,
    explanation: "Le permis F se passe à partir de 18 ans, comme le permis B dont il reprend les limites de poids et de places."
  },
  {
    q: "Le permis catégorie F concerne les véhicules de moins de 10 places dont le poids total autorisé n'excède pas 3 500 kg et qui sont :",
    options: ["Spécialement aménagés pour les personnes handicapées", "Réservés au transport scolaire", "Réservés aux taxis"],
    answer: 0,
    explanation: "Le permis F reprend le même gabarit que le permis B mais pour des véhicules aménagés afin de permettre aux personnes handicapées de conduire."
  },
  {
    q: "Quelle est la durée de validité des permis des catégories A1, A2, A3, B et F ?",
    options: ["5 ans", "10 ans", "Indéterminée (pas de renouvellement)"],
    answer: 2,
    explanation: "D'après le document officiel de l'ANaTT (2020), les catégories A1, A2, A3, B et F ont une durée de validité indéterminée : elles ne se renouvellent pas."
  },
  {
    q: "Pour les catégories C, C1, DR et D, la durée de validité du permis :",
    options: ["Est indéterminée comme pour le permis B", "Varie selon l'âge du titulaire", "Est toujours de 3 ans"],
    answer: 1,
    explanation: "Contrairement à A1/A2/A3/B/F, la validité des permis C, C1, DR et D varie selon l'âge du titulaire (renouvellement plus fréquent avec l'âge)."
  },
  {
    q: "Quelle est la durée de validité d'un permis de conduire international délivré au Bénin ?",
    options: ["1 an", "3 ans", "5 ans"],
    answer: 1,
    explanation: "Le permis de conduire international délivré au Bénin est valable 3 ans."
  },
  {
    q: "Pour passer les permis DR, C, C1 ou D, quelle condition doit être remplie au préalable ?",
    options: ["Avoir plus de 30 ans", "Détenir le permis B depuis au moins un an", "Avoir déjà un permis international"],
    answer: 1,
    explanation: "Ces catégories nécessitent de détenir déjà le permis B depuis au moins un an avant de pouvoir les passer."
  },
  {
    q: "Pour obtenir le permis de conduire au Bénin, il faut réussir l'épreuve écrite du code avec au moins la note :",
    options: ["10/20", "14/20", "16/20"],
    answer: 1,
    explanation: "La note minimale requise à l'épreuve écrite du code est de 14/20."
  },
  {
    q: "Et réussir l'épreuve pratique de conduite avec la moyenne :",
    options: ["10/20", "12/20", "15/20"],
    answer: 1,
    explanation: "La moyenne minimale requise à l'épreuve pratique de conduite est de 12/20."
  },
  {
    q: "Quelle structure délivre le permis de conduire national au Bénin ?",
    options: ["Le CNSR", "L'Agence Nationale des Transports Terrestres (ANaTT)", "Le Ministère de la Justice"],
    answer: 1,
    explanation: "C'est l'ANaTT (Agence Nationale des Transports Terrestres), via son service des permis de conduire, qui délivre les permis national et international."
  },
  {
    q: "La durée moyenne de traitement d'un dossier de permis de conduire national est de :",
    options: ["24 heures", "10 jours ouvrables", "1 mois"],
    answer: 1,
    explanation: "Le traitement d'un dossier de permis national prend environ 10 jours ouvrables (le permis international, lui, est traité en 24h)."
  },
  {
    q: "La formation en auto-école pour le permis dure en moyenne :",
    options: ["2 à 3 semaines", "2 à 3 mois", "1 an"],
    answer: 1,
    explanation: "La formation dure en moyenne 2 à 3 mois, soit environ 60 heures de code et 15 heures de conduite."
  },

  // Panneaux de signalisation (Bénin — conformes à la Convention de Vienne, base commune au code de la route français)
  {
    q: "Quelle est la forme et la couleur des panneaux de DANGER ?",
    options: ["Triangle à bord rouge, fond blanc", "Cercle à fond rouge", "Cercle à fond bleu", "Rectangle bleu"],
    answer: 0,
    explanation: "Les panneaux de danger sont des triangles à fond blanc et bordure rouge, annonçant un danger précis par un symbole noir."
  },
  {
    q: "Quelle est la forme des panneaux d'INTERDICTION ?",
    options: ["Triangle", "Cercle à bord rouge", "Cercle à fond bleu", "Carré"],
    answer: 1,
    explanation: "Les panneaux d'interdiction sont des cercles à bordure rouge (fond blanc en général)."
  },
  {
    q: "Quelle est la forme et la couleur des panneaux d'OBLIGATION ?",
    options: ["Triangle rouge", "Cercle rouge", "Cercle à fond bleu", "Rectangle vert"],
    answer: 2,
    explanation: "Les panneaux d'obligation sont des cercles à fond bleu, imposant une action immédiate (direction, voie réservée...)."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_AB4.svg",
    q: "Que signifie ce panneau ?",
    options: ["Cédez le passage", "Arrêt obligatoire à l'intersection (STOP)", "Sens interdit", "Fin de limitation de vitesse"],
    answer: 1,
    explanation: "Le panneau octogonal rouge STOP impose un arrêt complet à l'intersection avant de céder le passage."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_AB3a.svg",
    q: "Que signifie ce panneau ?",
    options: ["Cédez le passage", "Priorité à droite", "Sens giratoire", "Arrêt obligatoire"],
    answer: 0,
    explanation: "Le triangle pointe en bas signifie 'Cédez le passage' : il faut laisser la priorité aux véhicules des autres voies."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_B1.svg",
    q: "Que signifie ce panneau ?",
    options: ["Stationnement interdit", "Sens interdit", "Interdiction de dépasser", "Circulation interdite aux piétons"],
    answer: 1,
    explanation: "Le disque rouge avec une barre blanche horizontale signifie 'Sens interdit' : interdiction d'accès dans ce sens."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_B3.svg",
    q: "Que signifie ce panneau ?",
    options: ["Interdiction de dépasser", "Sens interdit", "Fin d'interdiction de dépasser", "Route prioritaire"],
    answer: 0,
    explanation: "Ce panneau (deux voitures, une rouge une noire) interdit de dépasser les autres véhicules."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_B14_(50).svg",
    q: "Que signifie ce panneau ?",
    options: ["Vitesse minimale de 50 km/h", "Limitation de vitesse à 50 km/h", "Fin de limitation à 50 km/h", "Numéro de route"],
    answer: 1,
    explanation: "Le disque rouge avec un chiffre indique la vitesse maximale autorisée, ici 50 km/h."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_B6a1.svg",
    q: "Que signifie ce panneau ?",
    options: ["Arrêt interdit", "Stationnement interdit", "Sens interdit", "Passage interdit aux véhicules lourds"],
    answer: 1,
    explanation: "Ce panneau (disque rouge barré, lettre 'E' à l'intérieur en France) signifie stationnement interdit."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_B21-1.svg",
    q: "Que signifie ce panneau ?",
    options: ["Direction obligatoire vers la droite", "Virage dangereux à droite", "Interdiction de tourner à droite", "Route à sens unique"],
    answer: 0,
    explanation: "Le cercle bleu avec une flèche blanche impose de tourner obligatoirement dans la direction indiquée, ici à droite."
  },
  {
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/France_road_sign_A13b.svg",
    q: "Que signifie ce panneau ?",
    options: ["Passage piétons obligatoire", "Annonce d'un passage pour piétons (danger)", "Zone école", "Interdiction aux piétons"],
    answer: 1,
    explanation: "Ce triangle de danger annonce à l'avance la présence d'un passage pour piétons, pour inciter à la prudence."
  },

  // Priorité aux intersections / carrefours : panneaux, feux, agents de circulation
  {
    q: "À une intersection, quel est l'ordre de priorité entre un agent de circulation, les feux tricolores et les panneaux de signalisation ?",
    options: [
      "Panneaux > feux > agent de circulation",
      "Agent de circulation > feux tricolores > panneaux de signalisation",
      "Feux tricolores > agent de circulation > panneaux",
      "Ils ont tous la même valeur, on applique la priorité à droite"
    ],
    answer: 1,
    explanation: "La hiérarchie est : agent de circulation d'abord, puis feux tricolores, puis panneaux de signalisation, et enfin la priorité à droite par défaut."
  },
  {
    q: "En l'absence de tout panneau, feu ou agent à une intersection, quelle règle s'applique par défaut ?",
    options: ["Priorité à gauche", "Priorité à droite", "Le premier arrivé passe en premier", "Priorité au véhicule le plus gros"],
    answer: 1,
    explanation: "Par défaut, sans aucune signalisation, la priorité à droite s'applique : le véhicule venant de droite passe en premier."
  },
  {
    q: "Un agent de circulation se tient face à vous, bras levé verticalement. Que devez-vous faire ?",
    options: [
      "Vous arrêter, sauf si vous êtes déjà engagé dans le carrefour",
      "Accélérer pour dégager le carrefour",
      "Klaxonner pour signaler votre présence",
      "Tourner uniquement à droite"
    ],
    answer: 0,
    explanation: "Bras levé verticalement = arrêt pour tous les usagers, sauf ceux déjà engagés dans le carrefour qui doivent le dégager."
  },
  {
    q: "Un agent de circulation a les deux bras tendus horizontalement. Pour les conducteurs qui lui font face ou lui tournent le dos, cela signifie :",
    options: ["Passage autorisé", "Arrêt obligatoire", "Tourner à gauche uniquement", "Ralentir seulement"],
    answer: 1,
    explanation: "Bras tendus horizontalement = arrêt obligatoire pour les usagers placés face à l'agent ou dans son dos."
  },
  {
    q: "Dans la situation précédente (agent bras tendus horizontalement), les conducteurs arrivant sur les côtés de l'agent (perpendiculairement à ses bras) doivent :",
    options: ["S'arrêter également", "Passer, la voie leur est ouverte", "Klaxonner avant de passer", "Attendre un signal supplémentaire"],
    answer: 1,
    explanation: "Les usagers situés sur les côtés, dans l'axe des bras tendus, ont la voie libre pendant que les autres sont arrêtés."
  },
  {
    q: "Les indications d'un agent de circulation par rapport aux feux tricolores et panneaux :",
    options: [
      "N'ont aucune valeur légale",
      "Priment toujours sur les feux et les panneaux",
      "Ne s'appliquent qu'en cas de panne des feux",
      "S'appliquent seulement aux poids lourds"
    ],
    answer: 1,
    explanation: "Les gestes d'un agent de circulation priment toujours sur la signalisation lumineuse ou les panneaux, même en présence de feux fonctionnels."
  },
  {
    q: "Au feu tricolore, la couleur orange fixe signifie :",
    options: [
      "Accélérer pour passer avant le rouge",
      "Arrêt obligatoire, sauf si l'arrêt ne peut se faire sans danger (déjà engagé trop près)",
      "Priorité absolue de passage",
      "Feu en panne, priorité à droite"
    ],
    answer: 1,
    explanation: "L'orange fixe impose l'arrêt, sauf si le véhicule est déjà si près de la ligne qu'il ne peut plus s'arrêter sans danger."
  },
  {
    q: "Un feu rouge clignotant (souvent à un passage à niveau ou une caserne de pompiers) signifie :",
    options: ["Ralentir seulement", "Arrêt absolu obligatoire", "Passage autorisé avec prudence", "Cela ne concerne que les motos"],
    answer: 1,
    explanation: "Le feu rouge clignotant impose un arrêt absolu, typiquement avant un passage à niveau ou la sortie d'une caserne de pompiers."
  },
  {
    q: "Une flèche verte allumée sous un feu rouge (feu directionnel) permet :",
    options: [
      "De passer tout droit uniquement",
      "De tourner dans la direction de la flèche en cédant le passage aux autres usagers",
      "De passer sans aucune priorité à céder",
      "Rien, il faut attendre le feu vert principal"
    ],
    answer: 1,
    explanation: "La flèche verte sous un feu rouge autorise à tourner dans le sens indiqué, mais en cédant le passage aux véhicules et piétons prioritaires."
  },
  {
    q: "À un carrefour muni d'un panneau STOP, le conducteur doit :",
    options: [
      "Ralentir fortement sans obligation de s'arrêter si la voie semble libre",
      "S'arrêter complètement, même si aucun véhicule n'est visible, puis céder le passage",
      "S'arrêter uniquement si un autre véhicule est déjà présent",
      "S'arrêter seulement de nuit"
    ],
    answer: 1,
    explanation: "Le panneau STOP impose un arrêt complet et systématique, indépendamment de la présence visible d'autres véhicules, puis de céder le passage."
  },
  {
    q: "Au panneau 'Cédez le passage' (triangle pointe en bas), le conducteur doit :",
    options: [
      "S'arrêter obligatoirement, même si la voie est libre",
      "Ralentir et, si nécessaire, s'arrêter pour laisser passer les véhicules des autres voies",
      "Accélérer pour s'insérer avant les autres véhicules",
      "Klaxonner pour prévenir de son passage"
    ],
    answer: 1,
    explanation: "Contrairement au STOP, 'Cédez le passage' n'impose pas un arrêt systématique : il faut ralentir et s'arrêter seulement si nécessaire pour céder la priorité."
  },
  {
    q: "À l'entrée d'un carrefour à sens giratoire (rond-point) non muni d'un panneau 'Cédez le passage', qui est prioritaire ?",
    options: [
      "Les véhicules qui entrent dans le giratoire",
      "Les véhicules déjà engagés et circulant dans le giratoire",
      "Les véhicules venant de la droite du giratoire",
      "Aucune règle, chacun se débrouille"
    ],
    answer: 1,
    explanation: "En général (sauf signalisation contraire), les véhicules déjà engagés dans le giratoire sont prioritaires sur ceux qui souhaitent y entrer."
  },
  {
    q: "Un véhicule prioritaire (ambulance, sapeurs-pompiers, police) circule avec avertisseurs sonores et lumineux en action. Vous devez :",
    options: [
      "L'ignorer si vous êtes prioritaire selon la signalisation normale",
      "Faciliter son passage même si cela implique de s'écarter ou de vous arrêter",
      "Accélérer pour le laisser passer derrière vous",
      "Le suivre pour profiter de sa priorité"
    ],
    answer: 1,
    explanation: "Un véhicule prioritaire en intervention (avertisseurs actifs) prime sur toute autre règle de priorité ; il faut lui faciliter le passage."
  },
  {
    q: "À une intersection en croix sans aucune signalisation, un véhicule arrive en face de vous pour tourner à gauche pendant que vous continuez tout droit. Qui est prioritaire ?",
    options: [
      "Le véhicule qui tourne à gauche",
      "Vous, qui continuez tout droit",
      "Celui qui klaxonne en premier",
      "Celui qui arrive le plus vite"
    ],
    answer: 1,
    explanation: "Un véhicule qui tourne à gauche doit céder le passage aux véhicules venant en face qui continuent tout droit."
  },
  {
    q: "Sur une route prioritaire signalée par un panneau losange jaune (priorité), un conducteur venant d'une voie perpendiculaire non prioritaire doit :",
    options: [
      "Vous céder le passage, même s'il vient de votre droite",
      "Avoir la priorité car il vient de la droite",
      "Passer en même temps que vous",
      "S'arrêter uniquement s'il y a un panneau STOP"
    ],
    answer: 0,
    explanation: "Le panneau 'route à caractère prioritaire' annule la règle de la priorité à droite : les véhicules venant des voies secondaires doivent céder le passage, même de droite."
  },
  {
    q: "Un feu orange clignotant (souvent la nuit à un carrefour peu fréquenté) signifie :",
    options: [
      "Arrêt obligatoire comme au rouge",
      "Passage interdit dans tous les cas",
      "Prudence : ralentir et appliquer les règles normales de priorité (ex. priorité à droite)",
      "Le feu est en panne, il faut faire demi-tour"
    ],
    answer: 2,
    explanation: "L'orange clignotant signale un danger ou un carrefour à aborder avec prudence : on ralentit et on applique les règles habituelles de priorité."
  },
  {
    q: "Vous êtes à un carrefour où les feux sont hors service (panne d'électricité) et aucun agent n'est présent. Que faites-vous ?",
    options: [
      "Vous passez sans ralentir, les feux étant hors service",
      "Vous appliquez la règle de la priorité à droite comme s'il n'y avait pas de feux",
      "Vous attendez qu'un agent arrive",
      "Vous faites demi-tour obligatoirement"
    ],
    answer: 1,
    explanation: "Des feux hors service ne comptent plus comme signalisation : on se rabat sur la règle par défaut, la priorité à droite, en abordant le carrefour avec prudence."
  }
];
