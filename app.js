const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
    
    let calculation = []
    let accumulativeCalculation

    //evalutes the value of the variable 'value' and displays result accordingly
function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        console.log(accumulativeCalculation)
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

}
    //calls the function 'calculate' and updates srceen accordingly
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

