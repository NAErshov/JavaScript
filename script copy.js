const post = {
    title: 'My post',
    likesQty: 5
}

JSON.stringify(post)

console.log(JSON.stringify(post))

const postStringified = JSON.stringify(post)
JSON.parse(postStringified)


console.log(JSON.parse(postStringified))