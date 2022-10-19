let prices = {
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


function get_price(){
  let amount=document.querySelector("form#form1 > input[name=amount]").value;
  let amount_ok=/^[1-9][0-9]*$/;
  if (amount_ok.test(amount)==false) {
      alert("Неправильно введено количество товара!");
      return NaN;
  } else {
    let selector = document.querySelector("select[name=selection]");
    let price = prices.selections[parseInt(selector.value) - 1];
    let elements;
    switch (parseInt(selector.value)) {
      case 2:
        elements = document.querySelectorAll("input[name=radioBut]:checked");
        elements.forEach(function(element) {
          price += prices.radioButs[element.value];
        });
        break;
      case 3:
        elements = document.querySelectorAll("div.check1 > label > input:checked");
        elements.forEach(function(element) {
          console.log(element.name);
          price += prices.checks[element.name];
        });
        break;
      default:
        break;
    }
    let result = document.getElementById("result");
    result.innerHTML = "Стоимость заказа: "+price*amount + " рублей.";
  }
}

function updatePrice() {
  let result = document.querySelector("div#result > span.result-text");
  result.textContent = get_price();
}

function updateView(){
  let selector = document.querySelector("select[name=selection]");
  console.log("update view");
  console.log(selector.value);
  switch (parseInt(selector.value)) {
    case 2:
      document.querySelector("div.check1").style.display = "none";
      document.querySelectorAll("input[name=c1]").checked = false;

      document.querySelector("div.radioBut").style.display = "block";
      document.querySelector("input[name=radioBut]").checked = true;
      break;
    case 3:
      document.querySelector("div.radioBut").style.display = "none";
      document.querySelectorAll("input[name=radioBut]").checked = false;

      document.querySelector("div.check1").style.display = "block";
      break;
    default:
      document.querySelector("div.radioBut").style.display = "none";
      document.querySelector("div.check1").style.display = "none";
      document.querySelectorAll("input[name=radioBut]").checked = false;
      document.querySelectorAll("input[name=c1]").checked = false;
  }
}

console.log("DOM is ready");

let selector = document.querySelector("select[name=selection]");
updateView();
selector.addEventListener("change", updateView);
