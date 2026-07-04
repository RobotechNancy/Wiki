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
      copyright: "Copyright © 2019-2026 Contributeurs du wiki Robotech Nancy",
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
      { text: "Informatique", link: "/Info/" },
      { text: "Electronique", link: "/Elec/" },
      { text: "Mecanique", link: "/Meca/" },
      { text: "Crédits", link: "/Credits" },
      {
        text: "Contribuer",
        items: [
          { text: "Quick start", link: "/Contribuer/" },
          { text: "Guide complet", link: "/Contribuer/Guide" },
          { text: "Historique", link: "/Contribuer/Historique" },
        ],
      },
    ],

    sidebar: {
      "/Info/": [
        { text: "Introduction", link: "/Info/", },
        { text: "Installations", link: "/Info/Installation" },
        {
          text: "Archives",
          collapsed: true,
          items: [
            {
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
                    { text: "Format des trames", link: "/Info/CAN/Implementation/Format", },
                    { text: "Initialisation", link: "/Info/CAN/Implementation/Initialisation", },
                    { text: "Réception des données", link: "/Info/CAN/Implementation/Reception", },
                    { text: "Envoi de données", link: "/Info/CAN/Implementation/Envoi", },
                  ],
                },
              ],
            },
            {
              text: "Modules XBee",
              collapsed: false,
              items: [
                { text: "Principe", link: "/Info/XBee/Principe" },
                { text: "Utiliser la librairie", link: "/Info/XBee/Librairie" },
                {
                  text: "Implémentation",
                  collapsed: true,
                  items: [
                    { text: "Format des trames", link: "/Info/XBee/Implementation/Format", },
                    { text: "Initialisation", link: "/Info/XBee/Implementation/Initialisation", },
                    { text: "Réception des données", link: "/Info/XBee/Implementation/Reception", },
                    { text: "Envoi de données", link: "/Info/XBee/Implementation/Envoi", },
                  ],
                },
              ],
            }
          ]
        },
        {
          text: "Débuter avec STM32",
          collapsed: false,
          items: [
            { text: "STM32CubeMX", link: "/Info/STM32/STM32CubeMX" },
            { text: "STM32CubeIDE", link: "/Info/STM32/STM32CubeIDE" },
            { text: "VSCode", link: "/Info/STM32/VSCode" },
          ],
        },
        {
          text: "Signaux PWM",
          collapsed: false,
          items: [
            { text: "STM32", link: "/Info/PWM/STM32" },
            {
              text: "PCA9685",
              collapsed: true,
              items: [
                { text: "Utiliser la librairie", link: "/Info/PWM/PCA9685/Librairie", },
                { text: "Implémentation", link: "/Info/PWM/PCA9685/Implementation", },
              ],
            },
          ],
        },
        {
          text: "PAMI",
          collapsed: false,
          items: [
            { text: "Présentation générale", link: "/Info/PAMI/PresentationGenerale" },
            { text: "Objet principal", link: "/Info/PAMI/PAMI_Object" },
            { text: "Système de mission", link: "/Info/PAMI/Mission" },
            { text: "Base roulante", link: "/Info/PAMI/Mobile_base" },
            { text: "Moteur pas à pas", link: "/Info/PAMI/Stepper" },
            { text: "Pilote TMC2209", link: "/Info/PAMI/TMC2209" },
            { text: "Pince", link: "/Info/PAMI/Gripper" },
            { text: "Servomoteur", link: "/Info/PAMI/Servomoteur" },
            { text: "Debugger", link: "/Info/PAMI/Debugger" }
          ]
        },
        {
          text: "Build avec CMake",
          collapsed: false,
          items: [
            { text: "Installer CMake", link: "/Info/CMake/Installation" },
            { text: "Créer un éxecutable", link: "/Info/CMake/Executable" },
            { text: "Lier des librairies", link: "/Info/CMake/Lier" },
            { text: "Créer une librairie", link: "/Info/CMake/Librairie" },
          ],
        },
        {
          text: "Odométrie",
          collapsed: false,
          items: [
            { text: "Présentation Odométrie", link: "/Info/Odometrie/PresentationOdometrie", },
            {
              text: "Odométrie Absolue",
              collapsed: true,
              items: [
                { text: "Présentation générale", link: "/Info/Odometrie/Absolue/PresentationGenerale", },
                { text: "Présentation ArUCO", link: "/Info/Odometrie/Absolue/PresentationArUCO", },
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
        {
          text: "Divers",
          collapsed: false,
          items: [
            { text: "Cartes utilisées", link: "/Info/Cartes", },
            { text: "Raspberry", link: "/Info/RaspiLinux", },
            { text: "Connexion SSH", link: "/Info/ConnexionSSH", },
          ],
        },
      ],
      "/Meca/": [
        { text: "Introduction", link: "/Meca/" },
        {
          text: "Divers",
          collapsed: false,
          items: [
            { text: "Outils", link: "/Meca/Divers/Outils" },
            { text: "Matériel", link: "/Meca/Divers/Materiel/" },
            { text: "Reset Candle", link: "/Meca/Divers/ResetCandle", },
            { text: "Gravure à l'EIT", link: "/Meca/Divers/GravureEIT", },
            { text: "Animation", link: "/Meca/Divers/Animation", },
          ],
        },
        {
          text: "Usinage",
          collapsed: false,
          items: [
            { text: "Préparation CNC", link: "/Meca/Usinage/SetupCNC", },
            { text: "Traitement usinage 2D", link: "/Meca/Usinage/Usinage2D" },
            { text: "Manufacture dans Fusion360", link: "Meca/Usinage/Manufacture" }
            // { text: "Préparation dans Fusion360", link: "/Meca/Usinage/SetupFusion360", },
          ],
        },
        {
          text: "Impression 3D",
          collapsed: false,
          items: [
            { text: "Bambulab P1S", link: "/Meca/Impression3D/BambulabP1S", },
            { text: "Creality CR-10S Pro", link: "/Meca/Impression3D/CrealityCR10SPro", },
            { text: "Zortrax M200", link: "/Meca/Impression3D/ZortraxM200", },
            { text: "I3 Metal Motion", link: "/Meca/Impression3D/I3MetalMotion", },
            { text: "Guide Filament", link: "/Meca/Impression3D/Filament", },
            { text: "Guide TPU", link: "/Meca/Impression3D/GuideTPU", },
            { text: "Guide BambuStudio", link: "/Meca/Impression3D/GuideBambuStudio", },
          ],
        },
        {
          text: "Fusion360",
          collapsed: false,
          items: [
            { text: "Bonnes pratiques", link: "/Meca/Fusion360/BonnesPratiques", },
            { text: "Exports Modèle 3D", link: "/Meca/Fusion360/Exports" },
          ],
        },
      ],
      "/Elec/": [
        { text: "Introduction", link: "/Elec/" },
        {
          text: "Divers",
          items: [
            { text: "Checklist PCB", link: "/Elec/ChecklistPCB" },
            { text: "Connecteurs Mini-Micro Fit", link: "/Elec/Connecteurs" },
          ],
        },
        {
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
