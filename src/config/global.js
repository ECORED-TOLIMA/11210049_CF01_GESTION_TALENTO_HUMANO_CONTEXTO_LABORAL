export default {
  global: {
    Name: 'Ética y gestión del talento humano en el contexto organizacional',
    Description:
      'El componente formativo desarrolla la capacidad de comprender la ética como fundamento de la gestión del talento humano. Aborda los principios y valores éticos, las relaciones interpersonales, la cultura y el clima organizacional, y la inteligencia emocional, con el fin de orientar decisiones justas y construir ambientes laborales respetuosos en las organizaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/ilustracion.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la ética',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'La ética y su importancia', hash: 't_1_1' },
          {
            numero: '1.2',
            titulo: 'Principios y valores éticos universales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ética individual y ética organizacional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'La ética aplicada al talento humano',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relaciones interpersonales en el entorno laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de relaciones interpersonales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Alteridad, respeto y convivencia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cuidar las relaciones en el trabajo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Del personal al talento humano',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Portafolio institucional y cultura organizacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Políticas y procedimientos organizacionales',
            hash: 't_3_3',
          },
          { numero: '3.4', titulo: 'Clima organizacional', hash: 't_3_4' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inteligencia emocional en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'La inteligencia emocional y su importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes de la inteligencia emocional',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estrategias para manejar las emociones',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alteridad',
      significado:
        'capacidad de reconocer al otro como un ser diferente, con su propia historia, dignidad y perspectiva, y de relacionarse con él desde el reconocimiento y no desde la negación de su diferencia.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'percepción colectiva que tienen los integrantes de una organización sobre el ambiente de trabajo, influida por factores como liderazgo, comunicación, equidad, desarrollo y relaciones interpersonales.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'conjunto de valores, creencias, normas y prácticas compartidas que definen la identidad de una organización y orientan el comportamiento de sus integrantes.',
    },
    {
      termino: 'Ética',
      significado:
        'disciplina filosófica que estudia la conducta humana, sus principios y los criterios para distinguir lo correcto de lo incorrecto en las acciones de las personas.',
    },
    {
      termino: 'Gestión del talento humano',
      significado:
        'conjunto de prácticas, políticas y procesos orientados a atraer, desarrollar, motivar y retener a las personas que contribuyen al logro de los objetivos institucionales.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'capacidad de reconocer las emociones propias y ajenas, regularlas y emplearlas para orientar el pensamiento, la conducta y las relaciones.',
    },
    {
      termino: 'Meritocracia',
      significado:
        'criterio de asignación de cargos, ascensos y reconocimientos según las capacidades y los logros demostrados, y no según vínculos personales o afinidades.',
    },
    {
      termino: 'Política organizacional',
      significado:
        'lineamiento general establecido por la organización para orientar decisiones y comportamientos en áreas específicas.',
    },
    {
      termino: 'Respeto',
      significado:
        'actitud de reconocimiento y consideración hacia la dignidad, ideas, tiempos, necesidades y derechos de los demás.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cortina, A. (2013). <em>Ética de la razón cordial: Educar en la ciudadanía en el siglo XXI</em>. Ediciones Nobel.',
    },
    {
      referencia:
        'Goleman, D. (2012). <em>La inteligencia emocional en la empresa</em>. Vergara.',
      link: 'https://www.bibliotecadigitaldebogota.gov.co/resources/3713806/',
    },
    {
      referencia:
        'Kant, I. (2013). <em>Fundamentación de la metafísica de las costumbres</em> (M. García Morente, Trad.). Tecnos. (Obra original publicada en 1785).',
    },
    {
      referencia:
        'Levinas, E. (2000). <em>Ética e infinito</em> (J. M. Ayuso Díez, Trad.). Gráficas Rógar.',
    },
    {
      referencia:
        'Llano, C. (2008). <em>El empresario y su mundo</em>. McGraw-Hill.',
    },
    {
      referencia:
        'Maslow, A. H. (2005). <em>El management según Maslow: Una visión humanista para la empresa de hoy</em>. Paidós.',
    },
    {
      referencia:
        'Ministerio de Trabajo. (2015). <em>Código Sustantivo del Trabajo</em>. República de Colombia.',
    },
    {
      referencia:
        'Robbins, S. P., y Judge, T. A. (2017). <em>Comportamiento organizacional</em> (17.ª ed.). Pearson.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
