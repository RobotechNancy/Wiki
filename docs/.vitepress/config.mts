import { defineConfig } from "vitepress";
import markdownItSup from "markdown-it-sup";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Robotech Wiki",
  description: "Un wiki pour rassembler tout le savoir de Robotech",
  cleanUrls: true,
  base: "/Wiki/",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/Wiki/favicon.webp",
      },
    ],
  ],

  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],

  sitemap: {
    hostname: "https://robotechnancy.github.io/Wiki",
  },

  markdown: {
    config(md) {
      md.use(markdownItSup);
    },
    image: {
      lazyLoading: true,
    },
    container: {
      infoLabel: "NOTE", // Grey
      noteLabel: "NOTE", // Grey
      detailsLabel: "DETAILS", // Grey - collapsed
      tipLabel: "NOTE", // Blue
      importantLabel: "IMPORTANT", // Purple
      warningLabel: "ATTENTION", // Yellow
      cautionLabel: "DANGER", // Red
      dangerLabel: "DANGER", // Red
    },
  },

  vite: {
    ssr: {
      noExternal: ["vitepress-component-medium-zoom"],
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      copyright: "Copyright © 2019-2025 Contributeurs du wiki Robotech Nancy",
    },

    editLink: {
      pattern: "https://github.com/RobotechNancy/Wiki/edit/master/docs/:path",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
        hour12: false,
      },
    },

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    logo: "/favicon.webp",
    externalLinkIcon: true,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RobotechNancy/Wiki",
      },
    ],

    nav: [
      { text: "Home", link: "/" },
      { text: "Informatique", link: "/Info/" },
      { text: "Electronique", link: "/Elec/" },
      { text: "Mecanique", link: "/Meca/" },
      {
        text: "Contribuer",
        items: [
          { text: "Contribuer", link: "/Contribuer/" },
          { text: "Crédits", link: "/Contribuer/Credits" },
        ],
      },
    ],

    sidebar: {
      "/Info/": [
        { // Introduction
          text: "Introduction",
          link: "/Info/",
        },
        { // Divers
          text: "Divers",
          collapsed: false,
          items: [
            {
              text: "Cartes utilisées",
              link: "/Info/Cartes",
            },
            {
              text: "Raspberry",
              link: "/Info/RaspiLinux",
            },
            {
              text: "Connexion SSH",
              link: "/Info/ConnexionSSH",
            },
          ],
        },
        { // Build avec CMake
          text: "Build avec CMake",
          collapsed: false,
          items: [
            { text: "Installer CMake", link: "/Info/CMake/Installation" },
            { text: "Créer un éxecutable", link: "/Info/CMake/Executable" },
            { text: "Lier des librairies", link: "/Info/CMake/Lier" },
            { text: "Créer une librairie", link: "/Info/CMake/Librairie" },
          ],
        },
        { // Projets STM32
          text: "Projets STM32",
          collapsed: false,
          items: [
            { text: "Installer", link: "/Info/STM32/Installation" },
            { text: "Créer un projet", link: "/Info/STM32/Projet" },
            { text: "Configurer une carte", link: "/Info/STM32/CubeMX" },
          ],
        },
        { // Bus CAN
          text: "Bus CAN",
          collapsed: false,
          items: [
            { text: "Principe", link: "/Info/CAN/Principe" },
            { text: "Librairie Raspberry", link: "/Info/CAN/Raspberry" },
            { text: "Librairie STM32", link: "/Info/CAN/STM32" },
            {
              text: "Implémentation",
              collapsed: true,
              items: [
                {
                  text: "Format des trames",
                  link: "/Info/CAN/Implementation/Format",
                },
                {
                  text: "Initialisation",
                  link: "/Info/CAN/Implementation/Initialisation",
                },
                {
                  text: "Réception des données",
                  link: "/Info/CAN/Implementation/Reception",
                },
                {
                  text: "Envoi de données",
                  link: "/Info/CAN/Implementation/Envoi",
                },
              ],
            },
          ],
        },
        { // Modules XBee
          text: "Modules XBee",
          collapsed: false,
          items: [
            { text: "Principe", link: "/Info/XBee/Principe" },
            { text: "Utiliser la librairie", link: "/Info/XBee/Librairie" },
            {
              text: "Implémentation",
              collapsed: true,
              items: [
                {
                  text: "Format des trames",
                  link: "/Info/XBee/Implementation/Format",
                },
                {
                  text: "Initialisation",
                  link: "/Info/XBee/Implementation/Initialisation",
                },
                {
                  text: "Réception des données",
                  link: "/Info/XBee/Implementation/Reception",
                },
                {
                  text: "Envoi de données",
                  link: "/Info/XBee/Implementation/Envoi",
                },
              ],
            },
          ],
        },
        { // Odométrie
          text: "Odométrie",
          collapsed: false,
          items: [
            {
              text: "Présentation Odométrie",
              link: "/Info/Odometrie/PresentationOdometrie",
            },
            {
              text: "Odométrie Absolue",
              collapsed: true,
              items: [
                {
                  text: "Présentation générale",
                  link: "/Info/Odometrie/Absolue/PresentationGenerale",
                },
                {
                  text: "Présentation ArUCO",
                  link: "/Info/Odometrie/Absolue/PresentationArUCO",
                },
                { text: "Matériel", link: "/Info/Odometrie/Absolue/Materiel" },
                {
                  text: "Programmes",
                  collapsed: true,
                  items: [
                    {
                      text: "Configuration",
                      link: "/Info/Odometrie/Absolue/Programmes/Configuration",
                    },
                    {
                      text: "Calibration",
                      link: "/Info/Odometrie/Absolue/Programmes/Calibration",
                    },
                    {
                      text: "Tests",
                      link: "/Info/Odometrie/Absolue/Programmes/Tests",
                    },
                    {
                      text: "Estimation",
                      link: "/Info/Odometrie/Absolue/Programmes/Estimation",
                    },
                  ],
                },
                { text: "Liens", link: "/Info/Odometrie/Absolue/Liens" },
                { text: "LiDAR", link: "/Info/Odometrie/Absolue/LiDAR" }
              ],
            },
            {
              text: "Odométrie Relative",
              collapsed: true,
              items: [
                {
                  text: "Capteur optique",
                  link: "/Info/Odometrie/Relative/Optique",
                },
                { text: "Matériel", link: "/Info/Odometrie/Relative/Materiel" },
              ],
            },
          ],
        },
        { // Signaux PWM
          text: "Signaux PWM",
          collapsed: false,
          items: [
            { text: "STM32", link: "/Info/PWM/STM32" },
            {
              text: "PCA9685",
              collapsed: true,
              items: [
                {
                  text: "Utiliser la librairie",
                  link: "/Info/PWM/PCA9685/Librairie",
                },
                {
                  text: "Implémentation",
                  link: "/Info/PWM/PCA9685/Implementation",
                },
              ],
            },
          ],
        },
      ],
      "/Meca/": [
        { text: "Introduction", link: "/Meca/" },
        { // Divers
          text: "Divers",
          collapsed: false,
          items: [
            { text: "Outils", link: "/Meca/Divers/Outils" },
            { text: "Exports Fusion360", link: "/Meca/Divers/Exports" },
            {
              text: "Commandes par défaut",
              link: "/Meca/Divers/CommandesParDefaut",
            },
          ],
        },
        { // Fusion360
          text: "Fusion360",
          collapsed: false,
          items: [
            {
              text: "Bonnes pratiques",
              link: "/Meca/Fusion360/BonnesPratiques",
            },
          ],
        },
        { // Usinage
          text: "Usinage",
          collapsed: false,
          items: [
            {
              text: "Préparation dans Fusion360",
              link: "/Meca/Usinage/SetupFusion360",
            },
            {
              text: "Setup ProverXL 4030",
              collapsed: true,
              items: [
                {
                  text: "Installation logicielle",
                  link: "/Meca/Usinage/ProverXL4030/Installation",
                },
                {
                  text: "Paramétrage de Candle",
                  link: "/Meca/Usinage/ProverXL4030/Parametrage",
                },
                {
                  text: "Calibrage machine",
                  link: "/Meca/Usinage/ProverXL4030/Calibrage",
                },
              ],
            },
            { text: "Traitement usinage 2D", link: "/Meca/Usinage/Usinage2D" },
            { text: "Traitement usinage 3D", link: "/Meca/Usinage/Usinage3D" },
          ],
        },
        { // Impression 3D
          text: "Impression 3D",
          collapsed: false,
          items: [
            {
              text: "Préparation dans Fusion360",
              link: "/Meca/Impression3D/SetupFusion360",
            },
            { text: "Slicer", link: "/Meca/Impression3D/Slicer" },
            {
              text: "Imprimantes",
              collapsed: true,
              items: [
                {
                  text: "Zortrax M200",
                  link: "/Meca/Impression3D/Imprimantes/ZortraxM200",
                },
                {
                  text: "Creality CR-10S Pro",
                  link: "/Meca/Impression3D/Imprimantes/CrealityCR10SPro",
                },
                {
                  text: "I3 Metal Motion",
                  link: "/Meca/Impression3D/Imprimantes/I3MetalMotion",
                },
              ],
            },
          ],
        },
      ],
      "/Elec/": [
        { text: "Introduction", link: "/Elec/" },
        { // Divers
          text: "Divers",
          items: [
            { text: "Checklist PCB", link: "/Elec/ChecklistPCB" },
            { text: "Connecteurs Mini-Micro Fit", link: "/Elec/Connecteurs" },
          ],
        },
        { // KiCAD
          text: "KiCAD",
          collapsed: false,
          items: [
            { text: "Présentation", link: "/Elec/KiCAD/Presentation" },
            { text: "Interface", link: "/Elec/KiCAD/Interface" },
            { text: "Raccourcis", link: "/Elec/KiCAD/Raccourcis" },
            { text: "Liens utiles", link: "/Elec/KiCAD/LiensUtiles" },
          ],
        },
      ],
    },
  },
});
