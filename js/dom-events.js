// console.dir(document);
start();

function start() {
    // var button = document.querySelector('button')
    // // button.className = 'round';

    document.addEventListener('mouseover', function(e) {
        if (e.target.innerText === 'Music') {
            e.target.className = 'round';
            e.target.style.backgroundColor = 'red';
        }
        else if (e.target.innerText === 'Movies') {
            e.target.className = 'round';
            e.target.style.backgroundColor = 'orange';
        }
        else if (e.target.innerText === 'TV Show') {
            e.target.className = 'round';
            e.target.style.backgroundColor = 'yellow';
        }
        else if (e.target.innerText === 'Records') {
            e.target.className = 'round';
            e.target.style.backgroundColor = 'green';
        }
        else if (e.target.innerText === 'Newspapers') {
            e.target.className = 'round';
            e.target.style.backgroundColor = 'blue';
        }
        else if (e.target.innerText === 'Websites') {
            e.target.className = 'round';
            e.target.style.backgroundColor = 'purple';
        }
    });
}

// function start() {
//     document.addEventListener('click', function(e) {
//         alert(e.target.innerText);
//     });
// }
