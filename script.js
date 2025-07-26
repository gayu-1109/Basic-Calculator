let string = " ";
let buttons = document.querySelectorAll('button')
let input = document.querySelector('input')

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try{
                string = eval(string);
            }
            catch{
                string="Error"
            }
            input.value = string;
        }
        else if (e.target.innerHTML === 'AC') {
            string = " ";
            input.value = string;
        }
        else if (e.target.innerHTML === 'D') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML
            input.value = string
        }

    })
})