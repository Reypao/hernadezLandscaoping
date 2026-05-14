const translations = {
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_gallery: "Gallery",
        nav_testimonials: "Testimonials",
        nav_contact: "Contact",

        hero_title: "Landscaping Services",
        hero_text: "rellenar text original aqui",
        hero_buttom: "More Info",
    },

    es: {
        nav_about: "Acerca de",
        nav_services: "Servicios",
        nav_gallery: "Galeria",
        nav_testimonials: "Testimonios",
        nav_contact: "Contacto",

        hero_title: "Servicios de Jardineria",
        hero_text: "rellenar text original aqui",
        hero_buttom: "Mas Informacion",

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

