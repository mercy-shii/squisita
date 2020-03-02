var newdelivery;
//business logic
function Delivery(Name,Email,Adress){
    this.Name=Name;
    this.Email=Email;
    this.Adress[];

function Delivery(Name,Email){
    this.Name=Name;
    this.Email=Email;
} 
Delivery.prototype.Name = function(){
    return this.Name + "" +this.Email+"";
}  
var price,crust_price,topping_price;
let total = 0;
function order(name,size,Top,crust,Total){
  this.name = name;
  this.size = size;
  this.Top = Top;
  this.crust = crust;

  order.prototype.name = function(){
    return this.name + "" + this.size + this.Top + this.crust;
  }
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

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-county">County</label>' +
                                   '<input type="text" class="form-control new-county">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-delivery").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-Name").val();
    var inputtedemail = $("input#new-Email").val();
    var newdelivery = new delivery(inputtedName, inputtedEmail);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedCounty = $(this).find("input.new-county").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
      newproperty.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newdelivery.Name() + "</span></li>");

    $(".addres").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newdelivery.Name());
      $(".Name").text(newContact.firstName);
      $(".Email").text(newContact.lastName);
      $("ul#addresses").text("");
      newdelivery.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
      });
    });

    $("input#new-Name").val("");
    $("input#new-Email").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");

  });



});