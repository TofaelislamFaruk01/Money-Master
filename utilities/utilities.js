console.log(67);


// get values from textbox

function getValueById(boxId)
{
    const boxValue = document.getElementById(boxId);
    const boxValueStng = boxValue.value;
    const value = parseInt(boxValueStng);
    console.log(value);
    return value;
}

// get innertext from text field
function getInnerTextById(boxId)
{
    const boxTValue = document.getElementById(boxId);
    const valueString = boxTValue.innerText;
    console.log('inside fu',valueString);
    const tValue = parseInt(valueString);
    console.log(tValue);

    return tValue;
}

// set values in the textField

function setValuesById(boxId,value)
{
    const boxValue = document.getElementById(boxId);
    boxValue.innerText = value;
}

// set all the text field to empty
function setTextFieldEmpty() {
    document.getElementById('income').value = '';
    document.getElementById('Food').value = '';
    document.getElementById('Rent').value = '';
    document.getElementById('Clothes').value = '';
    document.getElementById('save').value = '';
}