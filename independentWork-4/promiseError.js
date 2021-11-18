// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
//   }).catch(alert);
// Ответ: нет не выполнится, потому что ошибка сгенерируется когда промис уже прошел