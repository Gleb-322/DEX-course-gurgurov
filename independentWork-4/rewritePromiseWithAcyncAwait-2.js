// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url)
    if (!response.ok) {
        throw new HttpError(response);
    }
    return await response.json()
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  
  while(true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }
  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();


