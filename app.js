function updateProductNumber(product, price, isIncreasing) {
    //get input
    const productInput = document.getElementById(product + '-number');
    let productNmuber = parseInt(productInput.value);
    if (isIncreasing == true) {
        //set input
        productInput.value = ++productNmuber;
    }
    else {
        //set input
        if (productNmuber <= 0) {
            return;
        }
        else {
            productInput.value = --productNmuber;
        }

    }

    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNmuber * price;
    //calculate total
    calculateTotal();
};
function getInputValue(product) {
    //get input
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    //set input
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = tax + subTotal;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}


//handle phone icrease decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});



//handle case icrease decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});

document.getElementById('phone-refresh-input').addEventListener('click', function () {
    const removeAll = document.getElementById('phone-number');
    removeAll.value = '';
})

document.getElementById('refresh-input').addEventListener('click', function () {
    const removeAll = document.getElementById('case-number');
    removeAll.value = '';
})

