/*let minusButton = document.getElementById("pantsMinusBut");
let addButton = document.getElementById("PantsAddBut");
let label = document.getElementById("pantsQty");

//create functions
function increaseValue()
{
    //get quantity from the innerHtml
    //increase value by 1 
    //then assign that new value to the innerHTML

    let qty = parseInt(lable.innerHTML)+1;

    label.innerHTML=qty;

}
function decreaseValue()
{
    let qty = parseInt(label.innerHTML)-1;
    label.innerHTML=qty;
}

//add our eventlisteners
addButton.addEventListener("click",increaseValue);

minusButton.addEventListener("click",decreaseValue);*/
//////////////////////////////////

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }