import client from 'service/client'

// 获取验证码
export const getLoginCode = (tree, phone) => {
    return new Promise( (res, rej) => {
        client.getLoginCode(phone).then( data => {
            res(data)
        }).catch(err => {
            rej(err)
        })
    })
}

// 验证登录
export const userLogin = (tree, phone, code) => {
    return new Promise( (res, rej) => {
        client.login(phone, code).then( data => {
            tree.set(['token', 'value'], data.token)
            console.log("get token", data)
            res(data)
        }).catch( err => {
            rej(err)
        })
    })
}