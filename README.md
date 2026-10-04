# Phoenix: HTML, CSS y JavaScript separados por clases

## Ejecutar

1. Extrae TODO el ZIP; no abras index.html desde dentro del ZIP.
2. Conserva index.html junto a las carpetas css, js y assets.
3. Haz doble clic en index.html. No necesitas Node, npm ni React.

También puedes abrir la carpeta en VS Code y usar Live Server. Si ya tienes Python, ejecuta `python -m http.server 8000` en esta carpeta y abre http://localhost:8000.

## Archivos

- index.html: contenido completo del inicio, encabezado y pie. Visible incluso sin JavaScript.
- css/styles.css: clases CSS, colores, tamaños y adaptación a móvil.
- js/Utilidades.js: clase Utilidades; escape de texto y descarga.
- js/Diagnostico.js: clase Diagnostico; preguntas, validación y cálculo.
- js/Resultados.js: clase Resultados; diagnóstico, plan y exportación.
- js/Contacto.js: clase Contacto; formulario y solicitud descargable.
- js/Aplicacion.js: clase Aplicacion; navegación y eventos.
- js/main.js: inicia la aplicación.
- assets/: fotografía y favicon.

## Comprobar

Prueba el menú, completa las 12 preguntas, verifica los resultados, descarga el plan y descarga una solicitud. Presiona F12 y revisa Console si algo falla.

## GitHub Pages

Sube index.html y las tres carpetas completas a la raíz de tu repositorio. En Settings → Pages selecciona Deploy from a branch → main → /(root) → Save.

## Datos

Las respuestas permanecen en memoria mientras la página está abierta. Al recargar, el diagnóstico se reinicia. El formulario descarga un archivo; no envía datos, correos ni WhatsApp. Las fuentes tienen respaldo local si Google Fonts no carga.
