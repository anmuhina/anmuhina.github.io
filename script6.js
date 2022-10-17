function updatePrice(form) {
    let fail=false;
    let amount=form.amount.value;
    let amount_ok=/^[1-9][0-9]*$/;
    if (amount_ok.test(amount)==false) {
        fail="Неправильно введено количество товара!";
    }
    let s = document.getElementsByName("selection");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.selections[priceIndex];
    }
    let radioDiv = document.getElementById("radioBut");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("radioBut");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.radioButs[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });

    /*let buttons=document.getElementById("radioBut").getElementsByTagName("input");
    for (let i=0;i<buttons.length;i++)
    buttons[i].checked=false;*/

    let checkDiv = document.getElementById("check1");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");
    let checkboxes = document.querySelectorAll("#check1 input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.checks[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    }); 

    /*let buttons1=document.getElementById("check1").getElementsByTagName("input");
    for (let i=0;i<buttons1.length;i++)
    buttons1[i].checked=false;*/

    if (fail) {
        alert(fail);
    }
    else {
    let result = document.getElementById("result");
    result.innerHTML = "Стоимость заказа: "+price*amount + " рублей.";
  }
}

function getPrices() {
    return {
        selections : [500, 3000, 700],
        radioButs: {
            r1 : 0,
            r2 : 1500,
            r3 : 3000,
        },
        checks: {
            c1 : 20,
            c2 : 15,
            c3 : 25,
        }
    };
}

window.addEventListener('DOMContentLoaded', function (event) {
    let radioDiv = document.getElementById("radioBut");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("selection");
    let select = s[0];
    select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice(document.getElementById("form1"));
    });
    let radios = document.getElementsByName("radioBut");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice(document.getElementById("form1"));
      });
    });
    let checkboxes = document.querySelectorAll("#check1 input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice(document.getElementById("form1"));
      });
    });
    updatePrice(document.getElementById("form1"));
  });

function ready() {
    console.log("DOM is ready");
}
document.addEventListener("DOMContentLoaded",ready);
