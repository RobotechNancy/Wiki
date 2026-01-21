import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Robotech Wiki",
  description: "Un wiki pour rassembler tout le savoir de Robotech",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/Wiki/favicon.webp",
      },
    ],
  ],
  sitemap: {
    hostname: "https://robotechnancy.github.io/Wiki",
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    ssr: {
      noExternal: ["vitepress-component-medium-zoom"],
    },
  },
  base: "/Wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    footer: {
      copyright: "Copyright © 2019-2025 Gabriel Mouchette",
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
      { text: "Mecanique", link: "/Meca/" },
      { text: "Contribuer", link: "/Contribuer/" },
    ],

    sidebar: {
      "/Info/": [
        {
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
        {
          text: "Build avec CMake",
          collapsed: true,
          items: [
            { text: "Installer CMake", link: "/Info/CMake/Installation" },
            { text: "Créer un éxecutable", link: "/Info/CMake/Executable" },
            { text: "Lier des librairies", link: "/Info/CMake/Lier" },
            { text: "Créer une librairie", link: "/Info/CMake/Librairie" },
          ],
        },
        {
          text: "Projets STM32",
          collapsed: true,
          items: [
            { text: "Installer", link: "/Info/STM32/Installation" },
            { text: "Créer un projet", link: "/Info/STM32/Projet" },
            { text: "Configurer une carte", link: "/Info/STM32/CubeMX" },
          ],
        },
        {
          text: "Bus CAN",
          collapsed: true,
          items: [
            { text: "Principe", link: "/Info/CAN/Principe" },
            { text: "Librairie Raspberry", link: "/Info/CAN/Raspberry" },
            { text: "Librairie STM32", link: "/Info/CAN/STM32" },
            {
              text: "Implémentation",
              collapsed: false,
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
        {
          text: "Modules XBee",
          collapsed: true,
          items: [
            { text: "Principe", link: "/Info/XBee/Principe" },
            { text: "Utiliser la librairie", link: "/Info/XBee/Librairie" },
            {
              text: "Implémentation",
              collapsed: false,
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
        {
          text: "Odométrie",
          collapsed: true,
          items: [
            {
              text: "Présentation Odométrie",
              link: "/Info/Odometrie/PresentationOdometrie",
            },
            {
              text: "Odométrie Absolue",
              collapsed: false,
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
              ],
            },
            {
              text: "Odométrie Relative",
              collapsed: false,
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
          text: "Signaux PWM",
          collapsed: true,
          items: [
            { text: "STM32", link: "/Info/PWM/STM32" },
            {
              text: "PCA9685",
              collapsed: false,
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
        { text: "Outils", link: "/Meca/Outils" },
        { text: "Exports Fusion360", link: "/Meca/Exports" },
        {
          text: "Fusion360",
          items: [
            { text: "Préparation dans Fusion360", link: "/Meca/Usinage/SetupFusion360" },
          ]
        },
        {
          text: "Usinage",
          items: [
            { text: "Préparation dans Fusion360", link: "/Meca/Usinage/SetupFusion360" },
            { text: "Setup ProverXL 4030", link: "/Meca/Usinage/SetupCNC" },
            { text: "Traitement usinage 2D", link: "/Meca/Usinage/Usinage2D" },
            { text: "Traitement usinage 3D", link: "/Meca/Usinage/Usinage3D" },
          ]
        },
        {
          text: "Impression 3D",
          items: [
            { text: "Préparation dans Fusion360", link: "/Meca/Impression3D/SetupFusion360" },
            { text: "Setup ProverXL 4030", link: "/Meca/Impression3D/SetupCNC" },
            { text: "Traitement usinage 2D", link: "/Meca/Impression3D/Usinage2D" },
            { text: "Traitement usinage 3D", link: "/Meca/Impression3D/Usinage3D" },
          ]
        },
      ],
    },
  },
});
