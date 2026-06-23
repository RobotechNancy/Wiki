# Installation ROS

Pour commencer, ROS a besoin de tourner sur un système d'exploitation qui tournera sur la RaspberryPi. On va donc installer la version d'Ubuntu compatible avec la version de ROS que nous voulons utiliser (dans ce tuto [Jazzy Jalisco](https://docs.ros.org/en/jazzy/) compatible avec ubuntu 24.04).

> [!IMPORTANT] 
> Une carte SD avec ROS déjà configuré est normalement à disposition en cas de besoin, merci de la cloner avant de faire des modifications dessus pour les suivants. *(Comme ça cette page devient inutile jusqu'au changement de version de ROS)*

> [!NOTE] 
> Ubuntu pour Raspberry Pi est disponible directement depuis le logiciel [Raspi imager](https://www.raspberrypi.com/software/).

Installation des repositories nécessaires :
```bash
sudo apt install software-properties-common
sudo add-apt-repository universe
```

Installation des sources : 2 méthodes possibles
1. Entièrement en ligne de commande
```bash
sudo apt update && sudo apt install curl -y
export ROS_APT_SOURCE_VERSION=$(curl -s https://api.github.com/repos/ros-infrastructure/ros-apt-source/releases/latest | grep -F "tag_name" | awk -F'"' '{print $4}')
curl -L -o /tmp/ros2-apt-source.deb "https://github.com/ros-infrastructure/ros-apt-source/releases/download/${ROS_APT_SOURCE_VERSION}/ros2-apt-source_${ROS_APT_SOURCE_VERSION}.$(. /etc/os-release && echo ${UBUNTU_CODENAME:-${VERSION_CODENAME}})_all.deb"
sudo dpkg -i /tmp/ros2-apt-source.deb
```
2. En allant chercher le paquet depuis le navigateur
Aller sur la page https://github.com/ros-infrastructure/ros-apt-source/releases/latest puis prendre la version correpondante de `ros-apt-source` avec l'extension `.deb` puis faire la commande `sudo dpkg -i ros-apt-source{version+nom_de_code}.deb` en étant dans le dossier où le paquet a été téléchargé.
> [!NOTE]
> Si vous ne connaissez pas le nom de code, utilisez la commande `cat /etc/*-release`.

Installation de ROS
```bash
sudo apt update && sudo apt upgrade
sudo apt install ros-{nom_de_code_ROS}-desktop
```
Et allez vous prendre un café en attentant \;)

Une fois tout bien installé et votre café qui ne fait déjà plus effet, il faut désormais ajouter les nouvelles commandes dans le terminal
Ajouter la ligne `source /opt/ros/{nom_de_code_ROS}/setup.bash` à la fin de votre fichier `.bashrc`.
> [!NOTE]
> Pour modifier votre fichier vous pouvez utiliser la commande `nano ~/.bashrc` pour la ligne de commande ou `gedit ~/.bashrc` pour lancer l'application d'édition de texte.