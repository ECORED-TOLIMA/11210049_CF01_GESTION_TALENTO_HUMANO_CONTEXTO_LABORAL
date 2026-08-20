<template lang="pug">
.curso-main-container.introduccion.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //- Fila 1: el parrafo ocupa 916px de los 1228 del area de contenido (col-9) y la foto
    //- 292x237 con r=10 va pegada al borde derecho (col-3).
    .row
      .col-lg-9
        p(data-aos="fade-right") La ética es el conjunto de principios y valores que orientan las decisiones y el comportamiento de las personas. En el ámbito laboral, gestionar el talento humano desde la ética marca la diferencia entre una organización que solo persigue resultados y una que reconoce la dignidad de cada persona y construye ambientes de trabajo justos, respetuosos y sostenibles.

        //- Caja #FEDDB4 de 916x140 SIN radio, con el icono de 84x84 (r=10, #CBD5FF) dentro.
        .bg-1-p.r-0.p-4.mt-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/intro/icono-1.svg" alt="" style="width: 84px")
            .col
              p.mb-0 A partir de este recorrido, se analizan los fundamentos de la ética como base del comportamiento humano y organizacional, y las relaciones interpersonales como el tejido que sostiene la convivencia laboral. También se reconoce el papel del respeto y del trato digno en la conformación de equipos donde la diferencia enriquece y no divide.

      .col-lg-3.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/intro/foto.png" alt="").w-100.r-10

    .row.align-items-start.mt-4(data-aos="fade-right")
      .col-auto.mb-3.mb-md-0
        figure.mb-0
          img(src="@/assets/curso/temas/intro/icono-2.svg" alt="" style="width: 84px")
      .col
        p.mb-0 De manera complementaria, el componente integra la gestión del talento humano, la cultura, las políticas y el clima organizacional, junto con la inteligencia emocional y las estrategias para el manejo de las emociones, con ejemplos aplicados al contexto organizacional colombiano. Por ello, el estudio de este componente se complementa con un recurso audiovisual que contextualiza los temas abordados, facilita la comprensión de su relevancia en situaciones reales y orienta el proceso de aprendizaje desde una perspectiva práctica. Para acceder a este recurso, se recomienda consultar el material audiovisual que acompaña esta sección:

    //- El XD deja este espacio como marcador («Espacio para video») y ni el .xd ni el DI traen la
    //- URL: se queda el iframe del scaffold hasta que llegue el enlace real.
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
}
</script>

<style lang="sass"></style>
