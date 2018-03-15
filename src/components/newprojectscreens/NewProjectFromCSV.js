import React from 'react';

const NewProjectFromCSV = ({ csvdata }) => {
  return (
    <div>
      <h1>New Project From CSV</h1>
      <hr/>
      <form>
        <p>
          <label>
            Project Name
          </label>
          <input placeholder='Name your project'/>
        </p>
        <p>
          <label>
            Card Title Column
          </label>
          <select>
            <option>Title</option>
          </select>
        </p>
        <p>
          <label>
            Card Type Column
          </label>
          <select>
            <option>Type</option>
          </select>
        </p>
        <p>
          <input value='save'/>
        </p>
      </form>
    </div>
  )
}
export default NewProjectFromCSV;
