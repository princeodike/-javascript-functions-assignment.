const calculateTotal = (price, quantity, deliveryFee) => {
    const total = (price * quantity) + deliveryFee;
    console.log(total);
}

calculateTotal(2000, 5, 500);
calculateTotal(1500, 2, 300);
calculateTotal(5000, 4, 1000);


