import moment from 'moment'

// Time format
export const formatTime = (unixTime) => {
    return moment(new Date(unixTime*1000)).format('YYYY-MM-DD HH:mm')
}

// jwt token
export const isTokenExpired = (token, ahead) => {
    if (!ahead) {
        ahead = 1800
    }
    var base64 = token.split('.')[1];
    var b = window.atob(base64)
    var json = JSON.parse(b)
    if (Date.now()/1000 < json.exp - ahead) {
        return false
    } 
    return true
}