# Revisión y pendientes

Lo que queda abierto en el entregable y las decisiones que se tomaron cuando la fuente no
alcanzaba. Cada punto dice **qué** pasa, **dónde** y **por qué** se resolvió así, para que se
pueda revertir sin tener que reconstruir el razonamiento.

## Lo que hace falta de terceros

Cuatro cosas que no dependen de la maqueta: no están ni en el `.xd` ni en los documentos, y hay
que pedirlas. Mientras tanto cada una tiene puesto un sustituto que deja el curso funcionando.

| Qué falta                      | Dónde va                                                                                       | Qué hay puesto mientras tanto                                  | Detalle |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------- |
| **La URL del vídeo**           | Introducción                                                                                   | el `iframe` de ejemplo del scaffold                            | punto 1 |
| **El audio del pódcast**       | Tema 2, apartado 2.3                                                                           | un MP3 mudo de 3 minutos, `podcast.mp3`                        | punto 9 |
| **Ocho fotografías de slider** | cuatro en el 2.3 y cuatro en el 3.2                                                            | se repite en las cinco diapositivas la única que trae el `.xd` | punto 9 |
| **Los iconos definitivos**     | tema 1: tres círculos de preguntas, cuatro tarjetas de nociones y cuatro paneles de decisiones | el mismo glifo que repite el diseño                            | punto 2 |

Ninguna de las cuatro afecta a la maquetación: se sustituye el archivo y ya está. Todo lo demás
que aparece en este documento son decisiones ya tomadas, con su motivo, por si se quieren
revertir.

## 1. Falta la URL del vídeo de la Introducción

El artboard `Introduccion` reserva un bloque de **1228 × 580 con r=10** rotulado «Espacio para
vídeo». Ni el `.xd` ni el `_DI.docx` traen el enlace: el documento sólo nombra el guion
(`DI_Guion_Introduccion_Video_CF01_11210049`). Queda el `iframe` del scaffold hasta que llegue
la URL real.

Además, el bloque del diseño no es 16:9. El componente `.video` del kit fuerza esa proporción
(1228 × 691), que es la del vídeo que acabará dentro; se respeta la del componente y no la del
marcador.

## 2. El XD repite el mismo icono en tres grupos distintos

El mismo glifo —un documento con gráficas— aparece en:

- los **tres círculos** de la fila de preguntas del Tema 1 (`¿Qué se entiende por ética?`…),
- las **cuatro tarjetas** de nociones (`Moral`, `Norma`, `Dilema ético`, `Juicio ético`),
- los **cuatro paneles** de decisiones (`Selección meritocrática`…).

No es un problema de exportación: los archivos que salen del `.xd` son **idénticos byte a byte**
(mismo `md5`). Se maquetan tal como están en el diseño. Si la intención era un icono por
concepto, hacen falta los iconos definitivos.

Caso aparte: la **espiral** que acompaña a varios párrafos del Tema 1 sí es el mismo elemento
decorativo en el diseño, y se reutiliza a propósito.

## 3. Fin de línea: el `.prettierrc` y el repositorio no coinciden

`.prettierrc` declara `"endOfLine": "crlf"` y todo el repositorio está commiteado con **LF**. Por
eso `npm run lint` reescribe los 19 archivos de `src/` completos y el diff real queda enterrado
bajo el cambio de fin de línea. Se ha mantenido **LF**, que es lo que ya había. Si se prefiere
CRLF, conviene hacer la conversión en un commit propio y aparte.

## 4. La Tabla 1 viene vacía en el diseño

En el artboard sólo están los encabezados (`Dimensión`, `Descripción`, `Expresión en el contexto
laboral`) y las bandas de las filas. El contenido de las celdas se tomó del `_DI.docx`, que sí lo
trae completo.

## 5. Dos colores que el diseño y la ficha automática no cuentan igual

En dos filas de iconos la lectura automática del `.xd` devolvía el color de una capa inferior. Se
resolvió muestreando el píxel del PDF, que es lo que se ha maquetado:

