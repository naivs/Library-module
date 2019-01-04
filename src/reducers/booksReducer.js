const initialState = {
    books: [],
    modalIsOpen: false,
    form: {
        file: {},
        name: '',
        year: '',
        description: '',

        authorId: '',
        language: '',
        genre: '',
        type: '',
        location: ''
    },
    menuItems: [
        'All',
        'Java',
        'Network',
        'Guide',
        'Press',
        'Other'
    ],
    selectedMenuItem: 0
};

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_PAPER_LIST':
            return {
                ...state,
                books: [...action.payload]
            };
        case 'REQUEST_POSTS':
            return {

            };
        case 'ADD_BOOK':
            let book = action.payload;
            console.log("Add book payload:", book);
            return {
                ...state,
                books: [...state.books,
                    {
                        id: state.books.length,
                        name: book.name,
                        cover: book.cover,
                        file: book.file
                    }
                ]
            };
        case 'OPEN_MODAL':
            return {
                ...state,
                modalIsOpen: true
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalIsOpen: false
            };
        default:
            return state
    }
}