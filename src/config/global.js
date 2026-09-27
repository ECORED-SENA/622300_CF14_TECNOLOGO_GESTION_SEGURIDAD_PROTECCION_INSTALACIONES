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
      termino: 'Acción correctiva',
      significado:
        'Medida implementada para eliminar la causa de una no conformidad o situación no deseada y evitar que vuelva a ocurrir.',
    },
    {
      termino: 'Análisis de causa raíz',
      significado:
        'Proceso utilizado para identificar los factores que originan una falla, incidente o no conformidad y orientar la definición de acciones correctivas.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'Metodología de mejora continua basada en las etapas de planear, hacer, verificar y actuar, utilizada para gestionar y optimizar procesos.',
    },
    {
      termino: 'Control de registros',
      significado:
        'Conjunto de actividades destinadas a identificar, almacenar, proteger, consultar, conservar y disponer adecuadamente los registros generados durante la operación.',
    },
    {
      termino: 'Gestión de la calidad',
      significado:
        'Conjunto de actividades orientadas a dirigir y controlar una organización respecto al cumplimiento de requisitos y al mejoramiento de su desempeño.',
    },
    {
      termino: 'Gestión de la información',
      significado:
        'Proceso mediante el cual se recopila, organiza, analiza, protege y utiliza la información necesaria para apoyar la operación y la toma de decisiones.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'Conjunto de actividades relacionadas con la organización, conservación, actualización, disponibilidad y control de los documentos y registros del servicio.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'Resultado obtenido durante una revisión, inspección, auditoría o actividad de seguimiento que evidencia una condición relevante para la gestión del servicio.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida cuantitativa o cualitativa utilizada para evaluar el cumplimiento, desempeño, avance o eficacia de un proceso o acción.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso sistemático y permanente orientado a incrementar la eficacia de los procesos, controles y resultados del servicio.',
    },
    {
      termino: 'No conformidad',
      significado:
        'Incumplimiento de un requisito establecido en una norma, procedimiento, protocolo, consigna o criterio definido para la prestación del servicio.',
    },
    {
      termino: 'NTC-ISO 9001:2015',
      significado:
        'Norma técnica que establece requisitos para implementar y mantener un sistema de gestión de la calidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASIS. (2012). Manual de gestión en seguridad ASIS. [Archivo PDF proporcionado en el material de consulta].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011a). Crisis management: Planning and response. ASIS International. [Archivo PDF proporcionado en el material de consulta].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011b). Security operations center: Operator procedures. ASIS International. [Archivo PDF proporcionado en el material de consulta].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2012). Information security guideline. ASIS International. [Archivo PDF proporcionado en el material de consulta].',
      link: '',
    },
    {
      referencia:
        'Aven, T. (2009). Risk analysis and management: Basic concepts and principles. Wiley.',
      link: 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781119057819',
    },
    {
      referencia:
        'Bermúdez, J. (2012). Manual de procedimientos para vigilantes. [Archivo PDF proporcionado en el material de consulta].',
      link: '',
    },
    {
      referencia:
        'Carreño, M. A. (2021). Manual de urbanidad y buenas costumbres.',
      link: 'https://albaciudad.org/wp-content/uploads/2021/06/Coleccio%CC%81n-Bicentenario-Carabobo-70-Carren%CC%83o-Manuel-Antonio-Manual-de-urbanidad-y-buenas-costumbres.pdf',
    },
    {
      referencia:
        'Chiavenato, I., & Sapiro, A. (s. f.). Planeación estratégica: Fundamentos y aplicaciones (3.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Cox, L. A. (2008). What’s wrong with risk matrices? Risk Analysis, 28(2), 497–512.',
      link: 'https://doi.org/10.1111/j.1539-6924.2008.01130.x',
    },
    {
      referencia:
        'DEAS – J. Delgado Asociados. (s. f.). Manual de la central de monitoreo: Procedimientos operativos. [Archivo PDF proporcionado en el material de consulta].',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2010). CONPES 3649: Política nacional de servicio al ciudadano.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Quality management systems—Requirements (ISO 9001:2015).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018a). Gestión de la calidad—Satisfacción del cliente—Directrices para los códigos de conducta de las organizaciones (ISO 10001:2018).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018b). Gestión de la calidad—Satisfacción del cliente—Directrices para el seguimiento y la medición (ISO 10004:2018).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). Gestión de la calidad—Satisfacción del cliente—Directrices para las transacciones de comercio electrónico entre empresas y consumidores (ISO 10008:2022).',
      link: '',
    },
    {
      referencia:
        'Kaplan, S., & Garrick, B. J. (1981). On the quantitative definition of risk. Risk Analysis, 1(1), 11–27.',
      link: 'https://doi.org/10.1111/j.1539-6924.1981.tb01350.x',
    },
    {
      referencia: 'Ministerio del Trabajo. (2015). Decreto 1072 de 2015.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2013). Guidelines on occupational safety and health management systems.',
      link: '',
    },
    {
      referencia:
        'Punguil, M. D. C., Armijos, T. A. V., Galarza, S. P. C., & Erazo, J. C. (2022). Percepción de los clientes sobre la calidad del servicio: Caso Heladerías Tutto Freddo. Retos, 12(23), 329–344.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1994, 11 de febrero). Decreto 356 de 1994, por el cual se expide el Estatuto de Vigilancia y Seguridad Privada.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1341',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
