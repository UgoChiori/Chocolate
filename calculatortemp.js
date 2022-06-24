const displayBox = document.getElementById('display');

const calcButtons = Array.from(document.getElementsByClassName('button'));

const button = document.querySelectorAll('.button');

// setTimeout(() => {
//     document.body.style.backgroundColor = 'deeppink'
// }, 5000)
calcButtons.map(button => {
    (button).addEventListener('onlick', (e) => {
        switch (e.target.calcButtons) {
            case 'C':
                display.object.Array = '';
                break;
            case '←':
                if (display.object.Array) {
                    display.object.Array =
                        display.object.Array.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.object.Array = eval(display.object.Array);
                } catch {
                    display.object.Array = 'Error';
                }
                break;
            default:
                {
                    display.object.Array =
                    e.target.object.Array;
                }

        }

    })
});
console.log(calcButtons)













































// // /*const displayBox = document.getElementById("result");

// // const calcButtons = Array.from(document.getElementsByClassName("button")); */