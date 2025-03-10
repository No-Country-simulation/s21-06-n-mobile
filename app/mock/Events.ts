export const Events: IEventItem[] = [
    {
        id: '1',
        owner: 'Misael Bazn',
        category: 'Artes e intereses',
        subcategories: ['Música', 'Video Juegos'],
        title: 'Hablemos del Concierto de Billie',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 40,
        date: new Date()
    },
    {
        id: '2',
        owner: 'Juan Pérez',
        category: 'Deportes',
        subcategories: ['Fútbol', 'Presencial'],
        title: 'Partido de fútbol el domingo',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 22,
        date: new Date(new Date().setDate(new Date().getDate() + 1))
    },
    {
        id: '3',
        owner: 'María López',
        category: 'Tecnología',
        subcategories: ['Desarrollo', 'Virtual'],
        title: 'Desarrollo de nuevas tecnologías',
        type: 'VIRTUAL',
        gender: 'F',
        totalPeople: 100,
        date: new Date(new Date().setDate(new Date().getDate() + 3))
    },
    {
        id: '4',
        owner: 'Carlos Torres',
        category: 'Social y estilo de vida',
        subcategories: ['Comida', 'Salidas'],
        title: 'Cata de vinos en el centro',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 20,
        date: new Date()
    },
    {
        id: '5',
        owner: 'Lucía Martínez',
        category: 'Artes e intereses',
        subcategories: ['Teatro', 'Actuación'],
        title: 'Taller de improvisación teatral',
        type: 'HYBRID',
        gender: 'F',
        totalPeople: 30,
        date: new Date(new Date().setDate(new Date().getDate() + 5))
    },
    {
        id: '6',
        owner: 'Roberto Gómez',
        category: 'Deportes',
        subcategories: ['Tenis'],
        title: 'Torneo relámpago de tenis',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 16,
        date: new Date(new Date().setDate(new Date().getDate() + 2))
    },
    {
        id: '7',
        owner: 'Sofía Ramírez',
        category: 'Tecnología',
        subcategories: ['Ciberseguridad', 'Hacking'],
        title: 'Introducción a la ciberseguridad',
        type: 'VIRTUAL',
        gender: 'F',
        totalPeople: 50,
        date: new Date()
    },
    {
        id: '8',
        owner: 'Daniela Rojas',
        category: 'Social y estilo de vida',
        subcategories: ['Viajes', 'Cultura'],
        title: 'Experiencia gastronómica en Japón',
        type: 'VIRTUAL',
        gender: 'F',
        totalPeople: 80,
        date: new Date(new Date().setDate(new Date().getDate() + 7))
    },
    {
        id: '9',
        owner: 'Alejandro Fernández',
        category: 'Artes e intereses',
        subcategories: ['Pintura', 'Arte'],
        title: 'Workshop de acuarelas',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 15,
        date: new Date(new Date().setDate(new Date().getDate() + 3))
    },
    {
        id: '10',
        owner: 'Cecilia López',
        category: 'Deportes',
        subcategories: ['Yoga', 'Salud'],
        title: 'Clase de yoga al amanecer',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 25,
        date: new Date()
    },
    {
        id: '11',
        owner: 'Esteban Castro',
        category: 'Tecnología',
        subcategories: ['IA', 'Machine Learning'],
        title: 'Cómo empezar en inteligencia artificial',
        type: 'VIRTUAL',
        gender: 'M',
        totalPeople: 120,
        date: new Date(new Date().setDate(new Date().getDate() + 6))
    },
    {
        id: '12',
        owner: 'Valeria Gómez',
        category: 'Social y estilo de vida',
        subcategories: ['Meditación', 'Bienestar'],
        title: 'Taller de mindfulness',
        type: 'HYBRID',
        gender: 'F',
        totalPeople: 40,
        date: new Date()
    },
    {
        id: '13',
        owner: 'Pablo Sánchez',
        category: 'Artes e intereses',
        subcategories: ['Danza', 'Música'],
        title: 'Clase de salsa para principiantes',
        type: 'IN_PERSON',
        gender: 'M',
        totalPeople: 30,
        date: new Date(new Date().setDate(new Date().getDate() + 4))
    },
    {
        id: '14',
        owner: 'Natalia Fernández',
        category: 'Deportes',
        subcategories: ['Basket'],
        title: 'Partido amistoso de basket',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 10,
        date: new Date(new Date().setDate(new Date().getDate() + 2))
    },
    {
        id: '15',
        owner: 'Fernando Ruiz',
        category: 'Tecnología',
        subcategories: ['Blockchain', 'Criptomonedas'],
        title: 'Introducción a blockchain y criptomonedas',
        type: 'VIRTUAL',
        gender: 'M',
        totalPeople: 150,
        date: new Date(new Date().setDate(new Date().getDate() + 1))
    },
    {
        id: '16',
        owner: 'Camila Torres',
        category: 'Social y estilo de vida',
        subcategories: ['Comida', 'Cultura'],
        title: 'Cocina mexicana para principiantes',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 18,
        date: new Date()
    },
    {
        id: '17',
        owner: 'Lucas Moreno',
        category: 'Artes e intereses',
        subcategories: ['Escritura', 'Poesía'],
        title: 'Taller de escritura creativa',
        type: 'HYBRID',
        gender: 'M',
        totalPeople: 35,
        date: new Date(new Date().setDate(new Date().getDate() + 8))
    },
    {
        id: '18',
        owner: 'Andrea Serrano',
        category: 'Deportes',
        subcategories: ['Running', 'Salud'],
        title: 'Entrenamiento para maratón',
        type: 'IN_PERSON',
        gender: 'F',
        totalPeople: 50,
        date: new Date(new Date().setDate(new Date().getDate() + 5))
    },
    {
        id: '19',
        owner: 'Gabriel Mendoza',
        category: 'Tecnología',
        subcategories: ['Programación', 'Web'],
        title: 'React para principiantes',
        type: 'VIRTUAL',
        gender: 'M',
        totalPeople: 200,
        date: new Date()
    },
    {
        id: '20',
        owner: 'Elena Rodríguez',
        category: 'Social y estilo de vida',
        subcategories: ['Moda', 'Tendencias'],
        title: 'Tendencias en moda para el 2025',
        type: 'HYBRID',
        gender: 'F',
        totalPeople: 60,
        date: new Date(new Date().setDate(new Date().getDate() + 3))
    },
];

const today = new Date();
const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

export const Categories = [
    { category: 'Artes e intereses', options: ['Arte', 'Cultura', 'Música', 'Pintura', 'Teatro', 'Actuación', 'Danza', 'Escritura', 'Poesía'] },
    { category: 'Deportes', options: ['Fútbol', 'Basket', 'Tenis', 'Yoga', 'Running', 'Salud'] },
    { category: 'Social y estilo de vida', options: ['Comida', 'Viajes', 'Salidas', 'Cultura', 'Moda', 'Tendencias', 'Meditación', 'Bienestar'] },
    { category: 'Tecnología', options: ['Desarrollo', 'Virtual', 'Ciberseguridad', 'Hacking', 'IA', 'Machine Learning', 'Blockchain', 'Criptomonedas', 'Programación', 'Web'] }
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