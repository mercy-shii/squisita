var newdelivery;
//business logic
function Delivery(Name,Email,Adress){
    this.Name=Name;
    this.Email=Email;
    this.Adress=[];

function Delivery(Name,Email){
    this.Name=Name;
    this.Email=Email;
} 
Delivery.prototype.Name = function(){
    return this.Name + "" +this.Email+"";
}  
}

//user interface logic
$(document).ready(function(){
    $("form#new-Delivery").submit(function(event){
        event.preventDefault();
        var inputtedName = $("input#new-Name").val();
        var inputtedEmail = $("input#new-Email").val();
        newdelivery = new Delivery(inputtedName,inputtedEmail);
        
        $("ul#contacts").append("<li><span class='contact'>" +newdelivery.Name + '' + newdelivery.Email + "</span><li>");
        $("input#new-Name").val("");
        $("input#new-Email").val("");
        
    
    
    });
    $("#contacts").click(function(){
        $("#show-contact").show();
        $("#show-contact h2").text(newdelivery.Name);
        $(".Name").text(newdelivery.Name);
        $(".Email").text(newdelivery.Email);
    });

    if (document.readystate == "loading") {
      document.addEventListener("DOMcontedloaded",ready)
    }
    else {
      ready()
    }

    function ready({
      var removeOrderpizzabutttons = document.getElementsByClassName('btn-danger');
      for (var i = 0;i < removeorderitembutttons.length; i++){
        var button = removeorderitembutttons[i]
        button.addEventListener('click',removeorderitem)
      };

      var quantityinputs = document.getElementsByClassName('order,quantity-input')
      for (var i = 0; i < quqntityInputs.length; i++){
        var input = quqntityInputs[i]
        input.addEventListener('change,quantitychanged')
      }

      var addToOrderButtons = document.getElementsByClassName("order-pizza-button")
      for (var i = 0; i < addToOrderButtons.length; i++){
        var button = addToOrderButtons[i]
        button.addEventListener('click',addToOrderclicked)
      }

      document.getElementsByClassName('btn-order'[0].addEventListener('click',orderClicked)

    })
    function orderClicked() {
      alert("Thank you for your purchase")
    }
    function removeorderitem(event){
      var buttonClicked = event.target
      buttonClicked.parentElement.remove()
      updateOrderTotal()
    }

    function quantitychanged(event){
      var input = event.target
      if (isNaN(input.value) || input.value <= 0){
        input.value = 1
      }
      updateOrderTotal()
    }
    function addToOrderclicked(event){
      var button = event.target
      var orderitem = button.parentElement.parentElement
      var title = orderpizza.getElementsByClassName('order-pizza-title')[0].innerText
      var price = orderpizza.getElementsByClassName('order-pizza-price')[0].innerText
      var imagesrc = orderitem.getElementsByClassName('order-pizza-image')[0].src
      addItemToOrder(title,price,imagesrc)
      updateOrderTotal()
    } 

    function addPizzaToOrder(title,price,imagesrc) {
      var orderRow = document.createElement('div')
      orderRow.classList.add('order-row')
      var orderItems = document.getElementsByClassName('order-pizza')[0]
      for (var i = 0; i < orderpizzaNames.length;i++) {
        if(orderpizzaNames[i].innerText == title) {
          alert('This item is already added to order')
          return
        }
      var orderRowDetails = 
      <div class="order-pizza order-column">
        <img class="order-pizza-image" src="${imagesrc}">
        <span class="order-price order-column">${title}</span>
      </div>
      <span class="order-price order-column">${price}</span>
      <div class="order-quantity 0rder-column">
        <input class="order-quantity-input" type="number"value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
      orderRow.innerHTML = orderRowDetails
      orderpizza.append(orderRow)
      orderRow.getElementsByClassName('btn-danger')[0].addEventlistner('click,removeorderpizza')
      orderRow.getElementsByClassName('order-quantity-input')[0].addEventListener('change',quantitychanged)
    }

      function updateorderTotal(){
        var orderpizzacontainer = document.getElementsByClassName("order-pizza")[0]
        var orderRows = orderpizzacontainer.getElementsByClassName('order-row')
        var total = 0
        for (var i = 0; i < orderRowDetails.length;i++){
          var orderRow = orderRows = orderRows[i]
          var priceElement = orderRow.getElementsByClassName('order-price')[0]
          var quantityElement = orderRow.getElementsByClassName('order-quantity-input')[0]
          var price = parseFloat(priceElement.innerText.replace('$,'))
          var quantity = quantityElement.value
          total = total + (price * quantity)
          
        }
        total = math.round(total*100)/100
        document.getElementsByClassName('order-total-price')[0.innerText = '$'+ total]
      }
    

  



});