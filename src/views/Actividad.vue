<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Administración, gestión de calidad y plan de mejoramiento',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la seguridad institucional, la evaluación del servicio, la atención al cliente, la gestión de la calidad y el mejoramiento continuo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cómo se concibe la seguridad institucional según el documento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como un sistema integrado de prevención, detección, respuesta y recuperación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Como un sistema enfocado en vigilancia, contratación, sanción y administración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como un proceso centrado en documentación, presupuesto, personal y contratación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como un método orientado a inspección, registro, archivo y mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el objetivo central del esquema de trabajo en seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar las actividades operativas mediante informes técnicos verificables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Impedir la materialización de amenazas mediante medidas de seguridad planificadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Controlar exclusivamente los recursos tecnológicos utilizados en cada instalación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar únicamente las funciones administrativas desarrolladas durante cada jornada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué función cumple un informe técnico de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar los turnos y distribuir los recursos humanos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer sanciones administrativas frente a incumplimientos del personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar y fundamentar técnicamente información relevante de la operación de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir los procedimientos y consignas establecidos en el plan de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica fundamental de un informe técnico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Subjetivo, porque incorpora apreciaciones personales sobre los hechos registrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Flexible, porque permite omitir datos cuando parecen poco importantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Informal, porque facilita la comunicación rápida entre los diferentes turnos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Auditable, porque permite contrastar la información con registros del sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué implica evaluar un servicio de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comparar su funcionamiento real con estándares, riesgos, consignas y requisitos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Comparar solamente los costos del servicio con el presupuesto anual disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Examinar únicamente el desempeño individual de los operadores durante sus turnos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar exclusivamente los equipos tecnológicos utilizados para realizar la vigilancia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué aspecto revisa principalmente la evaluación técnica del servicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La presentación personal y el comportamiento profesional de cada operador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El estado y funcionamiento de los equipos tecnológicos utilizados en seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La satisfacción y las expectativas manifestadas por los clientes del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estructura y redacción de los documentos elaborados durante cada jornada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el primer nivel de evaluación del servicio de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La evaluación administrativa aplicada al cumplimiento de los indicadores establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La auditoría documental realizada sobre los registros producidos durante el servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La supervisión operativa realizada mediante seguimiento, verificación y control técnico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La evaluación estratégica orientada al análisis de satisfacción de los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué permite identificar principalmente una auditoría documental?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las expectativas futuras de los usuarios respecto a la calidad del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las amenazas externas mediante análisis probabilísticos del entorno institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las necesidades presupuestales asociadas con la adquisición de nueva tecnología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Inconsistencias, errores, omisiones y desviaciones presentes en los registros operativos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica debe tener el registro de una novedad para favorecer la trazabilidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incluir hora exacta, ubicación, descripción objetiva y acciones ejecutadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incluir hora aproximada, valoración subjetiva y recomendaciones del operador responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incluir únicamente el lugar, la identificación y el resultado final obtenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incluir datos generales, apreciaciones personales y posibles causas del acontecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el propósito de la evaluación integral del servicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Examinar exclusivamente las actividades documentales ejecutadas durante los diferentes turnos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Valorar factores operativos, tecnológicos, humanos y procedimentales del servicio de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Determinar únicamente el grado de satisfacción expresado por los usuarios del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer solamente las responsabilidades disciplinarias relacionadas con las fallas encontradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la finalidad estratégica de la evaluación del servicio de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar responsables para aplicar medidas disciplinarias frente a cualquier incumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar procedimientos operativos que requieran procesos frecuentes de revisión institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalecer el sistema mediante la detección de fallas y oportunidades de mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la cantidad de registros necesarios para facilitar las actividades del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cómo define la norma ISO la satisfacción del cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como la frecuencia con la que una persona utiliza los servicios de una organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como la disposición del usuario para recomendar una organización a otras personas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como la capacidad institucional para atender solicitudes dentro del tiempo establecido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como la percepción del cliente sobre el grado de cumplimiento de sus expectativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el primer paso del proceso propuesto por ISO 10004 para medir la satisfacción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar claramente los segmentos de clientes que serán objeto de evaluación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Analizar detalladamente los datos obtenidos mediante los instrumentos de evaluación aplicados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comunicar formalmente los resultados obtenidos entre las partes interesadas de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Realizar continuamente el seguimiento de las acciones implementadas para mejorar el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué mide el nivel de recomendación dentro de la evaluación del servicio al cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El grado de cumplimiento de los procedimientos establecidos por la organización evaluada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La probabilidad de que el cliente hable positivamente de la entidad en su entorno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La posibilidad de que el usuario presente una queja formal después del servicio recibido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El nivel de recursos que la organización utiliza para atender las necesidades del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué permite determinar el análisis de brechas del servicio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las relaciones estadísticas existentes entre diferentes dimensiones evaluadas del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los cambios de percepción relacionados con características demográficas de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La diferencia entre las expectativas del cliente y su percepción del servicio recibido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las variaciones presupuestales relacionadas con los recursos utilizados durante la prestación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la relación entre satisfacción, recomendación y lealtad señalada en el documento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La recomendación siempre produce satisfacción y garantiza automáticamente la lealtad del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La lealtad constituye un requisito previo para alcanzar cualquier nivel de satisfacción general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La satisfacción y la recomendación representan exactamente la misma dimensión del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La satisfacción favorece la recomendación y lealtad, aunque por sí sola no las garantiza.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué función tiene la evaluación estratégica del servicio al cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar información de la experiencia del cliente en insumos para orientar decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Convertir las opiniones de los clientes en sanciones para los responsables de cada servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar los indicadores institucionales por percepciones individuales obtenidas mediante encuestas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la evaluación organizacional únicamente a los resultados económicos obtenidos periódicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Por qué es importante emplear un lenguaje simple en los instrumentos de evaluación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite reducir automáticamente la cantidad de preguntas incluidas en cada instrumento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque facilita que el consumidor comprenda claramente la información que se le comunica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque permite reemplazar las políticas institucionales relacionadas con privacidad y seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque facilita eliminar los campos obligatorios incluidos en los instrumentos de recopilación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite una evaluación adecuadamente ejecutada en el servicio de seguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente los riesgos existentes dentro de las instalaciones protegidas por operadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los procedimientos técnicos por decisiones tomadas directamente durante cada incidente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Corregir fallas, fortalecer la formación y optimizar los recursos empleados en el servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitar la elaboración de informes técnicos cuando las novedades hayan sido solucionadas rápidamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué consecuencia puede producir la ausencia de procesos sistemáticos de evaluación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El fortalecimiento automático de los procedimientos y de la confianza manifestada por el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La optimización permanente de la tecnología sin necesidad de realizar procesos de seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El incremento inmediato de la eficacia operativa mediante la reducción de controles documentales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El deterioro de procedimientos, las brechas de seguridad y la pérdida de confianza del cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
