const translations = {
  en: {
    nav_about: "About",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",

    hero_title_1: "Beautiful Outdoor,",
    hero_title_2: "Every season",
    hero_subtitle: "More Info",

    about_title: "Welcome to",
    about_title_1: "Hernandez Landscaping...",
    about_text_1: "At Hernandez Landscaping, we believe every outdoor space has the potential to become something extraordinary. Our team combines creativity, dedication, and professional craftsmanship to design landscapes that bring beauty, comfort, and value to your home through every season.",
    about_text_2: "From elegant garden designs to detailed lawn maintenance, we are passionate about creating outdoor environments where families can relax, connect, and enjoy nature. Your vision inspires every project we build.",
    about_button: "View All Services",
    about_subtitle_1: "Garden Care",
    about_subtitle_2: "Lawn Care",
    about_text_3: "We create and maintain vibrant, healthy gardens filled with color, balance, and natural beauty. Our team care helps your flowers, plants, and landscape thrive throughout the season.",

    service_title_1: "Lawn Care",
    service_text_1: "We keep your lawn healthy, vibrant, and beautifully maintained year-round with professional mowing, edging, fertilization, and seasonal care services.",

    service_title_2: "Landscape Design",
    service_text_2: "Transform your outdoor space into a stunning and functional environment with creative landscape designs tailored to your home and lifestyle.",

    service_title_3: "Tree Care",
    service_text_3: "Professional trimming, pruning, and maintenance services that protect the beauty and health of your trees and property.",

    service_title_4: "Spring & Fall Cleanup",
    service_text_4: "Prepare your landscape for every season with detailed cleanup services that restore the beauty of your outdoor spaces.",

    services_description: "We create beautiful, functional, and sustainable outdoor spaces designed to enhance your home and lifestyle through every season.",

  },

  es: {
    nav_about: "Acerca de",
    nav_services: "Servicios",
    nav_gallery: "Galeria",
    nav_testimonials: "Testimonios",
    nav_contact: "Contacto",

    hero_title_1: "Hermoso Jardin,",
    hero_title_2: "en cada estacion",
    hero_subtitle: "Mas Informacion",

    about_title: "Bienvenido a",
    about_title_1: "Hernandez Landscaping...",
    about_text_1: "En Hernandez Landscaping, creemos que cada espacio exterior tiene el potencial de convertirse en algo extraordinario. Nuestro equipo combina creatividad, dedicación y trabajo profesional para diseñar jardines que aportan belleza, comodidad y valor a su hogar durante cada temporada.",
    about_text_2: "Desde diseños elegantes de jardines hasta el mantenimiento detallado del césped, nos apasiona crear ambientes exteriores donde las familias puedan relajarse, conectarse y disfrutar de la naturaleza.  Su visión inspira cada proyecto que realizamos.",
    about_button: "Nuestros Servicios",
    about_subtitle_1: "Cuidado de Jardines",
    about_subtitle_2: "Corte de Cesped",
    about_text_3: "Creamos y mantenemos jardines vibrantes y saludables, llenos de color, equilibrio y belleza natural. Nuestro equipo ayuda a que sus flores, plantas y paisaje prosperen durante toda la temporada.",

    service_title_1: "Cuidado del Césped",
    service_text_1: "Mantenemos su césped saludable, verde y perfectamente cuidado durante todo el año con corte profesional, fertilización y mantenimiento estacional.",

    service_title_2: "Diseño de Jardines",
    service_text_2: "Transformamos su espacio exterior en un ambiente elegante y funcional con diseños creativos adaptados a su hogar y estilo de vida.",

    service_title_3: "Cuidado de Árboles",
    service_text_3: "Servicios profesionales de poda y mantenimiento que protegen la belleza y salud de sus árboles y propiedad.",

    service_title_4: "Limpieza de Temporada",
    service_text_4: "Preparamos su jardín para cada temporada con limpiezas detalladas que restauran la belleza de sus espacios exteriores.",

    services_description: "Creamos espacios exteriores hermosos, funcionales y sostenibles diseñados para mejorar su hogar y estilo de vida en cada temporada.",

  }


};

//Bottom de Traduccion//

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");

  placeholders.forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  changeLanguage(savedLanguage);
});

