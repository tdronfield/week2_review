import People from "./modules/DataObject.js";


// IIFE - Immediately Invoked Function Expression
(() => {
    console.log('fired!')
    //grab the bio container and get ready to populate its contents
    const bioInfo = document.querySelector('.bio-wrapper').children;

    function showProfData() {
        // change data on the page here

        // this is the label on the button (Name)
        let currentProf = this.textContent;
        
        //this refers to the heading tag (the first child of the biowrapper div)
        bioInfo[0].textContent = People[currentProf].name;
        // this refers to the paragraph tag (the second child of the biowrapper div)
        bioInfo[1].textContent = People[currentProf].role;

        bioInfo[2].textContent = People[currentProf].bio;

        bioInfo[3].src = `images/${People[currentProf].avatar}`;
    }

    for (let prof in People) {
        console.log(prof);

        // create a button for every prof/entry in our object
        let teamButton = document.createElement('button');

        // set the button label (text) to the prof name (current rntry in object)
        teamButton.textContent = prof;

        // add some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showProfData);

        //add the button to the top section on our web page
        document.querySelector("#section1").appendChild(teamButton);
    }

    //debugger;
})();