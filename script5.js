function valid(form) {
    var fail=false;
    var price=form.price.value;
    var amount=form.amount.value;
    var result=document.getElementById("result");
    var price_ok=/^[0-9]+[\.]?[0-9]*$/;
    var amount_ok=/^[1-9][0-9]*$/;
    if (price_ok.test(price)==false) {
        fail="Неправильно введена цена товара!";
    }
    else if (amount_ok.test(amount)==false) {
        fail="Неправильно введено количество товара!";
    }
    if (fail) {
        alert(fail);
    }
    else {
        result.innerHTML="Стоимость заказа:"+price*amount+" "+"рублей.";
    }
    return false;
}

function ready() {
    console.log("DOM is ready");
}

document.addEventListener("DOMContentLoaded",ready);
