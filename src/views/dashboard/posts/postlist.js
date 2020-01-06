import React from 'react'
import { Button } from 'shared/comps'

import styles from './postlist.module.css'

export default class PostList extends React.Component {
    render() {
        const posts = ["A", "B", "C", "D"]
        return (
            <div style={{padding: '24px'}}>
                <div className={styles.topbar}>
                    <Button>新建文档</Button> Posts/
                </div>

                {posts.map( p => {
                    return <ListItem />
                })}
            </div>
        )
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <div className={styles.listitem}>
                关于React和Vue有啥想说的..
            </div>
        )
    }
}