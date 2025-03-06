// Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL.
// Выведите их в консоль в формате: "ID: id, Email: email".
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => __awaiter(this, void 0, void 0, function* () {
    return yield fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
});
getData(COMMENTS_URL).then((data) => {
    data.forEach((item) => {
        console.log('ID: ' + item.id + ', Email: ' + item.email);
    });
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
