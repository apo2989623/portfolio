const buttons = document.querySelectorAll(".menu_link"); // Получение всех кнопок меню (элементы с классом .menu_link)
let active = document.querySelector(".active"); // Поиск активной кнопки (с классом .active)
const sections = Array.from(document.querySelectorAll("section")); // Получение всех секций на странице и преобразование в массив

function apo() { // Объявление функции, которая будет отслеживать смену активной кнопки при прокрутке
    const position = window.scrollY; // Получение текущего положения прокрутки по вертикали

    let targetSection = null; // Здесь будет храниться секция, в которой находится сейчас пользователь

    // Проходимся по всем секциям
    for (let section of sections) {
        const offsetBottom = section.offsetTop + section.offsetHeight; // Вычисляем нижнюю границу секции
        // Проверяем, находится ли текущее положение прокрутки внутри данной секции
        if (section.offsetTop <= position && position < offsetBottom) {
            targetSection = section; // Если да — запоминаем эту секцию как текущую
            break; // Прерываем цикл, так как нужная секция уже найдена
        }
    }

    const index = sections.indexOf(targetSection); // Определяем индекс текущей секции в массиве
    const targetButton = buttons[index]; // Находим соответствующую кнопку меню по такому же индексу

    active.classList.remove("active"); // Удаляем класс .active у предыдущей активной кнопки
    targetButton.classList.add("active"); // Добавляем класс .active к новой активной кнопке
    active = targetButton; // Обновляем переменную active — теперь она указывает на новую активную кнопку
}

window.addEventListener("scroll", apo); // Добавляем обработчик события scroll — он будет запускать функцию apo при прокрутке страницы


// Объявление переменной menuControl и сохранение в неё ссылки на элемент с классом "menu-control"
const menuControl = document.querySelector(".menu-control ");

// Объявление переменной menu и сохранение в неё ссылки на элемент с классом "menu"
const menu = document.querySelector(".menu")

// Объявление функции с именем toggleMenu (переключить меню)
function toggleMenu(){
    // Переключение класса 'show' у элемента menu
    // Если класс есть - удаляет его, если нет - добавляет
    menu.classList.toggle('show')
}

// Добавление обработчика события "click" на элемент menuControl
// При клике на menuControl будет вызываться функция toggleMenu
menuControl.addEventListener("click", toggleMenu)