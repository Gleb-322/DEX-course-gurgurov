// задача 1 - Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.
// Решение
const date = new Date(2012, 1, 20, 3, 12)
console.log(date)
alert(date)

// задача 2 - Напишите функцию getWeekDay(date), 
// показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Решение
function getWeekDay(date) {
    const weekDay = date.getDay()
    switch (weekDay) {
        case 0:
            return 'ВС'
        case 1:
            return 'ПН'
        case 2: 
            return 'ВТ'
        case 3:
            return 'СР'
        case 4:
            return 'ЧТ'
        case 5:
            return 'ПТ'
        case 6:
            return 'СБ'
        default:
            return 'Вы не ввели дату'
    }
}
alert(getWeekDay(new Date(2021, 10, 7))) // ВС

// задача 3 - В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
// Решение
function getLocalDay(date) {
    const weekDay = date.getDay()
    switch (weekDay) {
        case 0:
            return '7'
        case 1:
            return '1'
        case 2: 
            return '2'
        case 3:
            return '3'
        case 4:
            return '4'
        case 5:
            return '5'
        case 6:
            return '6'
        default:
            return 'Вы не ввели дату'
    }
}
alert(getLocalDay(new Date(2021, 10, 7))) // 7

// задача 4 - Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое 
// и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях.
// Решение
function getDateAgo(date, days) {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - days)
    return newDate.getDate()
}
console.log(getDateAgo(new Date(2015, 0, 2), 1)) // 1
console.log(getDateAgo(new Date(2015, 0, 2), 2)) // 31
console.log(getDateAgo(new Date(2015, 0, 2), 365)) // 2

// задача 5 - Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
// Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
//  year – год из четырёх цифр, например, 2012.
//  month – месяц от 1 до 12.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
// Решение 
function getLastDayOfMonth(year, month) {
    let jsMonth = month - 1
    let date = new Date()
    date.setFullYear(year, jsMonth + 1, 0)
    return date.getDate()
}
console.log(getLastDayOfMonth(2012, 2)) // 29


// задача 6 - Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
// Решение
function getSecondsToday() {
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let seconds =  now - today
    return Math.round(seconds / 1000)
}
console.log(getSecondsToday()) // 70426

// задача 7 - Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
// Решение 
function getSecondsToTomorrow() {
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
    let seconds =  tomorrow - now
    return Math.round(seconds / 1000)
}
console.log(getSecondsToTomorrow()) // 16041

