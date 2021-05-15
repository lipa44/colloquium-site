const questions = ["Дерево (2 определения)", "Граф блоков и точек сочленения", "Граф компонент реберной двусвязности", "Остов графа", "Цикломатическое число",
        "Цикл, ассоциированный с остовом", "Фундаментальная система циклов", "Минимальное остовное дерево", "Безопасное ребро", "Разрез",
        "Ребро пересекающее разрез", "Лемма о безопасном ребре(суть)", "Расстояние между двумя вершинами графа", "Диаметр графа", "Центр графа",
        "Радиус граф", "Кратчайший путь между двумя вершинами", "Теорема о поиске числа путей заданной длины по матрице смежности орграфа", "Лемма о белых путях",
        "Эйлеров путь", "Отличие эйлерова и полуэйлерова графов", "Эквивалентные определения эйлерова графа", "Теорема о покрытии ребер графа путями",
        "Критерий эйлеровости", "Произвольно вычерчиваемый граф", "Теорема о произвольно вычерчиваемости", "Гамильтонов путь", "Теорема Оре", "Теорема Дирака",
        "Теорема Гуйя - Ури", "Для любого ли гамильтонова графа будут выполняться условия теорем о гамильтоновости и почему?",
        "Определение сочетания(не формулой)", "Определение размещения(не формулой)", "Определение перестановки(не формулой)", "Отличие перестановок и размещений",
        "Принцип Дирихле", "Принцип сложения", "Принцип умножения", "Принцип включения - исключения", "Лексикографический порядок на строках"
    ]
;

let i = 0;
let is_again = true;

function on_click_button() {
    if (is_again) {
        questions.sort(() => Math.random() - 0.5);
        is_again = false;
    }

    if (i < questions.length)
        return (i + 1) + ") " + questions[i++];
    else {
        is_again = confirm("Вопросы закончились, хочешь заново?");
        stop_timer();
        if (is_again) {
            i = 0;
            first_time_used = true;
            return "Ну что, ещё по одной?";
        } else {
            alert("Не очень-то и хотелось");
            i = 0;
            is_again = true;
            first_time_used = true;
            return "Вопросов нема";
        }
    }
}

function move_picture(el) {

    let blueRect = document.getElementById("picture_rect"); // получаем стиль для picture_rect
    let cs = window.getComputedStyle(blueRect);

    let left = parseInt(cs.marginLeft);
    let top = parseInt(cs.marginTop);

    switch (el.key) {
        case "ArrowLeft":  // если нажата клавиша влево
            if (left >= 40)
                blueRect.style.marginLeft = left - 40 + "px";
            break;
        case "ArrowUp":   // если нажата клавиша вверх
            if (top >= -510)
                blueRect.style.marginTop = top - 40 + "px";
            break;
        case "ArrowRight":   // если нажата клавиша вправо
            if (left < window.innerWidth * 9 / 10)
                blueRect.style.marginLeft = left + 40 + "px";
            break;
        case "ArrowDown":   // если нажата клавиша вниз
            if (top <= 190)
                blueRect.style.marginTop = top + 40 + "px";
            break;
        case "Enter":   // если нажата клавиша энтер
            if (first_time_used) {
                use_set_interval();
                first_time_used = false;
            }
            document.getElementById("button1").innerHTML = on_click_button();
            set_seconds(11);
            break;
        case " ":   // если нажата клавиша пробел
            if (first_time_used) {
                use_set_interval();
                first_time_used = false;
            }
            document.getElementById("button1").innerHTML = on_click_button();
            set_seconds(11);
            break;
    }
}