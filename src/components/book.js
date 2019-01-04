import React from 'react'
import './book.css'

class Book extends React.Component {
    render() {
        const {
            book
        } = this.props;

        return (
            <div className="Book" onClick={() => this.bookDetails('xyi')}>
                <img className="BookCover" src={book.coverUrl} alt="Book cover"
                    height="200" width="130" title={book.name}/>
                <br/>
            </div>
        )
    }

    bookDetails() {
        const {
            book
        } = this.props;
        window.open(window.location + book.fileUrl, "_blank")
    }
}

export default Book;