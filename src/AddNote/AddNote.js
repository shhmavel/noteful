import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NoteContext from '../NoteContext'

export default class AddNote extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = NoteContext;

  handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      name: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folderId: e.target['note-folder-id'].value,
      modified: new Date(),
    }
  }
  render() {
    console.log('inside of Addnote ')
    const { folders=[] } = this.context
    return (
      <section className='AddNote'>
        <h2>Create a note</h2>
        <NotefulForm>
          <div className='field'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input type='text' id='note-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea id='note-content-input' />
          </div>
          <div className='field'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select id='note-folder-select'>
              <option value={null}>...</option>
              {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add new note
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
