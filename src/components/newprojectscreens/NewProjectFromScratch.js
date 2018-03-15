import React from 'react';

const NewProjectFromScratch = () => {
  return (
    <div>
      <h1>New Project From Scratch</h1>
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
            Card Type
          </label>
          <input placeholder='Each card type shares the same layout'/>
        </p>
        <p>
          <label>
            Quantity
          </label>
          <input placeholder='1'/>
        </p>
        <p>
          <input value='save'/>
        </p>
      </form>
    </div>
  )
}
export default NewProjectFromScratch;
