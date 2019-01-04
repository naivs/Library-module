import React from 'react'
import {Field, reduxForm} from 'redux-form'
import FieldFileInput from '../components/FieldFileInput'

let AddBookForm = props => {
    return <form>
        <div>
            <label htmlFor="name">Название*</label>
            <div>
                <Field name="name" component="input" type="text"
                       placeholder="Название издания"/>
            </div>
        </div>
        <div>
            <label htmlFor="paperFile">Файл*</label>
            <div>
                <Field name="paperFile" component={FieldFileInput} type="file"/>
            </div>
        </div>
        <div>
            <label htmlFor="coverFile">Обложка</label>
            <div>
                <Field name="coverFile" component={FieldFileInput} type="file"/>
            </div>
        </div>
        <div>
            <label htmlFor="description">Описание</label>
            <div>
                <Field name="description" component="textarea"
                       placeholder="Введите описание"/>
            </div>
        </div>
        <div>
            <label htmlFor="year">Год издания*</label>
            <div>
                <Field name="year" component="input"
                       placeholder="Введите год"/>
            </div>
        </div>
        <div>
            <label htmlFor="authorId">Автор*</label>
            <div>
                <Field name="authorId" component="select">
                    <option/>
                    <option value="23">23</option>
                    <option value="2">2</option>
                    <option value="8">8</option>
                </Field>
            </div>
        </div>
        <div>
            <label htmlFor="language">Язык издания*</label>
            <div>
                <Field name="language" component="select"
                    placeholder="Язык">
                    <option/>
                    <option value="english">English</option>
                    <option value="russian">Русский</option>
                </Field>
            </div>
        </div>
        <div>
            <label htmlFor="genre">Жанр*</label>
            <div>
                <Field name="genre" component="select">
                    <option/>
                    <option value="fantastic">Фантастика</option>
                    <option value="detective">Детектив</option>
                    <option value="since">Наука</option>
                </Field>
            </div>
        </div>
        <div>
            <label htmlFor="type">Тип издания*</label>
            <div>
                <Field name="type" component="select">
                    <option/>
                    <option value="book">Книга</option>
                    <option value="magazine">Журнал</option>
                    <option value="comix">Комикс</option>
                </Field>
            </div>
        </div>
        <div>
            <label htmlFor="location">Место создания*</label>
            <div>
                <Field name="location" component="select">
                    <option/>
                    <option value="russia">Россия</option>
                    <option value="usa">США</option>
                    <option value="germany">Германия</option>
                </Field>
            </div>
        </div>
    </form>
};

AddBookForm = reduxForm({form: 'addBook'})(AddBookForm);

export default AddBookForm