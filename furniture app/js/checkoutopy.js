//////////////////////////////////////////////////
let totalPrice= 0;//total price
let productsCount = 0;
let itemCount = [0,0,0];
let itemPrice = [0,0,0];//items
let orderPrice = [0,0,0];//no of items times item price
let totalCounts = 0;
//total no of orders
let orders = document.querySelectorAll(".chosen-item");
productsCount=orders.length;
totalCounts=productsCount;
const chosenItems = document.getElementById("chosen-items");

//products counts
////////////////
const itemCount1 = document.getElementById('itemNo1-counts');
const itemCount2 = document.getElementById('itemNo2-counts');
const itemCount3 = document.getElementById('itemNo3-counts');
const counter1 = document.querySelector(".counter1");
const counter2 = document.querySelector(".counter2");
const counter3 = document.querySelector(".counter3");
//define prices spans
///////////////
const itemPrice1 = document.getElementById('itemNo1-price');
const itemPrice2 = document.getElementById('itemNo2-price');
const itemPrice3 = document.getElementById('itemNo3-price');
//////////////////////////
//total price element
const total = document.getElementById("total-final-price");
//////////////////////////
//transform prices to numbers

itemPrice[0]= parseFloat(itemPrice1.textContent);
itemPrice[1]= parseFloat(itemPrice2.textContent);
itemPrice[2]= parseFloat(itemPrice3.textContent);
//console.log(itemPrice);
////////////////////////////////////
//////////////////////////
//initiate product counts

itemCount[0]= parseFloat(counter1.textContent);
itemCount[1]= parseFloat(counter2.textContent);
itemCount[2]= parseFloat(counter3.textContent);

////////////////////////////////////
//initiate total price 
for(let i=0;i<productsCount;i++){
    orderPrice[i]=itemCount[i]*itemPrice[i];
}
totalPrice=orderPrice.reduce(function(total, price){total+=price;
return total;}, 0);

////////////////////////////////////
//listen to click events
let btns = document.querySelectorAll('.control');

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        for(let i=0;i<productsCount;i++){
            j=i+1;
        if(e.currentTarget.classList.contains(`add-itemNo${j}`)){
        itemCount[i]++;
        }
        if(e.currentTarget.classList.contains(`remove-itemNo${j}`)){
        itemCount[i]--;
        }
        }
        //update product counts 
        itemCount1.innerText=itemCount[0];
        itemCount2.innerText=itemCount[1];
        itemCount3.innerText=itemCount[2];
        counter1.innerText=itemCount[0];
        counter2.innerText=itemCount[1];
        counter3.innerText=itemCount[2];
       

        //update order
        orderPrice=[0,0,0];
        for(let i=0;i<productsCount;i++){
        orderPrice[i]= itemCount[i]*itemPrice[i];
        }

        totalPrice=0;
        totalPrice = orderPrice.reduce(function(acc, val) { return acc + val; }, 0);
        total.innerHTML=totalPrice;

        //hide the products having 0 counts
        for(let i=0;i<productsCount;i++){
        if(itemCount[i]<1){
            orders[i].classList.add("hide");
        }
        }
    })
})

// for(let i=0;i<productsCount;i++){
//         if(orders[i].classList.contains("hide")){
//             //update total no of orders
//             totalCounts--;
//             console.log("counts "+totalCounts);
//             chosenItems.innerHTML=totalCounts;
//         }
//         }
////////////////////////////////////
//update total price
total.innerHTML=totalPrice;

console.log(totalCounts);