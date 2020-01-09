import Baobab from 'baobab'

/* eslint-disable-next-line */
const user = window.KAWA_USER
const sync = window.KAWA_SYNC

const state = {
    follow: false,
    language: "en-US",

    // meta-data
    token: {
        value: undefined,
        error: undefined,
        loading: false,
    }, 

    user: {
        data: {avatar_url: "https://golang.org/doc/gopher/doc.png"},
        error: undefined,
        loaded: false,
        syncing: sync,
    },

    sites: {
        loaded: false,
        error: undefined,
        data: [],
    },

    articles: {
        loaded: false,
        error: undefined,
        data: [],
    },
   
    message: {
        show: false,
        text: "Hello There",
        error: false,
    },
}

const tree = new Baobab(state)
if (window) {
    window.tree = tree
}
export default tree