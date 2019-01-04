import React from 'react'
import './content.css'
import Book from '../components/book'
import {connect} from 'react-redux'
import {get_paper_list} from '../api/paper.api'

class Content extends React.Component {
    componentDidMount() {
        get_paper_list(this.props.updatePaperList)
    }

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

function mapDispatchToProps(dispatch) {
    return {
        updatePaperList: (paperList) => dispatch({type: 'UPDATE_PAPER_LIST', payload: paperList}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)