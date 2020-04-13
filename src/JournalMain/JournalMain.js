import React from 'react';
import './JournalMain.css';

//componentDidMount because the api needs to show the journal on start
//do i need dummy data? helpers
function JournalMain(){
    return (
        <div className='JournalMain'>
<h2>food journal</h2>
<section id='monday'>
     <h3>monday</h3>
    <ul id='monday'>
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="delete" type="delete">Delete</button>
    
</section>
<section id='tuesday'>
     tuesday
    <ul id='tuesday'>
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="delete" type="delete">Delete</button>

</section>
<section id='wednesday'>
    what you eat on wednesday
    <ul id='wednesday'>
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="edit" type="edit">Delete</button>

</section>
<section id='thursday'>
    what you eat on thursday
    <ul id='thursday'>
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="edit" type="edit">Delete</button>

</section>
<section id='friday'>
    what you eat on friday
    <ul id="friday">
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="edit" type="edit">Delete</button>

</section>
<section id='saturday'>
    what you eat on saturday
    <ul id='saturday'>
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="delete" type="delete">Delete</button>

</section>
<section id='sunday'>
    what you eat on sunday
    <ul id='sunday'>
        <li>
            breakfast
        </li>
        <li>
            lunch
        </li>
        <li>
            dinner
        </li>
        <li>
            snacks
        </li>
    </ul>
    <button id="delete" type="delete">Delete</button>

</section>
</div>
)
}

export default JournalMain