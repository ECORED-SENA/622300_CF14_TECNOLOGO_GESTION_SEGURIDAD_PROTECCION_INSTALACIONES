export default {
  global: {
    Name: 'Administración, gestión de calidad y plan de mejoramiento',
    Description:
      'La administración del servicio de seguridad integra procesos operativos, administrativos, tecnológicos y documentales para garantizar continuidad, calidad y control. La gestión de información, los hallazgos, las no conformidades y las acciones preventivas y correctivas permiten fortalecer el desempeño. La mejora continua y los planes de mejoramiento organizan acciones, responsables, recursos e indicadores para optimizar procedimientos y gestionar riesgos institucionales eficazmente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo: 'Seguridad institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Esquema de trabajo en seguridad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Informes técnicos de seguridad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evaluación del servicio de seguridad',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Supervisión operativa',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Auditoría documental',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Evaluación integral del servicio',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Importancia estratégica de la evaluación ',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación estratégica del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'El servicio al cliente como pilar de la estrategia competitiva',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fundamentos conceptuales de la experiencia del cliente',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Calidad de servicio y satisfacción del cliente',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'El proceso de evaluación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Métricas clave: satisfacción, recomendación y lealtad',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Análisis e interpretación de los resultados',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'De la satisfacción a la fidelización',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'La gestión de quejas como oportunidad de mejora continua ',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Administración del servicio de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Acciones preventivas y correctivas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fuentes de información',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Evaluación de la información',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gestión de la información en seguridad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gestión documental',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'NTC-ISO 9001 Sistemas de gestión de la calidad',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Hallazgos',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'No conformidades',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Problemas y solución de problemas',
            hash: 't_3_9',
          },
          {
            numero: '3.10',
            titulo: 'Mejora continua',
            hash: 't_3_10',
          },
          {
            numero: '3.11',
            titulo: 'Plan de mejoramiento',
            hash: 't_3_11',
          },
          {
            numero: '3.12',
            titulo: 'Plan de mejoramiento organizacional',
            hash: 't_3_12',
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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
