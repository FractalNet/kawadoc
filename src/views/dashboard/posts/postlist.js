import React from 'react'
import { withRouter } from 'react-router-dom'
import { branch } from 'baobab-react/higher-order'
import { Button, Modal } from 'shared/comps'

import styles from './postlist.module.css'

import {
    getArticleList,
    createArticle,
} from 'service/utils/article'

class PostList extends React.Component {
    state = {
        visible: false,
    }

    handleNew = () => {
        this.setState({ visible: true })
    }

    handleClose = () => {
        this.setState({ visible: false })
    }

    componentDidMount() {
        this.props.dispatch(getArticleList)
    }

    handleNewArticle = (link) => {
        const data = {
            link: link,
        }
        this.props.dispatch(createArticle, data)
    }

    render() {
        const { articles = []} = this.props
        return (
            <div style={{padding: '24px'}}>
                <div className={styles.topbar}>
                    <Button onClick={this.handleNew}>新建文档</Button> 
                    <span style={{marginRight: '16px'}}></span>Posts/
                </div>

                {articles.map( p => {
                    return <ListItem />
                })}
                <NewArticle visible={this.state.visible} onRequestClose={this.handleClose} onSubmit={this.handleNewArticle} />
            </div>
        )
    }
}

const binding = (props, context) => {
    return {
        articles: ["articles", "data"],
    }
}
export default withRouter(branch(binding, PostList))

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
    state = {
        link: ""
    }

    handleLinkChange = (e) => {
        this.setState({ link: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { link } = this.state
        if (!link) {
            alert("请输入文章链接.."); return
        }
        this.props.onSubmit(link)
    }

    render() {
        const { visible, onRequestClose } = this.props 
        return (
            <Modal title="导入文章" show={visible} onRequestClose={onRequestClose} >
                <div className={styles.new} >
                    <form className={styles.form}>
                        <input onChange={this.handleLinkChange} placeholder="文章链接.." />
                        <Button onClick={this.handleSubmit} >确定</Button>
                    </form>
                </div>
            </Modal>
        )
    }
}