import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './components/Book'

class App extends Component {
    render() {
        const books = [
            {
                id: 0,
                name: 'angular for professionals',
                cover: 'angular for professionals.JPG',
                file: 'Angular.pdf'
            },
            {
                id: 1,
                name: 'angular web development',
                cover: 'angular web development.JPG',
                file: 'doc_2018-06-26_19-51-20.pdf'
            },
            {
                id: 2,
                name: 'css guide',
                cover: 'css guide.jpg',
                file: 'doc_2018-06-26_19-52-10.pdf'
            },
            {
                id: 3,
                name: 'java network programming',
                cover: 'java network programming.JPG',
                file: 'Java Network Programming, 4th Edition.pdf'
            },
            {
                id: 4,
                name: 'java philisofy',
                cover: 'java philisofy.JPG',
                file: 'Брюс Эккель - Философия Java - 2015.pdf'
            },
            {
                id: 5,
                name: 'java script book',
                cover: 'java script book.JPG',
                file: 'impatient-js-preview-book.pdf'
            },
            {
                id: 6,
                name: 'machine learning',
                cover: 'machine learning.JPG',
                file: 'маш.pdf'
            },
            {
                id: 7,
                name: 'spring for pro',
                cover: 'spring for pro.JPG',
                file: 'spring-4-dlya-professionalov.pdf'
            }
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="book-container">
                        {books.map((book) => {
                            return (
                                <Book book={book}/>
                            )
                        })}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
