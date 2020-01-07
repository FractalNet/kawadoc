import React from 'react'
import { Button, Modal } from 'shared/comps'

import styles from './postlist.module.css'

export default class PostList extends React.Component {
    state = {
        visible: false,
    }

    handleNew = () => {
        this.setState({ visible: true })
    }

    handleClose = () => {
        this.setState({ visible: false })
    }

    render() {
        const posts = ["A", "B", "C", "D"]
        return (
            <div style={{padding: '24px'}}>
                <div className={styles.topbar}>
                    <Button onClick={this.handleNew}>新建文档</Button> 
                    <span style={{marginRight: '16px'}}></span>Posts/
                </div>

                {posts.map( p => {
                    return <ListItem />
                })}
                <NewArticle visible={this.state.visible} onRequestClose={this.handleClose} />
            </div>
        )
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <div className={styles.listitem}>
                关于React和Vue有啥想说的..
                <span className={styles.dots} style={{marginLeft: 'auto'}}>
                    <span/> <span/> <span/>
                </span>
            </div>
        )
    }
}

class NewArticle extends React.Component {
    render() {
        const { visible, onRequestClose } = this.props 
        return (
            <Modal title="导入文章" show={visible} onRequestClose={onRequestClose} >
                <div className={styles.new} >
                    <form className={styles.form}>
                        <input placeholder="文章链接.." />
                        <Button>确定</Button>
                    </form>
                </div>
            </Modal>
        )
    }
}