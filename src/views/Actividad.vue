<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")

</template>

<script>
//- GENERADO por `scripts/gen_actividad.py` desde `11210049_CF01_AD.docx`.
//- No editar a mano: volver a correr el script si cambia el docx.
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ética y gestión del talento humano en el contexto organizacional',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar el grado de apropiación de los conceptos clave sobre los fundamentos de la ética, las relaciones interpersonales, la gestión del talento humano y la inteligencia emocional en el contexto organizacional.',
      // el kit sólo muestra 10 de las 20: barajar es OBLIGATORIO
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_final_aprobado:
        'Ha superado la actividad. Sus respuestas demuestran conocimientos sólidos sobre los fundamentos de la ética, las relaciones interpersonales, la gestión del talento humano y la inteligencia emocional en el contexto organizacional.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la ética según el componente formativo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un reglamento disciplinario empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una disciplina filosófica que reflexiona sobre la conducta humana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema exclusivo de sanciones laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una técnica de control administrativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La ética analiza la conducta humana y orienta la distinción entre acciones correctas e incorrectas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es un principio ético universal fundamental en la gestión humana?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Productividad extrema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Competencia individual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dignidad humana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Jerarquía organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La dignidad humana reconoce el valor intrínseco de toda persona y exige un trato respetuoso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza la ética organizacional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El conjunto de salarios de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las estrategias de mercadeo institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los principios y valores que orientan el comportamiento colectivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los niveles de producción anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La ética organizacional guía las prácticas y decisiones dentro de la institución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué busca un enfoque ético en la selección de personal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar mérito, equidad y transparencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Favorecer recomendaciones internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contratar únicamente por experiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La selección ética promueve procesos transparentes y respetuosos con los postulantes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de relación interpersonal ocurre entre compañeros del mismo nivel jerárquico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vertical.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Horizontal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disciplinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las relaciones horizontales favorecen el trabajo colaborativo y el apoyo entre pares.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La alteridad consiste en:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imponer ideas propias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reconocer al otro como diferente y valioso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar el trabajo en equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener distancia emocional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La alteridad promueve el reconocimiento de la diversidad y fortalece la convivencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes factores fortalece las relaciones interpersonales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rumores constantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comunicación agresiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicación abierta y honesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Favoritismo laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La comunicación clara favorece la confianza y mejora la coordinación del equipo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué ocurre cuando existe favoritismo en una organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la confianza institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta la equidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se fortalece el liderazgo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se deterioran las relaciones y la legitimidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El favoritismo genera inconformidad, desconfianza y afecta el clima organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'La gestión del talento humano se orienta principalmente a:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar únicamente contratos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vigilar horarios laborales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Atraer, desarrollar y retener personas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar sanciones disciplinarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué representa el portafolio institucional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los valores éticos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los productos, servicios y programas ofrecidos por la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las normas disciplinarias internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los conflictos organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El portafolio institucional permite comprender el propósito y alcance de la organización',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La cultura organizacional se construye mediante:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente documentos oficiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interacciones, prácticas y liderazgo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas gubernamentales externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La cultura se refleja en las prácticas cotidianas y en la manera como se relacionan las personas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la función principal de una política organizacional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describir pasos operativos detallados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Orientar decisiones y comportamientos generales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar únicamente el desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear incentivos salariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las políticas establecen lineamientos generales para actuar de manera coherente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué describe un procedimiento organizacional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los valores institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los principios filosóficos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los pasos concretos para ejecutar una tarea.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La misión organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los procedimientos permiten realizar procesos de manera estandarizada y eficiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El clima organizacional corresponde a:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las condiciones físicas del edificio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La percepción colectiva sobre el ambiente laboral.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El nivel salarial de los empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las metas comerciales anuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El clima organizacional influye en la motivación, el bienestar y la convivencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Quién popularizó el concepto de inteligencia emocional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abraham Maslow.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Emmanuel Levinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Daniel Goleman.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Stephen Robbins.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Daniel Goleman difundió ampliamente el concepto aplicado al ámbito laboral y social.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es un componente de la inteligencia emocional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competitividad extrema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autoconciencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Productividad financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autoridad jerárquica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La autoconciencia permite reconocer las propias emociones y su influencia.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del formativo.',
        },
        {
          id: 17,
          texto: 'La empatía implica:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar emociones ajenas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprender sentimientos y perspectivas de los demás.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener distancia profesional absoluta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar conversaciones difíciles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La empatía mejora la comunicación y fortalece las relaciones laborales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué estrategia ayuda a evitar respuestas impulsivas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escalamiento del conflicto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crítica destructiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pausa antes de responder.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aislamiento laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Hacer una pausa favorece respuestas prudentes y mejor manejo emocional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué favorece el trabajo en equipo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Individualismo excesivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Competencia desmedida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cooperación y corresponsabilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rumores organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El trabajo colaborativo fortalece la integración y el logro colectivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es la finalidad principal de una gestión humana ética?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar únicamente ganancias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar estrictamente a los trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Construir organizaciones más humanas y coherentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar completamente los conflictos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La ética en la gestión humana promueve justicia, respeto, bienestar y sostenibilidad organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
