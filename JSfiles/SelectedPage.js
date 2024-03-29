function redirectToSelectedPage() {
    // Отримуємо значення обраної опції
    var selectedPage = document.getElementById("pageSelect").value;

    // Здійснюємо перехід на обрану сторінку
    window.location.href = selectedPage;
}