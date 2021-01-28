document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container'; //step 3
    document.body.appendChild(div);

    //step 4-7
    let h1 = document.createElement('h1');
    let h1Txt = document.createTextNode('This is an h1');
    h1.appendChild(h1Txt);
    h1.className = 'h1';
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Txt = document.createTextNode('This is an h2');
    h2.appendChild(h2Txt);
    h2.className = 'h2';
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Txt = document.createTextNode('This is an h3');
    h3.appendChild(h3Txt);
    h3.className = 'h3';
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Txt = document.createTextNode('This is an h4');
    h4.appendChild(h4Txt);
    h4.className = 'h4';
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Txt = document.createTextNode('This is an h5');
    h5.appendChild(h5Txt);
    h5.className = 'h5';
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Txt = document.createTextNode('This is an h6');
    h6.appendChild(h6Txt);
    h6.className = 'h6';
    div.appendChild(h6);

    //step 9, random colors
    const Colors = [
        "#c74d4c",
        "#f3a6c0",
        '#ff1969',
        '#b88546',
        '#286f42',
        '#248f71',
        '#140bae',
        '#1a39f2',
    ];

    //step 9
    function randomColor() {
        let myRandomColor = Colors[Math.floor(Math.random() * Colors.length)]
        return myRandomColor;
    }

    h1.addEventListener('dblclick', function () {
        let myRandomColor = randomColor();
        h1.style.color = myRandomColor;
    })

    h2.addEventListener('dblclick', function () {
        let myRandomColor = randomColor();
        h2.style.color = myRandomColor;
    })

    h3.addEventListener('dblclick', function () {
        let myRandomColor = randomColor();
        h3.style.color = myRandomColor;
    })

    h4.addEventListener('dblclick', function () {
        let myRandomColor = randomColor();
        h4.style.color = myRandomColor;
    })

    h5.addEventListener('dblclick', function () {
        let myRandomColor = randomColor();
        h5.style.color = myRandomColor;
    })

    h6.addEventListener('dblclick', function () {
        let myRandomColor = randomColor();
        h6.style.color = myRandomColor;
    })

    //step 10
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let ul = document.createElement('ul');
    div.appendChild(ul);

    let listCount = 0;
    
    //step 11
    function insertToList() {
        listCount++;
        let li = document.createTextNode('li');
        let liText = document.createTextNode('This is list item ' + listCount);
        li.appendChild(liText);
        ul.appendChild(li);

        li.addEventListener('click', function () {
            let myRandomColor = randomColor();
            li.style.color = myRandomColor;
        })

        li.addEventListener("dblclick", function () {
            this.remove();
        })

    };

    button.addEventListener('click', insertToList);
})