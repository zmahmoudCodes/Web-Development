const products = [
{id:1, name:"Leende Chair",color:"black",count:2,price:125.00, isIn:1},
{id:2, name:"Morgon Table Lamp",color:"white",count:1,price:75.00, isIn:1},
{id:3, name:"Mangata Pendant Lamp Light",color:"olive",count:3,price:50.00, isIn:1},
{id:4, name:"Cult 70’s Armchair, matte Chair.",color:"",count:5,price:85.00, isIn:0}
//{id:5, name:"",color:"",count:,price:, isIn:1}
]
const cart = document.querySelector(".chosen-items-container");

window.addEventListener("load",function(){
const newId= localStorage.getItem("id");
const newCount= localStorage.getItem("count");
const newColor= localStorage.getItem("color");

products[3].id=parseInt(newId);
products[3].count=parseInt(newCount);
products[3].color=newColor;
if(newCount){products[3].isIn=1;}
})
//console.log(products);
/*
const chairColors = document.querySelectorAll(".color");
chairColors.forEach(function(x){
  x.addEventListener("click",function(e){
    let id = e.currentTarget.id;
    if(id == "color1"){products[3].color="grey";}
    else if(id == "color2"){products[3].color="black";}
    else if(id == "color3"){products[3].color="green";}
  })
})

*/
async function getProduct(id){
return new Promise((resolve,reject)=>{
let product = products.find((product)=>product.id===id);
resolve(product);
reject(`there is no product with that id ${id}`);
})
}
async function getCount(id){
try{
  const product = await getProduct(id);
  const count = product.count;
}
catch(error){
console.log(error);
}

}

console.log(getCount(1));






// if(products[3].isIn){
// cart.innerHTML += `<div class="chosen-item" id="itemNo${products[3].id}" name="itemNo${products[3].id}">
//         <img src="images/new4.png" alt="item no ${products[3].id}" id="itemNo${products[3].id}-pic" />
//         <div class="item-name" id="itemNo${products[3].id}-name" name="itemNo${products[3].id}-name">
//           ${products[3].name}
//         </div>
//         <div class="item-color">
//           Color -
//           <span id="itemNo${products[3].id}-chosen-color" name="itemNo${products[3].id}-chosen-color"
//             >${products[3].color}</span
//           >
//         </div>
//         <div class="item-counts">
//           x<span id="itemNo${products[3].id}-counts" name="itemNo${products[3].id}-counts">${products[3].count}</span>
//         </div>
//         <div class="item-price">$<span id="itemNo${products[3].id}-price">${products[3].price}</span></div>
//         <div class="count-control">
//           <button class="control remove remove-itemNo${products[3].id}">
//             <i class="sign fa fa-minus"></i>
//           </button>
//           <div class="counter${products[3].id}" name="itemNo${products[3].id}-counts">${products[3].count}</div>
//           <button class="control add add-itemNo${products[3].id}">
//             <i class="sign fa fa-add"></i>
//           </button>
//         </div>
//       </div>`;
// }

// //////////////////////////////////////


// //total no of orders
// const orders = document.getElementsByClassName("chosen-item");//querySelectorAll does not choose dynamically added elements
// productsCount=orders.length;
// //console.log(orders);


// //////////////////////////
// //total price element
// const total = document.getElementById("total-final-price");
// //////////////////////////

// ////////////////////////////////////
// //initiate total price 
// for(let i=0;i<productsCount;i++){
//     orderPrice[i]=itemCount[i]*itemPrice[i];
// }
// totalPrice=orderPrice.reduce(function(total, price){total+=price;
// return total;}, 0);

// ////////////////////////////////////
// //listen to click events
// let btns = document.getElementsByClassName('control');
// console.log(btns);
// for(let y =0;y<btns.length;y++){
// let btn = btns[y];
// console.log(btn);
// // (btn)=>{
// btn.addEventListener("click",function(){
// console.log('clicked');})
// }
//       /*
//         for(let i=0;i<productsCount;i++){
//             j=i+1;
//         if(e.currentTarget.classList.contains(`add-itemNo${j}`)){
//         products[i].count++;
//         }
//         if(e.currentTarget.classList.contains(`remove-itemNo${j}`)){
//         products[i].count--;
//         }
//         }
//         //update product counts 
//         // itemCount1.innerText=itemCount[0];
//         // itemCount2.innerText=itemCount[1];
//         // itemCount3.innerText=itemCount[2];
//         // counter1.innerText=itemCount[0];
//         // counter2.innerText=itemCount[1];
//         // counter3.innerText=itemCount[2];

//         //update order
//         orderPrice=[];
//         for(let i=0;i<productsCount;i++){
//           orderPrice[i]= products[i].count*products[i].price;
//         }

//         totalPrice=0;
//         totalPrice = orderPrice.reduce(function(acc, val) { return acc + val; }, 0);
//         total.innerHTML=totalPrice;

//         //hide the products having 0 counts
//         for(let i=0;i<productsCount;i++){
//         if(products[i].count<1){
//             orders[i].classList.add("hide");
//             products[i].isIn=0;
//           }
//         }
//     })
// }
// */

// ////////////////////////////////////
// //update total price
// total.innerHTML=totalPrice;
