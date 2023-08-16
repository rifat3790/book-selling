
// Function return number
function getTextElementNumber(elementId){
    const getId = document.getElementById(elementId);
    const getElementString = getId.innerText;
    const getElementNumber = parseFloat (getElementString);
    return getElementNumber;
}

// Function return string
function getTextElementString(elementId){
    const getElement = document.getElementById(elementId);
    const getElementValueString = getElement.innerText;
    return getElementValueString;
}