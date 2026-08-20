<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p(data-aos="fade-down") La gestión del talento humano alcanza su sentido pleno cuando se fundamenta en criterios éticos y en una comprensión respetuosa de la persona. El componente articula cuatro ejes temáticos: los fundamentos de la ética como base del comportamiento humano y organizacional; las relaciones interpersonales en el trabajo, sustentadas en la alteridad y el respeto; la gestión del talento humano en su vínculo con la cultura, las políticas internas y el clima organizacional; y la inteligencia emocional como capacidad para reconocer y regular las emociones en el entorno laboral. Estos ejes se articulan para evidenciar que gestionar personas desde la ética no es una opción secundaria, sino una condición necesaria para construir organizaciones más humanas, coherentes y sostenibles.

    p.mt-4.mb-0(data-aos="fade-down") A continuación, se presenta el mapa conceptual que organiza de manera visual los ejes temáticos del componente y las relaciones que los articulan:

    //- El mapa del XD mide 1245 px y el ancho útil de la tarjeta es 1228: se ajusta a él.
    figure.mt-4(data-aos="fade-down")
      img(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual sobre la ética y la gestión del talento humano. Integra cuatro ejes: la ética, las relaciones interpersonales, la gestión del talento humano y la inteligencia emocional, que juntos fortalecen la convivencia, el clima laboral y la sostenibilidad de la organización." style="width: 1228px").m-auto

    .row.justify-content-center.mt-5
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