| Elemento                                     | Lectura del `.xd`              | Color real (PDF)                                             |
| -------------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| Círculos de las tarjetas de nociones         | `#003CE1` y `#EBB9C1` alternos | `#003CE1` los tres primeros, `#5E4A4D` el del estado _hover_ |
| Círculos de los cuatro paneles de decisiones | `#EBB9C1`                      | `#FAFBFF`                                                    |

## 6. Ajustes sobre lo que traía la plantilla

Tres valores del scaffold contradecían el diseño y se cambiaron:

- el texto del banner de portada estaba forzado a **blanco**; en el XD va en `#12263F`;
- la columna de texto de la portada estaba fijada al **58,33 %**; el diseño la quiere con un
  frame de 490 px (8 % de sangría izquierda sobre una tarjeta de 1328);
- el número/icono del badge de los títulos estaba en **blanco** sobre `#CBD5FF`, donde no se lee;
  en el XD va oscuro. Lo mismo con la viñeta cuadrada de las listas ordenadas.

Y el encabezado de tabla del kit venía en el gris del sistema (`#e8e8e8`); el diseño lo pinta en
`#CBD5FF`, así que se cambiaron las variables `$table-header-bg-color` y `$table-header-color`.

## 7. Detalles del Tema 1 que se decidieron sin fuente exacta

- **Pestañas del 1.4**: el diseño muestra abierta la segunda (`Inducción`). `TabsA` del kit abre
  siempre la primera y no expone ninguna propiedad para cambiarlo, así que se deja `Selección`.
  El contenido de las cinco es el del `_DI.docx`; en el artboard sólo está desplegada una.
- **Acordeón del 1.2 y línea de tiempo del 1.2**: igual, en el diseño sólo está desplegado el
  primer elemento. Los cuerpos de los demás salen del `_DI.docx`.
- **Espacio del vídeo**: ver el punto 1.

## 8. Un fallo del exportador de assets, ya corregido

Las **puntas de flecha** de los diagramas son nodos `polygon` en el `.xd`, y el exportador no
contemplaba ese tipo: caían en la rama final que devuelve una cadena vacía, así que desaparecían
**sin dar ningún error**. Se vio en la Figura 1 del 1.3, que salía con las líneas pero sin las
cuatro flechas. Corregido: ahora `polygon` se emite como `<polygon>` y también tiene caja
envolvente, que antes era `None`.

Afecta a cualquier diagrama con flechas. En este curso hay `polygon` en los artboards del Tema 1
(4), del Tema 2 (4), en `Tablet` (2) y en el pasteboard (10); los assets ya entregados de portada,
introducción, 1.1 y 1.2 no contienen ninguno, así que no había nada que rehacer.

## 9. Faltan ocho fotos de slider y el audio del pódcast

- **Slider del 2.3** («factores que deterioran las relaciones»): el diseño dibuja **cinco
  viñetas** y, con ellas, cinco diapositivas, pero en el `.xd` sólo existe la **fotografía de la
  primera**. Ni el artboard ni el pasteboard traen las otras cuatro. Se han maquetado las cinco
  diapositivas —los textos sí están completos en el `_DI.docx`— reutilizando esa única imagen,
  para no romper la composición. Con las cuatro fotos definitivas se sustituyen y ya está.
- **Slider del 3.2** («componentes del portafolio institucional»): exactamente el mismo caso.
  Cinco viñetas, cinco diapositivas y **una sola fotografía** en el `.xd`. Los cinco textos
  vienen completos del `_DI.docx`; la imagen se repite en las cinco hasta que lleguen las otras
  cuatro. Entre los dos sliders, por tanto, **faltan ocho fotografías**.
- **Pódcast del 2.3**: el `_DI.docx` nombra el guion (`12210049_CF01_Guion_podcast`) pero no hay
  archivo de audio, y el XD dibuja la barra con un texto de relleno
  (`xxxxxxxxxxx xxxxxxx xxx xxxxxxxxx`). Se deja un **MP3 mudo de 3 minutos** con el nombre
  `podcast.mp3` para que el reproductor funcione; se reemplaza por el audio real cuando llegue.
