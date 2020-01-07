import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'shared/comps'

import styles from './sitelist.module.css'

class SiteList extends Component {
    state = {
        visible: false,
    }

    handleItemClick = (site) => {
        this.props.history.push("/dashboard")
    }

    handleNew = () => {
        this.setState({ visible: true })
    }

    handleClose = () => {
        this.setState({ visible: false })
    } 

    render() {
        const sites = ["A", "B", "C"]
        return (
            <div className={styles.main}>
                <div className={styles.hero}>
                    <h1>我的站点</h1>
                    <div>
                        <Button onClick={this.handleNew} >添加站点</Button>
                    </div>
                </div>
                <div className={styles.list}>
                    {sites.map( site => {
                        return <ListItem onClick={ () => this.handleItemClick(site) }/>
                    })}
                </div>
                
                {/* New site dialog */}
                <NewSite visible={this.state.visible} onRequestClose={this.handleClose}/>
            </div>
        );
    }
}
export default withRouter(SiteList);

const ListItem = ({onClick}) => {
    return (
        <div className={styles.listitem} onClick={onClick}>Hello World ...

    

            <span className={styles.dots} style={{marginLeft: 'auto'}}>
                <span/> <span/> <span/>
            </span>
        </div>
    )
}

class NewSite extends React.Component {
    render() {
        const { visible, onRequestClose } = this.props
        return (
            <Modal title="添加站点" show={visible} onRequestClose={onRequestClose} >
                <div className={styles.new} >
                    <form className={styles.form}>
                        <input placeholder="站点名称" />
                        <Button>确定</Button>
                    </form>
                </div>
            </Modal>
        )
    }
}