const jokesArray = [
    "Чому програміст не підтримує свої відносини? Бо у нього проблеми з відносинами.",
    "Яка різниця між кодером і терористом? З терористом можна домовитися.",
    "Чому програмісти - найкращі детективи? У них завжди є доступ до журналів.",
    "Сьогоднішня цитата: 'Вчення без кордонів - нудно!'.",
    "Смішний анекдот: Два атоми зустрілися на вулиці, один каже іншому: 'Я втратив електрон!', а інший питає: 'Ти впевнений?'",
    "Інтересний факт: Бджола може взяти вантаж в два рази важчий за себе."
];


function showRandomInfo() {
    // Випадковий індекс з масиву
    const randomIndex = Math.floor(Math.random() * jokesArray.length);

    // Виведення вікна alert із випадковим елементом
    alert(jokesArray[randomIndex]);
}

// Виклик функції для виведення інформації при завантаженні сторінки (опційно)
showRandomInfo();