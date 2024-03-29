// Отримуємо посилання на елементи
const calculateButton = document.getElementById('calculateButton');
const sumResult = document.getElementById('sumResult');
const differenceResult = document.getElementById('differenceResult');
const divisionResult = document.getElementById('divisionResult');
const multiplicationResult = document.getElementById('multiplicationResult');

// Додаємо обробник подій для кнопки
calculateButton.addEventListener('click', function() {

    const sum = 5 + 3;
    const difference = 5 - 3;
    const division = 6 / 2;
    const multiplication = 5 * 3;

    // Виводимо результати на сторінку
    sumResult.textContent = 'Сума: ' + sum;
    differenceResult.textContent = 'Різниця: ' + difference;
    divisionResult.textContent = 'Ділення: ' + division;
    multiplicationResult.textContent = 'Множення: ' + multiplication;

    // Виводимо ділення через alert
    window.alert('Ділення: ' + division);
    // Виводимо множення через alert
    window.alert('Множення: ' + multiplication);
});