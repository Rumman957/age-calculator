const dateInput = document.querySelector('.date-input');
const calculateBtn = document.querySelector('.calculate-btn');
const yourAge = document.querySelector('.your-age');
const ageResult = document.querySelector('.age-result');
const errorMessage = 'Please enter your date of birth';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

calculateBtn.addEventListener('click', () => {
    if (dateInput.value) {
        const [year, month, day] = dateInput.value.split('-');
        if (month <= currentMonth && day <= currentDay) {
            yourAge.innerText = currentYear - year;

        }
        else {
            yourAge.innerText = currentYear - year - 1;

        }
        ageResult.style.display = "block";

    }
    else {
        dateInput.type = 'text'
        dateInput.value = errorMessage;
        dateInput.classList.add('error');
    }
})

dateInput.addEventListener('focus', () => {
    dateInput.type = 'date';
    dateInput.classList.remove('error');
})