export const SITE = {
  website: "https://graymatter10/github.io/tpc",
  author: "TPC",
  profile: "https://github.com/graymatter10",
  desc: "The Penguins Club. No 1 Open source community in Bangladesh",
  title: "The Penguins Club",
  ogImage: "devosfera-og.webp", // ubicado en la carpeta public
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Editar este post",
    url: "https://github.com/0xdres/astro-devosfera/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Dhaka", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: true, // mostrar/ocultar el reproductor en el hero
    src: "/audio/intro-web.mp3", // ruta al archivo (relativa a /public)
    label: "STALLMAN.MP3", // etiqueta display en el reproductor
    duration: 120, // duración en segundos (para la barra de progreso fija)
  },
} as const;
