export const Events: IEventItem[] = [
    {
        id: '1',
        owner: 'Misael Bazn',
        category: 'ARTE',
        subcategories: ['ART_3', 'ART_10'],
        title: 'Hablemos del Concierto de Billie',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 40,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Únete a una charla sobre el último concierto de Billie Eilish. Discutiremos su música, estilo y el impacto en la cultura pop.',
        rules: [
            'Respetar las opiniones de los demás.',
            'No se permite el uso de teléfonos durante la charla.',
            'Puntualidad es clave.'
        ]
    },
    {
        id: '2',
        owner: 'Juan Pérez',
        category: 'GYM',
        subcategories: ['GYM_1', 'GYM_4'],
        title: 'Partido de fútbol el domingo',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 22,
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        banner: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Ven a disfrutar de un partido de fútbol amistoso. Todos los niveles son bienvenidos. ¡Trae tu mejor actitud y energía!',
        rules: [
            'Juego limpio en todo momento.',
            'Traer ropa deportiva adecuada.',
            'Confirmar asistencia 24 horas antes.'
        ]
    },
    {
        id: '3',
        owner: 'María López',
        category: 'TECHNOLOGY',
        subcategories: ['TECH_1', 'TECH_2'],
        title: 'Desarrollo de nuevas tecnologías',
        type: 'VIRTUAL',
        gender: 'F',
        totalPeople: 100,
        date: new Date(new Date().setDate(new Date().getDate() + 3)),
        banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Explora las últimas tendencias en desarrollo tecnológico. Aprende sobre herramientas y metodologías innovadoras.',
        rules: [
            'Mantener el micrófono en silencio cuando no se hable.',
            'Participar activamente en las discusiones.',
            'Respetar el tiempo de los demás.'
        ]
    },
    {
        id: '4',
        owner: 'Carlos Torres',
        category: 'SOCIAL',
        subcategories: ['SOCIAL_1', 'SOCIAL_3'],
        title: 'Cata de vinos en el centro',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 20,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Disfruta de una noche de cata de vinos seleccionados. Aprende sobre las variedades y maridajes de vinos de alta calidad.',
        rules: [
            'No se permite el consumo excesivo de alcohol.',
            'Respetar las indicaciones del sommelier.',
            'Confirmar asistencia con anticipación.'
        ]
    },
    {
        id: '5',
        owner: 'Lucía Martínez',
        category: 'ARTE',
        subcategories: ['ART_5', 'ART_6'],
        title: 'Taller de improvisación teatral',
        type: 'HYBRID',
        gender: 'F',
        totalPeople: 30,
        date: new Date(new Date().setDate(new Date().getDate() + 5)),
        banner: 'https://images.unsplash.com/photo-1518607692851-0b0f4c8b5e6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende técnicas de improvisación teatral en este taller dinámico. Ideal para principiantes y entusiastas del teatro.',
        rules: [
            'Participar con mente abierta.',
            'No interrumpir a los compañeros.',
            'Traer ropa cómoda.'
        ]
    },
    {
        id: '6',
        owner: 'Roberto Gómez',
        category: 'GYM',
        subcategories: ['GYM_3'],
        title: 'Torneo relámpago de tenis',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 16,
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        banner: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Participa en un torneo rápido de tenis. Diviértete y compite en un ambiente amistoso.',
        rules: [
            'Traer tu propia raqueta.',
            'Jugar con deportividad.',
            'Llegar 15 minutos antes del inicio.'
        ]
    },
    {
        id: '7',
        owner: 'Sofía Ramírez',
        category: 'TECHNOLOGY',
        subcategories: ['TECH_3', 'TECH_4'],
        title: 'Introducción a la ciberseguridad',
        type: 'VIRTUAL',
        gender: 'F',
        totalPeople: 50,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende los conceptos básicos de ciberseguridad y cómo proteger tus datos en línea.',
        rules: [
            'No compartir enlaces externos.',
            'Participar con preguntas relevantes.',
            'Respetar la privacidad de los demás.'
        ]
    },
    {
        id: '8',
        owner: 'Daniela Rojas',
        category: 'SOCIAL',
        subcategories: ['SOCIAL_2', 'SOCIAL_4'],
        title: 'Experiencia gastronómica en Japón',
        type: 'VIRTUAL',
        gender: 'F',
        totalPeople: 80,
        date: new Date(new Date().setDate(new Date().getDate() + 7)),
        banner: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Sumérgete en la cultura culinaria japonesa. Aprende sobre platos tradicionales y técnicas de cocina.',
        rules: [
            'Tener ingredientes listos antes de comenzar.',
            'Seguir las instrucciones del chef.',
            'Participar activamente en la preparación.'
        ]
    },
    {
        id: '9',
        owner: 'Alejandro Fernández',
        category: 'ARTE',
        subcategories: ['ART_4', 'ART_1'],
        title: 'Workshop de acuarelas',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 15,
        date: new Date(new Date().setDate(new Date().getDate() + 3)),
        banner: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende técnicas básicas y avanzadas de pintura con acuarelas. Ideal para artistas principiantes y avanzados.',
        rules: [
            'Traer tus propios materiales.',
            'Respetar el espacio de trabajo de los demás.',
            'No comer ni beber en el área de trabajo.'
        ]
    },
    {
        id: '10',
        owner: 'Cecilia López',
        category: 'GYM',
        subcategories: ['GYM_4', 'GYM_6'],
        title: 'Clase de yoga al amanecer',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 25,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Comienza tu día con una sesión relajante de yoga al aire libre. Perfecto para todos los niveles.',
        rules: [
            'Traer tu propia esterilla.',
            'Llegar 10 minutos antes del inicio.',
            'Mantener el silencio durante la sesión.'
        ]
    },
    {
        id: '11',
        owner: 'Esteban Castro',
        category: 'TECHNOLOGY',
        subcategories: ['TECH_5', 'TECH_6'],
        title: 'Cómo empezar en inteligencia artificial',
        type: 'VIRTUAL',
        gender: 'M',
        totalPeople: 120,
        date: new Date(new Date().setDate(new Date().getDate() + 6)),
        banner: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Descubre los fundamentos de la inteligencia artificial y cómo aplicarla en proyectos reales.',
        rules: [
            'Tener conocimientos básicos de programación.',
            'Participar en las actividades prácticas.',
            'No grabar la sesión sin permiso.'
        ]
    },
    {
        id: '12',
        owner: 'Valeria Gómez',
        category: 'SOCIAL',
        subcategories: ['SOCIAL_7', 'SOCIAL_8'],
        title: 'Taller de mindfulness',
        type: 'HYBRID',
        gender: 'F',
        totalPeople: 40,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1506126613408-eca07a687353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende técnicas de mindfulness para reducir el estrés y mejorar tu bienestar emocional.',
        rules: [
            'Participar con mente abierta.',
            'Apagar dispositivos electrónicos.',
            'Respetar el espacio de los demás.'
        ]
    },
    {
        id: '13',
        owner: 'Pablo Sánchez',
        category: 'ARTE',
        subcategories: ['ART_7', 'ART_3'],
        title: 'Clase de salsa para principiantes',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 30,
        date: new Date(new Date().setDate(new Date().getDate() + 4)),
        banner: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende los pasos básicos de salsa en un ambiente divertido y relajado. ¡No se necesita experiencia previa!',
        rules: [
            'Traer zapatos cómodos.',
            'Respetar el espacio de baile de los demás.',
            'Confirmar asistencia con anticipación.'
        ]
    },
    {
        id: '14',
        owner: 'Natalia Fernández',
        category: 'GYM',
        subcategories: ['GYM_2'],
        title: 'Partido amistoso de basket',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 10,
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        banner: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Únete a un partido amistoso de baloncesto. Diviértete y mejora tus habilidades en la cancha.',
        rules: [
            'Traer tu propia botella de agua.',
            'Jugar con deportividad.',
            'Llegar 15 minutos antes del inicio.'
        ]
    },
    {
        id: '15',
        owner: 'Fernando Ruiz',
        category: 'TECHNOLOGY',
        subcategories: ['TECH_7', 'TECH_8'],
        title: 'Introducción a blockchain y criptomonedas',
        type: 'VIRTUAL',
        gender: 'M',
        totalPeople: 150,
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        banner: 'https://images.unsplash.com/photo-1622630998477-9422e8e8a9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende los conceptos básicos de blockchain y cómo funcionan las criptomonedas.',
        rules: [
            'Participar con preguntas relevantes.',
            'No compartir enlaces externos.',
            'Respetar el tiempo de los demás.'
        ]
    },
    {
        id: '16',
        owner: 'Camila Torres',
        category: 'SOCIAL',
        subcategories: ['SOCIAL_1', 'SOCIAL_4'],
        title: 'Cocina mexicana para principiantes',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 18,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende a preparar platillos tradicionales mexicanos en este taller práctico.',
        rules: [
            'Traer tus propios utensilios de cocina.',
            'Seguir las instrucciones del chef.',
            'No comer durante la preparación.'
        ]
    },
    {
        id: '17',
        owner: 'Lucas Moreno',
        category: 'ARTE',
        subcategories: ['ART_8', 'ART_9'],
        title: 'Taller de escritura creativa',
        type: 'HYBRID',
        gender: 'M',
        totalPeople: 35,
        date: new Date(new Date().setDate(new Date().getDate() + 8)),
        banner: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Explora tu creatividad a través de la escritura. Aprende técnicas para desarrollar historias únicas.',
        rules: [
            'Traer tu propio cuaderno y bolígrafo.',
            'Respetar las opiniones de los demás.',
            'Participar activamente en los ejercicios.'
        ]
    },
    {
        id: '18',
        owner: 'Andrea Serrano',
        category: 'GYM',
        subcategories: ['GYM_5', 'GYM_6'],
        title: 'Entrenamiento para maratón',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 50,
        date: new Date(new Date().setDate(new Date().getDate() + 5)),
        banner: 'https://images.unsplash.com/photo-1517343985841-8bda927b9e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Prepárate para tu próximo maratón con este entrenamiento guiado por expertos.',
        rules: [
            'Traer ropa deportiva adecuada.',
            'Hidratarse antes y después del entrenamiento.',
            'Seguir las indicaciones del entrenador.'
        ]
    },
    {
        id: '19',
        owner: 'Gabriel Mendoza',
        category: 'TECHNOLOGY',
        subcategories: ['TECH_9', 'TECH_10'],
        title: 'React para principiantes',
        type: 'VIRTUAL',
        gender: 'M',
        totalPeople: 200,
        date: new Date(),
        banner: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Aprende los fundamentos de React y cómo construir aplicaciones web modernas.',
        rules: [
            'Tener conocimientos básicos de JavaScript.',
            'Participar en las actividades prácticas.',
            'No grabar la sesión sin permiso.'
        ]
    },
    {
        id: '20',
        owner: 'Elena Rodríguez',
        category: 'SOCIAL',
        subcategories: ['SOCIAL_5', 'SOCIAL_6'],
        title: 'Tendencias en moda para el 2025',
        type: 'HYBRID',
        gender: 'F',
        totalPeople: 60,
        date: new Date(new Date().setDate(new Date().getDate() + 3)),
        banner: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Descubre las últimas tendencias en moda y cómo incorporarlas en tu estilo personal.',
        rules: [
            'Participar con mente abierta.',
            'No interrumpir a los expositores.',
            'Respetar las opiniones de los demás.'
        ]
    },
];



