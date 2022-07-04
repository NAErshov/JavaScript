//=====================================================
//                  JSON
// =====================================================

// JSON - JAVASCRIPT OBJECT NOTATION
// JSON - формат обмена данными между компьютерами в интернете
//
// {
//     "userId": 1,
//     "id":1,
//     "title": "Test title",
//     "status": {
//         "completed": false
//     }
// }
// JSON -передается в виде строки
// Чтобы преобразовать строку в читаемый вариант на frontend-странице необходимо
// используют JSON.parse() и в результате получаем JS-объект:
    // {
    //     userId: 1,
    //     id:1,
    //     title: 'Test title',
    //     status: {
    //         completed: false
    //     },
    // }
    //
// Если необходимо наоборот перевести JS-объект в JSON,
// то используют: JSON.stringify(), в результате я получу строку 
// JSON, которую можно передавать на удаленный сервер
// 
// Пример:
//  const post = {
//      title: 'My post',
//      likesQty: 5
//  }
//  
//  JSON.stringify(post)
//  
//  console.log(JSON.stringify(post)) // {"title":"My post","likesQty":5}
//
// Обратный пример:
// ----------------
// добавляем
// const postStringified = JSON.stringify(post)
// JSON.parse(postStringified)
// console.log(JSON.parse(postStringified)) // { title: 'My post', likesQty: 5 }
// 
// По другому можно сказать "распарсили объект"


//===============================================================================
//               МУТАЦИЯ В JAVASCRIPT
//===============================================================================