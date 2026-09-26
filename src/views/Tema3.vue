<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Administración del servicio de seguridad
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b administración del servicio de seguridad]  organiza, clasifica y controla los recursos y procesos necesarios para garantizar la continuidad operativa y la conformidad con los estándares de calidad. Esto implica integrar acciones preventivas y correctivas en circuitos de retroalimentación que formalicen la mejora continua.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          p La #[b gestión documental y de la información] constituye el soporte administrativo que permite garantizar trazabilidad, responsabilidad y auditoría. La correcta clasificación, conservación y disponibilidad de la información son condiciones necesarias para que los procesos de toma de decisiones cuenten con evidencia robusta.
          .caja-1(data-aos="fade-left")
            p.mb-0 Asimismo, la #[b identificación de no conformidades], el análisis de hallazgos y la aplicación de planes de mejoramiento son actividades administrativas que requieren metodologías de diagnóstico, protocolos de comunicación y herramientas de verificación. Su adecuada aplicación permite comprobar que las correcciones implementadas produzcan resultados sostenibles en el tiempo y respondan a las condiciones identificadas.
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Acciones preventivas y correctivas
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las #[b acciones preventivas y correctivas] constituyen pilares centrales de los sistemas de gestión de calidad y del control operativo en seguridad privada. La #[b ISO 9001] establece que toda organización debe identificar desviaciones reales o potenciales, analizar sus causas y ejecutar acciones destinadas a evitar su recurrencia o materialización. En el contexto de la seguridad, estas acciones permiten mantener la confiabilidad del sistema, fortalecer la operación y asegurar el cumplimiento contractual. Para complementar estos conceptos, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Acciones preventivas y correctivas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La #[b acción preventiva] se define como la intervención destinada a eliminar las causas de una potencial no conformidad antes de que ocurra. Implica anticiparse a riesgos operativos, tecnológicos, administrativos o conductuales que podrían comprometer la prestación del servicio. La doctrina señala que la naturaleza preventiva de estas acciones está estrechamente relacionada con el análisis de riesgo, el seguimiento activo y la detección temprana de irregularidades.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Entre los ejemplos de acciones preventivas se encuentran la revisión programada de cámaras, la verificación periódica de sensores, la actualización de consignas después de identificar una vulnerabilidad y el entrenamiento anticipado en evacuación antes de temporadas de clima extremo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img3.png', alt='' style="width: 500px").m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img4.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b acción correctiva], por su parte, corresponde a la intervención destinada a eliminar la causa de una no conformidad que ya ocurrió. No se limita a solucionar el efecto inmediato, sino que busca eliminar la causa raíz que generó el evento para evitar su repetición.
      p.mb-5 Por ejemplo, si durante la operación de seguridad se detecta una intrusión ocasionada por un acceso mal asegurado, la acción correctiva comprende corregir el cierre, revisar el procedimiento asociado, evaluar el desempeño del operador y ajustar las consignas correspondientes. Ambos tipos de acciones comparten características que permiten garantizar su seguimiento y efectividad:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img5.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Trazabilidad
                  p.mb-0.text-center Cada acción debe quedar registrada mediante informes, minutas o sistemas digitales que permitan identificar su origen, desarrollo, responsables y resultados.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img6.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Verificabilidad
                  p.mb-0.text-center La acción implementada debe permitir comprobar, mediante evidencia, si produjo el resultado esperado y si atendió adecuadamente la situación identificada.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img7.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Proporcionalidad
                  p.mb-0.text-center La respuesta debe corresponder con la naturaleza y gravedad de la desviación, el riesgo potencial o la no conformidad detectada.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img8.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Orientación a la mejora continua
                  p.mb-0.text-center Las acciones deben contribuir al fortalecimiento progresivo de los procesos y evitar la recurrencia o materialización de las condiciones que dieron origen a la intervención.
          .caja-3(data-aos="fade-right").mb-5
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
              .col-xl
                p.mb-0 La #[b ISO 9001] enfatiza que las acciones deben documentarse, evaluarse y revisarse sistemáticamente para comprobar su eficacia. En seguridad, esto implica conservar registros que faciliten una auditoría posterior y permitan establecer la efectividad de las medidas adoptadas.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-1.color-1.ajuste-2(data-aos="fade-right")
                p El uso de acciones preventivas y correctivas en el servicio de seguridad está orientado a fortalecer el control operativo y mejorar la calidad del servicio. Su implementación permite corregir fallas recurrentes, optimizar procedimientos, reducir tiempos de respuesta, aumentar la confiabilidad tecnológica y fortalecer la disciplina del personal. Estas acciones son especialmente relevantes en áreas críticas como el control de accesos, la operación de sistemas CCTV, el monitoreo de alarmas, las rondas perimetrales y la gestión documental. La gestión de estas acciones comprende una secuencia de actividades que debe desarrollarse de manera ordenada:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Identificar el hallazgo:] reconocer la no conformidad, desviación o riesgo potencial que requiere intervención.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Analizar la causa raíz:] determinar las condiciones que originaron o podrían originar la situación identificada.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Determinar el responsable:] asignar la ejecución y el seguimiento de las acciones correspondientes.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ejecutar el ajuste:] implementar la acción preventiva o correctiva definida.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Verificar la acción implementada:] comprobar su eficacia mediante evidencia verificable.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Realizar el cierre documental:] registrar los resultados y formalizar la finalización del proceso.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img10.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img35.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Este ciclo debe integrarse a un proceso de#[b  mejora continua basado en evidencias], evitando decisiones sustentadas únicamente en percepciones subjetivas.
          .caja-1(data-aos="fade-left")
            p.mb-0 Los protocolos para las acciones preventivas y correctivas deben respetar la secuencia establecida por la #[b ISO 9001]: detección de la no conformidad o del riesgo potencial, análisis, acción, revisión y cierre. La doctrina, por su parte, exige que estos protocolos se integren al plan de seguridad y que su aplicación sea supervisada para garantizar la coherencia entre la acción implementada y el análisis de riesgo.
      p.mb-5 Las #[b no conformidades en seguridad] pueden originarse en fallas técnicas, incumplimientos procedimentales, errores humanos, deficiencias de infraestructura o fallas en la comunicación. Entre las más comunes se encuentran:
      .bg-1
        .px-5
          .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                .row.align-items-center.mb-4
                  .col-xl-6
                    .caja-7(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 50px").m-auto
                        .col-xl.col-md-10
                          p.mb-0 Accesos permitidos sin verificación.
                  .col-xl-6
                    .caja-7(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 50px").m-auto
                        .col-xl.col-md-10
                          p.mb-0 Omisión de rondas.
                .row.align-items-center.mb-4
                  .col-xl-6
                    .caja-7(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 50px").m-auto
                        .col-xl.col-md-10
                          p.mb-0 Fallas no reportadas.
                  .col-xl-6
                    .caja-7(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 50px").m-auto
                        .col-xl.col-md-10
                          p.mb-0 Cámaras inoperativas.
                .row.align-items-center.mb-0
                  .col-xl-6
                    .caja-7(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 50px").m-auto
                        .col-xl.col-md-10
                          p.mb-0 Registros incompletos.
                  .col-xl-6
                    .caja-7(data-aos="flip-up")
                      .row.align-items-center
                        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                          figure
                            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 50px").m-auto
                        .col-xl.col-md-10
                          p.mb-0 Incumplimientos en la cadena de comunicación.
      p.mb-5 Cada no conformidad debe generar una acción correctiva proporcional, verificable y documentada en un plan de mejoramiento.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los ajustes se derivan del análisis posterior a la acción implementada y pueden comprender la actualización de consignas, el fortalecimiento de la capacitación, la sustitución de equipos, la modificación de protocolos o la redistribución de personal. La doctrina recalca que estos ajustes deben responder a criterios técnicos y sustentarse en evidencia documental, en lugar de decisiones arbitrarias. Los siguientes ejemplos permiten diferenciar la aplicación de acciones preventivas y correctivas:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img13.jpg', alt="" ).m-auto
              h4.text-center Preventiva
              .caja-6_p
                p.mb-0 Detectar un sensor con batería baja y solicitar mantenimiento antes de que quede fuera de servicio.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img14.jpg', alt="" ).m-auto
              h4.text-center Correctiva
              .caja-6_p
                p.mb-0 Después de un ingreso no autorizado por un acceso lateral, instalar iluminación, ajustar las consignas y entrenar al personal en procedimientos de verificación reforzada.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img15.jpg', alt="" ).m-auto
              h4.text-center Preventiva
              .caja-6_p
                p.mb-0 Actualizar las frecuencias de radio antes de un evento masivo.
        .col-xl-3.col-md-9(data-aos="fade-left")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img16.jpg', alt="" ).m-auto
              h4.text-center Correctiva
              .caja-6_p
                p.mb-0 Documentar y corregir el procedimiento después de identificar un reporte incompleto.
      p.mb-0 La aplicación sistemática de estas acciones permite integrar el análisis de las desviaciones, la intervención correspondiente y la comprobación de los resultados dentro de un mismo proceso de mejora.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Fuentes de información
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las #[b fuentes de información en seguridad] corresponden a todos los medios, registros, documentos, sistemas, personas o dispositivos que suministran datos relevantes para analizar, operar y tomar decisiones dentro del sistema de protección. La información constituye un insumo crítico, ya que permite al operador comprender el contexto, anticipar riesgos, verificar eventos y ejecutar acciones proporcionadas. Desde la perspectiva administrativa, estas fuentes contribuyen a la planeación, el control, la evaluación del servicio y la mejora continua.
      p.mb-5 Una #[b fuente de información] es cualquier recurso que proporciona datos verificables para apoyar actividades operativas, administrativas o investigativas. Estas fuentes pueden ser digitales, físicas, humanas o tecnológicas y deben cumplir criterios de fiabilidad, oportunidad y exactitud. De acuerdo con su naturaleza y función, las fuentes de información pueden clasificarse de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes internas operativas
                  p.mb-0 Comprenden minutas, informes técnicos, reportes de novedades, registros de monitoreo, bitácoras digitales, consignas, listados de acceso, planos, procedimientos y auditorías internas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes tecnológicas
                  p.mb-0 Incluyen registros de cámaras CCTV, logs de paneles de alarma, historiales de sensores, grabaciones, capturas de pantalla, sistemas de control de acceso, registros biométricos y reportes del software de monitoreo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes humanas
                  p.mb-0 Corresponden a testimonios del personal, entrevistas, reportes de supervisores, declaraciones de testigos e información suministrada por brigadas, usuarios y autoridades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes externas
                  p.mb-0 Comprenden normas, manuales técnicos, legislación, resoluciones, estándares ASIS e ISO, guías OIT, bases de datos externas, reportes meteorológicos e información suministrada por autoridades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes documentales administrativas
                  p.mb-0 Incluyen contratos, políticas, planes de seguridad, análisis de riesgo, actas, certificaciones, registros de mantenimiento técnico y documentación relacionada con proveedores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Cada una de estas fuentes aporta información complementaria que, cuando se integra adecuadamente, permite obtener una comprensión amplia del sistema de seguridad y facilita la toma de decisiones estratégicas. Los usos de las fuentes de información se relacionan con cuatro dimensiones principales:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Operativa
                  p.mb-0.text-center Facilita la verificación de datos, la reconstrucción de eventos, la toma de decisiones, el análisis de patrones y la activación de protocolos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Administrativa
                  p.mb-0.text-center Apoya las auditorías, la evaluación del servicio, el control de calidad, el seguimiento de acciones preventivas y correctivas, la elaboración de informes y la gestión de no conformidades.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Estratégica
                  p.mb-0.text-center Proporciona información para mejorar el plan de seguridad, actualizar el análisis de riesgo, tomar decisiones de inversión y rediseñar procedimientos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Legal y probatoria
                  p.mb-0.text-center Proporciona soporte documental para investigaciones, reclamaciones y procesos judiciales o administrativos.
      p.mb-0 Para garantizar la confiabilidad del servicio, las fuentes de información deben protegerse, clasificarse y almacenarse bajo criterios de #[b integridad, disponibilidad y confidencialidad], especialmente cuando contienen datos sensibles.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Evaluación de la información
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img28.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b evaluación de la información del plan de seguridad] es el proceso mediante el cual se analizan, interpretan y validan los datos contenidos en el sistema documental y operativo para determinar su coherencia con el contexto, su capacidad para describir adecuadamente los riesgos y su utilidad para sustentar decisiones estratégicas.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La evaluación de la información constituye un componente esencial del ciclo de gestión del riesgo, ya que permite verificar que los datos utilizados sean pertinentes, actualizados y técnicamente confiables. Desde la perspectiva de calidad, la #[b ISO 9001] señala que la información debe interpretarse con base en evidencia verificable, evitando decisiones sustentadas en datos incompletos o desactualizados. Los elementos básicos para evaluar la información del plan de seguridad comprenden el análisis del entorno, los antecedentes y otros factores contextuales que inciden en la comprensión integral del riesgo:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img29.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Análisis del entorno").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende los factores físicos, sociales, operativos y normativos que afectan la seguridad. Permite contextualizar los eventos y ajustar los mecanismos de protección de acuerdo con las condiciones existentes.
            .row(titulo="Antecedentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden al historial documentado de eventos, incidentes, fallas, vulnerabilidades y mejoras implementadas. Su análisis permite identificar patrones, recurrencias y brechas en los mecanismos de control.
            .row(titulo="Confiabilidad de las fuentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite determinar si los datos utilizados provienen de fuentes suficientemente fiables para sustentar el análisis y las decisiones relacionadas con el plan de seguridad.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Consistencia interna del plan").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer la coherencia entre la información registrada, los procedimientos definidos y las condiciones de riesgo identificadas.
            .row(titulo="Evidencia documental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona soporte verificable para sustentar los análisis realizados y mantener la trazabilidad de las decisiones adoptadas.
            .row(titulo="Vigencia de los procedimientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si los procedimientos y la información utilizados se encuentran actualizados frente a las condiciones actuales de la operación.
            .row(titulo="Correlación con los riesgos identificados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite relacionar los datos registrados con las amenazas, vulnerabilidades y riesgos establecidos, evitando interpretar la información de manera aislada.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img30.png", alt="" style="width: 350px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El #[b análisis del entorno] debe considerar variables como las condiciones perimetrales, los flujos poblacionales, la presencia de amenazas externas y las características de la infraestructura, dado que estos elementos determinan la exposición al riesgo y la eficacia de las medidas de mitigación. Sin esta contextualización, la información pierde valor estratégico.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Por su parte, los #[b antecedentes] permiten identificar patrones, recurrencias y brechas en los mecanismos de control. La #[b ISO 9001] señala que los registros históricos constituyen una fuente crítica para comprender la eficacia de los procesos y sustentar decisiones de mejora continua, siempre que se encuentren completos, accesibles y trazables. En seguridad, los antecedentes son indispensables para anticipar comportamientos o fallas que podrían repetirse si no se corrigen adecuadamente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img31.png', alt='' style="width: 500px").m-auto
      p.mb-5 Además del entorno y los antecedentes, la evaluación debe considerar la confiabilidad de las fuentes, la consistencia interna del plan, la disponibilidad de evidencia documental, la vigencia de los procedimientos y la correlación entre los datos registrados y los riesgos identificados. La información útil para la seguridad debe ser #[b verificable, relevante, oportuna y suficiente], evitando la toma de decisiones sustentadas en datos fragmentados o especulativos.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img32.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p De esta manera, la evaluación de la información se consolida como una actividad sistemática orientada a garantizar la calidad, la trazabilidad y la pertinencia de los datos utilizados en el plan de seguridad.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Gestión de la información en seguridad
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La #[b gestión de la información en seguridad] se entiende como el proceso organizado de recopilación, clasificación, análisis, almacenamiento, protección, uso y comunicación de datos relacionados con la operación de seguridad. Su propósito es garantizar decisiones oportunas, sustentadas en evidencia y coherentes con los protocolos institucionales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img33.png', alt='' style="width: 500px").m-auto
      p.mb-5 La gestión de la información constituye un componente estructural del sistema de protección, cuyo objetivo es asegurar que los datos circulen de manera controlada y precisa entre los diferentes niveles de la organización, manteniendo su integridad y disponibilidad. Para complementar estos conceptos, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/SJD6Na2bWOE" title="Gestión de la información" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Gestión de la información en seguridad
      p.mb-5 Los tipos de información en seguridad responden a diferentes necesidades operativas, técnicas, administrativas, legales y estratégicas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información operativa
                  p.mb-0 Comprende registros de rondas, novedades, reportes de incidentes, activaciones de alarmas y material de CCTV. Es fundamental para la toma de decisiones en tiempo real y para los procesos posteriores de verificación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información técnica
                  p.mb-0 Incluye datos de mantenimiento de equipos, diagnósticos, fallas, configuraciones y mapas de red. Esta información contribuye a garantizar la continuidad tecnológica del sistema de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información administrativa
                  p.mb-0 Integra documentos relacionados con roles, turnos, formatos, autorizaciones y comunicaciones internas que respaldan la organización y el funcionamiento administrativo del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información legal
                  p.mb-0 Comprende permisos, contratos, obligaciones normativas, derechos de acceso y lineamientos regulatorios vinculados con la prestación del servicio (DEAS, 2009).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información estratégica
                  p.mb-0 Contiene evaluaciones de riesgo, análisis de vulnerabilidad, planes de seguridad, indicadores y reportes gerenciales que orientan la toma de decisiones de alto nivel.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img38.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img39.png', alt='' style="width: 500px").m-auto
        .col-xl
          p Cada tipo de información debe gestionarse mediante criterios claros de #[b reserva, integridad y trazabilidad], especialmente cuando se manejan datos sensibles asociados con videovigilancia, comportamiento humano o infraestructura crítica.
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 La #[b ISO 9001] establece que la información documentada debe mantenerse disponible donde sea necesaria, protegerse contra pérdida o deterioro y someterse a controles que garanticen su actualización, acceso adecuado y conservación. Por tanto, la gestión de la información constituye un pilar organizacional que articula tecnología, procesos y talento humano.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Gestión documental
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img40.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b gestión documental en seguridad] consiste en el conjunto de procedimientos aplicados para crear, organizar, conservar, controlar y disponer los documentos que sustentan la operación, garantizando su trazabilidad, integridad y disponibilidad. Es indispensable para asegurar la continuidad operativa, facilitar auditorías, respaldar investigaciones y cumplir las obligaciones normativas.
      p.mb-5 La #[b ISO 9001] refuerza este planteamiento al indicar que toda organización debe establecer controles para la creación, actualización, distribución y almacenamiento de la información documentada. Los documentos utilizados en la gestión de seguridad pueden clasificarse según su naturaleza y función:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img41.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Documentos normativos
                  p.mb-0.text-center Contienen políticas, manuales de seguridad, protocolos, reglamentos y lineamientos internos que orientan la prestación y el control del servicio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Documentos operativos
                  p.mb-0.text-center Comprenden procedimientos estándar, instructivos, listas de verificación y rutas de actuación que orientan las actividades desarrolladas durante la operación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Documentos técnicos
                  p.mb-0.text-center Incluyen manuales de equipos, reportes de mantenimiento, diagramas eléctricos, configuraciones de software y planos necesarios para respaldar el funcionamiento de los componentes tecnológicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Documentos de registro
                  p.mb-0.text-center Incluyen bitácoras, reportes de incidentes, actas, grabaciones, planillas, formularios electrónicos y registros de auditoría. Son fundamentales para mantener la trazabilidad de las actuaciones realizadas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right")
            p La clasificación documental permite que cada documento cumpla una función específica, tenga responsables definidos y se mantenga bajo condiciones adecuadas para asegurar su conservación y consulta. El procedimiento técnico de gestión documental comprende una secuencia de etapas destinadas a garantizar la organización y el control de la información:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Creación:] elaborar el documento de acuerdo con las necesidades y los criterios establecidos.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Identificación:] asignar los elementos que permitan reconocer y diferenciar cada documento.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Registro:] incorporar el documento al sistema correspondiente para garantizar su trazabilidad.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clasificación:] organizar el documento según su naturaleza, función y nivel de acceso.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Almacenamiento:] conservar la información en medios físicos o digitales adecuados.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Acceso:] establecer quién puede consultar o utilizar la documentación de acuerdo con los permisos definidos.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Uso:] emplear la información conforme con su finalidad operativa, administrativa, técnica o legal.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Actualización:] incorporar las modificaciones necesarias y controlar las versiones vigentes.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Conservación:] mantener los documentos durante el tiempo establecido y bajo condiciones que garanticen su integridad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Disposición final:] aplicar el procedimiento definido para conservar, transferir o eliminar la documentación cuando corresponda.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img46.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img47.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 La #[b ISO 9001] establece que el procedimiento debe definir cómo se crean los documentos, quién los aprueba, cómo se controlan las versiones, qué mecanismos aseguran su vigencia y de qué manera se realizan las modificaciones.
          .caja-1(data-aos="fade-left")
            p.mb-0 Estos procedimientos deben incorporar criterios de seguridad física y digital, como restricciones de acceso, cifrado, copias de respaldo, almacenamiento en servidores protegidos, control de firmas y auditorías periódicas. Asimismo, la disposición final debe realizarse mediante procesos seguros, especialmente cuando se trate de documentos sensibles, como grabaciones o reportes que contienen datos personales, aplicando principios de reserva y confidencialidad.
      p.mb-0 En conjunto, la gestión documental garantiza no solo el cumplimiento normativo y operativo, sino también la coherencia y la memoria institucional del sistema de seguridad. De esta manera, facilita la evaluación de la operación, la reconstrucción de eventos y la acreditación de transparencia frente a auditorías, investigaciones o procesos.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 NTC-ISO 9001 Sistemas de gestión de la calidad
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img48.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El numeral 10 de la #[b NTC-ISO 9001:2015], denominado Mejora, establece que toda organización debe implementar acciones sistemáticas para fortalecer continuamente la eficacia, pertinencia y coherencia del sistema de gestión de la calidad.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 ISO (2015) señala que la mejora no se limita a corregir fallas o errores, sino que implica identificar oportunidades, optimizar procesos, prevenir no conformidades y aumentar la capacidad de la organización para satisfacer requisitos operativos y del cliente. En el ámbito de la seguridad privada, esto se traduce en ajustar procedimientos, fortalecer la capacidad de reacción, optimizar la gestión de la información y garantizar que los resultados operativos se alineen con los estándares de protección definidos. Para complementar este contenido, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Mejora en la NTC-ISO 9001:2015
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La norma indica que la organización debe determinar e implementar oportunidades de mejora para atender las necesidades actuales y futuras, considerando el análisis del desempeño del sistema, los resultados de auditorías, los incidentes ocurridos, los informes de satisfacción del cliente y el comportamiento de los procesos.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Según ISO (2015), la mejora debe constituir un ciclo continuo, sustentado en evidencias documentadas y en la capacidad de la organización para aprender de su operación, sus riesgos y su entorno. En seguridad, esto implica evaluar constantemente el plan de seguridad, analizar vulnerabilidades, revisar procedimientos de emergencia y ajustar mecanismos de control según la retroalimentación recopilada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img49.png', alt='' style="width: 500px").m-auto
      p.mb-5 El numeral 10 también establece que la organización debe responder adecuadamente a las #[b no conformidades], mediante acciones correctivas que eliminen la causa raíz y eviten su recurrencia. ISO (2015) afirma que estas acciones deben ser proporcionales a la magnitud del problema y a su impacto potencial.
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img50.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 En seguridad, una no conformidad puede estar relacionada con fallas tecnológicas, registros incompletos, procedimientos ejecutados de manera inadecuada, deficiencias en las rondas o errores en las cadenas de custodia. La respuesta debe incluir el análisis causal, la definición de medidas correctivas, la verificación de su implementación y la evaluación de su eficacia, asegurando la trazabilidad durante todo el proceso.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Hallazgos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img51.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En el contexto de la gestión de calidad y seguridad, un #[b hallazgo] se define como el resultado obtenido durante auditorías, verificaciones o análisis operativos que permite identificar desviaciones, oportunidades de mejora o cumplimiento de los requisitos establecidos.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 ISO (2015) define los hallazgos como resultados de la evaluación objetiva del desempeño del sistema frente a los criterios normativos, los procedimientos internos y los estándares aplicables. En seguridad, los hallazgos permiten identificar fallas operativas, vulnerabilidades, debilidades procedimentales o aspectos destacables dentro del plan de seguridad. Los hallazgos pueden clasificarse de acuerdo con las condiciones identificadas durante el proceso de evaluación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-6.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img52.jpg', alt="" ).m-auto
              h4.text-center No conformidades
              .caja-6_p
                p.mb-0.text-center Corresponden al incumplimiento de un requisito establecido por la norma, el cliente o los procedimientos internos. Requieren la implementación de acciones correctivas obligatorias.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img53.jpg', alt="" ).m-auto
              h4.text-center Aspectos que requieren atención
              .caja-6_p
                p.mb-0.text-center Corresponden a condiciones que podrían evolucionar hacia una no conformidad si no se atienden oportunamente, por lo que requieren seguimiento y valoración.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-6.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img54.jpg', alt="" ).m-auto
              h4.text-center Oportunidades de mejora
              .caja-6_p
                p.mb-0.text-center Corresponden a aspectos que, aun cumpliendo los requisitos establecidos, pueden optimizarse para fortalecer la eficiencia y el desempeño del sistema.
      p.mb-5 ISO (2015) resalta que la clasificación adecuada de los hallazgos es fundamental para priorizar las acciones y garantizar intervenciones proporcionales al nivel de riesgo identificado. Para garantizar su validez y utilidad, los hallazgos deben cumplir características esenciales:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img55.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img56.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Objetividad
                  p.mb-0.text-center El hallazgo debe sustentarse en hechos verificables y evitar apreciaciones subjetivas que puedan afectar la confiabilidad de la evaluación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img57.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Claridad
                  p.mb-0.text-center La situación identificada debe describirse con precisión para facilitar su comprensión, análisis y tratamiento posterior.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img58.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Evidencia verificable
                  p.mb-0.text-center Todo hallazgo debe contar con evidencia documental o física que respalde su identificación y permita comprobar las condiciones encontradas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img59.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Pertinencia
                  p.mb-0.text-center El hallazgo debe relacionarse directamente con el requisito, procedimiento, criterio o estándar que está siendo evaluado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img60.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Trazabilidad
                  p.mb-0.text-center La información debe permitir identificar el origen del hallazgo, la evidencia que lo sustenta y las actuaciones desarrolladas para su tratamiento.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p ISO (2015) establece que todo hallazgo debe basarse en hechos verificables, describirse con precisión y relacionarse directamente con un requisito evaluado, además de contar con evidencia documental o física que sustente su identificación.
          .caja-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
              .col-xl
                p.mb-0 En seguridad privada, los hallazgos operativos permiten fortalecer el sistema de control, identificar vulnerabilidades críticas, mejorar la capacitación del personal y asegurar que los procedimientos se ejecuten conforme con los estándares requeridos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img61.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img29.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La correcta gestión de los hallazgos contribuye tanto al cumplimiento normativo como al fortalecimiento de la capacidad institucional para prevenir incidentes, optimizar la operación y mantener procesos sostenibles. La #[b ISO 9001] y la doctrina coinciden en que los hallazgos constituyen una herramienta estratégica para convertir los resultados de las auditorías en insumos para el aprendizaje organizacional y la mejora continua.
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 No conformidades
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 En el marco de la gestión de calidad y, específicamente, en los sistemas basados en la #[b NTC-ISO 9001:2015], una #[b no conformidad] se define como el incumplimiento de un requisito establecido por la norma, por los procedimientos internos de la organización o por las expectativas expresas del cliente. ISO (2015) establece que una no conformidad puede originarse por fallas en los procesos, errores humanos, deficiencias en los controles, desviaciones operativas, recursos inadecuados o incumplimiento de protocolos.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img62.png', alt='' style="width: 500px").m-auto
      p.mb-5 En el sector de la seguridad privada, las no conformidades afectan directamente la integridad del servicio y pueden manifestarse mediante fallas en los registros, rondas ejecutadas de manera inadecuada, dificultades en el manejo de equipos, omisiones en la verificación de accesos o deficiencias durante una emergencia. Para complementar este contenido, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. No conformidades
      p.mb-5 La literatura técnica distingue dos clases de no conformidades:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img63.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 No conformidades mayores
          p.mb-0 Representan incumplimientos significativos que afectan la eficacia del sistema o la capacidad de la organización para cumplir los requisitos normativos o del cliente. Entre los ejemplos se encuentran la ausencia de registros esenciales, la falta de ejecución de rondas perimetrales críticas o el incumplimiento reiterado de consignas.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img64.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 No conformidades menores
          p.mb-0 Corresponden a desviaciones puntuales que no comprometen de manera inmediata el sistema, pero requieren atención para evitar que evolucionen hacia fallas mayores. Un registro con datos incompletos o un procedimiento aplicado parcialmente pueden clasificarse en esta categoría.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right")
            p Esta clasificación permite determinar la magnitud del incumplimiento y orientar las acciones necesarias para su tratamiento. El seguimiento de una no conformidad corresponde a un proceso estructurado que inicia con la identificación del evento, continúa con el análisis de la causa raíz y culmina con la implementación y verificación de las acciones correctivas. Para garantizar su adecuada gestión, se deben desarrollar las siguientes actividades:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Identificar la no conformidad:] determinar el incumplimiento y recopilar la evidencia que permita sustentar su existencia.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Analizar la causa raíz:] establecer los factores que originaron la desviación y determinar las condiciones que favorecieron su ocurrencia.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Definir las acciones correctivas:] establecer medidas orientadas a eliminar la causa de la no conformidad y evitar su recurrencia.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Implementar las acciones:] ejecutar las medidas definidas de acuerdo con los responsables, recursos y tiempos establecidos.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Verificar la eficacia:] comprobar si las acciones implementadas eliminaron o controlaron adecuadamente la causa identificada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Registrar los resultados:] documentar el tratamiento realizado y conservar la evidencia necesaria para garantizar su trazabilidad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img65.png', alt='' style="width: 500px").m-auto
      p.mb-5 ISO (2015) exige que la organización documente la no conformidad, determine los motivos que la generaron, adopte medidas que eliminen la causa, evalúe la eficacia de la acción tomada y registre los resultados. En seguridad, este seguimiento implica revisar procedimientos, entrevistar al personal, evaluar la operación de los equipos tecnológicos, analizar la infraestructura y, cuando sea necesario, rediseñar consignas o procesos de entrenamiento para evitar la recurrencia.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img66.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1(data-aos="fade-left").mb-3
            p.mb-0 Los #[b protocolos de comunicación] son esenciales para la gestión transparente de las no conformidades. La norma indica que los hallazgos deben comunicarse a los responsables directos del proceso afectado, a los niveles de supervisión y, cuando corresponda, a los clientes o autoridades.
          .row
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Esta comunicación debe ser clara, objetiva, oportuna y sustentada en evidencia verificable. En seguridad privada, la comunicación de las no conformidades debe integrarse al sistema de control operativo mediante reportes formales en minutas, sistemas digitales, informes de auditoría y retroalimentación en reuniones operativas. Una comunicación deficiente puede incrementar las vulnerabilidades y retrasar las intervenciones necesarias para restablecer la seguridad del entorno protegido.
      Separador
      #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.9 Problemas y solución de problemas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Un #[b problema] es una desviación entre una condición actual y una condición deseada que afecta la operación, el cumplimiento de requisitos o la capacidad para alcanzar los objetivos establecidos. En los sistemas de gestión, ISO (2015) considera que los problemas deben abordarse mediante metodologías formales que permitan comprender sus causas, evaluar su impacto y determinar acciones eficaces para resolverlos.
          .caja-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
              .col-xl
                p.mb-0 En seguridad privada, los problemas pueden manifestarse como fallas técnicas recurrentes, deficiencias en las capacidades del personal, vulnerabilidades perimetrales o eventos no deseados derivados de omisiones procedimentales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img67.png', alt='' style="width: 500px").m-auto
      p.mb-5 La técnica de análisis y solución de problemas más utilizada en los sistemas de gestión de calidad es el #[b ciclo PHVA (Planificar-Hacer-Verificar-Actuar)], reconocido por ISO (2015). Este puede complementarse con otras metodologías orientadas a identificar las causas de los problemas:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img68.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ciclo PHVA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza la gestión del problema mediante las etapas Planificar, Hacer, Verificar y Actuar, facilitando la implementación, evaluación y ajuste de las soluciones aplicadas.
            .row(titulo="Análisis de causa raíz").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite determinar los factores que originan un problema, con el propósito de intervenir sus causas y no limitar la respuesta al tratamiento de los efectos.
            .row(titulo="Diagrama de Ishikawa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita la organización de las posibles causas relacionadas con un problema para analizar los diferentes factores que pueden contribuir a su ocurrencia.
            .row(titulo="Técnica de los 5 porqués").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Profundiza progresivamente en las causas de un problema mediante preguntas sucesivas orientadas a identificar su origen.
            .row(titulo="Diagramas de flujo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten representar la secuencia de un proceso para identificar puntos críticos, desviaciones o actividades relacionadas con el problema analizado.
      p.mb-5 Estas herramientas permiten examinar el problema desde su origen y evitar intervenciones concentradas exclusivamente en sus síntomas.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img69.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p #[b Ejemplo:] si un vigilante no realiza las rondas completas, el problema no se resuelve únicamente mediante capacitación. Es necesario analizar si las consignas son claras, si el tiempo asignado es suficiente, si los equipos funcionan correctamente o si existen interrupciones operativas que dificultan el cumplimiento.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img70.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1(data-aos="fade-left").mb-3
            p.mb-0 En el ámbito de la formación y la operación en seguridad privada, la #[b simulación] constituye una técnica relevante para el análisis y la solución de problemas. La doctrina establece que simular escenarios permite entrenar respuestas, identificar brechas operativas, evaluar las habilidades del personal y validar procedimientos.
          p.mb-0 Las simulaciones pueden comprender ejercicios relacionados con intrusiones, fallas de energía, emergencias médicas, incendios o accesos no autorizados. Su objetivo es generar evidencia sobre el funcionamiento del plan de seguridad y sobre la capacidad del personal para actuar bajo presión, permitiendo ajustar los procesos antes de la ocurrencia de un evento real.
      Separador
      #t_3_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.10 Mejora continua
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img71.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En los sistemas de seguridad privada, la #[b mejora continua] constituye un principio estructural que permite que el servicio evolucione de acuerdo con los riesgos emergentes, los cambios tecnológicos y las lecciones aprendidas de los incidentes.
      p.mb-5 En el Manual de Gestión de Crisis, señala que cada evento debe servir para identificar vulnerabilidades, corregir prácticas inadecuadas y ajustar los procedimientos operativos. Esta concepción convierte cada incidente en una oportunidad para perfeccionar el sistema de seguridad y evitar la recurrencia de errores o fallas. Para complementar este contenido, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Mejora continua
      p La mejora continua se desarrolla como un ciclo permanente de #[b revisión, aprendizaje y adaptación]. No consiste únicamente en corregir errores puntuales, sino en mantener un seguimiento activo de los procedimientos, los equipos, la documentación, la conducta del personal y la capacidad de respuesta.
      p.mb-5 El proceso de mejora debe ser sistemático y documentado, incorporando los resultados del análisis de cada incidente y la información proveniente de auditorías, supervisiones, reportes y evaluaciones del servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Retroalimentación operativa
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La #[b retroalimentación operativa] es el mecanismo mediante el cual la organización transforma los hallazgos del servicio en conocimiento aplicable. Este proceso implica una revisión estructurada de la actuación del personal y de los sistemas durante cada incidente, con el propósito de identificar fallas, oportunidades de optimización y necesidades de capacitación.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 La retroalimentación no corresponde a un comentario subjetivo, sino a un análisis técnico sustentado en evidencias, como grabaciones, registros, minutas, comunicaciones radiales, tiempos de respuesta y reportes de supervisión.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img72.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El análisis de incidentes permite comprender no solo qué ocurrió, sino también por qué ocurrió y cuáles elementos del sistema contribuyeron a la falla o al acierto. En la práctica operativa, este análisis comprende actuaciones humanas, como errores de registro, retrasos en la reacción o interpretaciones incorrectas de una alarma, así como aspectos tecnológicos, entre ellos fallas en sensores, cámaras sin cobertura o radios sin batería. La retroalimentación convierte estos elementos en insumos para fortalecer la operación.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img73.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1(data-aos="fade-left").mb-3
            p.mb-0 La revisión de las actuaciones también se desarrolla durante los relevos de turno, cuando los operadores intercambian información sobre novedades, dificultades y condiciones identificadas, permitiendo que el conocimiento circule y se mantenga actualizado. Cuando una falla operacional se repite en varios turnos, se recomienda escalar la situación mediante reportes formales y evaluaciones más profundas, pues puede evidenciar una brecha sistémica o una falla en el procedimiento.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Un componente central de la retroalimentación es la #[b capacitación complementaria]. Cuando se identifica una desviación del procedimiento, no basta con corregir al operador; es necesario reforzar conocimientos, estandarizar criterios y asegurar que todos los integrantes del servicio comprendan la actualización operativa. De esta manera, la retroalimentación articula el análisis del incidente con el fortalecimiento efectivo del sistema.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actualización de consignas y protocolos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La mejora continua exige que los #[b manuales, consignas y protocolos] se mantengan actualizados. Cada vez que un incidente revela una vulnerabilidad, la organización debe revisar la documentación operativa para corregir inconsistencias, mejorar los flujos de trabajo, incorporar nuevos pasos o descartar prácticas que hayan resultado ineficaces. Un procedimiento que no se actualiza puede quedar obsoleto frente a amenazas emergentes o cambios en la infraestructura tecnológica.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 Cuando se identifica una brecha operativa, la mejora debe iniciar con la actualización del manual o procedimiento afectado. Esta modificación debe documentarse, comunicarse a todo el personal y acompañarse de una instrucción formal. La actualización de las consignas es igualmente importante, ya que una consigna imprecisa o incompleta puede ocasionar una actuación inadecuada durante un incidente.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img74.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La incorporación de nuevas medidas, como la ampliación de rondas, la verificación cruzada mediante CCTV o el fortalecimiento del registro documental, forma parte del proceso de mejora continua (DEAS, 2009). El personal debe recibir capacitación sobre los cambios implementados, puesto que una consigna actualizada no produce los resultados esperados si el operador no comprende cómo aplicarla. La capacitación permite consolidar el cambio y completar el ciclo de actualización operativa. Un sensor de movimiento que no reporta un ingreso real permite comprender la aplicación de este proceso. Ante una situación de este tipo, la actuación debe seguir una secuencia claramente establecida:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisión técnica
                  p.mb-0 Verificar el sensor para determinar si la falla corresponde a un problema electrónico, de calibración o a una posible acción de sabotaje.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img75.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ajuste del procedimiento
                  p.mb-0 Determinar si es necesario modificar el protocolo de verificación mediante una revisión cruzada por CCTV o una ronda física cuando el sensor presente inconsistencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img76.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documentación formal
                  p.mb-0 Registrar el incidente y su análisis en la minuta, el reporte inicial, el informe técnico y las evidencias fotográficas o videográficas correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img77.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reentrenamiento
                  p.mb-0 Brindar a los operadores instrucción específica sobre la gestión de señales intermitentes o fallas técnicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img78.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Actualización del protocolo
                  p.mb-0 Modificar el procedimiento para incorporar las nuevas medidas y asegurar que el manual incluya las lecciones aprendidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img79.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Este ciclo corresponde al modelo de mejora continua, en el que cada evento se convierte en una fuente de aprendizaje operacional.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mejora continua en los manuales institucionales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Bermúdez (2012) indica que la actualización periódica de consignas, la revisión de novedades entre turnos, la capacitación constante del personal y el mantenimiento preventivo de equipos son prácticas que mantienen el servicio alineado con las necesidades del entorno. La consistencia documental, el archivo histórico y la trazabilidad de los incidentes permiten analizar tendencias e identificar patrones que requieren ajustes operativos.
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 En este sentido, la mejora continua no es una actividad exclusiva de los jefes de seguridad, sino un #[b proceso colectivo] en el que cada operador, supervisor y coordinador aporta información para perfeccionar el sistema. Las anotaciones en las minutas, los reportes técnicos, las auditorías documentales y las evaluaciones periódicas constituyen insumos que posteriormente pueden transformarse en ajustes normativos, ampliación de procedimientos o renovación tecnológica.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img80.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias y protocolos de mejora continua
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img81.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b mejora continua] es un principio fundamental de los sistemas de gestión, entendido como la capacidad sistemática de una organización para optimizar sus procesos, incrementar su eficacia y adaptarse de manera dinámica a los cambios del entorno.
      p.mb-5 ISO (2015) afirma que la mejora continua debe ser un proceso permanente, sustentado en el análisis de información, la evaluación del desempeño y la retroalimentación derivada de auditorías, hallazgos, incidentes y resultados operativos. En el contexto de la seguridad privada, esto implica ajustar procedimientos, actualizar consignas, mejorar tecnologías, fortalecer la formación y optimizar la gestión de incidentes. Entre las estrategias de mejora continua planteadas por ISO (2015) se encuentran:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t3/img82.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img83.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Revisión periódica del desempeño del sistema
              p.mb-0.text-center Realizar el seguimiento mediante indicadores operativos, análisis de vulnerabilidades, auditorías internas y evaluación de incidentes críticos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img84.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fortalecimiento de la capacitación
              p.mb-0.text-center Reforzar especialmente las habilidades relacionadas con seguimiento, control, reporte, reacción ante emergencias y uso de tecnologías.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img85.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Actualización permanente de consignas y procedimientos
              p.mb-0.text-center Incorporar aprendizajes operativos, análisis de causa raíz y retroalimentación del cliente.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img86.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Optimización de procesos
              p.mb-0.text-center Eliminar pasos innecesarios, estandarizar actividades y mejorar la documentación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img87.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Implementación de nuevos controles tecnológicos
              p.mb-0.text-center Incorporar sistemas avanzados de monitoreo, automatización de registros y digitalización documental.
      p.mb-5 Estas estrategias deben integrarse mediante protocolos que permitan gestionar las oportunidades de mejora de manera ordenada y verificable.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img88.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los #[b protocolos de mejora continua] comprenden una secuencia lógica que inicia con la identificación de oportunidades y continúa con la priorización de intervenciones, la elaboración de planes de acción, la asignación de recursos, la ejecución, el seguimiento y la verificación de los resultados. ISO (2015) establece que este proceso debe contar con trazabilidad documental, responsables definidos y evidencia objetiva. En seguridad, los protocolos permiten ajustar el plan de seguridad de acuerdo con el análisis de riesgos, los cambios en el entorno, las fallas detectadas y los resultados de simulaciones y auditorías.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img89.png', alt='' style="width: 500px").m-auto
        .col-xl
          p Las normas que orientan la mejora continua incluyen principalmente la #[b NTC-ISO 9001:2015], la #[b NTC-ISO 31000] para la gestión del riesgo y las directrices relacionadas con la calidad operativa y la gestión de emergencias. ASIS (2011) sostiene que la mejora continua debe vincular los procesos de evaluación, retroalimentación, entrenamiento y reformulación del plan de seguridad, garantizando que el sistema sea dinámico y resiliente.
          .caja-1(data-aos="fade-left")
            p.mb-0 La incorporación de estas normas permite que el servicio de seguridad evolucione permanentemente, responda a las amenazas actuales y mantenga altos estándares de confiabilidad y profesionalismo.
      Separador
      #t_3_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.11 Plan de mejoramiento
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Un #[b plan de mejoramiento] es un instrumento técnico y metodológico que organiza de manera estructurada las acciones necesarias para corregir falencias, fortalecer procesos, mitigar riesgos y optimizar el desempeño de un sistema, área o proceso organizacional.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img90.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Según ISO (2015), todo sistema de gestión debe contar con mecanismos formales que permitan planificar, ejecutar y verificar acciones destinadas a resolver no conformidades, atender hallazgos de auditoría y consolidar mejoras continuas. En este contexto, el plan de mejoramiento constituye la operacionalización del #[b ciclo PHVA (Planificar-Hacer-Verificar-Actuar)], articulando las causas identificadas con las acciones propuestas y los resultados esperados. Para complementar este contenido, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Plan de mejoramiento
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img91.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En el ámbito de la seguridad privada y de la administración de sistemas organizacionales, un plan de mejoramiento se formula como respuesta a desviaciones detectadas en auditorías, evaluaciones de riesgo, fallas operativas, análisis de incidentes, deficiencias en la documentación, no conformidades del cliente o necesidades de ajuste derivadas de la dinámica del entorno.
      p.mb-5 Este plan articula acciones preventivas y correctivas con medidas de fortalecimiento, asegurando que el sistema no solo corrija errores, sino que también mejore su desempeño integral. Las características de un plan de mejoramiento, conforme con la #[b NTC-ISO 9001:2015], comprenden:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img92.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Carácter sistemático").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El plan debe derivarse de un análisis técnico sustentado en evidencia verificable, evitando improvisaciones y decisiones intuitivas. ISO (2015) exige que las mejoras se fundamenten en información objetiva y en la identificación clara de la causa raíz.
            .row(titulo="Orientación a resultados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada acción debe diseñarse para alcanzar un objetivo concreto, como eliminar una causa, cerrar una brecha, mejorar un indicador, fortalecer un proceso o mitigar un riesgo específico. Esto permite evaluar la eficacia mediante criterios tangibles.
            .row(titulo="Trazabilidad documental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El plan debe documentar su origen, justificación, acciones programadas, responsables, recursos necesarios, cronograma y medios de verificación. Los registros permiten auditar y validar los resultados.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Responsabilidad definida").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada acción debe contar con un responsable, evitando la dispersión de funciones y garantizando que exista una persona o área encargada de su ejecución y seguimiento.
            .row(titulo="Temporalidad clara").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Toda acción debe contar con un plazo definido que permita evaluar el avance, medir el cumplimiento e identificar retrasos o dificultades durante el proceso.
            .row(titulo="Evaluación y verificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El plan no concluye con la ejecución de las acciones. Es necesario verificar su efectividad y comprobar que la causa haya sido eliminada o controlada. Esta comprobación se integra a la fase Actuar del ciclo PHVA.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img93.png", alt="" style="width: 280px").m-auto
      p.mb-5 En conjunto, estas características permiten que el plan mantenga coherencia entre los problemas identificados, las acciones implementadas y los resultados esperados.
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img94.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 El plan de mejoramiento constituye, por tanto, un instrumento esencial para garantizar la evolución técnica, operativa y administrativa del sistema, al transformar hallazgos y problemas en oportunidades de fortalecimiento continuo dentro del marco de la calidad y la gestión organizacional.
      Separador
      #t_3_12.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.12 Plan de mejoramiento organizacional
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1(data-aos="fade-right").mb-3
            p.mb-0 El #[b plan de mejoramiento organizacional] es un instrumento de mayor alcance que el plan de mejoramiento convencional. Está destinado no solo a corregir fallas específicas, sino también a transformar aspectos estructurales de la organización con el propósito de aumentar su eficacia, competitividad, seguridad, continuidad operativa y capacidad de adaptación frente al entorno.
          .row
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Según ISO (2015) y los lineamientos de la gestión moderna, este tipo de plan integra procesos estratégicos, operativos, tecnológicos, humanos y documentales, articulando acciones a corto, mediano y largo plazo orientadas a optimizar la gestión institucional en su conjunto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img95.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Definición
      p.mb-5 Un #[b plan de mejoramiento organizacional] se define como un proyecto estructurado que orienta intervenciones globales o focalizadas en la organización, con el propósito de aumentar la calidad de los servicios, mejorar la eficiencia de los procesos, fortalecer el talento humano, modernizar la infraestructura, optimizar el uso de los recursos, gestionar riesgos y promover la innovación continua.
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img96.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 En seguridad privada, este plan se relaciona con el fortalecimiento de la gestión operativa, la actualización tecnológica, la reducción de vulnerabilidades, el desarrollo de competencias del personal y la optimización del sistema de protección físico-electrónico.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de planes de mejoramiento organizacional
      p.mb-5 De acuerdo con los modelos de gestión empresarial y con ISO (2015), los planes de mejoramiento organizacional pueden clasificarse según el propósito de las intervenciones:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Planes correctivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img97.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planes correctivos
              p Están orientados a resolver problemas existentes derivados de auditorías, fallas operativas, incidentes, no conformidades o procesos ineficientes. 
              p.mb-0 #[b Ejemplo:] rediseñar la matriz de riesgo y actualizar las consignas debido a fallas reiteradas en las rondas perimetrales.
        .py-3.py-md-4(titulo="Planes preventivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img98.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planes preventivos
              p Están dirigidos a evitar futuras desviaciones mediante la anticipación de riesgos o la identificación de condiciones que podrían evolucionar hacia fallas. 
              p.mb-0 #[b Ejemplo:] implementar controles biométricos para prevenir la suplantación en accesos críticos.
        .py-3.py-md-4(titulo="Planes de fortalecimiento o desarrollo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img99.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planes de fortalecimiento o desarrollo
              p Buscan optimizar las capacidades organizacionales, modernizar procesos o mejorar la infraestructura. 
              p.mb-0 #[b Ejemplo:] instalar un nuevo software de monitoreo que integre CCTV, alarmas e informes operativos.
        .py-3.py-md-4(titulo="Planes de innovación o transformación organizacional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img100.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Planes de innovación o transformación organizacional
              p Están orientados a generar cambios profundos mediante la adopción de nuevas tecnologías, la mejora de los modelos de gestión o la reestructuración de procesos. 
              p.mb-0 #[b Ejemplo:] migrar los registros a sistemas digitales con trazabilidad automatizada.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right")
            p Esta clasificación permite determinar el alcance de las acciones y relacionarlas con las necesidades específicas identificadas en la organización. Entre las aplicaciones de estos planes en el sector de la seguridad privada se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Actualización integral de consignas y manuales operativos después de identificar inconsistencias entre los procedimientos y las dinámicas reales del entorno protegido.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Modernización del sistema de CCTV para incorporar análisis inteligente de video mediante inteligencia artificial (IA), orientado a detectar comportamientos sospechosos o intrusiones.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Implementación de un programa de capacitación continua para fortalecer habilidades relacionadas con el control de accesos, el manejo de emergencias, el uso de tecnología y la documentación.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | Rediseño del plan de seguridad a partir de una evaluación de riesgos que identifique nuevas amenazas asociadas con el entorno o con el tipo de usuario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Implementación de auditorías internas trimestrales para garantizar la trazabilidad y el cumplimiento normativo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img101.png', alt='' style="width: 500px").m-auto
      p.mb-5 Estas aplicaciones permiten articular las necesidades identificadas con intervenciones concretas orientadas al fortalecimiento integral de la organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img8.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elaboración del plan de mejoramiento organizacional
      p.mb-5 Para complementar el proceso de elaboración del plan, se dispone del siguiente recurso audiovisual:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Elaboración del plan de mejoramiento organizacional
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-8
          .caja-5(data-aos="flip-up").p-4
            p.mb-0 ISO (2015) y los modelos de gestión recomiendan desarrollar el plan mediante un proceso estructurado:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 1. Diagnóstico inicial
                p.mb-0 Analizar los procesos, recursos, riesgos, hallazgos, indicadores y desempeño del sistema para identificar las brechas que requieren intervención.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img102.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img103.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 2. Análisis de causa raíz
                p.mb-0 Determinar los factores que originan las fallas o limitaciones identificadas mediante metodologías técnicas, como Ishikawa, los 5 porqués y AMEF, entre otras.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 3. Formulación de objetivos de mejora
                p.mb-0 Establecer objetivos claros, medibles, alcanzables y alineados con los requerimientos del sistema de gestión.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img104.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img105.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 4. Diseño de acciones y actividades
                p.mb-0 Estructurar las acciones necesarias para cerrar las brechas, como actualización de documentos, capacitación, ajustes tecnológicos o reestructuración de procesos.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 5. Asignación de responsables y recursos
                p.mb-0 Definir para cada acción un responsable técnico y los recursos necesarios para su ejecución, incluidos tiempo, personal, presupuesto y tecnología.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img106.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img107.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 6. Definición de indicadores y evidencias
                p.mb-0 Establecer indicadores de cumplimiento e impacto que permitan verificar la eficacia del plan, de acuerdo con ISO (2015).
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 7. Ejecución
                p.mb-0 Implementar las acciones según la programación definida y mantener la trazabilidad y el registro de cada avance.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img108.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img109.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 8. Seguimiento y evaluación
                p.mb-0 Verificar los avances, evaluar la eficacia de las acciones y documentar los resultados para determinar si se alcanzaron los objetivos establecidos.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 9. Cierre y estandarización
                p.mb-0 Formalizar los cambios en procedimientos, manuales y consignas cuando las acciones sean efectivas. Si los resultados no son satisfactorios, deben formularse nuevas intervenciones.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img110.png', alt='' style="width: 300px").m-auto
      p.mb-0 El #[b plan de mejoramiento organizacional] permite consolidar una cultura de calidad, fortalecer la resiliencia institucional y garantizar que el sistema de seguridad responda adecuadamente a los riesgos actuales y emergentes.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
