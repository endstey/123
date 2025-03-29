// Установка текущей даты
function setCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    document.getElementById('current-date').textContent = 
        now.toLocaleDateString('ru-RU', options);
}

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Темный/светлый режим (дополнительная функциональность)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('light-mode'));
}

// Проверка предпочтений пользователя
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('light-mode');
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    
    // Можно добавить загрузку реальных новостей через API
    // loadNews();
});

// Пример функции для загрузки новостей
/*
async function loadNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=YOUR_API_KEY');
        const data = await response.json();
        // Обработка данных и отображение новостей
    } catch (error) {
        console.error('Ошибка загрузки новостей:', error);
    }
}
*/