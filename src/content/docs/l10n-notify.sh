#!/bin/bash

# See more at
# https://github.com/end-4/dots-hyprland-wiki/issues/3

set -e
script=$(readlink -f "$0")
base=$(dirname "$script")

abs_paths=()
for path in "$@";do
  abs_path=$(readlink -f "$path") || { echo "[$0]: Failed to get the absolute path of file \"$path\". Aborting..." ; exit 1 ; }
  test -f $abs_path || { echo "[$0]: The file \"$abs_path\" does not exists or is a directory. Aborting..." ; exit 1 ; }
  echo $abs_path|grep -q "$base/en/dev/" && { echo "[$0]: The file \"$abs_path\" seems to be a Dev Note. Aborting..." ; exit 1 ; }
  echo $abs_path|grep -q "$base/en/" || { echo "[$0]: The file \"$abs_path\" seems not to be a doc in English. Aborting..." ; exit 1 ; }
  abs_paths+=("$abs_path")
done

echo "[$0]: Every file path has been transformed into absolute path. Here they are:"
for path in "${abs_paths[@]}";do
  echo "$path"
done

#p_base=$(pwd)
#script=$(readlink -f "$0")
#base=$(dirname "$script")
#if [ "$p_base" = "$base" ]; then
#    echo "Great, you are executing this script at where it locates."
#else
#    echo "You're at \"$p_base\". Please run the following command first:"
#    echo "    cd \"$base\""
#    wl-copy "cd \"$base\""
#    echo "It has been copied to your clipboard using wl-copy."
#    echo "Sorry but this script can not do it automatically for you,"
#    echo "otherwise either you can not use auto completion for paths, or you might possibly specify a wrong path."
#    exit 1
#fi

json_file="$base/l10n-notify.json"
locale=($(jq -r 'keys[]' $json_file))
notif=($(jq -r 'to_entries | .[] | .value' $json_file))

echo "[$0]: Notifications for different locales have been loaded. Here they are:"
for ((i=0; i<${#locale[@]}; i++)); do
  echo "locale = \"${locale[i]}\", notif = \"${notif[i]}\", dir = \"$base/${locale[i]}\""
  test -d "$base/${locale[i]}" || { echo "[$0]: Translation directory \"$base/${locale[i]}\" does not exists, skipping..."; continue ; }
  for path in "${abs_paths[@]}";do
    loc_path="$base/${locale[i]}/"$(realpath --relative-to="$base/en/" "$path")
    test -f $loc_path || { echo "[$0]: The translated file \"$loc_path\" does not exists or is a directory. Aborting..." ; exit 1 ; }
    echo "[$0]: Processing file \"$loc_path\"..."
  done
done
