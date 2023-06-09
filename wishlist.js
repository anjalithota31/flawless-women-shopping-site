let wishlist=[];
function setup(){
console.log("window loaded");
const products =document.querySelectorAll(".but");
for(let i=0;i<products.length;i++){
    products[i].onclick=function(e){
        addItem(e);
    }
}
}
function addItem(e){
    const productId=e.target.getAttribute("id");
console.log("Product: ",productId);
const productDiv = document.getElementById("product" + productId);

const wishDiv = document.createElement("div");
wishDiv.setAttribute("id","wish"+ productId);
wishDiv.setAttribute("class","product");
wishDiv.innerHTML=productDiv.innerHTML;

const removeBtn = document.createElement("input");
removeBtn.setAttribute("type","button")
removeBtn.setAttribute("value","Remove");
removeBtn.onclick=function() {removeItem(productId)};
wishDiv.appendChild(removeBtn);
let aside= document.getElementById("wishlist");
aside.appendChild(wishDiv)


}
function removeItem(productId){
const product =document.getElementById("wish" + productId);
product.remove();
}
window.addEventListener("load",setup);