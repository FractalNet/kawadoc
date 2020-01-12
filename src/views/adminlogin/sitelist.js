import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'shared/comps'

import styles from './sitelist.module.css'

import {
    getSiteList,
    createSite,
} from 'service/utils/site'

class SiteList extends Component {
    state = {
        visible: false,
    }

    handleItemClick = (site) => {
        this.props.history.push(`/dashboard/${site.bizID}`)
    }

    handleNew = () => {
        this.setState({ visible: true })
    }

    handleClose = () => {
        this.setState({ visible: false })
    } 

    handleSubmit = (site) => {
        this.setState({ visible: false})
        const data = {
            bizID: site,
        }
        this.props.dispatch(createSite, data)
    }

    componentWillMount() {
        this.props.dispatch(getSiteList)
    }

    render() {
        const { sites = {} } = this.props
        const list = Object.values(sites);
        return (
            <div className={styles.main}>
                <div className={styles.hero}>
                    <h1>我的站点</h1>
                    <div>
                        <Button onClick={this.handleNew} >添加站点</Button>
                    </div>
                </div>
                <div className={styles.list}>
                    {list.map( site => {
                        return <ListItem item={site} key={site.id} onClick={ () => this.handleItemClick(site) }/>
                    })}
                </div>
                
                {/* New site dialog */}
                <NewSite visible={this.state.visible} onRequestClose={this.handleClose} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
const binding = (props, context) => {
    return {
        sites: ["sites", "data"],
    }
}
export default withRouter(branch(binding, SiteList))

const ListItem = ({item, onClick}) => {
    return (
        <div className={styles.listitem} onClick={onClick}>
            { item.bizID }
            <span className={styles.dots} style={{marginLeft: 'auto'}}>
                <span/> <span/> <span/>
            </span>
        </div>
    )
}

class NewSite extends React.Component {
    state = {
        site: ""
    }
    handleSiteChnage = (e) => {
        this.setState({ site: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { site } = this.state
        if (!site) {
            alert("名称为空"); return
        }
        this.props.onSubmit(site)
    }

    render() {
        const { visible, onRequestClose } = this.props
        return (
            <Modal title="添加站点" show={visible} onRequestClose={onRequestClose} >
                <div className={styles.new} >
                    <form className={styles.form}>
                        <input placeholder="站点名称" onChange={this.handleSiteChnage} />
                        <Button onClick={this.handleSubmit}>确定</Button>
                    </form>
                </div>
            </Modal>
        )
    }
}