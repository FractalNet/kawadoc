import client from 'service/client'

export const getSiteList = (tree) => {
    const cursor = tree.select("sites")
    client.getSiteList().then( data => {
        console.log("get sites:", data)
        cursor.set("data", massage(data.payload))
    }).catch( err => {
        console.log("get sites err", err)
    })
}

export const getSite = (tree, siteid) => {
    // const cursor = tree.select("sites")
    // client.getSite(siteid).then( data => {
    //     console.log("get sites:", data)
    //     cursor.set(["data", siteid], data.payload)
    // }).catch( err => {
    //     console.log("get sites err", err)
    // })
    const cursor = tree.select("sites")
    client.getSiteList().then( data => {
        console.log("get sites:", data)
        cursor.set("data", massage(data.payload))
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

function massage(items) {
    var data = {}
    items.map( item => {
        data[item.bizID] = item
        return item
    })
    return data
}