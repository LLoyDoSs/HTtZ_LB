// Функція для збільшення зображення
function zoomIn() {
    document.getElementById('zoomedImage').style.transform = 'scale(1.2)'; // Збільшення масштабу
}

// Функція для зменшення зображення
function zoomOut() {
    document.getElementById('zoomedImage').style.transform = 'scale(1)'; // Повернення до початкового масштабу
}