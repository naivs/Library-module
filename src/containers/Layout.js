import React, {Component} from 'react'
import './Layout.css'
import TopPanel from './TopPanel'
import SidePanel from './SidePanel'
import Content from './Content'

class Layout extends Component {
    state = {
        menu: false
    };

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