const today = new Date();
const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

export const Categories = [
    {
        id: 'ART',
        type: 'ARTE',
        options: ['ART_1', 'ART_2', 'ART_3', 'ART_4', 'ART_5', 'ART_6', 'ART_7', 'ART_8', 'ART_9']
    },
    {
        id: 'GYM',
        type: 'GYM',
        options: ['GYM_1', 'GYM_2', 'GYM_3', 'GYM_4', 'GYM_5', 'GYM_6']
    },
    {
        id: 'SOCIAL',
        type: 'SOCIAL',
        options: ['SOCIAL_1', 'SOCIAL_2', 'SOCIAL_3', 'SOCIAL_4', 'SOCIAL_5', 'SOCIAL_6', 'SOCIAL_7', 'SOCIAL_8']
    },
    {
        id: 'TECHNOLOGY',
        type: 'TECHNOLOGY',
        options: ['TECH_1', 'TECH_2', 'TECH_3', 'TECH_4', 'TECH_5', 'TECH_6', 'TECH_7', 'TECH_8', 'TECH_9', 'TECH_10']
    }
];

export const Types: ITypes[] = [
    {
        name: 'FOR_YOU'
    },
    {
        name: 'AGENDA'
    },
    {
        name: 'VIRTUAL'
    },
    {
        name: 'IN_PERSON'
    },
    {
        name: 'HYBRID'
    }
]