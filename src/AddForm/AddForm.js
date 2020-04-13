import React from 'react';
import './AddForm.css'

//POST method htmlFor new items entered and added into form
//server side should have the post method as well

function AddForm() {
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
                {/* <section class="food-form">
                <label htmlFor="input-two">item 2</label>
                    <input class="form-control" type="text" name="first-item" id="second-item" placeholder="eggs, etc" required />
                <input class="btn btn--form" type="submit" value="add item" /></section>
                <section class="food-form">
                    <label htmlFor="input-three">item 3</label>

                <input class="form-control" type="text" name="first-item" id="third-item" placeholder="juice, etc" required />
                <input class="btn btn--form" type="submit" value="add item" /></section> */}
                {/* <section class="food-form">
                    <label htmlFor="input-four">item 4</label>

                <input class="form-control" type="text" name="first-item" id="fourth-item" placeholder="vodka, etc" required />
                <input class="btn btn--form" type="submit" value="add item" />
                </section>
                <section class="food-form">

                <label htmlFor="input-five">item 5</label>

                <input class="form-control" type="text" name="first-item" id="fitth-item" placeholder="apple, etc" required />
                <input class="btn btn--form" type="submit" value="add item" /></section>
                
                <a class="more-fields" href="#">show more fields (this will add more fields below)</a>
<br />
                <button class='submit' type="submit">SUBMIT</button>

                 */}
                {/* <label htmlFor="cars">Choose a food:</label>

                <select id="items" multiple>
                  <option value="option1">bread</option>
                  <option value="option2">eggs</option>
                  <option value="option3">juice</option>
                  <option value="option4">vodka</option>
                </select> */}
            </fieldset>
    </form>
    </div>
    
)    
}
 export default AddForm;