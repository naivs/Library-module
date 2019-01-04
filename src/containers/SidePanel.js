import React from 'react'
import {
    Button, Modal, Nav, NavItem
} from 'react-bootstrap'
import './SidePanel.css'
import {connect} from 'react-redux'
import AddBookForm from '../forms/AddBookForm'
import {submit} from 'redux-form'

class SidePanel extends React.Component {
    static handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    handleSubmit(payload) {
        // this.props.addBook(payload);
        // call API
        const data = new FormData();
        Object.keys(payload).forEach(e => {
            data.append(e, payload[e])});

        // data.append('file', formData.file);
        fetch('papers/add', {
            method: 'POST',
            headers: {
                // 'Accept': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'multipart/form-data',
            },
            body: data
        })
    }

    render() {
        const {
            modalIsOpen,
            menuItems
        } = this.props;

        const navInstance = (
            <Nav bsStyle="pills" stacked activeKey={1} onSelect={SidePanel.handleSelect}>
                {menuItems.map((item, index) => {
                    return (
                        <NavItem key={index} eventKey={index + 1} title={item}>
                            {item}
                        </NavItem>
                    )
                })}
            </Nav>
        );

        return (
            <div className="SidePanel">
                <Button bsStyle="primary" onClick={() => this.props.openModal()}>Add book</Button>
                <Modal show={modalIsOpen} onHide={() => this.props.closeModal()}>
                    <Modal.Header>
                        <Modal.Title>Добавление издания в библиотеку</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddBookForm onSubmit={values => this.handleSubmit(values)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={() => this.props.submitForm()}>Add</Button>
                        <Button bsStyle="danger" onClick={() => this.props.closeModal()}>Cancel</Button>
                    </Modal.Footer>
                </Modal>

                {navInstance}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.booksReducer
}

function mapDispatchToProps(dispatch) {
    return {
        addBook: book => dispatch({type: 'ADD_BOOK', payload: book}),
        openModal: () => dispatch({type: 'OPEN_MODAL'}),
        closeModal: () => dispatch({type: 'CLOSE_MODAL'}),
        submitForm: () => dispatch(submit('addBook'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);