- **Una tarjeta del PDF que no está en el diseño**: en la página del Tema 2, el PDF muestra
  una tarjeta flotante con «Relación vertical / Relación horizontal» encima del texto, hacia la
  mitad del 2.1. Ese elemento **no pertenece al artboard** —es contenido del pasteboard que se
  coló al exportar el PDF—, así que no se ha maquetado. La versión buena de esa comparación es
  la Figura 2, que sí está en su sitio.

## 10. Los textos alternativos de las figuras salen del pasteboard

El `.xd` trae escritos los **textos alternativos** de las figuras, bajo el rótulo
`Texto alternativo:` en el pasteboard. Son los que se han puesto en el `alt` de la Figura 1, de
la Figura 2 y del mapa conceptual de la síntesis. No se redactan por cuenta propia.

## 11. Actividad didáctica

La actividad **no tiene artboard en el XD** (los nueve artboards corresponden a las nueve
páginas del PDF y todas están asignadas), así que se monta sobre el `ActividadController` del
kit con sus estilos por defecto y sale íntegra del `_AD.docx`: 20 preguntas, sus cuatro
opciones, las retroalimentaciones y los dos mensajes finales.

Tres cosas que conviene saber:

- **El kit muestra 10 de las 20 preguntas** (`MAX_PREGUNTAS = 10`). Las veinte quedan como banco
  y `barajarPreguntas` va en `true`; sin eso saldrían siempre las diez primeras en el mismo orden.
- **Las imágenes de las preguntas eran de otro curso.** El scaffold traía cinco fotografías de
  electrónica industrial, con el acento turquesa de aquel diseño, repetidas dos veces cada una.
  Se sustituyeron por cinco fotografías **de este mismo `.xd`**, recortadas a 400 × 400, una por
  eje temático: la balanza (ética), el equipo reunido (relaciones), la reunión de gestión humana,
  la imagen de emociones y las manos con las figuras (cooperación). Si el diseñador entrega
  imágenes propias para la actividad, se reemplazan.
- **Un error de la fuente**: la pregunta 1 del `_AD.docx` termina sin signo de cierre
  («¿Qué es la ética según el componente formativo»). Se añadió el «?». La fila del comentario
  correcto de la pregunta 9 también viene sin su etiqueta en el documento, aunque el texto sí
  está y se usó tal cual.

## 12. Glosario, referencias y créditos

Los nueve términos del glosario y las ocho referencias salen del `_DI.docx`. Dos apuntes sobre
la fuente:

- En el glosario, la entrada **«Ética»** viene separada por un punto y no por dos puntos, como
  las otras ocho. Se unificó con los dos puntos.
- La referencia de **Goleman (2012)** trae debajo un enlace a la Biblioteca Digital de Bogotá;
  se asoció a esa entrada, que es a la que corresponde.

En los créditos, el bloque de **contenido instruccional** traía del scaffold un nombre que no es
el de este curso. Según el `CONTROL DEL DOCUMENTO` del `_DI.docx`, la experta temática es
**Norma Constanza Morales Cruz** (abril de 2026) y la evaluadora instruccional **Gloria Lida
Alzate Suárez** (agosto de 2026). Los otros tres bloques —ecosistema, diseño y desarrollo, y
validación— se dejan como venían: ninguna de las fuentes los contradice.

## 13. Los dos distintivos de la portada flotan

El pasteboard del XD lleva escrita la instrucción **«Flotar verticalmente en diferentes
tiempos»** junto al rótulo `DESARROLLADORES`, referida a los dos distintivos circulares de la
portada (la diana y el embudo). Se sacaron de la ilustración y se montaron como imágenes
decorativas con la animación del scaffold y tiempos distintos (2,8 s y 2,5 s).

Para anclarlos a la ilustración y no a la columna —que es más ancha y más alta—, la columna de
la imagen pasa a ser una rejilla de una sola celda: imagen y distintivos comparten caja y los
márgenes en porcentaje se resuelven contra el ancho de la ilustración. Medido contra el XD, los
dos caen a menos de 7 px de su posición.

Junto a esa nota, el pasteboard deja también un enlace al icono `headset` de Font Awesome. No
indica dónde va; el reproductor del pódcast usa el icono propio del kit.

