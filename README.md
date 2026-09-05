# Phoenix Engineering Services México

Código fuente completo del sitio corporativo, preparado para editarse en Visual Studio Code.

## Estructura

```text
phoenix-engineering-html/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── script.js
```

## Cómo abrir el sitio

1. Descomprime la carpeta.
2. Ábrela en Visual Studio Code mediante **Archivo > Abrir carpeta**.
3. Abre `index.html` directamente en el navegador o utiliza la extensión **Live Server**.

No requiere instalación, compilación ni dependencias.

## Qué archivo debes modificar

- `index.html`: textos, secciones, servicios, proyectos y formulario.
- `assets/css/styles.css`: colores, tipografías, tamaños, espacios y diseño adaptable.
- `assets/js/script.js`: menú para celular, animaciones y comportamiento del formulario.

## Cambiar los colores principales

Al inicio de `assets/css/styles.css` están las variables globales:

```css
:root {
  --ink: #07111f;
  --blue: #3f73ff;
  --cyan: #7be7ff;
  --orange: #ff6a35;
}
```

Al modificar una variable, el color cambia en todo el sitio.

## Clases principales

| Clase                  | Función                            |
| ---------------------- | ---------------------------------- |
| `.shell`               | Limita y centra el contenido       |
| `.site-header`         | Encabezado principal               |
| `.nav` y `.nav-links`  | Menú de navegación                 |
| `.hero`                | Portada del sitio                  |
| `.section`             | Espaciado general de cada sección  |
| `.section-heading`     | Encabezados de sección             |
| `.service-grid`        | Distribución de servicios          |
| `.service-card`        | Tarjetas individuales de servicios |
| `.process`             | Pasos de la metodología            |
| `.project-placeholder` | Sección escalable de proyectos     |
| `.contact-form`        | Formulario de contacto             |
| `.reveal`              | Animación al desplazarse           |

## Formulario

Actualmente el formulario prepara la solicitud y la copia al portapapeles. Para enviarla automáticamente será necesario conectarlo posteriormente con un correo, WhatsApp o servicio de formularios.
