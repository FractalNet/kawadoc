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

    spam: {
        words: ""
    },

    user: {
        data: {avatar_url: "https://golang.org/doc/gopher/doc.png"},
        error: undefined,
        loaded: false,
        syncing: sync,
    },

    // user data
    apps: {
        loaded: false,
        error: undefined,
        data: [],
    },

    // dashboard data per APP
    // 当前应用... 
    current: {
        app_key: ""
    }, 

    setting: {
        app_name: "",
        app_logo: "",
        app_summary: "",
        xiaocx_id: "",
        xiaocx_secret: "",
    },

    users: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    },
    
    users_manager: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    },

    stats: {
        overview: {
            new_user: 0,
            active_user: 0,
            total_user: 0,
            new_post: 0,
        },
        version: {
            trial: false,
            left: 0,
            last_day: 0,
        },

        user: {
            loaded: false,
            error: undefined,
            data: [],
        },
        post: {
            loaded: false,
            error: undefined,
            data: [],
        }
    },

    posts: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    },
    post_audit: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    },

    comments: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    }, 

    topics: {
        loaded: false,
        error: undefined,
        data: [],
    },

    reports: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    },
    puppets: {
        loaded: false,
        error: undefined,
        data: [],
        idCounter:{},
    },

    articles: {
        loaded: false,
        error: undefined,
        data: [],
    },
    drafts: {
        loaded: false,
        error: undefined,
        data: [],
    },

    adunits: {
        loaded: false,
        error: undefined,
        data: [],
        native: {
            home_feed_on: '',
            home_feed: '',
            detail_banner_on: '',
            detail_banner: '',
            detail_inters_on: '',
            detail_inters: '',
        }
    },

    polls: {
        loading: false,
        error: undefined,
        data: [],
    },

    joins: {
        loading: false,
        error: undefined,
        data: [],
    },

    exp: {
        grades: {
            loaded: false,
            error: undefined,
            data: [],
        },
        types: {
            loaded: false,
            error: undefined,
            data: [],
        },
    },
    point: {
        types: {
            loaded: false,
            error: undefined,
            data: [],
        },
    },

    signin: {
        loaded: false,
        error: undefined,
        data: [],
        total: 0,
    },

    form: {
        app: {
            name: "",
            logo: "",
            summary: ""
        }
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