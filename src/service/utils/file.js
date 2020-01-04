import client from 'service/client/file'

export const uploadImage = (file) => {
    return client.newClient("https://kawaapp.com").uploadImage(file)
}

export const uploadVideo = (file) => {
    return client.newClient("https://kawaapp.com").uploadVideo(file)
}