# Online script for install dots-hyprland.
#
# By design this script is for running via piping to bash:
#   bash <(curl -s https://ii.clsty.link/get) [parameters]
# Therefore shebang and execute permission are not needed.
#
# When running locally for testing, run
#   bash get [parameters]

me="-->online-setup<--"
remote_repo=end-4/dots-hyprland
local_path=~/.cache/dots-hyprland
set -e
function try { "$@" || sleep 0; }
function x() {
  if "$@";then local cmdstatus=0;else local cmdstatus=1;fi # 0=normal; 1=failed; 2=failed but ignored
  while [ $cmdstatus == 1 ] ;do
    echo -e "\e[31m$me: Command \"\e[32m$@\e[31m\" has failed."
    echo -e "You may need to resolve the problem manually BEFORE repeating this command.\e[0m"
    echo "  r = Repeat this command (DEFAULT)"
    echo "  e = Exit now"
    read -p " [R/e]: " p
    case $p in
      [eE]) echo -e "\e[34mAlright, will exit.\e[0m";break;;
      *) echo -e "\e[34mOK, repeating...\e[0m"
         if "$@";then local cmdstatus=0;else local cmdstatus=1;fi
         ;;
    esac
  done
  case $cmdstatus in
    0) echo -e "\e[34m$me: Command \"\e[32m$@\e[34m\" finished.\e[0m";;
    1) echo -e "\e[31m$me: Command \"\e[32m$@\e[31m\" has failed. Exiting...\e[0m";exit 1;;
  esac
}
function detect_distro_id(){
  export OS_RELEASE_FILE=${OS_RELEASE_FILE:-/etc/os-release}
  test -f ${OS_RELEASE_FILE} || ( echo "${OS_RELEASE_FILE} does not exist. Aborting..." ; exit 1 ; )
  export OS_DISTRO_ID=$(awk -F'=' '/^ID=/ { gsub("\"","",$2); print tolower($2) }' ${OS_RELEASE_FILE} 2> /dev/null)
  export OS_DISTRO_ID_LIKE=$(awk -F'=' '/^ID_LIKE=/ { gsub("\"","",$2); print tolower($2) }' ${OS_RELEASE_FILE} 2> /dev/null)
  echo "$me: OS_DISTRO_ID: $OS_DISTRO_ID"
  echo "$me: OS_DISTRO_ID_LIKE: $OS_DISTRO_ID_LIKE"
  if [[ "$OS_DISTRO_ID" == "arch" || "$OS_DISTRO_ID_LIKE" == "arch" || "$OS_DISTRO_ID" == "cachyos" ]]; then
    export OS_GROUP_ID="arch"
  elif [[ "$OS_DISTRO_ID" == "debian" || "$OS_DISTRO_ID_LIKE" == "debian" ]]; then
    export OS_GROUP_ID="debian"
  elif [[ "$OS_DISTRO_ID" == "fedora" || "$OS_DISTRO_ID_LIKE" == "fedora" ]]; then
    export OS_GROUP_ID="fedora"
  elif [[ "$OS_DISTRO_ID" =~ ^(opensuse-leap|opensuse-tumbleweed)$ ]] || [[ "$OS_DISTRO_ID_LIKE" =~ ^(opensuse|suse)(\ (opensuse|suse))?$ ]]; then
    export OS_GROUP_ID="suse"
  elif [[ "$OS_DISTRO_ID" == "gentoo" ]] || [[ "$OS_DISTRO_ID_LIKE" == "gentoo" ]]; then
    export OS_GROUP_ID="gentoo"
  fi
}
function auto_install_git(){
  echo "$me: Detecting command \"git\"..."
  command -v git && return
  echo "$me: Command \"git\" not found, try to install Git after 5 seconds..."
  sleep 5

  case $OS_GROUP_ID in
    "arch")
      x sudo pacman -Syu --noconfirm
      x sudo pacman -S --noconfirm git
      ;;
    "debian")
      x sudo apt update -y
      x sudo apt install git
      ;;
    "fedora")
      x sudo dnf install -y git
      ;;
    "suse")
      x sudo zypper refresh
      x sudo zypper -n install git
      ;;
    "gentoo")
      x sudo emerge --sync
      x sudo emerge -auvDN @world
      x sudo emerge dev-vcs/git
      ;;
  esac

  command -v git && return
  echo "$me: Failed in installing Git. Please install Git by yourself and then retry. Aborting..."
  exit 1
}

start_ts="$(date +%s)"
function print_runtime() {
  local end_ts
  end_ts="$(date +%s)"
  local elapsed=$((end_ts - start_ts))
  local days=$((elapsed / 86400))
  local hours=$(( (elapsed % 86400) / 3600 ))
  local minutes=$(( (elapsed % 3600) / 60 ))
  local seconds=$(( elapsed % 60 ))
  local human=""
  if [ "$days" -gt 0 ]; then human="${human}${days}d "; fi
  if [ "$hours" -gt 0 ]; then human="${human}${hours}h "; fi
  if [ "$minutes" -gt 0 ]; then human="${human}${minutes}m "; fi
  human="${human}${seconds}s"
  echo -e "\e[34m$me: Total runtime: $human (${elapsed} seconds)\e[0m"
}
trap print_runtime EXIT

path_using_default_value=true
if [ ! -z "$1" ]; then
  while true; do
    echo "para=$1"
    case "$1" in
      "")break;;
      --)shift;break;;
      -*)echo "syntax: $0 <path-to-clone> -- <args-to-pass>";exit 1;;
      *)
        if "$path_using_default_value";then
          local_path="$1";path_using_default_value=false
        else
          echo "syntax: $0 <path-to-clone> -- <args-to-pass>";exit 1
        fi
        shift;;
    esac
  done
fi

echo "$me: path to clone: $local_path"
echo "$me: params to pass: $@"

detect_distro_id
auto_install_git
echo "$me: Downloading repo to $local_path ..."
x mkdir -p $local_path
x cd $local_path
if [ -z "$(ls -A)" ]; then
  x git init -b main
  x git remote add origin https://github.com/$remote_repo
fi
git remote get-url origin|grep -q $remote_repo || { echo "Dir \"$local_path\" is not empty, nor a git repo of $remote_repo. Aborting..."; exit 1 ; }
x git pull origin main && git submodule update --init --recursive
x git branch --set-upstream-to=origin/main main
echo "$me: Downloaded."
echo "$me: Running \"./setup install\"."
x ./setup install "$@" || { echo "$me: Error occured when running \"./setup install\"."; exit 1 ; }
