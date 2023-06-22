const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
];

const calculator = document.querySelector('.calculator');
const display = document.querySelector('#display');

buttons.forEach(buttonValue => {
    const button = document.createElement('button');
    button.textContent = buttonValue;
    calculator.querySelector('.buttons').appendChild(button);

    button.addEventListener('click', () => {
        if (buttonValue === '=') {
            display.value = eval(display.value);
        } else {
            display.value += buttonValue;
        }
    });
});