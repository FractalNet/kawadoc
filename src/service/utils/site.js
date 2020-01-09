import client from 'service/client'

export const getSiteList = (tree) => {
    const cursor = tree.select("sites")
    client.getSiteList().then( data => {
        console.log("get sites:", data)
        cursor.set("data", data.payload)
    }).catch( err => {
        console.log("get sites err", err)
    })
}

export const createSite = (tree, data) => {
    const cursor = tree.select("sites")
    client.createSite(data).then( data => {
        cursor.select('data').push(data.payload)
        console.log("create site:", data)
    }).catch( err => {
        console.log("create site err", err)
    })
}