## 14. La etiqueta del botón de la portada: «Ver más» o «Iniciar»

El artboard `Portada`, que es el del diseño de escritorio, rotula el botón **«Ver más»**. El
artboard `Tablet`, donde están las versiones de tablet y móvil, lo rotula **«Iniciar»** en las
dos. Es la única cadena en la que las dos maquetas del mismo botón no coinciden.

Se ha dejado **«Ver más»**, por dos razones: es lo que dice el artboard de escritorio, que es el
que manda para la vista principal, y es además el texto que trae por defecto el
`BannerPrincipal` del kit, así que no hace falta tocar el componente. Si el equipo prefiere
«Iniciar», es una sola cadena y hay que cambiarla dentro del componente del kit, no en el
entregable.

## 15. Revisión del curso completo contra el PDF (2026-08-20)

Se comparó cada pantalla **elemento a elemento** contra los rects del artboard: color exacto,
ancho y alto de cada caja con fondo, y tamaño con el que se pinta cada imagen frente al tamaño
con el que salió del XD. Resultado: **ningún color inventado** y **ningún rect del diseño sin
maquetar** en las cinco pantallas medibles.

Lo que la revisión encontró y quedó corregido:

|                                         | Estaba                         | Es                                                                   |
| --------------------------------------- | ------------------------------ | -------------------------------------------------------------------- |
| Filas de las cinco tablas               | sin fondo                      | alternan `#F6F6F6` y blanco                                          |
| Bandas decorativas detrás de las tablas | no estaban                     | cinco bandas de 1328 px (dos en el tema 1, una en el 3, dos en el 4) |
| Tarjetas pegadas                        | cuatro columnas iguales de 314 | 299/315/315/301, como el XD                                          |
| Par de paneles del 1.3                  | ancho completo (628 cada uno)  | 1020 centrados (510 cada uno)                                        |
| Tarjeta del slider                      | blanca y de 1231               | `#FAFBFF` y de 1263                                                  |
| Barra del pódcast                       | 990                            | 972                                                                  |
| Caja de los cinco ámbitos del 3.4       | `col-5`                        | `col-6` (500 de 1020)                                                |
| Siete imágenes                          | una columna de más             | la que da `round(ancho/contenedor × 12)`                             |

Lo que **no** se ha tocado y por qué:

- Las bandas de `.bloque-texto-g` miden 1231 en el render y el rect del XD 919. No es un
  descuadre: el componente pinta el ancho completo y la fotografía tapa la mitad izquierda.
  Comprobado con el píxel del PDF, el naranja empieza justo donde termina la foto.
- Dos columnas quedan a 30-35 px del ancho del diseño (la caja de pasos del tema 2, 673 frente
  a 708; y la del tema 3, 586 frente a 604). Las dos son las que da la regla del proyecto
  `col = round(ancho/1228 × 12)`; la rejilla de doce no tiene un valor intermedio.

La comparación es reproducible: `scripts/comparar_elementos.py <ruta> <artboard>`.

## 16. Revisión de la vista móvil (2026-08-20)

El XD trae un artboard `Tablet` que es, en realidad, la **especificación responsive de la
portada**: la versión de tablet y la de móvil, una al lado de la otra. En las dos desaparece la
ilustración y el texto pasa a ancho completo; en móvil, además, el fondo deja de ser el
degradado y queda en el color plano `#FEDDB4`.

Se barrieron las once rutas a **360 px reales**. Aviso para quien mida esto: **Chrome headless
no abre ventanas de menos de 500 px**, así que con `--window-size=360` se está midiendo a 500 y
un móvil de verdad no se prueba nunca. Hay que forzar `Emulation.setDeviceMetricsOverride`.
El check de desborde de `verificar_maqueta.py` tenía ese problema y además medía una sola ruta;
ahora recorre las once con las métricas forzadas.

Lo que la revisión encontró y quedó corregido:

- **La ilustración se colaba en tablet y en móvil.** Al montar los distintivos flotantes puse
  `display: grid !important` sobre la columna de la imagen, y eso pisaba el `d-none` del kit.
  La rejilla se limitó a `lg` para arriba.
