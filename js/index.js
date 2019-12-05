const pants_unit_price = 40.99;
const shirt_unit_price = 10.99;
const ontario_tax = 0.13;
var shirt_num = 0; 
var pants_num = 0; 
var shirt_extended_price = 0.0; 
var pants_extended_price = 0.0; 
var sub_total = 0.0; 
var tax = 0.0; 
var total = 0.0; 
const promos = ['NOTAX', 'FIFTYFIFTY'];
var applied_promo="";

//pants//////////////////////////////////////////////////////////
document.getElementById("pants_uprice").innerHTML="$" + pants_unit_price;
document.getElementById("pants_down").onclick = function(){
  if (pants_num > 0){
    pants_num--;
    document.getElementById("pants_num").innerHTML=pants_num;    
    updatePantsExtendedPrice();
  }
};

document.getElementById("pants_up").onclick = function(){
  pants_num++;
  document.getElementById("pants_num").innerHTML=pants_num;
  updatePantsExtendedPrice();
};

//shirts//////////////////////////////////////////////////////////
document.getElementById("shirt_uprice").innerHTML="$" + shirt_unit_price;
document.getElementById("shirt_down").onclick = function(){
  if (shirt_num > 0){
    shirt_num--;
    document.getElementById("shirt_num").innerHTML=shirt_num;
    updateShirtExtendedPrice();
  }
};

document.getElementById("shirt_up").onclick = function(){
  shirt_num++;
  document.getElementById("shirt_num").innerHTML=shirt_num;
  updateShirtExtendedPrice();
};

//calculate button//////////////////////////////////////////////
document.getElementById("calc").addEventListener("click", calculate);

function updateShirtExtendedPrice(){
  shirt_extended_price = shirt_num * shirt_unit_price;
  document.getElementById("shirt_eprice").innerHTML="$" + shirt_extended_price.toFixed(2);
}

function updatePantsExtendedPrice(){
  pants_extended_price = pants_num * pants_unit_price;
  document.getElementById("pants_eprice").innerHTML="$" + pants_extended_price.toFixed(2);
}

///////////////////////////////////////////////////////////////////

document.getElementById("promo").onclick = function(){
  var promo = prompt("Please enter promo code");
  var index = promos.indexOf(promo);
  if (index == -1){
    alert("Promo code doesn't exist");
    applied_promo="";
  }
  else{
    applied_promo = promos[index];    
  }
  calculate();
  document.getElementById("applied_promo").innerHTML=applied_promo;
};


function calculate(){
  sub_total = shirt_extended_price + pants_extended_price;  
  if (applied_promo==='FIFTYFIFTY'){
    sub_total = sub_total / 2;
  }
  document.getElementById("subtotal").innerHTML="$" + sub_total.toFixed(2);

  tax = sub_total * ontario_tax;  
  if (applied_promo==='NOTAX'){
    tax = 0.0;
  }
  document.getElementById("tax").innerHTML="$" + tax.toFixed(2);

  total = sub_total + tax;
  document.getElementById("total").innerHTML="$" + total.toFixed(2);
};


