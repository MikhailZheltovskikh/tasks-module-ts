// Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL.
// Выведите их в консоль в формате: "ID: id, Email: email".

interface IData {
    id: number;
    email: string;
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<IData[]> => {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};

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
