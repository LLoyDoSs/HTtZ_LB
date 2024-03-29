const images = {
    image1: '12.jpg',
    image2: 'Book.jpg',
    image3: 'Gens.jpg',
    image4: 'Hab.jpg',
    image5: 'Nauka.jpg',
};

// Елементи DOM
const radioButtons = document.querySelectorAll('input[name="image"]');
const imageContainer = document.getElementById('imageContainer');
const returnButton = document.getElementById('returnButton');

// Додаємо обробник подій для кожної радіокнопки
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Отримуємо вибране значення
        const selectedImage = this.value;

        // Відображаємо зображення в контейнері
        imageContainer.innerHTML = `<img src="${images[selectedImage]}" alt="Вибране зображення" width="300" height="200">`;

        // Створюємо збільшену копію
        const enlargedImage = document.createElement('img');
        enlargedImage.src = images[selectedImage];
        enlargedImage.alt = 'Збільшене зображення';
        enlargedImage.width = 600;
        enlargedImage.height = 400;
        imageContainer.appendChild(enlargedImage);

        // Створюємо зменшену копію
        const reducedImage = document.createElement('img');
        reducedImage.src = images[selectedImage];
        reducedImage.alt = 'Зменшене зображення';
        reducedImage.width = 150;
        reducedImage.height = 100;
        imageContainer.appendChild(reducedImage);
    });
});

// Додаємо обробник подій для кнопки повернення
returnButton.addEventListener('click', function() {
    // Очищаємо контейнер і повертаємо радіокнопки у вихідний стан
    imageContainer.innerHTML = '';
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
});