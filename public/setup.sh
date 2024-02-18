#!/bin/bash

set -e
function try { "$@" || sleep 0; }
function x() {
  if "$@";then cmdstatus=0;else cmdstatus=1;fi # 0=normal; 1=failed; 2=failed but ignored
  while [ $cmdstatus == 1 ] ;do
    echo -e "\e[31m[$0]: Command \"\e[32m$@\e[31m\" has failed."
    echo -e "You may need to resolve the problem manually BEFORE repeating this command.\e[0m"
    echo "  r = Repeat this command (DEFAULT)"
    echo "  e = Exit now"
    echo "  i = Ignore this error and continue (your setup might not work correctly)"
    read -p " [R/e/i]: " p
    case $p in
      [iI]) echo -e "\e[34mAlright, ignore and continue...\e[0m";cmdstatus=2;;
      [eE]) echo -e "\e[34mAlright, will exit.\e[0m";break;;
      *) echo -e "\e[34mOK, repeating...\e[0m"
         if "$@";then cmdstatus=0;else cmdstatus=1;fi
         ;;
    esac
  done
  case $cmdstatus in
    0) echo -e "\e[34m[$0]: Command \"\e[32m$@\e[34m\" finished.\e[0m";;
    1) echo -e "\e[31m[$0]: Command \"\e[32m$@\e[31m\" has failed. Exiting...\e[0m";exit 1;;
    2) echo -e "\e[31m[$0]: Command \"\e[32m$@\e[31m\" has failed but ignored by user.\e[0m";;
  esac
}

command -v pacman || { echo "\"pacman\" not found. This script only work for Arch(-based) Linux distros. Aborting..."; exit 1 ; }

if [ -z "$1" ]; then
  path=~/.local/share/dots-hyprland
else
  path="$1"
fi

echo "[$0]: Downloading repo to $path ..."
x mkdir -p $path
x cd $path
try git init -b main
try git remote add origin https://github.com/end-4/dots-hyprland
x git pull origin main && git submodule update --init --recursive
echo "[$0]: Downloaded."
echo "[$0]: Running \"install.sh\"."
x ./install.sh || { echo "Error occured when running \"install.sh\"."; exit 1 ; }
