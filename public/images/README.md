# Directorio de Imágenes

Este directorio contiene todas las imágenes utilizadas en el sitio web de Ropema Rubio.

## Estructura de carpetas

- `/hero/` - Imágenes para la sección principal (hero)
- `/projects/` - Imágenes de proyectos y trabajos realizados
- `/about/` - Imágenes para la sección "Sobre Nosotros"
- `/materials/` - Imágenes de materiales (mármoles y granitos)
- `/logo/` - Logotipos e identidad visual

## Recomendaciones para las imágenes

1. **Formato**: Utilizar preferentemente formatos modernos como WebP para mejor rendimiento, con JPG como fallback.
2. **Tamaño**: Optimizar las imágenes antes de subirlas:
   - Imágenes de hero: 1920x1080px máximo
   - Miniaturas de proyectos: 800x600px máximo
   - Logotipos: Preferiblemente en formato SVG o PNG con transparencia
3. **Nombres de archivo**: Usar nombres descriptivos en minúsculas, separados por guiones (ej: "encimera-cocina-marmol.webp")
4. **Metadatos**: Asegurarse de que todas las imágenes tengan atributos alt descriptivos en el código

## Cómo añadir nuevas imágenes

1. Coloca la imagen en la carpeta correspondiente según su uso
2. Referencia la imagen en el código usando la ruta relativa desde /public
   Ejemplo: `src="/images/projects/encimera-cocina.webp"`
