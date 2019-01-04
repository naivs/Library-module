const initialState = {
    books: [
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
            cover: 'css guide.JPG',
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
    ],
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