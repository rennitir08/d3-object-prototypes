growBoxes();
enableDrawing();

function enableDrawing() {
    document.addEventListener('mousedown', function(e) {
        console.log(e);
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        // gives mouse x coordinate
        box.style.top = e.clientY + 'px';
        // gives mouse y coordinate
        box.style.left = e.clientX + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = `rgb(${red},  ${green}, ${blue})`;

        document.body.appendChild(box);
    });
}

function growBoxes() {
    document.addEventListener('mousedown', function(e) { // why doesn't it work with 'click' ?? 
            if (e.target.nodeName === 'DIV') {
                e.target.style.width = '15px';
                e.target.style.height = '15px';
            }
    });
}
