const translations = {
    en: {
        home: "Home",
        courses: "Courses",
        register: "Register",
        faq: "FAQ",
        contact: "Contact",
        assignment: "JQuery",
        gallery: "Lazy Images",
        features: "Features",
        assignmentTitle: "JQuery",
        searchTitle: "Live Search & Autocomplete",
        searchLabel: "Search courses:",
        searchPlaceholder: "Search courses...",
        impactTitle: "Our Impact",
        students: "Active Students",
        submitTitle: "Form Submission with Spinner",
        submitButton: "Submit",
        utilitiesTitle: "Notifications and Copy to Clipboard",
        notificationButton: "Show Notification",
        copyButton: "Copy",
        faqSearch: "Search FAQ:",
        faqPlaceholder: "Type a keyword...",
        galleryTitle: "Task 9: Lazy Loading Images",
        gallerySubtitle: "Images load when they come into view."
    },

    ru: {
        home: "Главная",
        courses: "Курсы",
        register: "Регистрация",
        faq: "Вопросы",
        contact: "Контакты",
        assignment: "JQuery",
        gallery: "Отложенная загрузка",
        features: "Функции",
        assignmentTitle: "Query",
        searchTitle: "Поиск и автодополнение",
        searchLabel: "Поиск курсов:",
        searchPlaceholder: "Введите название курса...",
        impactTitle: "Наши результаты",
        students: "Активные студенты",
        submitTitle: "Отправка формы с индикатором загрузки",
        submitButton: "Отправить",
        utilitiesTitle: "Уведомления и копирование",
        notificationButton: "Показать уведомление",
        copyButton: "Копировать",
        faqSearch: "Поиск по вопросам:",
        faqPlaceholder: "Введите слово...",
        galleryTitle: "Задание 9: Отложенная загрузка изображений",
        gallerySubtitle: "Изображения загружаются при появлении на экране."
    },

    kk: {
        home: "Басты бет",
        courses: "Курстар",
        register: "Тіркелу",
        faq: "Сұрақтар",
        contact: "Байланыс",
        assignment: "JQuery",
        gallery: "Суреттерді кеш жүктеу",
        features: "Мүмкіндіктер",
        assignmentTitle: "JQuery",
        searchTitle: "Жедел іздеу және автотолтыру",
        searchLabel: "Курстарды іздеу:",
        searchPlaceholder: "Курс атауын енгізіңіз...",
        impactTitle: "Біздің көрсеткіштер",
        students: "Белсенді студенттер",
        submitTitle: "Жүктеу индикаторымен форманы жіберу",
        submitButton: "Жіберу",
        utilitiesTitle: "Хабарламалар және көшіру",
        notificationButton: "Хабарламаны көрсету",
        copyButton: "Көшіру",
        faqSearch: "Сұрақтардан іздеу:",
        faqPlaceholder: "Сөз енгізіңіз...",
        galleryTitle: "9-тапсырма: Суреттерді кеш жүктеу",
        gallerySubtitle: "Суреттер экранға көрінгенде жүктеледі."
    }
};

$(document).ready(function () {
    const $languageSelect = $("#langSelect");

    if (!$languageSelect.length) return;

    function applyLanguage(language) {
        const words = translations[language];

        if (!words) return;

        $("[data-lang-key]").each(function () {
            const key = $(this).attr("data-lang-key");

            if (words[key]) {
                $(this).text(words[key]);
            }
        });

        $("[data-lang-placeholder]").each(function () {
            const key = $(this).attr("data-lang-placeholder");

            if (words[key]) {
                $(this).attr("placeholder", words[key]);
            }
        });

        $("html").attr("lang", language);
        localStorage.setItem("selectedLanguage", language);
        $languageSelect.val(language);
    }

    $languageSelect.on("change", function () {
        applyLanguage($(this).val());
    });

    applyLanguage(localStorage.getItem("selectedLanguage") || "en");
});