import React from 'react'
import {Button, Modal, Nav, NavItem} from 'react-bootstrap'
import './SidePanel.css'

class SidePanel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            modalIsOpen: false
        }
    }

    handleOpenModal() {
        this.setState({modalIsOpen: true})
    }

    handleCloseModal() {
        this.setState({modalIsOpen: false})
    }

    static handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    render() {
        const menuItems = [
            'All',
            'Java',
            'Network',
            'Guide',
            'Press',
            'Other'
        ];

        const navInstance = (
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={SidePanel.handleSelect}>
                {menuItems.map((item, index) => {
                    return (
                        <NavItem eventKey={index + 1} title={item}>
                            {item}
                        </NavItem>
                    )
                })}
            </Nav>
        );

        return (
            <div className="SidePanel">
                <Button bsStyle="primary" onClick={() => this.handleOpenModal()}>Add book</Button>
                <Modal show={this.state.modalIsOpen} onHide={() => this.handleCloseModal()}>
                    <Modal.Header>
                        <Modal.Title>Add new Book in Library</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Test in modal body</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success">Add</Button>
                        <Button bsStyle="danger" onClick={() => this.handleCloseModal()}>Cancel</Button>
                    </Modal.Footer>
                </Modal>

                {navInstance}
            </div>
        )
    }
}

export default SidePanel;