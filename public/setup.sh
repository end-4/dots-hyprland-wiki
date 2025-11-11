#!/bin/bash
# Online script for telling users that setup url has moved

domain=ii.clsty.link
url="https://${domain}/get"
url_old="https://${domain}/setup.sh"
set -e
echo -e "\e[31mNotice: The online install script has been moved from ${url_old} to ${url}\e[0m"
echo -e "\e[32mCurrently, ${url_old} still provides redirection to the correct ${url}.\e[1m But it could be \e[31mremoved\e[32m at any time.\e[0m"
echo -e "  r = Run the correct online install script (DEFAULT) (runs \e[2mbash <(curl -s ${url})\e[0m)"
echo -e "  e = Exit now"
read -p " [R/e]: " p
case $p in
    [eE]) echo -e "\e[34mAlright, will exit.\e[0m";exit 1;;
    *) echo -e "\e[34mOK, running...\e[0m"
        bash <(curl -s ${url})
        ;;
esac