- **El fondo de la portada en móvil** era el degradado; el diseño lo quiere plano `#FEDDB4`.
- **Las tarjetas con el icono montado quedaban pegadas al apilarse**: su `margin-top` de 75 px
  se lo come el propio círculo, que sobresale justo esos 75 px. Llevan `margin-bottom` por
  debajo de `md`.
- **Las 36 cajas de «icono + texto» no se apilaban.** Iban en un `.col-auto`, que nunca pasa a
  ancho completo, con un `mb-3 mb-md-0` al lado que da por hecho que sí. A 360 px el texto
  quedaba en una columna de 160 px. Ahora son `.col-12.col-md-auto`.

Falsos positivos descartados: la tabla de créditos y las tablas de contenido se salen del
viewport a propósito, dentro de contenedores con `overflow-x: auto` del kit.

Resultado final: **0 elementos desbordados en las once rutas a 360 px.**

## 17. Revisión final: los cinco puntos pedidos

**1. Colores de los fondos.** Se comparó cada caja con fondo del render contra los `fill` del
`.xd`: **ningún color inventado** en ninguna de las cinco pantallas medibles. Los rects del
diseño que no tienen una caja equivalente son, uno a uno, el marcador de vídeo (sustituido por
el componente del kit), la tarjeta en estado _hover_ del tema 1, dos sombras del pasteboard que
caen fuera del artboard y tres formas que van dentro de un SVG.

**2. Distribución de elementos y textos.** Se verificó que **todos los textos del artboard están
en la página**: 83 de 83 en el tema 1, 55 de 55 en el 2, 92 de 92 en el 3, 48 de 48 en el 4.
Las únicas cadenas que no aparecen como texto son las dos viñetas dibujadas dentro del SVG de la
Figura 2, que van en la imagen. Los títulos de tabla y figura sí están: el kit los parte en `h5`
y `span`, que se pintan en línea, como en el PDF.

**3. Iconos de las tarjetas.** Se correlacionó cada uno de los 40 iconos de tarjeta contra el
recorte del PDF en la posición de la que se exportó. **36 por encima de 0,95** y los cuatro
restantes (0,87-0,90) se revisaron a mano: son el mismo icono y la misma orientación; la
correlación baja por el cuadrado de fondo del recorte, no por el glifo.

Un defecto real, corregido: **la fila de las cuatro condiciones del 3.3 llevaba el mismo icono
cuatro veces.** El XD tiene ahí cuatro glifos distintos (lupa con ojo, engranajes con personas,
rectángulos conectados y flechas circulares con visto). Ahora cada tarjeta lleva el suyo, con su
par reposo/hover: el diseño solo dibuja un estado por tarjeta, así que el otro se obtiene
cambiando el color del círculo, que es el único que cambia entre los dos estados
(`#003CE1` ↔ `#5E4A4D`; el glifo es `#CBD5FF` en ambos).

Conviene no confundirlo con las filas donde el XD **sí** repite el mismo glifo a propósito: las
tres preguntas del tema 1, las cuatro nociones y los cuatro paneles de decisiones. Ahí se
comprobó, rasterizando, que el dibujo es idéntico y solo cambia el color del círculo.

**4. Botones adelante y atrás del slider.** Medidos en el PDF: círculos de 50 px en `#003CE1`,
a 23 px de los lados de la tarjeta y 24 px por encima de su borde inferior. El kit los dejaba
pegados a las esquinas; con el ajuste quedan en x=22 y x=1157 sobre una tarjeta de 1228, y a
23 px del borde inferior. Las cinco viñetas y el color coinciden.

**5. Animaciones de los iconos de la portada.** Los dos distintivos ejecutan `float1`, infinito
y alterno, a **2,8 s y 2,5 s** —tiempos distintos, como pide la nota del pasteboard—. Medidos en
tres instantes, se mueven desfasados el uno del otro.



**Revision Importante**
- Validar cada una de las imagenes si debe estar con las esquinas redondas o en punta. (Todo el componente)
- Revisa los cambios que vienen en el pull para que aprendas de lo que hiciste mal en este componente y no vuelvas a cometer esos errores