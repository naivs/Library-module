import React from 'react'
import './TopPanel.css'
import Background from '../img/header-texture.png'

class TopPanel extends React.Component {
    render() {
        return (
            <div className="TopPanel" style={{ backgroundImage: `url(${Background})`}}>
                <h1>My Library</h1>
            </div>
        )
    }
}

export default TopPanel;