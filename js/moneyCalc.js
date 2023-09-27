
// calculate button clicks function
document.getElementById('calc-btn').addEventListener('click', function () {


    const incomeAmount = getValueById('income');
  //  console.log(incomeAmount);
    const foodSpend = getValueById('Food');
  //  console.log(foodSpend);
    const rentSpend = getValueById('Rent');
   // console.log(rentSpend);
    const clothesSpend = getValueById('Clothes');
   // console.log(clothesSpend);
    
    const totalSpend = foodSpend + rentSpend + clothesSpend;
  //  console.log(totalSpend);

    if (incomeAmount >= 0 && foodSpend >= 0 && rentSpend >= 0 && clothesSpend >= 0)
{
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
    }
    else
    {
        alert('amount must be positive number');
        setTextFieldEmpty();
        }
})

// savings part for save button
 
document.getElementById('save-btn').addEventListener('click', function () {
    
    const rBalance = getInnerTextById('remaining-balance');
  //  console.log(rBalance);
    const save = getValueById('save');
  //  console.log(save);
    if (save >= 0) {
        if (save >= 100) {
            alert('savings can not be greater or equal to 100');
            document.getElementById('save').value = '';
        }
        else {
            const savings = (save / 100) * rBalance;
           const finalS= savings.toFixed(2);
          //  console.log(savings);
            const remain = rBalance - savings;
          const finalR=  remain.toFixed(2);
           // console.log(remain);
            setValuesById('save-field', finalS);
            setValuesById('remain-field', finalR);
            setTextFieldEmpty();
        }
    }
    else {
        alert('amount must be positive number');
        document.getElementById('save').value = '';
    }

})

        