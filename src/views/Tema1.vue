<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la ética

    p(data-aos="fade-right") La ética constituye uno de los ejes fundamentales del pensamiento humano y una referencia esencial para la vida en comunidad. En el ámbito organizacional, su importancia aumenta porque las decisiones institucionales no afectan solamente resultados económicos o indicadores de productividad, sino también la dignidad, el bienestar y las oportunidades de las personas. Por esa razón, antes de abordar herramientas o procesos específicos de gestión del talento humano, resulta indispensable comprender:

    //- Tres tarjetas #FEDDB4 de 396x180 con r=20 y el circulo de 150x150 (#EBB9C1) montado
    //- encima: el circulo va en y=433 y la tarjeta en y=509, o sea 75 px de solape.
    .row.mt-4.mb-4(data-aos="zoom-in")
      .col-md-6.col-lg-4
        .tarjeta.bg-1-p.r-20.tarjeta--icono-arriba
          figure
            img(src="@/assets/curso/temas/t1/ic-1.svg" alt="")
          h3.text-center.mb-0 ¿Qué se entiende por ética?
      .col-md-6.col-lg-4
        .tarjeta.bg-1-p.r-20.tarjeta--icono-arriba
          figure
            img(src="@/assets/curso/temas/t1/ic-2.svg" alt="")
          h3.text-center.mb-0 ¿Cuáles son sus principios?
      .col-md-6.col-lg-4
        .tarjeta.bg-1-p.r-20.tarjeta--icono-arriba
          figure
            img(src="@/assets/curso/temas/t1/ic-3.svg" alt="")
          h3.text-center.mb-0 ¿Cómo se articula con el comportamiento individual y colectivo?

    //- El parrafo y la caja miden 916 de los 1228 (col-9); la foto de 292x321 con r=10 va
    //- pegada al borde derecho (col-3) y cubre el alto de los dos.
    .row.mt-5
      .col-lg-9
        p(data-aos="fade-right") La ética es una de las ramas más antiguas de la filosofía y, al mismo tiempo, una de las más vigentes para quienes tienen la responsabilidad de gestionar personas. Reconocer esa vigencia ayuda a comprender su alcance formativo y organizacional, pues no se reduce a discursos sobre lo correcto, sino que orienta prácticas concretas relacionadas con el respeto, la justicia, la responsabilidad y la coherencia institucional.

        .bg-1-p.r-0.p-4.mt-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-cajon.svg" alt="" style="width: 84px")
            .col
              p.mb-0 Comprender los fundamentos de la ética exige distinguir dos planos que suelen confundirse. Uno corresponde a lo que una comunidad acepta como válido por costumbre; el otro, a la reflexión que examina esas costumbres y las razones que las sostienen. En el trabajo, esa diferencia permite pasar del cumplimiento mecánico de reglas a la comprensión de por qué ciertas decisiones favorecen la dignidad, la confianza y el bien común.

        p.mt-4.mb-0(data-aos="fade-right") Para precisar el vocabulario básico que sostiene este tema, conviene tener presentes las siguientes nociones:

      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-1.png" alt="").w-100.r-10

    //- Cuatro tarjetas de 292x320 con r=20. La cuarta esta pintada en el XD con el color y el
    //- icono del estado :hover (#F7E3E6 y circulo #5E4A4D), no es una tarjeta distinta.
    .row.no-pointer.mt-4.mb-4(data-aos="fade-up")
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/nocion.svg" alt="")
                img.icono-hover(src="@/assets/curso/temas/t1/nocion-hover.svg" alt="")
          p.text-center.mb-0 #[b Moral:] conjunto de normas y costumbres que una comunidad acepta como correctas y transmite a lo largo del tiempo.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/nocion.svg" alt="")
                img.icono-hover(src="@/assets/curso/temas/t1/nocion-hover.svg" alt="")
          p.text-center.mb-0 #[b Norma:] pauta que orienta la conducta e indica lo que se espera o se permite dentro de un grupo o de una organización.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/nocion.svg" alt="")
                img.icono-hover(src="@/assets/curso/temas/t1/nocion-hover.svg" alt="")
          p.text-center.mb-0 #[b Dilema ético:] situación en la que dos valores entran en tensión y exigen elegir con criterio, sin una respuesta evidente.
      .col-md-6.col-lg-3
        .tarjeta--boton.color-1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-0
                img.icono(src="@/assets/curso/temas/t1/nocion.svg" alt="")
                img.icono-hover(src="@/assets/curso/temas/t1/nocion-hover.svg" alt="")
          p.text-center.mb-0 #[b Juicio ético:] valoración razonada que permite decidir si una acción es correcta, justa y respetuosa con las personas.

    p.mt-5(data-aos="fade-right") Estas nociones ofrecen un punto de partida común para analizar situaciones reales y evitan que la ética se perciba como un asunto abstracto. Con un lenguaje compartido resulta más sencillo reconocer su valor dentro de la vida de las organizaciones.

    p(data-aos="fade-right") Aclarado el sentido de estos conceptos, el primer paso consiste en reconocer por qué la ética resulta tan importante, tanto para las personas como para las instituciones que las agrupan.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 La ética y su importancia

    //- El parrafo, el cajon y el bloque del icono miden 812 de los 1228 (col-8); la
    //- ilustracion de 397x510 va pegada al borde derecho (col-4) y cubre el alto de los tres.
    .row.mt-4
      .col-lg-8
        p(data-aos="fade-right") Entendida como la disciplina filosófica que reflexiona sobre la conducta humana, aporta criterios de valoración y orientaciones que permiten distinguir entre acciones correctas e incorrectas. Aunque esta definición tiene un origen académico, sus implicaciones son profundamente prácticas, pues atraviesa la vida cotidiana y se manifiesta en la manera como las personas toman decisiones, responden a los demás, asumen compromisos y enfrentan dilemas.

        //- Caja con pestaña de 25x8 en (185,1964): es un `.cajon`, y solo las que la llevan.
        .cajon.color-2.p-4.mt-4(data-aos="fade-right")
          p.mb-0 En el entorno laboral, esta reflexión adquiere un valor especial, dado que muchas acciones organizacionales tienen efectos directos sobre los derechos, las condiciones de trabajo, las oportunidades de desarrollo y la calidad de las relaciones humanas.

        .row.align-items-start.mt-4(data-aos="fade-right")
          .col-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t1/espiral.svg" alt="" style="width: 84px")
          .col
            p.mb-0 Comprender la ética como reflexión sobre la conducta permite diferenciarla de una visión reducida que la asocia únicamente con normas o prohibiciones. No se limita a señalar lo que no debe hacerse; también invita a preguntarse qué tipo de persona se desea ser, qué prácticas fortalecen la convivencia y qué decisiones contribuyen a una organización más justa, respetuosa y coherente. Esta amplitud es importante en la formación del talento humano, porque un ambiente laboral ético no se construye solamente evitando faltas, sino promoviendo acciones responsables y relaciones dignas.

      .col-lg-4.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-2.png" alt="").w-100

    p.mt-4(data-aos="fade-right") Su importancia se reconoce con mayor claridad al observar decisiones frecuentes en la vida de las organizaciones. Se trata de situaciones cotidianas en las que el criterio ético orienta la actuación y define el trato que reciben las personas. Entre ellas se destacan las siguientes:

    //- Cuatro paneles PEGADOS de 551 de alto: `.tarjeta--container` ya redondea solo las
    //- esquinas exteriores (r=20), que es lo que hace el XD.
    .tarjeta--container.row.mt-4.mb-4(data-aos="fade-up")
      .col-md.tarjeta.bg-1.p-5
        .row.justify-content-center.mb-3
          .col-6
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-p1.svg" alt="")
        h3.text-center Selección meritocrática
        p.mb-0 Consiste en valorar a cada aspirante por sus competencias y méritos, con criterios definidos y sin favoritismos ni discriminación. Caso práctico: una empresa colombiana del sector servicios aplica las mismas pruebas y entrevistas a todos los candidatos, y sustenta la elección final con los resultados obtenidos.
      .col-md.tarjeta.bg-2.p-5
        .row.justify-content-center.mb-3
          .col-6
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-p2.svg" alt="")
        h3.text-center Retroalimentación respetuosa
        p.mb-0 Implica comunicar observaciones de manera oportuna y concreta, orientadas a mejorar el desempeño y no a exponer a la persona. Caso práctico: quien coordina un área conversa en privado con un integrante del equipo, reconoce sus avances y acuerda con él acciones de mejora.
      .col-md.tarjeta.bg-3.p-5
        .row.justify-content-center.mb-3
          .col-6
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-p3.svg" alt="")
        h3.text-center Trato ante la vulnerabilidad
        p.mb-0 Exige reconocer la dignidad de quien atraviesa una situación difícil y ajustar las decisiones para proteger sus derechos, sin indiferencia ni paternalismo. Caso práctico: una organización adapta las funciones de una trabajadora en licencia médica y conserva sus condiciones laborales durante la recuperación.
      .col-md.tarjeta.bg-5.p-5
        .row.justify-content-center.mb-3
          .col-6
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-p4.svg" alt="")
        h3.text-center Manejo del conflicto
        p.mb-0 Requiere escuchar a las partes, valorar los hechos con imparcialidad y buscar salidas que restablezcan el respeto y la colaboración. Caso práctico: ante un desacuerdo entre dos áreas, la persona responsable convoca una reunión, escucha ambas versiones y define compromisos verificables.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-3.png" alt="").w-100
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-cajon-2.svg" alt="" style="width: 84px")
            .col
              p.mb-0 Son actos que no se resuelven solo con eficacia técnica. En todos ellos intervienen criterios de respeto, equidad, honestidad y responsabilidad. Por eso, la ética opera como fundamento del juicio práctico en escenarios donde los procedimientos formales no bastan para responder de manera adecuada.

        p.mt-4.mb-0(data-aos="fade-left") Desde el punto de vista organizacional, la ética cumple además una función estructurante. Cuando los valores institucionales se asumen de manera coherente, la confianza entre líderes, equipos y grupos de interés se fortalece y se traduce en beneficios concretos para la vida laboral, entre los cuales se destacan los siguientes:

    //- Caja #EFF2FF de 1020x220 centrada (col-10): la lista con vinetas de letra y la
    //- ilustracion de 272x172 a la derecha.
    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.r-0.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-lg-8
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span A
                  | La cooperación entre las personas y las áreas.
                li
                  .lista-ol--cuadro__vineta
                    span B
                  | La disminución de tensiones innecesarias.
                li
                  .lista-ol--cuadro__vineta
                    span C
                  | La legitimidad de las decisiones institucionales.
                li
                  .lista-ol--cuadro__vineta
                    span D
                  | La credibilidad de los líderes ante sus equipos.
                li.mb-0
                  .lista-ol--cuadro__vineta
                    span E
                  | La permanencia de un ambiente de trabajo respetuoso.
            .col-lg-4.mt-4.mt-lg-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/img-abc.svg" alt="").w-100

    p.mt-4(data-aos="fade-right") En conjunto, estos beneficios muestran que la coherencia ética no es un asunto declarativo, sino una condición que sostiene la vida diaria de la organización. Cuando las personas perciben que los valores se cumplen en las decisiones y no solo en los documentos, la confianza deja de ser un propósito y se convierte en una experiencia compartida.

    //- Banda #CBD5FF de 1020x140 (col-10) con el circulo de 80 montado 25 px por encima de
    //- su borde superior (icono y=3691, banda y=3716).
    .row.justify-content-center.mt-5
      .col-lg-10
        .bg-3-a.r-0.p-4.cita-destacada(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t1/ic-quote.svg" alt="")
          p.text-center.mb-0
            b La coherencia entre lo que una organización dice y lo que hace es la base de su credibilidad: cuando el discurso y la práctica coinciden, la confianza se fortalece; cuando se separan, la cultura se debilita.

    p.mt-5(data-aos="fade-right") Para facilitar la comprensión del alcance de la ética en el contexto laboral, a continuación, se presenta un resumen que relaciona su sentido filosófico con expresiones prácticas dentro de la gestión del talento humano.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Dimensiones de la ética
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Dimensión
                th Descripción
                th Expresión en el contexto laboral
            tbody
              tr
                td Reflexiva
                td Analiza los fundamentos de las acciones humanas y sus consecuencias.
                td Permite valorar si una decisión de liderazgo respeta la dignidad del trabajador.
              tr
                td Normativa
                td Orienta criterios sobre lo correcto, lo justo y lo responsable.
                td Guía la formulación de códigos de conducta, reglamentos y políticas internas.
              tr
                td Relacional
                td Reconoce que toda acción afecta a otras personas y construye convivencia.
                td Incide en la manera de comunicarse, coordinar tareas y resolver conflictos.
              tr
                td Organizacional
                td Se expresa en prácticas institucionales coherentes con los valores declarados.
                td Favorece procesos transparentes de selección, evaluación y promoción.

    p.mt-4(data-aos="fade-right") Lo anterior muestra que la ética no opera en un solo plano. Se manifiesta como reflexión, norma, relación y práctica institucional. Esta lectura ayuda a entender por qué su enseñanza debe trascender definiciones abstractas y traducirse en criterios aplicables a la realidad del trabajo.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/espiral.svg" alt="" style="width: 84px")
      .col
        p.mb-0 Reconocidas estas dimensiones, conviene detenerse en aquello que les da contenido. La reflexión, la norma y la práctica institucional necesitan referentes estables que orienten la conducta cuando las situaciones se vuelven complejas. Esos referentes son los principios y valores que, más allá de cada cultura o institución, sirven de base común para decidir con criterio en el trabajo.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Principios y valores éticos universales

    p(data-aos="fade-right") La convivencia ha planteado siempre una pregunta sencilla: ¿qué se debe a las demás personas? Cada cultura la ha respondido a su manera, pero algunas exigencias reaparecen en casi todas las tradiciones y, por esa persistencia, se consideran universales. No dependen de una época, de una creencia ni del reglamento de una institución, y esa independencia es justamente lo que las convierte en un criterio compartido cuando hay que decidir en el trabajo.

    //- Banda #FEDDB4 de 1228x339 con la foto ocupando la mitad izquierda (614) y la caja
    //- #FAFBFF de 685x250 montada encima: es `.bloque-texto-g` del catalogo.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-4.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre esas exigencias, las tradiciones filosóficas y morales coinciden en cuatro que resultan especialmente relevantes cuando las decisiones afectan a las personas dentro de una organización. No se trata de conceptos reservados a la reflexión académica, pues cada uno se traduce en actuaciones verificables: la manera de seleccionar, de asignar el trabajo, de evaluar el desempeño o de responder ante una dificultad. Conocerlos con precisión evita que se conviertan en palabras repetidas sin contenido y facilita reconocer cuándo una decisión se aparta de ellos. Los principios de mayor alcance se describen a continuación:

    //- Acordeon de 1020 (col-10). El XD deja abierto el primer item: cerrado #E5EBFC y
    //- abierto #F7E3E6, los dos con r=20. Los cuerpos de los items 2-4 salen del _DI.docx,
    //- porque en el diseno solo esta desplegado el primero.
    .row.justify-content-center.mt-5
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-4 r-20")
          div(titulo="La dignidad humana")
            p.mb-0 Reconoce el valor propio de cada persona, con independencia de su cargo, su antigüedad o su rendimiento, y exige un trato que nunca la reduzca a un instrumento de producción. Ejemplo: una empresa colombiana del sector agroindustrial conserva el respeto y las condiciones laborales de un trabajador que atraviesa una enfermedad prolongada.
          div(titulo="La justicia")
            p.mb-0 Orienta a dar a cada uno lo que le corresponde, mediante criterios claros y verificables que sustenten la distribución de oportunidades, cargas y reconocimientos. Ejemplo: una entidad publica los requisitos de un ascenso, aplica las mismas pruebas a todos los aspirantes y sustenta ante el equipo la decisión final.
          div(titulo="La responsabilidad")
            p.mb-0 Implica asumir las consecuencias de lo que se decide y responder por sus efectos, con especial cuidado cuando la determinación afecta la trayectoria laboral de quienes integran el equipo. Ejemplo: una cooperativa colombiana reconoce un error en la liquidación de horas extras, corrige el pago e informa oportunamente a las personas afectadas.
          div(titulo="La autonomía y la búsqueda del bienestar")
            p.mb-0 Reconocen la capacidad de decidir sobre la propia vida y el derecho a condiciones laborales dignas, que favorezcan el desarrollo y la salud de quienes trabajan. Ejemplo: una empresa colombiana de servicios que atiende en jornadas rotativas consulta al equipo antes de cambiar los horarios y ajusta la programación de turnos según las necesidades familiares.

    .row.mt-5
      .col-lg-8
        p(data-aos="fade-right") Reconocidos en conjunto, estos cuatro principios ofrecen un marco común para valorar las decisiones que afectan a las personas. Ninguno actúa por separado: la dignidad se sostiene en la justicia, la justicia exige responsabilidad y la responsabilidad se ejerce respetando la autonomía. Comprender esa relación permite pasar de la enunciación de valores a una actuación coherente en el trabajo.

        //- Caja con pestana de 25x8 en (185,6036): `.cajon`.
        .cajon.color-1.p-4.mt-4(data-aos="fade-right")
          p.mb-0 Los principios éticos pueden entenderse como fundamentos estables que orientan el juicio moral. Los valores, en cambio, son cualidades deseables que se viven y se practican en las relaciones cotidianas. Esta diferencia no implica separación, sino complementariedad. Un principio como la justicia puede expresarse en valores como la equidad, la imparcialidad y la honestidad. De la misma manera, el respeto por la dignidad humana se concreta en valores como la consideración, la empatía y la tolerancia. En el ámbito laboral, esta articulación permite pasar de las grandes formulaciones éticas a conductas observables y evaluables.

        //- El parrafo mide 708 (col-8): va junto al cajon, no a ancho completo, porque la
        //- foto de 391x636 le queda al lado hasta y=6551.
        .row.align-items-start.mt-4(data-aos="fade-right")
          .col-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t1/espiral.svg" alt="" style="width: 84px")
          .col
            p.mb-0 Esa articulación entre valores y conductas no responde a una moda administrativa. La tradición filosófica la ha sostenido con argumentos que aún orientan el pensamiento ético contemporáneo. Dos aportes ayudan a comprender su alcance en el trabajo:

      .col-lg-4.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-5.png" alt="").w-100

    //- Dos citas de 500x240 (r=5) centradas en los 1020 del col-10. `.bloque-texto-f` es la
    //- unica variante que pone la comilla de cierre abajo a la derecha, como el XD.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-md-6.mb-4.mb-md-0
            .bloque-texto-f.color-1.r-5.pt-4.px-4.h-100(data-aos="fade-right")
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.bloque-texto-f__texto La persona debe tratarse siempre como un fin en sí misma y nunca solo como un medio. Este planteamiento fundamenta el rechazo a cualquier práctica que instrumentalice al trabajador.
              .bloque-texto-f__autor
                p.mb-0 Kant (2013)
          .col-md-6
            .bloque-texto-f.color-1.r-5.pt-4.px-4.h-100(data-aos="fade-left")
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.bloque-texto-f__texto Distingue una ética de mínimos, con las exigencias de justicia que toda persona puede reclamar, y una ética de máximos, ligada a los ideales de vida buena que cada quien elige.
              .bloque-texto-f__autor
                p.mb-0 Cortina (2013)

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-6.png" alt="").w-100
      .col-lg-8
        .bg-1.r-10.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t1/ic-cajon-3.svg" alt="" style="width: 84px")
            .col
              p.mb-0 Llevar estas ideas a la práctica no depende de grandes declaraciones. En la vida diaria de una organización se reconocen en gestos concretos: la forma de comunicar una decisión difícil, de distribuir una carga o de responder ante un error. Allí, en lo cotidiano, los principios demuestran su vigencia o revelan su ausencia.

        p.mt-4.mb-0(data-aos="fade-left") En la práctica, los principios rara vez se aplican de manera aislada. Con frecuencia entran en tensión y obligan a decidir con criterio. Para orientar esa valoración conviene tener presentes las siguientes pautas:

    //- Linea de tiempo de 4 pasos (650 de ancho) con la foto de 292x344 a la derecha; el
    //- XD deja desplegado el primero. Numero activo #003CE1 con la cifra blanca, inactivo
    //- #E5EBFC con la cifra oscura; item abierto #F7E3E6 y cerrados #E5EBFC.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-7
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Identificar los valores en juego")
            .col-12
              p.mb-0 Consiste en reconocer qué principios se enfrentan antes de tomar partido, pues el conflicto rara vez opone lo correcto a lo incorrecto y suele darse entre dos valores legítimos. Ejemplo: un jefe elige entre proteger la confidencialidad de un trabajador enfermo e informar al equipo sobre un cambio en la distribución de tareas.
          .row(numero="2" titulo="Valorar las consecuencias sobre las personas")
            .col-12
              p.mb-0 Implica examinar a quién beneficia y a quién perjudica cada alternativa, con especial atención a quienes se encuentran en situación de desventaja dentro del equipo. Ejemplo: una empresa evalúa un cambio de turnos y considera su efecto sobre quienes tienen personas a cargo o dependen del transporte público para desplazarse.
          .row(numero="3" titulo="Verificar la coherencia con lo declarado")
            .col-12
              p.mb-0 Supone contrastar la decisión con los valores que la organización proclama, de modo que no se produzca contradicción entre el discurso institucional y la actuación cotidiana. Ejemplo: una entidad que promueve la igualdad revisa una convocatoria interna y detecta requisitos que excluyen sin motivo a parte de su propio personal.
          .row(numero="4" titulo="Sustentar y comunicar la decisión")
            .col-12
              p.mb-0 Exige explicar las razones de manera clara y oportuna, pues una determinación justificada resulta comprensible, aunque no todas las personas la compartan. Ejemplo: quien coordina un área informa por qué se aplazó un proyecto, expone los criterios considerados y responde las inquietudes en la misma reunión.
      .col-lg-4.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-7.png" alt="").w-100

    p.mt-4(data-aos="fade-right") Estas pautas no eliminan la dificultad de decidir, pero evitan que la respuesta dependa de la improvisación o de la preferencia personal.

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/espiral.svg" alt="" style="width: 84px")
      .col
        p.mb-0 Reunidos los fundamentos y las pautas de decisión, resulta oportuno observar cada referente ético en su expresión concreta dentro del trabajo. Cada principio posee un sentido propio y, a la vez, se traduce en prácticas que pueden reconocerse en la selección, la evaluación, la comunicación y el trato cotidiano entre las personas. El siguiente resumen relaciona esos dos planos y muestra cómo un valor declarado se convierte en una actuación observable en la gestión del talento humano.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Principios y valores éticos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Principio o valor
                th Sentido ético
                th Aplicación en la gestión del talento humano
            tbody
              tr
                td Dignidad humana
                td Reconoce el valor intrínseco de toda persona.
                td Exige un trato respetuoso, procesos sin humillación y el reconocimiento del trabajador como sujeto de derechos.
              tr
                td Justicia
                td Orienta a dar a cada quien lo que corresponde de manera equitativa.
                td Impulsa procesos de selección, ascenso y evaluación basados en criterios claros.
              tr
                td Responsabilidad
                td Implica asumir las consecuencias y actuar con compromiso.
                td Obliga a tomar decisiones laborales con fundamento, seguimiento y respeto por sus efectos.
              tr
                td Honestidad
                td Favorece la verdad, la transparencia y la coherencia.
                td Se refleja en información clara, comunicación veraz y manejo ético de situaciones sensibles.
              tr
                td Respeto
                td Reconoce la dignidad y la diferencia del otro.
                td Fortalece la convivencia, la escucha y el trato adecuado entre compañeros y líderes.
              tr
                td Solidaridad
                td Dispone a colaborar y a reconocer la interdependencia humana.
                td Favorece el apoyo mutuo, el trabajo en equipo y la sensibilidad frente a situaciones personales.

    p.mt-4(data-aos="fade-right") Este análisis muestra una continuidad entre fundamentos éticos y prácticas organizacionales. No se trata de principios distantes de la realidad, sino de referencias que deben orientar decisiones concretas. Por ello, fortalecer la gestión del talento humano desde la ética supone reconocer que la cultura laboral no se construye solo con metas e indicadores, sino también con valores vividos en la comunicación, en la coordinación del trabajo y en la manera de ejercer el liderazgo.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
