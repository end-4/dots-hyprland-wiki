---
title: Eww (multiple)
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Deprecated
    variant: caution
lastUpdated: 2024-05-14
---

:::Périgo[Alerta]
Esse grupo de configurações não é mais atualizado. Recomendamos a não utilização dos mesmos.
:::

# Descrição

Vários grupos de configuração, incluindo `windoes`, `hybrid`, `NovelKnock`, etc.

# Instalação

- Dependências: Veja branch-specific lista de dependências
- Copie esses
    - `.config`, `.local` para seu diretório home
    - Arquivos em `.local/share/icons` para seu `/usr/share/icons`
    - Se necessário copie em `Import manually`

# Performance

|  ⌄  | Use | Não recomendado | Notas                 |
| --- | ------ | ----------- | ------------------------- |
| Kernel |     | cachyos, xanmod | Não abuse de ferramentas para economia de engergia. Por expêriencia própia. |
| Login shell  | bash/zsh | fish | É aceitável o uso de fish em um terminal - é o que end_4 faz |

# Setup

 - Configurações do eww somente funcionam corretamente em `~/.config/eww`
 - Inicie eww com `eww daemon`
 - Para abrir a barra superior: `eww open bar`
 - Para abrir a barra Windows: `eww open winbar` (`windoes`/`hybrid` branch)
 - Para abrir a linha inferior: `eww open bottom line` (para que a janela de música abra se você clicar no canto inferior da tela)
 - Abrir o overview (workspaces do clique médio) e espere 10 segundos (para que seja gerado o app search cache, ou icones não apareceram adequadamente)

# Uso

 - Controles de música: Clique do meio para Tocar/Pause, Clique direito para proxima música, scroll para mudar o volume
 - Para abrir o Overview, Clique do meio/direito no indicador do workspace ou execute`eww open overview`
 - No overview, digite para procurar aplicativos (veja mais abaixo)

# Procura

 - Digite para procurar aplicativos
 - Digite math (deve começar com números) para calcular usando `qalc`
 - `>save THEME`: Salva o esquema de cor, com THEME como nome
 - `>load THEME`: Carrega o tema salvado. Temas disponíveis serão mostrados conforme voce os digita
 - `>music`: Te dá o esquema de cor da capa da música atual
 - `>wall`: Te dá o esquema de cor do wallpaper localizado em `~/.config/eww/images/wallpaper/wallpaper`
 - `>light`: Lembre para usar o modo claro para próxima geração de cores
 - `>dark`: Lembre de usar o modo escuro para próxima geração de cores
 - `>one`: Lembre de usar apenas uma cor para icones da barra para próxima geração de cores
 - `>multi`: Lembre de usar varias cores para icones da barra para próxima geração de cores
 - `>r`: Recarregue ( Fecha e reabre eww com a barra padrão)

