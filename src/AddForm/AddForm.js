import React from 'react';
import './AddForm.css'

//POST method For new items entered and added into form
//server side should have the post method as well

//addform should have a drop down for day and meal, to easily add to the right days table

function AddForm(props) {
return(
    <div className='AddForm'>
            <h3>add food journal entry</h3>

    <form className="add">
        <fieldset>
            <label htmlFor="day-of">what day is it?</label>
            <input className='day-of-week' type='text' name='day-of-week' id='day-of-week' placeholder="monday, tuesday..."/><br />
            <label htmlFor="day-of">what meal is it?</label>
            <input className='meal' type='text' name='meal-type' id='meal-type' placeholder="breakfast, lunch..."/>
            <div className="food-form">
            <label htmlFor="input-one">item 1</label>
                <input className="form-control" type="text" name="first-item" id="first-item" placeholder="bread, etc" required />
                <input className="btn btn--form" type="submit" value="add item" /></div>
                <button id='addform' onClick={e => props.history.replace("/main")}>Add food</button>        
                <button id='cancel add' onClick={e => props.history.replace("/main")}>nevermind...</button>

            </fieldset>
    </form>
    </div>
    
)    
}
 export default AddForm;