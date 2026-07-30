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

  // Permis catégorie B (voitures de tourisme) et informations générales — chiffres officiels ANaTT / Présidence de la République du Bénin, 2020
  {
    q: "Âge minimum pour passer le permis catégorie B (voitures de tourisme) ?",
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
    q: "Quelle est la durée de validité du permis catégorie B ?",
    options: ["5 ans", "10 ans", "Indéterminée (pas de renouvellement)"],
    answer: 2,
    explanation: "D'après le document officiel de l'ANaTT (2020), le permis B a une durée de validité indéterminée : il ne se renouvelle pas."
  },
  {
    q: "Quelle est la durée de validité d'un permis de conduire international délivré au Bénin ?",
    options: ["1 an", "3 ans", "5 ans"],
    answer: 1,
    explanation: "Le permis de conduire international délivré au Bénin est valable 3 ans."
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
  },

  // Compléments issus du Manuel officiel du candidat à l'examen du permis de conduire (Bénin, Direction Générale des Transports Terrestres)
  {
    q: "À quelle distance avant la zone dangereuse un panneau de danger est-il placé en agglomération ?",
    options: ["20 mètres", "50 mètres", "100 mètres"],
    answer: 1,
    explanation: "En agglomération, les panneaux de danger sont placés 50 mètres avant la zone dangereuse (150 mètres en rase campagne)."
  },
  {
    q: "À quelle distance avant la zone dangereuse un panneau de danger est-il placé en rase campagne ?",
    options: ["50 mètres", "100 mètres", "150 mètres"],
    answer: 2,
    explanation: "En rase campagne, où l'on roule plus vite, le panneau de danger est placé plus tôt : 150 mètres avant la zone dangereuse, contre 50 m en agglomération."
  },
  {
    q: "Un panneau rond bleu barré de rouge signifie :",
    options: ["Une interdiction", "Une obligation", "La fin d'une obligation", "Un danger"],
    answer: 2,
    explanation: "Le rond bleu barré de rouge annonce la fin d'une obligation (par exemple la fin d'une voie réservée ou d'une direction imposée)."
  },
  {
    q: "Un panneau rond blanc barré de noir signifie :",
    options: ["La fin d'une interdiction", "Une nouvelle interdiction", "Une obligation", "Un danger"],
    answer: 0,
    explanation: "Le rond blanc barré de noir signale la fin d'une interdiction précédemment imposée."
  },
  {
    q: "Combien existe-t-il de types de balises le long des routes (virage, manche à air, intersection, délinéateur, passage à niveau, tête d'îlot...) ?",
    options: ["5", "7", "9"],
    answer: 1,
    explanation: "Le manuel officiel dénombre 7 types de balises : virage, manche à air, virage dangereux/rétrécissement, intersection, délinéateur, passage à niveau, et tête d'îlot directionnel."
  },
  {
    q: "Combien y a-t-il de pédales dans une voiture à boîte manuelle ?",
    options: ["2", "3", "4"],
    answer: 1,
    explanation: "Une voiture à boîte manuelle a 3 pédales : l'embrayage, le frein et l'accélérateur."
  },
  {
    q: "Selon le Manuel du candidat, le Code de la route a pour but :",
    options: [
      "D'indiquer ou de rappeler les diverses prescriptions aux usagers de la route",
      "De fixer uniquement le prix des infractions",
      "De remplacer la formation en auto-école",
      "De s'appliquer uniquement aux poids lourds"
    ],
    answer: 0,
    explanation: "Le Code de la route est l'ensemble des règles et signalisations à observer pour une circulation sûre et rapide, dont le but est d'indiquer/rappeler les prescriptions aux usagers."
  },
  {
    q: "Quelle est la différence entre une route et une autoroute ?",
    options: [
      "Aucune, ce sont des synonymes",
      "L'autoroute a deux chaussées séparées par un terre-plein central, sans intersections, réservée à la circulation rapide",
      "La route est réservée aux poids lourds",
      "L'autoroute est gratuite alors que la route est payante"
    ],
    answer: 1,
    explanation: "L'autoroute est composée de deux chaussées séparées par un terre-plein central, sans intersections, accessible seulement à des points aménagés, contrairement à une route ordinaire."
  },

  // Sécurité routière générale (règles universelles de conduite)
  {
    q: "Les panneaux d'indication sont généralement implantés :",
    options: ["Très loin de ce qu'ils signalent", "À proximité de ce qu'ils signalent", "Uniquement sur autoroute"],
    answer: 1,
    explanation: "Contrairement aux panneaux de danger (placés en amont) ou d'interdiction, les panneaux d'indication sont placés près du lieu ou du service qu'ils signalent."
  },
  {
    q: "Lors d'un dépassement, faut-il totalement quitter sa voie pour occuper la voie de gauche ?",
    options: ["Oui, complètement", "Non, on peut rester à cheval sur les deux voies", "Seulement de nuit"],
    answer: 0,
    explanation: "Il faut quitter complètement sa voie lors d'un dépassement, pour respecter une distance de sécurité latérale suffisante avec le véhicule dépassé."
  },
  {
    q: "Une ligne blanche discontinue peut être franchie :",
    options: ["Jamais", "Uniquement si c'est prudent et nécessaire (bonne visibilité, pas de danger)", "Uniquement de nuit"],
    answer: 1,
    explanation: "La ligne discontinue autorise le franchissement (dépassement, changement de voie) sous réserve que ce soit fait prudemment et en sécurité."
  },
  {
    q: "Utiliser son téléphone au volant (conversation ou manipulation) est-il considéré comme une infraction ?",
    options: ["Non, seulement la manipulation", "Non, seulement la conversation", "Oui, les deux"],
    answer: 2,
    explanation: "Toute interaction avec le téléphone (parler ou manipuler l'appareil) détourne l'attention du conducteur et augmente le risque d'accident."
  },
  {
    q: "Le temps de réaction du conducteur n'augmente qu'avec la consommation d'alcool.",
    options: ["Vrai", "Faux : il augmente aussi avec la fatigue, les médicaments, les drogues ou la distraction"],
    answer: 1,
    explanation: "L'alcool n'est qu'un facteur parmi d'autres : fatigue, médicaments, drogues et distraction (téléphone, etc.) augmentent aussi le temps de réaction."
  },
  {
    q: "Si vous coupez la route à un autre véhicule sans lui céder le passage, qui a la priorité ?",
    options: ["Vous, puisque vous êtes passé en premier", "L'autre véhicule : couper le passage sans céder la priorité est interdit et dangereux"],
    answer: 1,
    explanation: "Couper le chemin d'un autre véhicule sans lui céder la priorité qui lui revient est une infraction, indépendamment de qui est passé en premier."
  },
  {
    q: "Sur route mouillée, la distance d'arrêt par rapport à une route sèche est :",
    options: ["La même", "Environ doublée", "Réduite de moitié"],
    answer: 1,
    explanation: "L'adhérence étant réduite sur route mouillée, la distance d'arrêt est environ doublée par rapport à une route sèche à la même vitesse."
  },
  {
    q: "La largeur maximale autorisée pour un véhicule de moins de 3 500 kg est de :",
    options: ["2,55 mètres", "3 mètres", "3,5 mètres"],
    answer: 0,
    explanation: "La largeur maximale autorisée (hors rétroviseurs) pour ce type de véhicule est de 2,55 mètres."
  },
  {
    q: "Avant de traverser un passage à niveau sans barrière, le conducteur doit :",
    options: [
      "Accélérer pour dégager rapidement la voie",
      "S'arrêter, observer et s'assurer qu'aucun train n'arrive avant de traverser",
      "Klaxonner et continuer sans s'arrêter"
    ],
    answer: 1,
    explanation: "En l'absence de barrière, la sécurité impose de s'arrêter, de regarder et d'écouter avant de s'engager sur la voie ferrée."
  },

  // Questions officielles du Manuel du candidat a l'examen du permis de conduire (Benin, 2005, Direction Generale des Transports Terrestres)
  {
    q: "Citez les différentes signalisations routières ?",
    options: ["La signalisation verticale, horizontale, lumineuse et les signes des agents", "Les intersections en X, en Y et en T", "Les lignes continues, les lignes discontinues"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La signalisation verticale, horizontale, lumineuse et les signes des agents."
  },
  {
    q: "La signalisation horizontale constitue :",
    options: ["L'ensemble des marques peintes sur la chaussée", "L'ensemble des signes des agents de sécurité", "L'ensemble des règles applicables en agglomération"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'ensemble des marques peintes sur la chaussée."
  },
  {
    q: "La ligne continue blanche centrale :",
    options: ["Autorise le dépassement", "Interdit le dépassement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Interdit le dépassement."
  },
  {
    q: "La ligne discontinue blanche centrale :",
    options: ["Interdit la circulation à droite", "Autorise le dépassement", "Est réservée pour l'arrêt des bus"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Autorise le dépassement."
  },
  {
    q: "Les traits de la ligne discontinue blanche centrale hors agglomération ont une longueur de :",
    options: ["20m", "1,33m", "3m"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 3m."
  },
  {
    q: "La ligne mixte autorise le dépassement :",
    options: ["Si la ligne discontinue est plus près de mon véhicule", "Si la ligne continue est plus près de mon véhicule", "Si la chaussée est assez large"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Si la ligne discontinue est plus près de mon véhicule."
  },
  {
    q: "La ligne jaune continue sur la bordure du trottoir :",
    options: ["Interdit le stationnement", "Autorise l'arrêt", "Indique une zone d’arrêt de bus"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Interdit le stationnement."
  },
  {
    q: "L'intervalle entre deux traits d'une ligne discontinue blanche centrale est de :",
    options: ["10m", "5m", "15m"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 10m."
  },
  {
    q: "La ligne jaune brisée en bordure de la chaussée :",
    options: ["Interdit le dépassement", "Autorise le dépassement", "Indique une zone d’arrêt de bus"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Indique une zone d’arrêt de bus."
  },
  {
    q: "A la vue de la flèche de rabattement, je dois :",
    options: ["M'arrêter", "Serrer ma droite", "Rétrograder"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Serrer ma droite."
  },
  {
    q: "La bande rouge discontinue de blanc le long du trottoir, interdit :",
    options: ["L'arrêt", "Le stationnement", "L'arrêt pour les véhicules légers"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le stationnement."
  },
  {
    q: "Sur les lignes hachurées appelées zébras :",
    options: ["Je peux stationner", "Je peux circuler", "Je ne peux ni circuler, ni stationner, ni m'arrêter", "Je peux m’arrêter"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne peux ni circuler, ni stationner, ni m'arrêter."
  },
  {
    q: "A la vue du panneau C13a ?",
    options: ["je suis sur un chemin sans issue.", "je suis prioritaire à la prochaine intersection", "je dois aller tout droit seulement"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je suis sur un chemin sans issue.."
  },
  {
    q: "A la rencontre du panneau \"stop\" que dois-je faire ?",
    options: ["Je cède le passage à droite", "Je cède le passage à droite et à gauche", "Je m'arrête avant le panneau et je cède le passage aux usagers venant de ma droite et de ma gauche", "Je m'arrête après le panneau et je cède le passage aux usagers venant de gauche et de droite"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête après le panneau et je cède le passage aux usagers venant de gauche et de droite."
  },
  {
    q: "Que signifie le panneau A15c ?",
    options: ["voie réservée aux chevaux", "endroits fréquentés par les animaux domestiques", "passage de cavaliers."],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : passage de cavaliers.."
  },
  {
    q: "Que signifie le panneau A21a ?",
    options: ["voie réservée aux cyclistes", "débouché de cyclistes ou cyclomotoristes venant de droite ou de gauche", "débouché de cyclistes ou de cyclomotoristes venant de droite seulement."],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : débouché de cyclistes ou cyclomotoristes venant de droite ou de gauche."
  },
  {
    q: "Devant le panneau triangulaire pointe en bas, que dois-je faire ?",
    options: ["Je cède le passage à droite et à gauche", "Je cède le passage à droite seulement", "Je passe"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à droite et à gauche."
  },
  {
    q: "Qu'indique le panneau triangulaire portant une flèche barrée ?",
    options: ["Arrêt obligatoire", "Priorité à droite", "Priorité à gauche", "Priorité de passage"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Priorité de passage."
  },
  {
    q: "A la vue du panneau losange fond jaune, que faire à la prochaine intersection ?",
    options: ["Je m'arrête", "Je cède le passage à droite", "Je passe", "Je cède le passage à gauche"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je passe."
  },
  {
    q: "En agglomération, les panneaux de danger sont implantés à quelle distance du danger ?",
    options: ["150m", "200m", "50m", "250m"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 50m."
  },
  {
    q: "En rase campagne, à quelle distance sont implantés les panneaux de danger ?",
    options: ["50m", "150m", "200m", "250m"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 150m."
  },
  {
    q: "Devant un panneau de danger, je dois :",
    options: ["Augmenter ma vitesse", "Réduire ma vitesse", "Maintenir ma vitesse"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Réduire ma vitesse."
  },
  {
    q: "Devant un panneau de danger :",
    options: ["Je peux marquer un arrêt", "Je peux stationner", "Je ne peux ni m'arrêter ni stationner"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne peux ni m'arrêter ni stationner."
  },
  {
    q: "Quel danger signale le panneau A21b ?",
    options: ["Voie réservée aux cyclistes", "Voie interdite aux cyclistes", "Débouché de cyclistes venant de gauche seulement", "Débouché de cyclistes venant de gauche ou de droite"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Débouché de cyclistes venant de gauche seulement."
  },
  {
    q: "Quel danger signale le panneau A20 ?",
    options: ["Débouché sur un pont mobile", "Débouché sur un quai ou une berge", "Descente dangereuse"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Débouché sur un quai ou une berge."
  },
  {
    q: "Quel danger signale le panneau A16 ?",
    options: ["Débouché sur un quai ou une berge", "Descente dangereuse", "Débouché sur un pont mobile", "Descente dangereuse sur 10 km"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Descente dangereuse."
  },
  {
    q: "Quel danger signale le panneau A6 ?",
    options: ["Descente dangereuse", "Débouché sur un pont mobile", "Débouché sur un quai ou une berge"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Débouché sur un pont mobile."
  },
  {
    q: "Que signifie le panneau B6a1 ?",
    options: ["Stationnement interdit devant le panneau", "Arrêt et stationnement interdits", "Stationnement interdit à partir du panneau"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Stationnement interdit à partir du panneau."
  },
  {
    q: "A la vue du panneau B6b1 :",
    options: ["Je peux stationner dans la première rue à droite après le panneau", "Je peux stationner dans la rue où se trouve le panneau mais à gauche", "Je ne peux stationner nulle part dans la rue où se trouve le panneau"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne peux stationner nulle part dans la rue où se trouve le panneau."
  },
  {
    q: "Le panneau B7a :",
    options: ["Interdit aux motocyclistes de dépasser les voitures", "Interdit l'accès aux autos et aux motos", "Interdit le stationnement aux autos et aux motos", "Interdit l'accès aux véhicules à deux roues"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Interdit l'accès aux autos et aux motos."
  },
  {
    q: "Le panneau B21-1 m'oblige à :",
    options: ["Tourner à droite à la prochaine intersection", "Tourner à droite avant le panneau", "Tourner à droite après le panneau"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Tourner à droite avant le panneau."
  },
  {
    q: "Sur les bandes et les pistes cyclables ?",
    options: ["Les automobilistes peuvent s'arrêter pour prendre un passager", "Les piétons peuvent circuler", "Les automobilistes peuvent stationner en cas de panne", "Rien de tout ce qui précède"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Rien de tout ce qui précède."
  },
  {
    q: "Que signifie le panneau B15 ?",
    options: ["Chaussée à double sens", "Céder le passage aux usagers venant en sens inverse", "Circulation à sens unique"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Céder le passage aux usagers venant en sens inverse."
  },
  {
    q: "Quel danger signale le panneau A18 ?",
    options: ["Céder le passage aux usagers venant en sens inverse", "Circulation dangereuse dans les deux sens", "Chaussée rétrécie dans les deux sens"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Circulation dangereuse dans les deux sens."
  },
  {
    q: "A quelle distance du danger est implanté le panneau A18 ?",
    options: ["150m", "50m", "0m"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 0m."
  },
  {
    q: "A la rencontre du panneau B15, quel panneau l'usager venant en sens inverse aurait rencontré ?",
    options: ["Le panneau \"sens interdit\"", "Le panneau \"chaussée rétrécie\"", "Le panneau \"priorité par rapport à la circulation venant en sens inverse \""],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le panneau \"priorité par rapport à la circulation venant en sens inverse \"."
  },
  {
    q: "A la vue du panneau B1, quel panneau l'usager venant en sens inverse aurait rencontré ?",
    options: ["Le panneau \"priorité par rapport à la circulation venant en sens inverse\"", "Le panneau \"céder le passage à la circulation venant en sens inverse\"", "Le panneau \" circulation à sens unique\""],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le panneau \" circulation à sens unique\"."
  },
  {
    q: "Que signifie le panneau B8 ?",
    options: ["Voie réservée aux véhicules de transport de marchandises", "Voie réservée aux véhicules de transport en commun de personnes", "Accès interdit aux véhicules de transport de marchandises"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Accès interdit aux véhicules de transport de marchandises."
  },
  {
    q: "Que signifie le panneau B18a ?",
    options: ["Accès interdit aux véhicules transportant plus d'une certaine quantité de produits explosifs ou facilement inflammables", "Accès interdit aux véhicules transportant plus d'une certaine quantité de produits de nature à polluer les eaux", "Accès interdit aux véhicules transportant"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Accès interdit aux véhicules transportant plus d'une certaine quantité de produits explosifs ou facilement inflammables."
  },
  {
    q: "A la vue du panneau A1c, je ralentis ?",
    options: ["Avant chaque virage", "Dans chaque virage", "Après chaque virage"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Avant chaque virage."
  },
  {
    q: "En présence du panneau \"stationnement interdit\", je suis autorisé à :",
    options: ["Stationner avant le panneau", "Stationner après le panneau", "Stationner avant la prochaine intersection"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Stationner avant le panneau."
  },
  {
    q: "Que signifie le panneau B12 (1) ?",
    options: ["Accès interdit à 10km au véhicule dont la hauteur avec ou sans chargement dépasse 3,5m", "Accès interdit sur 10km aux véhicules dont la hauteur avec ou sans chargement dépasse 3,5m 10km", "Accès interdit aux véhicules dont la hauteur avec ou sans chargement dépasse 3,5m", "Vitesse limitée à 10km/h aux véhicules dont la hauteur avec ou sans chargement dépasse 3,5m"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Accès interdit à 10km au véhicule dont la hauteur avec ou sans chargement dépasse 3,5m."
  },
  {
    q: "Que signifie le panneau B34a ?",
    options: ["Dépassement interdit au camion", "Fin d'interdiction de dépasser aux véhicules de transport de marchandises pesant plus de 3,5T", "Interdiction de dépasser tout véhicule", "Fin d'interdiction de dépasser"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Fin d'interdiction de dépasser aux véhicules de transport de marchandises pesant plus de 3,5T."
  },
  {
    q: "Que signifie le panneau B45 ?",
    options: ["Accès interdit aux véhicules de transport en commun de personnes", "Stationnement interdit aux véhicules de transport en commun de personnes", "Fin de voie réservée aux véhicules de transport en commun de personnes", "Arrêt interdit aux véhicules de transport en commun de personnes"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Fin de voie réservée aux véhicules de transport en commun de personnes."
  },
  {
    q: "Que signifie le panneau B27 ?",
    options: ["Arrêt d'autobus", "Parking réservé aux autobus", "Voie réservé aux autobus", "Arrêt obligatoire aux autobus"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Voie réservé aux autobus."
  },
  {
    q: "Que signifie le panneau B9g ?",
    options: ["Accès interdit aux cyclomoteurs", "Accès interdit aux motocyclettes", "Accès interdit aux cyclomoteurs et motocyclettes"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Accès interdit aux cyclomoteurs."
  },
  {
    q: "Que signifie le panneau B10a ?",
    options: ["Accès interdit aux véhicules dont la longueur dépasse 10m avec ou sans chargement", "Accès interdit uniquement aux véhicules de transport de marchandises dont la longueur dépasse 10m", "Accès interdit uniquement aux véhicules de transport en commun de personnes dont"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Accès interdit aux véhicules dont la longueur dépasse 10m avec ou sans chargement."
  },
  {
    q: "Que signifie le panneau B14 (3) ?",
    options: ["Vitesse limitée à 60km/h pour les 2 roues", "Vitesse limitée à 60km/h pour les cyclomoteurs", "Vitesse limitée à 60km/h pour les motocyclettes", "Vitesse limitée à 60km/h pour les cyclomoteurs et les motocyclettes"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Vitesse limitée à 60km/h pour les motocyclettes."
  },
  {
    q: "Le panneau B29 (2) : VEHICULES ?",
    options: ["Ne concerne pas les motocyclettes LENTS roulant à moins de 60km/h", "Concerne tout véhicule à moteur roulant à moins de 60km/h", "Concerne seulement les véhicules automobiles roulant à moins de 60km/h"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Concerne tout véhicule à moteur roulant à moins de 60km/h."
  },
  {
    q: "Que signifie le panneau B13 ?",
    options: ["Accès interdit aux véhicules pesant 5,5T 5.5t", "Accès interdit aux véhicules pesant plus de 5,5T", "Accès interdit aux véhicules pesant moins de 5,5T"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Accès interdit aux véhicules pesant plus de 5,5T."
  },
  {
    q: "Le panneau B14 (4) concerne :",
    options: ["Les véhicules de transport en commun de personnes", "Les véhicules de transport de marchandises", "Tout véhicule de transport", "Tout véhicule de tourisme"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les véhicules de transport de marchandises."
  },
  {
    q: "A la rencontre d'un panneau de danger, que doit-on faire ?",
    options: ["Accélérer et passer le danger signalé", "Ralentir, serrer sa droite et passer en faisant attention au danger", "Serrer sa droite, accélérer et passer", "Faire demi-tour"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Ralentir, serrer sa droite et passer en faisant attention au danger."
  },
  {
    q: "A la rencontre du panneau A7, que doit-on faire ?",
    options: ["Accélérer et passer", "Ralentir serrer sa droite et passer avec prudence", "Ralentir, serrer sa droite et klaxonner"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Ralentir serrer sa droite et passer avec prudence."
  },
  {
    q: "A quoi peut-on s'attendre à la vue du panneau A7 ?",
    options: ["A voir les rails", "A voir une barrière, des rails", "A voir une barrière automatique"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A voir une barrière, des rails."
  },
  {
    q: "A quoi peut-on s'attendre après le panneau A8 ?",
    options: ["A voir des rails, une barrière", "A voir un panneau de position", "A voir un panneau de position, des rails"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A voir un panneau de position, des rails."
  },
  {
    q: "Que doit-on faire à la vue du panneau A8 ?",
    options: ["Accélérer et passer en vérifiant la gauche et la droite", "Ralentir, regarder à gauche et à droite avant de traverser les rails", "Accélérer et passer tout simplement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Ralentir, regarder à gauche et à droite avant de traverser les rails."
  },
  {
    q: "Que doit-on faire à la rencontre du panneau A13a ?",
    options: ["Passer en utilisant son avertisseur sonore pour faire dégager les enfants qui se trouveraient sur la route", "Ralentir, faire attention aux enfants, s'arrêter au besoin pour les laisser passer", "Klaxonner et passer rapidement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Ralentir, faire attention aux enfants, s'arrêter au besoin pour les laisser passer."
  },
  {
    q: "A la rencontre du panneau A3, que faire lorsqu'un véhicule arrive en sens inverse ?",
    options: ["S'arrêter et laisser le véhicule passer", "Poursuivre sa route", "Serrer sa droite, s'arrêter et laisser le véhicule passer"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Serrer sa droite, s'arrêter et laisser le véhicule passer."
  },
  {
    q: "A la vue du panneau B3 :",
    options: ["Un véhicule peut dépasser un autre véhicule", "Une voiture peut dépasser un camion", "Un camion peut dépasser un autre camion", "Aucun dépassement n'est autorisé"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Aucun dépassement n'est autorisé."
  },
  {
    q: "Que doit-on faire à la vue du panneau B15 ?",
    options: ["Passer sans prendre en compte, l'usager venant en sens inverse", "Passer en serrant sa droite", "S'arrêter pour laisser l'usager venant en sens inverse"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : S'arrêter pour laisser l'usager venant en sens inverse."
  },
  {
    q: "Que doit-on faire à la vue du panneau B21c1 ?",
    options: ["Tourner immédiatement à droite", "Tourner à droite à la prochaine intersection", "Tourner à droite avant le panneau"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Tourner à droite à la prochaine intersection."
  },
  {
    q: "Que m'indique le panneau B31 ?",
    options: ["La fin de toutes les interdictions sauf le panneau \"STOP\"", "La fin de tous les panneaux", "La fin de tous les panneaux d'interdiction sauf ceux de stationnement et d'arrêt interdits"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La fin de tous les panneaux d'interdiction sauf ceux de stationnement et d'arrêt interdits."
  },
  {
    q: "Qu'indique le panneau B34 ?",
    options: ["Le dépassement est interdit à tous véhicules", "Il est mis fin à l'interdiction de dépasser à tous véhicules", "Il est mis fin à l'interdiction aux petits véhicules seuls de se dépasser"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Il est mis fin à l'interdiction de dépasser à tous véhicules."
  },
  {
    q: "Que doit-on faire à la rencontre du panneau G1 ?",
    options: ["Passer les rails très rapidement", "Ralentir pour passer les rails", "Ralentir, s'assurer qu'aucun train n'arrive ni de droite ni de gauche sur les rails avant de passer"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Ralentir, s'assurer qu'aucun train n'arrive ni de droite ni de gauche sur les rails avant de passer."
  },
  {
    q: "Au feu vert :",
    options: ["Je passe sans ralentir", "Je ralentis et je passe", "Je ralentis et je m'arrête", "Je cède le passage aux usagers venant de droite"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ralentis et je passe."
  },
  {
    q: "A une intersection munie de feux tricolores dont le rouge est allumé, que faire ?",
    options: ["Je passe si je veux tourner à droite", "Je ralentis et je passe si la voie est libre", "Je m'arrête"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête."
  },
  {
    q: "A une intersection munie de feux tricolores où un agent de sécurité réglemente la circulation, que faire ?",
    options: ["Je suis les indications de l'agent de sécurité", "Je respecte les feux", "Je passe si le feu est vert"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je suis les indications de l'agent de sécurité."
  },
  {
    q: "Dans quel ordre s’allument les feux tricolores :",
    options: ["rouge – jaune - vert", "jaune – vert - rouge", "vert - jaune - rouge"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : vert - jaune - rouge."
  },
  {
    q: "A une intersection munie de feux tricolores dont le feu vert est allumé, que dois-je faire ?",
    options: ["Je m'arrête", "Je ralentis et je m'arrête", "Je passe"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je passe."
  },
  {
    q: "Le feu jaune annonce :",
    options: ["Le feu vert", "Le feu rouge", "Le feu orange"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le feu rouge."
  },
  {
    q: "A une distance raisonnable du feu jaune fixe ; je me prépare ?",
    options: ["Pour passer", "Pour m'arrêter", "Pour céder le passage"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Pour m'arrêter."
  },
  {
    q: "A une intersection munie de feux tricolores où seul le feu jaune clignote :",
    options: ["Je m'arrête", "Je ralentis et je passe", "J'applique la règle de priorité à droite"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : J'applique la règle de priorité à droite."
  },
  {
    q: "Aux feux tricolores munis de panneau, dont le jaune seul clignote :",
    options: ["Je me conforme au panneau", "Je me conforme au feu jaune clignotant", "J'applique la priorité à droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je me conforme au panneau."
  },
  {
    q: "Aux feux tricolores dont le rouge est allumé :",
    options: ["Je passe avec prudence", "Je m’arrête", "Je ralentis, je serre ma droite et je tourne"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m’arrête."
  },
  {
    q: "Aux feux tricolores fonctionnant normalement et munis de panneau :",
    options: ["Je me conforme au panneau", "Je me conforme aux feux", "Je passe librement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je me conforme aux feux."
  },
  {
    q: "A une intersection munie de feux tricolores où tous les feux sont éteints :",
    options: ["Je pratique la règle de la priorité à droite", "Je cède le passage à droite et à gauche", "J’ai la priorité de passage"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je pratique la règle de la priorité à droite."
  },
  {
    q: "Quel est le rôle de l'agent de sécurité à l'intersection ?",
    options: ["Réglementer la circulation", "Perturber la circulation", "Contrôler les pièces"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Réglementer la circulation."
  },
  {
    q: "Lorsque vous voyez de profil l'agent réglementant la circulation, que faire ?",
    options: ["Je m'arrête", "Je cède le passage à droite", "Je passe", "Je ralentis pour céder le passage"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je passe."
  },
  {
    q: "Lorsque je vois de face ou de dos l'agent réglementant la circulation, que faire ?",
    options: ["Je passe", "Je ralentis et je passe", "Je m'arrête", "J'accélère ma vitesse"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête."
  },
  {
    q: "De toutes les signalisations routières, laquelle prime sur les autres ?",
    options: ["La signalisation lumineuse", "La signalisation horizontale", "La signalisation verticale", "Les signes des agents"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les signes des agents."
  },
  {
    q: "A la vue de face ou de dos d'un agent réglementant la circulation :",
    options: ["Je passe", "Je m'arrête", "J'applique la règle de la priorité à droite"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête."
  },
  {
    q: "A la vue de profil d'un agent réglementant la circulation :",
    options: ["Je passe", "Je m'arrête", "J'applique la règle de priorité à droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je passe."
  },
  {
    q: "Les véhicules prioritaires sont :",
    options: ["Police – Gendarmerie – corbillard en mission", "SAMU – Sapeur pompier –Police – Gendarmerie en mission", "SAMU - corbillard - Police"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : SAMU – Sapeur pompier –Police – Gendarmerie en mission."
  },
  {
    q: "Les feux tricolores fonctionnent, cependant l’agent de sécurité règlement la circulation :",
    options: ["je passe au feu vert", "je ne passe que si je suis autorisé par l’agent de sécurité", "je passe sans tenir compte ni du feu ni de l’agent de sécurité"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je ne passe que si je suis autorisé par l’agent de sécurité."
  },
  {
    q: "Quelles sont les grandes règles de priorité ?",
    options: ["La règle de courtoisie et le respect des agents de sécurité", "Le respect des feux et la règle de la priorité à droite", "La priorité à droite, la priorité de passage et la perte de priorité"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La priorité à droite, la priorité de passage et la perte de priorité."
  },
  {
    q: "La priorité à droite consiste à :",
    options: ["Laisser passer l'usager dont la droite est libre", "Laisser passer l'usager dont la gauche est libre", "Serrer sa droite et tourner à droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Laisser passer l'usager dont la droite est libre."
  },
  {
    q: "Que faire à une intersection sans signalisation ?",
    options: ["Je cède le passage à droite", "Je cède le passage à gauche", "Je passe tout droit"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à droite."
  },
  {
    q: "Que faire à une intersection de deux routes secondaires ?",
    options: ["Je cède le passage à droite", "Je passe tout droit", "Je cède le passage à droite et à gauche"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à droite."
  },
  {
    q: "Le panneau triangle - flèche barrée annonce que :",
    options: ["les usagers arrivant de gauche ou de droite ont la priorité de passage", "les usagers arrivant de gauche ou de droite perdent la priorité", "seuls les usagers arrivant de la gauche perdent la priorité de passage"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : les usagers arrivant de gauche ou de droite perdent la priorité."
  },
  {
    q: "A la vue de la signalisation \" STOP \", le conducteur doit :",
    options: ["marquer un arrêt et céder le passage à gauche et à droite", "céder le passage à droite seulement", "marquer l’arrêt après le panneau"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : marquer un arrêt et céder le passage à gauche et à droite."
  },
  {
    q: "Que faire à une intersection de deux routes secondaires dangereuses ?",
    options: ["Je cède le passage à droite", "Je cède le passage à gauche et à droite", "Je tourne à droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à droite."
  },
  {
    q: "Que faire à une intersection de deux routes à grande circulation ?",
    options: ["Je cède le passage à gauche", "Je cède le passage à droite", "Je cède le passage à droite et à gauche"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à droite."
  },
  {
    q: "Que faire à une intersection munie de feux tricolores dont le feu jaune clignote ?",
    options: ["Je cède le passage à ma gauche", "Je cède le passage à ma droite", "J'ai la priorité de passage"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à ma droite."
  },
  {
    q: "A la vue du panneau STOP, que dois-je faire ?",
    options: ["Je cède le passage à droite", "Je cède le passage à droite et à gauche", "Je m'arrête et je cède le passage aux usagers venant de ma droite et de ma gauche"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête et je cède le passage aux usagers venant de ma droite et de ma gauche."
  },
  {
    q: "A la vue du panneau triangulaire pointe en bas, que dois-je faire ?",
    options: ["Je passe", "Je cède le passage à droite seulement", "Je cède le passage à droite et à gauche"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je cède le passage à droite et à gauche."
  },
  {
    q: "A l’intersection munie de feux tricolores dont le rouge est allumé, que faire ?",
    options: ["Je m'arrête", "Je passe si je veux tourner à droite", "Je ralentis et je passe si la voie est libre"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête."
  },
  {
    q: "A une distance raisonnable du feu jaune fixe, je me prépare :",
    options: ["pour appliquer la règle de priorité à droite", "pour passer", "pour m’arrêter", "pour céder le passage"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : pour m’arrêter."
  },
  {
    q: "Lorsque je vois de face l’agent de sécurité réglementant la circulation :",
    options: ["je passe", "je ralentis et je passe", "j’applique la priorité à droite", "je ralentis et je m’arrête."],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je ralentis et je m’arrête.."
  },
  {
    q: "Au carrefour à sens giratoire en agglomération :",
    options: ["la priorité est toujours à droite", "la priorité peut être donnée à droite et à gauche", "rien de tout ce qui précède"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : rien de tout ce qui précède."
  },
  {
    q: "A la vue du panneau A13b :",
    options: ["je passe toujours derrière le piéton en laissant un intervalle d’au moins 1m", "je passe toujours devant le piéton qui me voit bien, en laissant un intervalle d’au moins 1m", "je klaxonne pour obliger le piéton à vite traverser"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je passe toujours derrière le piéton en laissant un intervalle d’au moins 1m."
  },
  {
    q: "A la vue du panneau C12 quel panneau l’usager venant en sens inverse doit voir à l’autre bout de la voie ?",
    options: ["le panneau \"priorité par rapport à la circulation venant en sens inverse\"", "le panneau \"céder le passage à la circulation venant en sens inverse\"", "le panneau \"sens interdit\""],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : le panneau \"sens interdit\"."
  },
  {
    q: "A l’ intersection d'une route revêtue et d'une route en terre, quelle est la règle de priorité à observer en agglomération ?",
    options: ["La priorité de passage", "La perte de priorité", "La priorité à droite"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La priorité à droite."
  },
  {
    q: "A l'intersection d'une route revêtue et d'une route en terre, quelle est la règle de priorité à observer hors agglomération par l’usager circulant sur la route en terre ?",
    options: ["La priorité de passage", "La perte de priorité", "La priorité à droite"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La perte de priorité."
  },
  {
    q: "A la vue du panneau A9a : PASSAGE PROTEGE ?",
    options: ["j’applique la règle de la perte de priorité", "j’applique la rège de priorité à droite", "j’applique la règle de priorité de passage"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : j’applique la règle de priorité de passage."
  },
  {
    q: "A une intersection de routes de même valeur où aucun usager n’a sa droite libre, s’applique :",
    options: ["la priorité de passage pour les usagers venant de droite et de gauche.", "la règle de la courtoisie et ensuite la règle de la priorité à droite", "la perte de priorité de passage pour les usagers venant de face en face"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : la règle de la courtoisie et ensuite la règle de la priorité à droite."
  },
  {
    q: "Sur cette image PN3, les véhicules rouge et bleu doivent :",
    options: ["Passer", "Attendre devant le premier panneau de signalisation et passer après l'avion", "Attendre devant le deuxième panneau de signalisation et ne passer qu'après l'extinction du feu"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Attendre devant le deuxième panneau de signalisation et ne passer qu'après l'extinction du feu."
  },
  {
    q: "Que doit faire un conducteur sur le point d’être dépassé ?",
    options: ["il serre sa gauche sans accélérer", "il serre sa droite en accélérant", "il serre sa droite sans accélérer", "il reste au milieu de la chaussée en accélérant"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : il serre sa droite sans accélérer."
  },
  {
    q: "La nuit, pour dépasser, ?",
    options: ["j’utilise mes avertisseurs sonores", "j’utilise mes avertisseurs lumineux", "je ne fais rien de tout cela"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : j’utilise mes avertisseurs lumineux."
  },
  {
    q: "Lorsque les pointillés de la ligne mixte sont les plus proches du véhicule, on peut franchir cette ligne :",
    options: ["pour tourner à droite", "pour tourner à gauche", "pour dépasser puis se rabattre"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : pour dépasser puis se rabattre."
  },
  {
    q: "Quelle est la toute première précaution à observer pour effectuer un dépassement ?",
    options: ["S'assurer que l'on n'est pas dans un cas d'interdiction", "Accélérer pour dépasser", "Bien serrer sa droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : S'assurer que l'on n'est pas dans un cas d'interdiction."
  },
  {
    q: "En général, de quel côté s'effectue le dépassement ?",
    options: ["Le dépassement s'effectue par la droite", "Le dépassement s'effectue par la gauche", "Le dépassement s'effectue du côté de votre choix", "Le dépassement s'effectue du côté où c'est possible"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le dépassement s'effectue par la gauche."
  },
  {
    q: "Dans quel cas peut-on être autorisé‚ à dépasser par la droite ?",
    options: ["Quand on a une file ininterrompue de véhicules devant soi", "Quand le véhicule à dépasser a déjà pris position pour tourner à gauche", "En abordant une intersection", "Sur une chaussée à sens unique"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Quand le véhicule à dépasser a déjà pris position pour tourner à gauche."
  },
  {
    q: "Quand est-ce que le dépassement est effectif ?",
    options: ["Quand l'usager dépassé apparaît dans le rétroviseur intérieur", "Après avoir mis le clignotant à droite pour se rabattre", "Quand on peut estimer soi-même que le dépassement est fait"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Quand l'usager dépassé apparaît dans le rétroviseur intérieur."
  },
  {
    q: "En combien d'étapes s'effectue le dépassement ?",
    options: ["En une étape", "En deux étapes", "En trois étapes"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : En trois étapes."
  },
  {
    q: "Citez deux cas d'interdiction de dépasser :",
    options: ["Devant un panneau interdisant de dépasser et sur une ligne continue", "Devant un panneau interdisant de dépasser et sur une ligne discontinue", "Sur des lignes mixtes dont la ligne discontinue se trouve du côté du conducteur"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Devant un panneau interdisant de dépasser et sur une ligne continue."
  },
  {
    q: "Sur une chaussée à 3 voies et à double sens, on utilise, pour dépasser :",
    options: ["la voie centrale", "la voie la plus à gauche", "la voie la plus à droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : la voie centrale."
  },
  {
    q: "Donner l’écart latéral minimal entre deux véhicules automobiles qui se dépassent :",
    options: ["1m environ", "0,50m environ", "0,3m environ"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 0,50m environ."
  },
  {
    q: "Donner l’écart latéral minimal à observer par un automobiliste qui dépasse un piéton ou un cycliste :",
    options: ["1m environ", "0,5m environ", "2,0m environ"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 1m environ."
  },
  {
    q: "Quel est l'écart latéral à observer entre deux véhicules automobiles, qui se dépassent ?",
    options: ["1m environ", "0,20m environ", "0,50m environ"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 0,50m environ."
  },
  {
    q: "Quel est l’écart latéral à observer par un automobiliste qui dépasse un piéton ou un cycliste ?",
    options: ["0,50m environ", "2m environ", "1m environ"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 1m environ."
  },
  {
    q: "Quel serait votre comportement quand un usager s'apprête à vous dépasser ?",
    options: ["Je serre ma gauche", "J'occupe l'axe médian de la chaussée", "Je serre ma droite", "Je ralentis"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je serre ma droite."
  },
  {
    q: "En rase campagne le dépassement est autorisé :",
    options: ["à proximité des intersections", "au sommet de côte", "dans les virages", "rien de tout ce qui précède"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : rien de tout ce qui précède."
  },
  {
    q: "Pour effectuer un dépassement :",
    options: ["j’avertis, je contrôle, puis je déboîte", "je contrôle, j’avertis et je déboîte", "je déboîte, j’avertis, je contrôle"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je contrôle, j’avertis et je déboîte."
  },
  {
    q: "Lors du dépassement d’un véhicule la nuit, je mets les feux de route ?",
    options: ["immédiatement après avoir déboîté", "en arrivant à la hauteur du véhicule à dépasser", "tout de suite après m’être rabattu"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : en arrivant à la hauteur du véhicule à dépasser."
  },
  {
    q: "Comment prévenir ordinairement l'usager à dépasser pendant le jour ?",
    options: ["Par des appels sonores", "Par des appels lumineux", "Par le clignotant"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Par des appels sonores."
  },
  {
    q: "Comment prévenir l'usager à dépasser la nuit ?",
    options: ["Par des appels sonores", "Par des appels lumineux", "Par des clignotants"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Par des appels lumineux."
  },
  {
    q: "A une intersection de deux routes de même nature, peut-on dépasser par la gauche ?",
    options: ["Je peux effectuer rapidement le dépassement", "Je ne peux pas effectuer le dépassement", "Je peux effectuer le dépassement par la gauche si le véhicule qui me précède signale son intension de tourner à droite."],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je peux effectuer le dépassement par la gauche si le véhicule qui me précède signale son intension de tourner à droite.."
  },
  {
    q: "Au sommet d'une côte :",
    options: ["Je peux dépasser si ma voiture a une réserve d'accélération suffisante", "Je peux dépasser à la hauteur d'une ligne continue", "Je ne peux pas dépasser"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne peux pas dépasser."
  },
  {
    q: "Sur une chaussée à double sens comportant trois voies :",
    options: ["Je suis autorisé à dépasser en 3ème position lorsque aucun usager ne vient en face", "Je suis autorisé à dépasser en 3ème position lorsque je juge suffisante la largeur de la chaussée", "Je ne suis pas autorisé à dépasser en 3ème position"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne suis pas autorisé à dépasser en 3ème position."
  },
  {
    q: "Au niveau des flèches de rabattement :",
    options: ["Je suis autorisé à dépasser lorsqu’ aucun usager ne vient en face", "Je suis autorisé à dépasser lorsque je juge la largeur de la chaussée suffisante", "Je ne suis pas autorisé à dépasser", "Je suis autorisé si l'usager devant moi est trop lent"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne suis pas autorisé à dépasser."
  },
  {
    q: "Au niveau d’une ligne discontinue, le dépassement est interdit :",
    options: ["Dans un virage", "A la hauteur d'une ligne continue située du côté de la voiture", "Sur une chaussée rétrécie"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A la hauteur d'une ligne continue située du côté de la voiture."
  },
  {
    q: "Au niveau d’une ligne continue accolée à une ligne discontinue côté chauffeur, peut-on effectuer le dépassement ?",
    options: ["On ne peut pas effectuer le dépassement", "On peut effectuer le dépassement", "On ne peut pas effectuer le dépassement la nuit"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : On peut effectuer le dépassement."
  },
  {
    q: "A quel passage à niveau le dépassement est-il autorisé ?",
    options: ["A un passage à niveau sans barrière", "A un passage à niveau avec barrière à fonctionnement manuel", "A un passage à niveau avec barrière à fonctionnement automatique", "A aucun passage à niveau"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A aucun passage à niveau."
  },
  {
    q: "Sur une chaussée à plus de deux voies et à double sens de circulation, le dépassement est interdit :",
    options: ["Sur la voie se trouvant à gauche", "Sur la voie du milieu", "Sur toutes les voies"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur la voie se trouvant à gauche."
  },
  {
    q: "Sur une chaussée à deux voies et à double sens, je peux circuler :",
    options: ["Sur la voie de gauche pour effectuer un dépassement", "Sur la voie de gauche façon continue", "Sur la voie de droite seulement"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur la voie de gauche pour effectuer un dépassement."
  },
  {
    q: "Vous circulez par temps de grand vent ; pour dépasser un autre usager:",
    options: ["Vous diminuez l'écart latéral", "Vous maintenez l'écart latéral", "Vous augmentez l'écart latéral"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Vous augmentez l'écart latéral."
  },
  {
    q: "Pour effectuer un croisement la nuit, je dois :",
    options: ["Klaxonner", "Circuler en phare", "Circuler en code", "Circuler en feux de détresse"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Circuler en code."
  },
  {
    q: "Quel est le véhicule qui doit s'arrêter à temps à cause d'un croisement difficile sur un terrain plat ?",
    options: ["Le véhicule léger", "Le véhicule encombrant", "Le véhicule qui veut"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le véhicule encombrant."
  },
  {
    q: "Sur une pente, quel est le véhicule qui doit s'arrêter à temps à cause d'un croisement difficile ?",
    options: ["Le véhicule montant", "Le véhicule descendant", "Le véhicule qui le désire"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le véhicule descendant."
  },
  {
    q: "En agglomération, quel est le véhicule qui doit s'arrêter à temps à cause d'un croisement difficile ?",
    options: ["L'autobus", "Le véhicule qui le désire", "Le camion"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le camion."
  },
  {
    q: "Sur une pente, quel est le véhicule de même catégorie qui doit faire la marche arrière à cause d'un croisement difficile ?",
    options: ["Le véhicule montant", "Le véhicule descendant", "Le véhicule qui veut"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le véhicule descendant."
  },
  {
    q: "Sur une pente, quel est le véhicule qui doit faciliter le passage lors d'un croisement difficile ?",
    options: ["L'autobus chargé", "Le camion", "Le véhicule qui le désire"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le camion."
  },
  {
    q: "Sur une pente, quel est le véhicule qui doit faire la marche arrière à cause d'un croisement difficile ?",
    options: ["Le véhicule isolé", "Le véhicule articulé", "Le véhicule qui veut"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le véhicule isolé."
  },
  {
    q: "La nuit, pour éviter d’être ébloui :",
    options: ["je regarde le bord droit de la chaussée", "je ferme les yeux pendant un court instant", "je porte des verres teintés"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je regarde le bord droit de la chaussée."
  },
  {
    q: "L’écart minimal de vitesse recommandé pour un véhicule qui veut effectuer le dépassement est de :",
    options: ["30 km/h", "25 km/h", "40 km/h", "20 km/h", "10 km/h"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 20 km/h."
  },
  {
    q: "Sur une chaussée à forte déclivité, quel est le véhicule qui doit s’arrêter à temps lorsque le croisement se révèle difficile ?",
    options: ["le véhicule descendant", "le véhicule qui le désire", "le véhicule montant"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : le véhicule descendant."
  },
  {
    q: "Sur une chaussée à double sens :",
    options: ["je peux faire demi-tour", "je ne peux pas faire demi -tour", "je ne peux pas faire marche arrière"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je peux faire demi-tour."
  },
  {
    q: "Les flèches de rabattement m’obligent :",
    options: ["à serrer ma gauche", "à serrer ma droite", "à quitter la chaussée", "à réduire ma vitesse"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : à serrer ma droite."
  },
  {
    q: "Sur une chaussée à double sens comportant plus de deux voies, il est interdit d’emprunter :",
    options: ["la voie la plus à droite", "la voie du milieu", "la voie la plus à gauche"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : la voie la plus à gauche."
  },
  {
    q: "En quoi consiste l'arrêt ?",
    options: ["A l'immobilisation momentanée d'un véhicule, conducteur à bord", "A l'immobilisation de longue durée d'un véhicule, conducteur éloigné", "A l'immobilisation momentanée d'un véhicule, conducteur éloigné"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A l'immobilisation momentanée d'un véhicule, conducteur à bord."
  },
  {
    q: "En quoi consiste le stationnement ?",
    options: ["A l'immobilisation momentanée d'un véhicule, conducteur à bord", "A l'immobilisation momentanée d'un véhicule, conducteur à côté", "A l'immobilisation momentanée d'un véhicule conducteur éloigné", "A l'immobilisation de longue durée d'un véhicule conducteur à bord"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A l'immobilisation momentanée d'un véhicule conducteur éloigné."
  },
  {
    q: "En présence du panneau de \"stationnement interdit\", je suis autorisé à :",
    options: ["Stationner avant le panneau", "Stationner après le panneau", "Stationner avant la prochaine intersection"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Stationner avant le panneau."
  },
  {
    q: "A la rencontre du panneau \"arrêt et stationnement interdits\", l'interdiction commence :",
    options: ["Avant le panneau", "A partir du panneau", "15 mètres après le panneau"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A partir du panneau."
  },
  {
    q: "Le panneau B2b :",
    options: ["interdit le stationnement du côté droit", "interdit de tourner à droite à la prochaine intersection", "oblige à tourner à droite à la prochaine intersection"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : interdit de tourner à droite à la prochaine intersection."
  },
  {
    q: "Le panneau B2a :",
    options: ["interdit de tourner à gauche à la prochaine intersection", "interdit de stationner à gauche dans cette rue", "oblige à tourner à gauche à la prochaine intersection"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : interdit de tourner à gauche à la prochaine intersection."
  },
  {
    q: "La bande jaune discontinue le long du trottoir interdit :",
    options: ["L'arrêt", "Le stationnement", "L'arrêt pour les véhicules légers"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le stationnement."
  },
  {
    q: "Pour tourner à droite, je dois :",
    options: ["Serrer ma droite", "Serrer ma gauche", "Me déporter au milieu de la chaussée"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Serrer ma droite."
  },
  {
    q: "Pour tourner à gauche sur une chaussée à double sens, je dois :",
    options: ["Serrer ma droite", "Me déporter au milieu de la chaussée", "Serrer ma gauche"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Me déporter au milieu de la chaussée."
  },
  {
    q: "Après combien de jours le stationnement devient-il abusif ?",
    options: ["10 jours", "7 jours", "4 jours"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 7 jours."
  },
  {
    q: "Le panneau B7b :",
    options: ["interdit le stationnement à tout véhicule à moteur sauf les camions", "interdit l’accès à tous les véhicules à moteurs", "interdit l’accès à tous les véhicules sauf les"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : interdit l’accès à tous les véhicules à moteurs."
  },
  {
    q: "Que signifie le panneau B9c ?",
    options: ["accès interdit aux chevaux", "accès interdit aux véhicules agricoles à moteur", "accès interdit aux véhicules à traction animale"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : accès interdit aux véhicules à traction animale."
  },
  {
    q: "Quels sont les différents types de stationnement ?",
    options: ["Bataille - créneau - perpendiculaire", "Bataille - épi - créneau", "Epi - créneau - oblique", "En double file - épi – parallèle"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Bataille - épi - créneau."
  },
  {
    q: "A quoi sert le terre-plein central ?",
    options: ["A stationner", "A exposer les marchandises", "A Faire un demi-tour", "A séparer deux chaussées"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A séparer deux chaussées."
  },
  {
    q: "En quittant le stationnement en marche normale pour intégrer la circulation, je dois :",
    options: ["Utiliser le rétroviseur de droite", "Mettre le clignotant de gauche, utiliser le rétroviseur de gauche et m'engager avec prudence", "M'engager rapidement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Mettre le clignotant de gauche, utiliser le rétroviseur de gauche et m'engager avec prudence."
  },
  {
    q: "En sortant d'un garage pour intégrer la circulation, je dois :",
    options: ["Céder le passage aux usagers venant de la droite seulement", "Céder le passage aux usagers venant de la gauche seulement", "Céder le passage aux usagers venant de la droite et de la gauche"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Céder le passage aux usagers venant de la droite et de la gauche."
  },
  {
    q: "En sortant d'un garage pour intégrer la circulation, quelle est la toute première précaution à prendre ?",
    options: ["Jeter un coup d’œil à gauche", "Klaxonner", "Jeter un coup d’œil à droite"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Jeter un coup d’œil à gauche."
  },
  {
    q: "En descendant une longue pente, on doit utiliser :",
    options: ["Le frein à pied seulement", "Le frein à pied et le frein moteur", "Le frein à pied et le frein à main"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le frein à pied et le frein moteur."
  },
  {
    q: "Dans une descente le frein moteur sera puissant si :",
    options: ["Je reste en quatrième vitesse", "Je passe en cinquième vitesse", "Je passe en deuxième"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je passe en deuxième."
  },
  {
    q: "Dans une rue à sens unique, les véhicules peuvent stationner :",
    options: ["Sur le côté droit seulement", "Sur le côté droit ou sur le côté gauche", "Sur le côté gauche seulement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur le côté droit ou sur le côté gauche."
  },
  {
    q: "Quelle est la toute première opération à effectuer par le conducteur pour immobiliser son véhicule roulant en prise directe ?",
    options: ["Débrayer", "Freiner", "Mettre le levier au point mort"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Freiner."
  },
  {
    q: "A la vue d'un obstacle inopiné à vive allure :",
    options: ["Je débraie et je freine", "Je freine en bloquant les roues", "Je freine franchement et je débraie au dernier moment"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je freine franchement et je débraie au dernier moment."
  },
  {
    q: "Où peut-on faire un demi-tour ?",
    options: ["Sur un pont", "Sur une chaussée à sens unique", "Dans un virage", "Sur une chaussée à double sens de circulation"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur une chaussée à double sens de circulation."
  },
  {
    q: "Où peut-on faire la marche arrière ?",
    options: ["Sur un pont", "Sur une chaussée à sens unique", "Sur l'accotement ou sur le trottoir"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur une chaussée à sens unique."
  },
  {
    q: "En marche arrière, peut-on rentrer dans un sens interdit ?",
    options: ["Oui", "Non"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Non."
  },
  {
    q: "La peinture jaune continue sur la bordure du trottoir signifie que :",
    options: ["L'arrêt et le stationnement sont interdits jusqu'à la prochaine intersection", "L'arrêt et le stationnement sont interdits à la hauteur de ce trottoir", "Seul l'arrêt est autorisé"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'arrêt et le stationnement sont interdits à la hauteur de ce trottoir."
  },
  {
    q: "Après avoir heurté un cycliste, je freine et m'arrête après 81 mètres. Je roulais donc à quelle vitesse ?",
    options: ["60 km/h", "90 km/h", "70 km/h"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 90 km/h."
  },
  {
    q: "Par temps de pluie, pour éviter un obstacle qui surgit j'appuie sur la pédale de frein :",
    options: ["Aussi fort que quand la chaussée est sèche", "Plus fort que quand la chaussée est sèche", "Moins fort que quand la chaussée est sèche"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Moins fort que quand la chaussée est sèche."
  },
  {
    q: "Les \"zébras\" sont réservés pour :",
    options: ["Le stationnement d'urgence", "L'arrêt d'urgence", "Tourner et changer de direction", "Rien de tout ce qui précède"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Rien de tout ce qui précède."
  },
  {
    q: "Que signifie le panneau B2c ?",
    options: ["interdit de tourner à gauche", "interdit de faire la marche arrière", "interdit de faire demi-tour jusqu’à la prochaine intersection incluse", "interdit de faire marche arrière jusqu’à la prochaine intersection incluse"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : interdit de faire demi-tour jusqu’à la prochaine intersection incluse."
  },
  {
    q: "A la vue du panneau B6a1 :",
    options: ["je peux stationner avant ou après le panneau", "je peux stationner après le panneau", "je peux stationner devant le panneau", "je ne peux pas stationner avant ni après le panneau"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je peux stationner après le panneau."
  },
  {
    q: "Que signifie le panneau B43?",
    options: ["Stationnement interdit à 30m devant le panneau", "Stationnement interdit à 30m après le panneau", "Fin de vitesse minimale obligatoire"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Fin de vitesse minimale obligatoire."
  },
  {
    q: "La voie de stockage permet aux conducteurs de tourner :",
    options: ["à gauche sans gêner les véhicules venant en sens inverse", "à droite sans gêner les véhicules venant en sens inverse", "au milieu sans gêner les véhicules venant en sens inverse"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : à gauche sans gêner les véhicules venant en sens inverse."
  },
  {
    q: "Sur les bandes et les pistes cyclables :",
    options: ["les automobilistes peuvent s'arrêter pour prendre un passager", "Les piétons peuvent circuler", "Les autos peuvent stationner en cas de panne", "Rien de tout ce qui précède"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Rien de tout ce qui précède."
  },
  {
    q: "Pour suivre un véhicule qui roule à 90 km/h, la distance raisonnable de sécurité à observer derrière ce véhicule est de ?",
    options: ["10m environ", "15m environ", "25m environ"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 25m environ."
  },
  {
    q: "Il commence à pleuvoir, l'adhérence de mes pneumatiques sur la chaussée est :",
    options: ["Aussi bonne que s’il avait plu toute la journée", "Moins bonne que s’il avait plu toute la journée", "Meilleure que s'il avait plu toute la journée"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Moins bonne que s’il avait plu toute la journée."
  },
  {
    q: "La bifurcation, c’est la division d’une autoroute en :",
    options: ["quatre autoroutes", "deux autoroutes", "cinq autoroutes", "trois autoroutes"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : deux autoroutes."
  },
  {
    q: "Le contrôle de la durée d’un stationnement à durée limitée peut se faire :",
    options: ["par horodateur", "par disque de stationnement", "par parcmètre"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : par disque de stationnement."
  },
  {
    q: "La rétrogradation permet de :",
    options: ["ralentir le véhicule dans une descente", "repartir après un ralentissement", "arrêter le véhicule en circulation"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : ralentir le véhicule dans une descente."
  },
  {
    q: "En marche normale :",
    options: ["je dois rouler au milieu de la chaussée", "je dois rouler à gauche de la chaussée", "je dois rouler près du bord droit de la chaussée autant que le permettent son profil et son état", "je dois rouler sur le trottoir"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je dois rouler près du bord droit de la chaussée autant que le permettent son profil et son état."
  },
  {
    q: "En cas d’éclatement d’un pneumatique :",
    options: ["je freine fortement pour m’arrêter", "je décélère progressivement en maintenant la trajectoire", "je contre braque rapidement pour éviter une tête à queue"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : je décélère progressivement en maintenant la trajectoire."
  },
  {
    q: "Le conducteur d’un véhicule qui dérape sur une chaussée glissante doit :",
    options: ["freiner fort pour stopper le véhicule", "braquer calmement pour ramener le véhicule dans sa trajectoire", "accélérer franchement pour redonner de l’adhérence aux roues arrière"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : braquer calmement pour ramener le véhicule dans sa trajectoire."
  },
  {
    q: "Que signifie le panneau C12 ?",
    options: ["obligation d’aller tout droit après le panneau", "obligation d’aller tout droit jusqu’à la prochaine intersection", "circulation à sens unique"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : circulation à sens unique."
  },
  {
    q: "Quelle est la vitesse maximale sur une route à grande circulation pour un candidat dont le permis a moins d'un an d'âge ?",
    options: ["60km/h", "90km/h", "120km/h"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 90km/h."
  },
  {
    q: "A quoi sert la voie d'accélération ?",
    options: ["Permet d'atteindre la vitesse minimale autorisée sur autoroute", "Permet de quitter l'autoroute", "Permet de dépasser les usagers lents"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Permet d'atteindre la vitesse minimale autorisée sur autoroute."
  },
  {
    q: "Que signifie l'arrêt d'urgence ?",
    options: ["Immobilisation forcée", "Arrêt pour faire descendre un passager", "Arrêt d'autobus"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Immobilisation forcée."
  },
  {
    q: "Le triangle pointe en bas au début d'une voie d'accélération :",
    options: ["Permet aux usagers circulant sur autoroute de me céder le passage", "M'oblige à céder le passage aux usagers de l'autoroute", "M'oblige à marquer l'arrêt"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : M'oblige à céder le passage aux usagers de l'autoroute."
  },
  {
    q: "Le trottoir est la partie d'une rue, réservée :",
    options: ["Pour les vendeuses", "Pour les piétons", "Pour le dépassement en cas de bouchon"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Pour les piétons."
  },
  {
    q: "La chaussée est la partie d'une route réservée :",
    options: ["A la circulation de gros camions uniquement", "A la circulation des véhicules", "A la circulation des taxi uniquement"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A la circulation des véhicules."
  },
  {
    q: "La vitesse maximale autorisée en agglomération est :",
    options: ["70km/h", "50km/h", "90km/h", "100km/h"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 50km/h."
  },
  {
    q: "Je suis en panne de carburant sur l'autoroute :",
    options: ["Je vais à pieds chercher du carburant à la station-service la plus proche", "Je me fais remorquer par un autre usager jusqu'à la station-service la plus proche", "J'utilise la cabine d'appel d'urgence pour me faire dépanner", "Je place mon triangle de pré-signalisation"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : J'utilise la cabine d'appel d'urgence pour me faire dépanner."
  },
  {
    q: "Je commets un délit de fuite si je ne m’arrête pas :",
    options: ["lorsque je suis témoin d’un accident", "lorsqu’un agent de sécurité me fait signe de m’arrêter", "lorsque je suis impliqué dans un accident"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : lorsque je suis impliqué dans un accident."
  },
  {
    q: "L’absorption d’alcool :",
    options: ["permet de bien conduire", "augmente le temps de réaction", "permet de bien apprécier les distances", "augmente le champ visuel."],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : augmente le temps de réaction."
  },
  {
    q: "On peut passer le feu rouge allumé à une intersection munie de feux tricolores :",
    options: ["Quand on s'y trouve seul", "Quand on s'y trouve seul tard la nuit", "A aucun moment"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A aucun moment."
  },
  {
    q: "Avant de me mettre au volant :",
    options: ["Je peux prendre de l'alcool", "Je peux prendre de l'alcool sans me soûler", "Je dois m'abstenir de prendre de l'alcool"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je dois m'abstenir de prendre de l'alcool."
  },
  {
    q: "Je suis titulaire du permis de conduire :",
    options: ["Je peux circuler sans l'avoir sur moi", "Je circule toujours avec mon permis de conduire", "Je circule avec une photocopie légalisée de mon permis de conduire"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je circule toujours avec mon permis de conduire."
  },
  {
    q: "Dans quels cas utiliser les avertisseurs sonores ?",
    options: ["pour avertir les autres usagers", "pour rechercher les passagers", "pour saluer les autres usagers"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : pour avertir les autres usagers."
  },
  {
    q: "Quand je suis sur le point d'être dépassé, je dois :",
    options: ["Accélérer", "Serrer ma droite", "M'arrêter"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Serrer ma droite."
  },
  {
    q: "Une bonne conduite :",
    options: ["nécessite une attention soutenue de ma part", "m’oblige à rouler tantôt à gauche tantôt à droite", "me permet de tout regarder sur la route", "m’oblige à éviter tous les trous."],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : nécessite une attention soutenue de ma part."
  },
  {
    q: "Quelle est la distance de sécurité à respecter par deux conducteurs de véhicules roulant à 50 km/h :",
    options: ["10m environ", "15m environ", "20m environ"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 15m environ."
  },
  {
    q: "En prévision d’un long trajet, il est préférable :",
    options: ["de ne pas commencer un traitement médical", "d’arrêter le traitement médical en cours", "de se renseigner auprès de son médecin"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : de se renseigner auprès de son médecin."
  },
  {
    q: "Que dois-je faire en présence d'une flaque d'eau sur la chaussée ?",
    options: ["Accélérer", "Ralentir", "M'arrêter"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Ralentir."
  },
  {
    q: "Quel sera votre comportement si le véhicule qui vous précède s'arrête subitement ?",
    options: ["Je m'arrête et j'apprécie la situation", "Je dépasse rapidement le véhicule", "Je klaxonne"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête et j'apprécie la situation."
  },
  {
    q: "Dans un véhicule pour passagers, on peut charger :",
    options: ["Des passagers et des marchandises", "Des passagers et des animaux", "Des passagers uniquement"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Des passagers uniquement."
  },
  {
    q: "Au volant de son véhicule, avec des passagers à bord :",
    options: ["On peut fumer", "On peut bavarder", "On doit se concentrer sur la conduite"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : On doit se concentrer sur la conduite."
  },
  {
    q: "En cas de crevaison, à défaut de cric et seul à bord de votre véhicule, vous pouvez :",
    options: ["Creuser la chaussée pour changer la roue crevée", "Soulever le véhicule pour changer la roue crevée", "Attendre d'autres usagers de la route pour solliciter de l’aide"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Attendre d'autres usagers de la route pour solliciter de l’aide."
  },
  {
    q: "En cas de panne sur la route et à défaut des triangles de pré signalisation, je peux utiliser :",
    options: ["Des touffes d'herbes", "Les feux de détresse", "La roue-secours"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les feux de détresse."
  },
  {
    q: "Lorsque les piétons sont engagés sur le passage clouté, je dois :",
    options: ["Leur céder le passage", "Klaxonner pour les empêcher de traverser", "Leur demander d'attendre mon passage"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Leur céder le passage."
  },
  {
    q: "Parmi les véhicules suivants, lesquels sont prioritaires ?",
    options: ["Les corbillards", "Les véhicules des sapeurs pompiers en mission", "Les ambulances", "Les véhicules militaires"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les véhicules des sapeurs pompiers en mission."
  },
  {
    q: "Que dois-je faire, à la vue d'une personne traversant ou s'apprêtant à s'engager sur la chaussée, canne blanche levée ?",
    options: ["Je passe rapidement", "Je m'arrête pour la laisser passer", "Je klaxonne"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je m'arrête pour la laisser passer."
  },
  {
    q: "Donner le bon comportement d’un usager sur un lieu d’accident :",
    options: ["alerter – secourir – et protéger", "secourir – protéger – et alerter", "secourir – alerter – et protéger", "rien de tout ce qui précède."],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : rien de tout ce qui précède.."
  },
  {
    q: "Quel est le comportement d'un usager sur un lieu d'accident ?",
    options: ["Alerter, secourir, protéger", "Secourir, protéger, alerter", "Protéger, alerter, secourir"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Protéger, alerter, secourir."
  },
  {
    q: "Pour baliser un lieu d'accident, j'utilise :",
    options: ["Des balises", "Des branchages", "des triangles de pré signalisation"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : des triangles de pré signalisation."
  },
  {
    q: "A quelle distance place-t-on ordinairement les triangles de pré-signalisation sur un lieu d'accident ?",
    options: ["A 30m au moins", "A 100m au moins", "A 200m au moins"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A 200m au moins."
  },
  {
    q: "Quand le blessé d'un accident de la circulation réclame à boire :",
    options: ["Je lui offre de l'eau", "Je lui offre de l'alcool", "Je lui offre du jus de fruit", "Je ne lui donne rien"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne lui donne rien."
  },
  {
    q: "Comment reconnaître une personne asphyxiée ?",
    options: ["Par l'arrêt du mouvement du ventre et de la poitrine", "Par l'arrêt du pouls", "Par le soulèvement du ventre et de la poitrine"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Par l'arrêt du mouvement du ventre et de la poitrine."
  },
  {
    q: "Quels sont les signes qui apparaissent en cas d'entorse ?",
    options: ["Douleur, gonflement, mouvements impossibles", "Douleur, saignement, mouvements possibles", "Douleur, gonflement, mouvements possibles"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Douleur, gonflement, mouvements possibles."
  },
  {
    q: "Il y a hémorragie interne lorsque le sang s'écoule :",
    options: ["A l'extérieur du corps, on le voit couler", "A l'intérieur du corps, on ne le voit pas couler", "A l'intérieur des vaisseaux"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A l'intérieur du corps, on ne le voit pas couler."
  },
  {
    q: "En cas de brûlure grave par le feu, vêtements enflammés :",
    options: ["Je déshabille la victime avant de l'évacuer à l'hôpital", "J'empêche la victime de courir, je l'enroule dans une couverture et je l'évacue à l'hôpital", "Je l'arrose de l'extincteur"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : J'empêche la victime de courir, je l'enroule dans une couverture et je l'évacue à l'hôpital."
  },
  {
    q: "L'hémorragie est :",
    options: ["La sortie du sang hors des vaisseaux sanguins", "Une mauvaise circulation du sang", "Le passage du sang dans le cœur"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La sortie du sang hors des vaisseaux sanguins."
  },
  {
    q: "En cas de brûlure par liquide bouillant ou par vapeur :",
    options: ["Je déshabille la victime, je la douche le plus vite possible", "Je l'enroule de couverture", "Je l'évacue sans rien faire"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je déshabille la victime, je la douche le plus vite possible."
  },
  {
    q: "En cas de projection de l'acide de la batterie dans l'œil d'un individu :",
    options: ["Je rince l'œil pendant au moins 10 minutes avec de l'eau courante et je mets une compresse dessus fermé, puis je l'évacue chez l'ophtalmologiste", "J'instille de l'huile à frein sur l'œil", "Je bande l'œil"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je rince l'œil pendant au moins 10 minutes avec de l'eau courante et je mets une compresse dessus fermé, puis je l'évacue chez l'ophtalmologiste."
  },
  {
    q: "Pour effectuer le dégagement d'urgence d'un blessé de quelques mètres :",
    options: ["Je le roule par terre", "Je le mets au dos", "Je soulève légèrement sa tête, un aide le tire par les pieds en le glissant sur le sol dans l'axe du corps"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je soulève légèrement sa tête, un aide le tire par les pieds en le glissant sur le sol dans l'axe du corps."
  },
  {
    q: "Quel est l'utilité de la Position Latérale de Sécurité (PLS) ?",
    options: ["Elle permet d'être couché sur le dos afin de bien respirer", "Elle permet de rester assis pour empêcher le choc", "Elle permet d'être couché à plat ventre", "Elle permet à la victime d'être couché sur le côté, d\"éviter la chute de la langue en arrière, l’encombrement des voies respiratoires par le sang, le vomissement et la mucosité"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Elle permet à la victime d'être couché sur le côté, d\"éviter la chute de la langue en arrière, l’encombrement des voies respiratoires par le sang, le vomissement et la mucosité."
  },
  {
    q: "Quel est le but du massage cardiaque ?",
    options: ["Le massage cardiaque permet au malade d'éviter le vertige", "Le massage cardiaque permet au malade de bien respirer", "Le massage cardiaque permet de réanimer une victime qui présente un arrêt circulatoire", "Le massage cardiaque permet d'arrêter une hémorragie interne"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le massage cardiaque permet de réanimer une victime qui présente un arrêt circulatoire."
  },
  {
    q: "Quand dit-on qu'il y a luxation ?",
    options: ["Lorsqu'il y a étirement ou déchirure des ligaments", "Lorsque l'os se casse et prend contact avec l'extérieur", "Lorsque les ligaments sont déchirés, l'articulation déboîtée,", "les surfaces articulaires ne sont plus en contact"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Lorsque les ligaments sont déchirés, l'articulation déboîtée,."
  },
  {
    q: "Quand dit-on qu'il y a entorse ?",
    options: ["Lorsque l'os se casse sans saignement", "Lorsque les ligaments sont déchirés, l'articulation déboîtée", "Lorsqu'il y a étirement ou déchirure des ligaments, les surfaces articulaires restent en contact"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Lorsqu'il y a étirement ou déchirure des ligaments, les surfaces articulaires restent en contact."
  },
  {
    q: "Pour le ramassage d'un blessé :",
    options: ["Je dois remuer le blessé et le mettre debout", "Je dois mettre le blessé au dos", "Je dois le remuer le moins possible et respecter le bloc tête – cou – tronc"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je dois le remuer le moins possible et respecter le bloc tête – cou – tronc."
  },
  {
    q: "On appelle fracture :",
    options: ["La rupture brutale d'un os", "La douleur d'un os", "La sortie de l'os hors de l'organisme"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La rupture brutale d'un os."
  },
  {
    q: "On dit qu'il y a fracture fermée lorsque :",
    options: ["L'os a un abcès", "L'os se casse et prend contact avec l'extérieur", "L'os se casse et ne prend pas contact avec l'extérieur"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'os se casse et ne prend pas contact avec l'extérieur."
  },
  {
    q: "On dit qu'il fracture ouverte lorsque :",
    options: ["L'os est courbé", "L'os se casse et ne prend pas contact avec l'extérieur", "L'os se casse et prend contact avec l'extérieur"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'os se casse et prend contact avec l'extérieur."
  },
  {
    q: "Quels peuvent être les signes révélateurs de fatigue au volant ?",
    options: ["Maux de dents - picotements gastriques - lourdeurs des pieds et des bras", "Maux de tête - picotements des yeux - lourdeurs des paupières", "Maux d'estomac - picotements de la peau - crampes aux jambes", "Faim - soif - vertige"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Maux de tête - picotements des yeux - lourdeurs des paupières."
  },
  {
    q: "Secourir un accidenté de la route est-il obligatoire ?",
    options: ["Oui", "Non"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Oui."
  },
  {
    q: "Quel effet l'alcool produit-il sur un conducteur ?",
    options: ["Permet au conducteur de mieux voir", "Permet au conducteur de respecter le code de la route", "Réduit les facultés mentales et physiques du conducteur"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Réduit les facultés mentales et physiques du conducteur."
  },
  {
    q: "Avec le permis de conduire catégorie B, je peux conduire un véhicule :",
    options: ["Poids lourd", "Autobus", "Poids léger"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Poids léger."
  },
  {
    q: "La voiture mesure 4m de long, comment transporter de jour, une échelle de 5m ?",
    options: ["Je fais dépasser l'échelle de 0,5m à l'avant et 0,5m à l'arrière", "Je fais dépasser l'échelle de 1m à l'avant", "Je fais dépasser l'échelle de 1m à l'arrière"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je fais dépasser l'échelle de 1m à l'arrière."
  },
  {
    q: "Mon permis de conduire a 8 mois d'âge, je ne peux rouler à plus de :",
    options: ["100 km/h", "120 km/h", "90 km/h", "60 km/h"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 90 km/h."
  },
  {
    q: "Pour le calcul du nombre de personnes transportées, un enfant compte pour une demi-personne s'il est âgé de :",
    options: ["Moins de 10 ans", "Moins de 12 ans", "Moins de 14 ans"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Moins de 10 ans."
  },
  {
    q: "La remorque doit avoir sa propre carte grise si le PTAC est supérieur à :",
    options: ["450 kg", "500 kg", "400 kg"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 500 kg."
  },
  {
    q: "Pour tourner à gauche sur une chaussée à double sens je dois :",
    options: ["Serrer ma droite", "Me déporter au milieu", "Serrer ma gauche"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Me déporter au milieu."
  },
  {
    q: "Citer les feux obligatoires à l’avant d’un véhicule de tourisme :",
    options: ["deux feux de route (phares) – deux feux de croisement – deux feux stop – deux feux de position – deux indicateurs de changement de direction (clignotants) – deux feux antibrouillard.", "deux phares – deux codes – deux clignotants – deux feux de position – feux plaque d’immatriculation – deux feux antibrouillard.", "deux phares –deux codes – deux clignotants – deux feux de position."],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : deux phares –deux codes – deux clignotants – deux feux de position.."
  },
  {
    q: "Citez les 4 temps d'un moteur à essence :",
    options: ["1ère vitesse - 2ème vitesse - 3ème vitesse - 4ème vitesse", "1ère vitesse - 3ème vitesse - 4ème vitesse - 2ème vitesse", "Admission - compression - explosion - échappement"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Admission - compression - explosion - échappement."
  },
  {
    q: "Lequel des 4 temps ci-après correspond au temps utile ou au temps moteur ?",
    options: ["Echappement", "Admission", "Explosion", "Compression"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Explosion."
  },
  {
    q: "Donnez la position des soupapes à l'explosion :",
    options: ["Les soupapes s'ouvrent", "Les deux soupapes sont fermées", "Les soupapes d'admission et d'échappement sont ouvertes"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les deux soupapes sont fermées."
  },
  {
    q: "Donnez la position du piston à l'explosion :",
    options: ["Le piston monte", "Le piston descend", "Le piston est sur place"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le piston descend."
  },
  {
    q: "Quel est le rôle du carburateur ?",
    options: ["Le carburateur fournit du carburant", "Le carburateur fait tourner le moteur", "Le carburateur produit un mélange gazeux"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le carburateur produit un mélange gazeux."
  },
  {
    q: "Quel est le rôle du radiateur ?",
    options: ["Le radiateur conserve la chaleur du moteur", "Le radiateur aère le moteur", "Le radiateur assure le refroidissement du moteur", "Le radiateur fait tourner le ventilateur"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le radiateur assure le refroidissement du moteur."
  },
  {
    q: "Entre quels organes du moteur se situe la pompe à essence ?",
    options: ["Le radiateur et la pompe à eau", "Le réservoir et le carburateur", "Le filtre à air et le carburateur"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le réservoir et le carburateur."
  },
  {
    q: "Quel est le rôle de la bobine ?",
    options: ["La bobine transforme le courant primaire de la batterie en courant secondaire", "La bobine réduit l'intensité électrique", "La bobine régularise le courant"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : La bobine transforme le courant primaire de la batterie en courant secondaire."
  },
  {
    q: "Quel est le rôle de l'allumeur ?",
    options: ["L'allumeur distribue du courant aux bougies", "L'allumeur fournit du courant au démarreur", "L'allumeur absorbe l'étincelle des bougies"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'allumeur distribue du courant aux bougies."
  },
  {
    q: "De quels éléments le moteur tire-t-il sa force ?",
    options: ["Essence - air - électricité", "Air - essence", "Electricité - eau - essence"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Essence - air - électricité."
  },
  {
    q: "Citer les feux obligatoires à l’arrière d’un véhicule de tourisme :",
    options: ["deux phares – deux codes – deux clignotants - deux feux de position – deux feux stop", "deux feux de position – deux clignotants –deux feux stop – deux cataphotes – feux plaques d’immatriculation", "deux feux de position – deux clignotants – feu plaques d’immatriculation – deux feux stop – deux cataphotes – deux feux antibrouillard –deux feux de détresse."],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : deux feux de position – deux clignotants –deux feux stop – deux cataphotes – feux plaques d’immatriculation."
  },
  {
    q: "Il est interdit d’utiliser des pneumatiques usés :",
    options: ["parce qu’ils assurent une bonne adhérence", "parce qu’ils assurent une mauvaise adhérence", "parce qu’ils assurent une conduite aisée."],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : parce qu’ils assurent une mauvaise adhérence."
  },
  {
    q: "Le véhicule de tourisme possède combien de sortes de freins ?",
    options: ["quatre sortes", "deux sortes", "trois sortes."],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : trois sortes.."
  },
  {
    q: "De gauche à droite, l’ordre des pédales d’un véhicule ordinaire est :",
    options: ["frein, embrayage, accélérateur", "accélérateur, frein, embrayage", "embrayage – frein – accélérateur."],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : embrayage – frein – accélérateur.."
  },
  {
    q: "Le lit nacelle est un dispositif qui permet de transporter dans le véhicule les enfants de :",
    options: ["1 à 6 mois uniquement", "0 à 9 mois", "2 à 10 mois", "3 à 20 mois."],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 0 à 9 mois."
  },
  {
    q: "Le siège homologué (baquet, harnais, réceptacle) sert à transporter dans le véhicule les enfants de :",
    options: ["3 à 4 mois", "4 à 5 mois", "6 à 8 mois", "9 mois à 4 ans. c"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 9 mois à 4 ans. c."
  },
  {
    q: "Quelle anomalie occasionne l'éclatement d'une durit supérieure ?",
    options: ["Le refroidissement du moteur", "L'emballement du moteur", "L'échauffement du moteur"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'échauffement du moteur."
  },
  {
    q: "A quel ennuie vous expose la rupture de la courroie d'alternateur ?",
    options: ["Le circuit de charge coupé", "La charge excessive", "La charge suffisante"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Le circuit de charge coupé."
  },
  {
    q: "Combien de pompes permettent le bon fonctionnement d'un moteur ?",
    options: ["2 pompes", "3 pompes", "4 pompes", "5 pompes"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 3 pompes."
  },
  {
    q: "Avec mon feu d'éclairage, la plaque minéralogique doit être lisible à une distance de :",
    options: ["50m", "20m", "30m"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 20m."
  },
  {
    q: "Quand vérifie-t-on le niveau d'huile dans le moteur ?",
    options: ["Toutes les semaines", "Tous les mois", "Tous les mille kilomètres", "Tous les matins"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Tous les matins."
  },
  {
    q: "Quand vérifie-t-on le niveau de l'eau dans le radiateur ?",
    options: ["Toutes les semaines", "Seulement quand le moteur commence à se chauffer", "Tous les mille kilomètres", "Tous les matins"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Tous les matins."
  },
  {
    q: "Pour compléter le liquide de la batterie, j'utilise :",
    options: ["L'eau de pluie", "L'eau de mer", "L'eau distillée", "L'eau du robinet"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : L'eau distillée."
  },
  {
    q: "Sur un véhicule où trouve-t-on l'instrument qui indique la température de l'eau ?",
    options: ["Dans le moteur", "Sur le radiateur", "Sur le tableau de bord", "Sur le filtre à air"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur le tableau de bord."
  },
  {
    q: "Sur un véhicule où trouve-t-on l'instrument qui indique la pression de l'huile à moteur ?",
    options: ["Dans le moteur", "Sur le tableau de bord", "Sur le carter"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Sur le tableau de bord."
  },
  {
    q: "Le moteur de votre véhicule roulant normalement s'éteint, de quoi peut provenir la panne ?",
    options: ["De l'insuffisance d'huile à moteur", "De l'insuffisance d'eau dans le radiateur", "De la faiblesse de la batterie", "Du manque de carburant"],
    answer: 3,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Du manque de carburant."
  },
  {
    q: "La batterie montée sur le véhicule après une charge correcte ne démarre pas le moteur. Quelle peut être la cause ?",
    options: ["Le manque d'eau sur la batterie", "Les cosses mal serrées sur les bornes", "Le manque de carburant", "La défectuosité de l'alternateur"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les cosses mal serrées sur les bornes."
  },
  {
    q: "L'eau du radiateur bouillonne, que doit-on faire ?",
    options: ["Arrêter le moteur et mettre de l'eau dans le radiateur", "Poursuivre sa route", "Arrêter le moteur, le laisser se refroidir et mettre de l'eau après", "Arrêter le véhicule, ouvrir le radiateur pour laisser dégager la chaleur"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Arrêter le moteur, le laisser se refroidir et mettre de l'eau après."
  },
  {
    q: "Quelles sont les pièces administratives obligatoires d'un véhicule automobile ?",
    options: ["- La carte grise - Le certificat d'assurance - La vignette de l'année en cours - La visite technique", "- Le permis de conduire - L'Attestation de réglage phares - Le papier d'achat - La quittance de la douane", "- La visite technique - Le permis de conduire - La quittance de la douane - L'Attestation de réglage phares"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : - La carte grise - Le certificat d'assurance - La vignette de l'année en cours - La visite technique."
  },
  {
    q: "Un véhicule léger possède combien de roues ?",
    options: ["4", "5", "6"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 5."
  },
  {
    q: "Une automobile est autorisée à circuler :",
    options: ["Sans plaque d'immatriculation, avec assurance", "Avec la plaque d'immatriculation portant le numéro du châssis", "Avec la plaque d'immatriculation de la Direction des Transports Terrestres"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Avec la plaque d'immatriculation de la Direction des Transports Terrestres."
  },
  {
    q: "A quoi servent les feux de route ?",
    options: ["A éclairer jusqu'à 100m", "A éclairer jusqu'à 30m", "A éclairer au delà de 150m"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A éclairer jusqu'à 100m."
  },
  {
    q: "Quels feux utilisez-vous la nuit, quand vous êtes derrière un autre usager à faible distance sur une route mal éclairée ?",
    options: ["Les feux de route", "Les feux de croisement", "Les feux de position"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les feux de croisement."
  },
  {
    q: "Quels feux utilisez-vous en stationnement en bordure d'une route mal éclairée ?",
    options: ["Les feux de détresse", "Les feux de croisement", "Les feux de position"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Les feux de position."
  },
  {
    q: "Les feux de détresse sont utilisés :",
    options: ["Pour indiquer que l’on va tout droit", "Pour faire marche arrière", "Pour indiquer que l’on est en panne", "Pour indiquer qu’on est en convoi", "Pour indiquer que l’on est pressé"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Pour indiquer que l’on est en panne."
  },
  {
    q: "Sans feux arrière la nuit :",
    options: ["Je peux circuler sur une chaussée à double sens", "Je peux circuler sur une chaussée à sens unique", "Je ne peux pas circuler"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Je ne peux pas circuler."
  },
  {
    q: "A quoi sert le triangle de pré-signalisation ?",
    options: ["A signaler la positon d’un véhicule en panne sur la chaussée", "A permettre de signaler la présence d’un véhicule en stationnement", "A signaler un arrêt"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A signaler la positon d’un véhicule en panne sur la chaussée."
  },
  {
    q: "A quoi sert la ceinture de sécurité ?",
    options: ["A maintenir efficacement les usagers sur leurs sièges en cas d’accident ?", "A fixer le siège du conducteur", "Au bon vouloir du conducteur"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A maintenir efficacement les usagers sur leurs sièges en cas d’accident ?."
  },
  {
    q: "A quoi sert l’extincteur ?",
    options: ["A éteindre un début d’incendie sur un véhicule", "A secourir un blessé", "A refroidir le moteur"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A éteindre un début d’incendie sur un véhicule."
  },
  {
    q: "La roue secours :",
    options: ["Est obligatoire pour tout déplacement", "N'est pas obligatoire lorsqu'on circule en ville", "Est obligatoire seulement pour les longs voyages"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Est obligatoire pour tout déplacement."
  },
  {
    q: "Pour vidanger un moteur, il faut tenir compte :",
    options: ["Du kilométrage parcouru", "De la viscosité de l'huile", "De la fluidité de l'huile", "De la noirceur de l'huile"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Du kilométrage parcouru."
  },
  {
    q: "La vérification de l'huile à frein se fait :",
    options: ["Tous les jours", "Tous les mois", "Au bon vouloir du conducteur"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Tous les jours."
  },
  {
    q: "A quelle distance les feux de route éclairent la route, par temps normal ?",
    options: ["50m environ", "100m environ", "150m environ"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : 100m environ."
  },
  {
    q: "Quels feux utilisez-vous lorsque votre véhicule suit un autre usager à faible distance ?",
    options: ["Feux de route", "Feux de croisement", "Feux de détresse"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Feux de croisement."
  },
  {
    q: "Un véhicule est équipé de combien de rétroviseurs obligatoires ?",
    options: ["Un", "Deux", "Trois"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Deux."
  },
  {
    q: "Quel est le circuit d'alimentation en carburant d'un moteur ?",
    options: ["Réservoir à essence - pompe à essence - carburateur", "Réservoir à essence - carburateur - pompe à essence", "Pompe à essence - réservoir à essence – carburateur"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : Réservoir à essence - pompe à essence - carburateur."
  },
  {
    q: "Sur mon véhicule, en roulant je peux contrôler visuellement :",
    options: ["certains niveaux", "l’état des pneumatiques", "l’état des courroies."],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : certains niveaux."
  },
  {
    q: "Quelle pièce officielle permet d’identifier le propriétaire d’un véhicule ?",
    options: ["la police d’assurance", "la carte grise", "l’attestation de réglage phare"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : la carte grise."
  },
  {
    q: "Pour un véhicule léger de transport privé la visite technique doit s’effectuer ?",
    options: ["tous les ans", "tous les six mois", "tous les trois mois"],
    answer: 0,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : tous les ans."
  },
  {
    q: "A quoi sert le contrat d’assurance est valable :",
    options: ["A couvrir les dégâts causés lors d’un accident", "A couvrir les surcharges", "A couvrir les dégâts causés à autrui"],
    answer: 2,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : A couvrir les dégâts causés à autrui."
  },
  {
    q: "Le contrat d’assurance est valable :",
    options: ["sans la visite technique", "avec la visite technique", "avec la vignette"],
    answer: 1,
    explanation: "D'après le Manuel officiel du candidat (Bénin) : avec la visite technique."
  }
];
