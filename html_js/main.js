function hello() {
    alert("Hello, World!")
}

function bye(){
    document.querySelector('h1').innerHTML = "Bye!!";
}


let counter = localStorage.getItem('counter');
// let counter = 0;
function count() {
    counter++;
    document.querySelector('#counter').innerHTML = counter;

    if(counter % 10 == 0) {
        alert(`Counter is at ${counter}`);
        counter = 0;
    }
    localStorage.setItem('counter', counter)
}

let myCounter = 0;
function autocount() {
    myCounter++;
    document.querySelector('#autocounter').innerHTML = String(myCounter)+' sec';
}


document.addEventListener('DOMContentLoaded', function(){

    // Autoupdate 
    setInterval(autocount, 1000);

    if(!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0);
    }
    document.querySelector('#counter').innerHTML = localStorage.getItem('counter');
    document.querySelector('#button1').onclick = count;

    //Selecting buttons by id 

    // document.querySelector('#red').onclick = function() {
    //     document.querySelector('#hello').style.color = 'red'
    // };
    // document.querySelector('#green').onclick = function() {
    //     document.querySelector('#hello').style.color = 'green'
    // };
    // document.querySelector('#blue').onclick = function() {
    //     document.querySelector('#hello').style.color = 'blue'
    // };

    // selecting button at a time

    document.querySelectorAll('.color-change').forEach(function(button) {
        button.onclick = function() {
            document.querySelector('#hello').style.color = button.dataset.color;
        };
    });

    document.querySelector('#color-dropdown').onchange = function() {
        document.querySelector('#dropdown').style.color = this.value;
    };

    document.querySelector('#form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello ${name}!`);
    };


    // By Default disable the submit button
    document.querySelector('#submit-task').disabled = true;
    // Enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        if(document.querySelector('#task').value.length > 0){
            document.querySelector('#submit-task').disabled = false;
        }
        else {
            document.querySelector('#submit-task').disabled = true;
        }
    };

    // Add Elements to the list
    document.querySelector('#new-task').onsubmit = () => {
        //Create new Item for the list
        let task = document.querySelector('#task').value;
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        //Add new item to task list
        document.querySelector('#tasks').append(li);

        //Clear input field
        document.querySelector('#task').value = ''
        document.querySelector('#submit-task').disabled = true;

        // Stop form from Submitting
        return false;
    };

});



