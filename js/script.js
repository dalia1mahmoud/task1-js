

var allProducts = document.querySelectorAll(".list1  li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0


allProducts.forEach( function (item){
  item.onclick = function (){

      totalPrice +=   +(item.getAttribute("price"))
      content.innerHTML  +=  item.textContent + " "

      if ( content.innerHTML != ""){
         btn2.style.display = "block"
         btn2.style.color = "white"
         btn2.style.backgroundColor = "gray"
         btn2.style.width = "200px"
         btn2.style.height = "60px"
   
      }
  }
})

btn2.onclick = function (){
 console.log(totalPrice)
 document.getElementById("total").innerHTML = totalPrice
}
