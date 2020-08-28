let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy'; // добавляем ключ mood со значением happy
user['"full time"'] = true; // добавляем ключ "full time" со значением true
user.hobby = 'skydiving'; // переназначаем hobby
user.premium = false; // переназначаем hobby

let keys = Object.keys(user); //для переменной keys присваиваЕм массив свойств объекта, используя метод Object.keys()
for (let key of keys) {
  // перебераем массив keys
  message = message + `${key} : ${user[key]}\n`; // присваиваем переменной месседж ключ с обьекта кей и свойсво по ключу с обьекта юзер
}
console.log(message);
