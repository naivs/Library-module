import React from 'react'
import './Content.css'
import Book from '../components/Book'
import {connect} from 'react-redux'

class Content extends React.Component {
    render() {
        const {
            books
        } = this.props;

        return (
            <div className="Content">
                {books.map((book) => {
                    return (
                        <Book key={book.id} book={book}/>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.booksReducer
}

export default connect(mapStateToProps)(Content)