
// calculate button clicks function
document.getElementById('calc-btn').addEventListener('click', function () {


    const incomeAmount = getValueById('income');
    console.log(incomeAmount);
    const foodSpend = getValueById('Food');
    console.log(foodSpend);
    const rentSpend = getValueById('Rent');
    console.log(rentSpend);
    const clothesSpend = getValueById('Clothes');
    console.log(clothesSpend);
    
    const totalSpend = foodSpend + rentSpend + clothesSpend;
    console.log(totalSpend);
    
    if (totalSpend <= incomeAmount)
    {
        const remainingBalance = incomeAmount - totalSpend;
        setValuesById('total-spend', totalSpend);
        setValuesById('remaining-balance', remainingBalance);
    }
    else
    {
        alert('spend amount can not greater than income');
        setTextFieldEmpty();
        }
})

// savings part for save button
 
document.getElementById('save-btn').addEventListener('click', function () {
    
    const rBalance = getInnerTextById('remaining-balance');
    console.log(rBalance);
    const save = getValueById('save');
    console.log(save);
    if (save >= 100)
    {
        alert('save % can not be greater or equal to 100');
    }
    else if (save > rBalance)
    {
        alert('savings amount can not be greater than remaining Balance');
    }
    else {
        const savings = (save / 100) * rBalance;
        console.log(savings);
        const remain = rBalance - savings;
        console.log(remain);
        setValuesById('save-field', savings);
        setValuesById('remain-field', remain);
        setTextFieldEmpty();
    }
})

        