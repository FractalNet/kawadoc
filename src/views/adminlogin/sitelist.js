import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './sitelist.module.css'

class SiteList extends Component {
    handleItemClick = (site) => {
        this.props.history.push("/dashboard")
    }

    render() {
        const sites = ["A", "B", "C"]
        return (
            <div className={styles.main} style={{padding: '48px'}}>
                <div className={styles.hero}>
                    <h1>我的站点</h1>
                    <div>
                        <a href="#/add-site" >添加站点</a>
                    </div>
                </div>
                <div className={styles.list}>
                    {sites.map( site => {
                        return <ListItem onClick={ () => this.handleItemClick(site) }/>
                    })}
                </div>    
            </div>
        );
    }
}
export default withRouter(SiteList);

const ListItem = ({onClick}) => {
    return (
        <div className={styles.listitem} onClick={onClick}>Hello World ...</div>
    )
}