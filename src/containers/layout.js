import React, {Component} from 'react'
import './layout.css'
import TopPanel from './top.panel'
import SidePanel from './side.panel'
import Content from './content'

class Layout extends Component {
    // state = {
    //     menu: false
    // };

    render() {
        return (
            <div className="Layout">
                {/*top panel*/}
                <TopPanel/>
                <div className="layout-content">
                {/*left side panel*/}
                <SidePanel/>
                {/*header panel*/}
                {/*content*/}
                <Content/>
                </div>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout;