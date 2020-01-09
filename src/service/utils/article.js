import client from 'service/client'

export const getArticleList = (tree) => {
    const cursor = tree.select("articles")
    client.getArticleList().then( data => {
        console.log("get article:", data)
        cursor.set("data", data.payload.articles)
        cursor.set("page", data.payload.page)
    }).catch( err => {
        console.log("get article err:", err)
    })
}

export const getArticle = (tree, id) => {
    const cursor = tree.select("articles")
    client.getArticle(id).then( data => {
        console.log("get article:", data)
    }).catch( err => {
        console.log("get article", err)
    })
}

export const createArticle = (tree, data) => {
    const cursor = tree.select("articles")
    client.createArticle(data).then( data => {
        console.log("create article", data)
        cursor.select("data").push(data.payload)
    }).catch( err => {
        console.log("create articel err", err)
    })
}


