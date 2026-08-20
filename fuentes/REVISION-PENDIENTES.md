# Revisión y pendientes

Lo que queda abierto en el entregable y las decisiones que se tomaron cuando la fuente no
alcanzaba. Cada punto dice **qué** pasa, **dónde** y **por qué** se resolvió así, para que se
pueda revertir sin tener que reconstruir el razonamiento.

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

| Elemento | Lectura del `.xd` | Color real (PDF) |
|---|---|---|
| Círculos de las tarjetas de nociones | `#003CE1` y `#EBB9C1` alternos | `#003CE1` los tres primeros, `#5E4A4D` el del estado *hover* |
| Círculos de los cuatro paneles de decisiones | `#EBB9C1` | `#FAFBFF` |

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

## 9. Tema 2: faltan cuatro fotos del slider y el audio del pódcast

- **Slider del 2.3** («factores que deterioran las relaciones»): el diseño dibuja **cinco
  viñetas** y, con ellas, cinco diapositivas, pero en el `.xd` sólo existe la **fotografía de la
  primera**. Ni el artboard ni el pasteboard traen las otras cuatro. Se han maquetado las cinco
  diapositivas —los textos sí están completos en el `_DI.docx`— reutilizando esa única imagen,
  para no romper la composición. Con las cuatro fotos definitivas se sustituyen y ya está.
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
