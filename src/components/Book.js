import React from 'react'
import './Book.css'

class Book extends React.Component {
    render() {
        console.log(window.location);

        const {
            book
        } = this.props;

        return (
            <div className="Book" onClick={() => this.bookDetails('xyi')}>
                <img className="BookCover" src={'covers/' + book.cover} alt="Book cover"
                    height="200" width="130" title={book.name}/>
                <br/>
            </div>
        )
    }

    bookDetails() {
        const {
            book
        } = this.props;
        window.open(window.location + 'pdf/' + book.file, "_blank")
    }
}

export default Book;