import client from 'service/client'

export const getArticleList = (tree, siteid) => {
    const cursor = tree.select("articles")
    client.getArticleList(siteid).then( data => {
        console.log("get article:", data)
        cursor.set(["data", siteid], data.payload.articles)
        cursor.set(["page", siteid], data.payload.page)
    }).catch( err => {
        console.log("get article err:", err)
    })
}

export const getArticle = (tree, id) => {
    // const cursor = tree.select("articles")
    // client.getArticle(id).then( data => {
    //     console.log("get article:", data)
    // }).catch( err => {
    //     console.log("get article", err)
    // })
}

export const importArticle = (tree, slug, data) => {
    console.log("import site:" + slug, data)
    const cursor = tree.select("articles")
    return new Promise( (res, rej) => {
        client.importArticle(data).then( data => {
            console.log("create article", data)
            cursor.select("data", slug).push(data.payload)
            res(data)
        }).catch( err => {
            console.log("create articel err", err)
            rej(err)
        })
    })
}
