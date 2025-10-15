---
title: Eww (multiple)
layout: /src/layouts/autonum.astro
sidebar:
  badge:
    text: Déprécié
    variant: caution
lastUpdated: 2025-10-14
---

:::danger[Alerte]
Ces ensembles de configurations ne sont plus maintenus. Nous déconseillons de les utiliser.
:::

# Description
Plusieurs ensembles de configurations, incluant `windoes`, `hybrid` et `NovelKnock`, etc.
# Installation
- Dépendances : Voir la liste des dépendances spécifiques à la branche
- Copiez ceci
    - `.config`, `.local` vers votre dossier home
    - Dossiers dans `.local/share/icons` vers votre `/usr/share/icons`
    - Trucs dans le dossier `Import manually` si vous en avez besoin

 ## Performance
|  ⌄  | À utiliser | Non recommandé | Notes                 |
| --- | ------ | ----------- | ------------------------- |
| Kernel |     | cachyos, xanmod | N'abusez pas des économiseurs d'énergie. Aussi je ne suis pas sûr de ce que je dis - c'est juste de l'expérience personnelle. |
| Shell de connexion  | bash/zsh | fish | C'est ok d'utiliser fish dans un terminal - c'est ce que fait end_4 |

 ## Configuration
 - les configurations eww ne fonctionnent correctement que dans `~/.config/eww`
 - Démarrez eww avec `eww daemon`
 - Pour ouvrir la barre du haut : `eww open bar`
 - Pour ouvrir la barre Windows : `eww open winbar` (branche `windoes`/`hybrid`)
 - Pour ouvrir la ligne du bas : `eww open bottomline` (pour que la fenêtre de musique s'ouvre si vous cliquez sur le bord inférieur de l'écran)
 - Ouvrez la vue d'ensemble (clic du milieu sur les espaces de travail) et attendez 10 secondes (pour qu'elle génère le cache de recherche d'applications, ou les icônes ne s'afficheront pas correctement)
 ## Utilisation
 - Contrôles de musique : Clic du milieu pour Lire/Pause, Clic droit pour Piste suivante, scroll pour changer le volume
 - Pour ouvrir la Vue d'ensemble, clic du milieu/droit sur les indicateurs d'espaces de travail ou exécutez `eww open overview`
 - Dans la vue d'ensemble, tapez pour chercher des applications (voir plus bas)
 ## Recherche
 - Tapez pour chercher des applications
 - Tapez des maths (doit commencer par un nombre) pour calculer en utilisant `qalc`
 - `>save THEME` : Sauvegarde le colorscheme actuel, avec THEME comme nom.
 - `>load THEME` : Charge un thème sauvegardé. Les thèmes disponibles seront montrés pendant que vous tapez.
 - `>music` : Obtenir le colorscheme depuis la miniature du média actuel
 - `>wall` : Obtenir le colorscheme depuis le fond d'écran situé dans `~/.config/eww/images/wallpaper/wallpaper`
 - `>light` : Se rappeler d'utiliser le mode clair pour les prochaines générations de couleurs
 - `>dark` : Se rappeler d'utiliser le mode sombre pour les prochaines générations de couleurs
 - `>one` : Se rappeler d'utiliser seulement une couleur pour les icônes de la barre pour les prochaines générations de couleurs
 - `>multi` : Se rappeler d'utiliser plusieurs couleurs pour les icônes de la barre pour les prochaines générations de couleurs
 - `>r` : Recharger (tue et relance eww avec la barre par défaut)
