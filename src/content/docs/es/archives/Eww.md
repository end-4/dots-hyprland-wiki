---
title: Eww (múltiples)
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Obsoleto
    variant: caution
lastUpdated: 2024-12-13
---

:::danger[Alerta]
Estos conjuntos de configuraciones ya no se mantienen. Recomendamos no usarlos.
:::

# Descripción
Varios conjuntos de configuraciones, incluyendo `windoes`, `hybrid` y `NovelKnock`, etc.
# Instalación
- Dependencias: Ver lista de dependencias específica de la rama
- Copia estos
    - `.config`, `.local` a tu carpeta de inicio
    - Carpetas en `.local/share/icons` a tu `/usr/share/icons`
    - Cosas en la carpeta `Import manually` si las necesitas

 ## Rendimiento
|  ⌄  | Usar | No recomendado | Notas                 |
| --- | ------ | ----------- | ------------------------- |
| Kernel |     | cachyos, xanmod | No abuses de los ahorradores de energía. Además, no estoy seguro de lo que estoy diciendo, esto es solo por experiencia personal. |
| Shell de inicio  | bash/zsh | fish | Está bien usar fish en un terminal, eso es lo que hace end_4 |

 ## Configuración
 - Las configuraciones de eww solo funcionan correctamente en `~/.config/eww`
 - Inicia eww con `eww daemon`
 - Para abrir la barra superior: `eww open bar`
 - Para abrir la barra de Windows: `eww open winbar` (rama `windoes`/`hybrid`)
 - Para abrir la línea inferior: `eww open bottomline` (para que la ventana de música se abra si haces clic en el borde inferior de la pantalla)
 - Abre la vista general (clic medio en los espacios de trabajo) y espera 10 segundos (para que genere la caché de búsqueda de aplicaciones, o los iconos no se mostrarán correctamente)
 ## Uso
 - Controles de música: Clic medio para Reproducir/Pausar, clic derecho para la siguiente pista, desplazar para cambiar el volumen
 - Para abrir la Vista general, haz clic medio/derecho en los indicadores de espacio de trabajo o ejecuta `eww open overview`
 - En la vista general, escribe para buscar aplicaciones (ver más abajo)
 ## Búsqueda
 - Escribe para buscar aplicaciones
 - Escribe matemáticas (debe comenzar con un número) para calcular usando `qalc`
 - `>save THEME`: Guarda el esquema de colores actual, con THEME como el nombre.
 - `>load THEME`: Carga un tema guardado. Los temas disponibles se mostrarán a medida que escribas.
 - `>music`: Obtén el esquema de colores de la miniatura del medio actual
 - `>wall`: Obtén el esquema de colores del fondo de pantalla ubicado en `~/.config/eww/images/wallpaper/wallpaper`
 - `>light`: Recuerda usar el modo claro para las próximas generaciones de colores
 - `>dark`: Recuerda usar el modo oscuro para las próximas generaciones de colores
 - `>one`: Recuerda usar solo un color para los iconos de la barra en las próximas generaciones de colores
 - `>multi`: Recuerda usar muchos colores para los iconos de la barra en las próximas generaciones de colores
 - `>r`: Recargar (mata y relanza eww con la barra predeterminada)
