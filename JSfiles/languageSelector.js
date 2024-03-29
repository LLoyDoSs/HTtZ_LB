function changeLanguage() {
    var selectedLanguage = document.getElementById("languageSelect").value;


    window.location.href = selectedLanguage + ".html";
}

// Додамо обробник подій для випадаючого списку при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
    var initialLanguage = window.location.pathname.split(".")[0].split("/").pop();
    document.getElementById("languageSelect").value = initialLanguage;
});