<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b administración del servicio de seguridad] exige integrar procesos operativos, administrativos, tecnológicos y documentales que permitan garantizar la continuidad de la operación, el cumplimiento de los requisitos establecidos y la adecuada gestión de los riesgos. Este enfoque requiere organizar la información, controlar los recursos, evaluar el desempeño y mantener mecanismos de seguimiento que faciliten la toma de decisiones sustentadas en evidencia.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          p Dentro de este proceso, la #[b gestión de la calidad], la identificación de #[b hallazgos y no conformidades], la aplicación de acciones preventivas y correctivas y la mejora continua permiten detectar desviaciones, analizar sus causas y establecer medidas orientadas a fortalecer la eficacia del sistema de seguridad. Estas actividades también favorecen la trazabilidad, la actualización de procedimientos y la adaptación frente a cambios operativos, tecnológicos y del entorno.
          .caja-1(data-aos="fade-left")
            p.mb-0 En este contexto, el #[b plan de mejoramiento] constituye una herramienta fundamental para organizar las acciones derivadas de evaluaciones, auditorías, incidentes y análisis de riesgo. Su formulación permite articular responsables, recursos, tiempos, indicadores y mecanismos de verificación, con el propósito de transformar las oportunidades de mejora en acciones concretas que fortalezcan el desempeño, la confiabilidad y la sostenibilidad del servicio de seguridad.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
