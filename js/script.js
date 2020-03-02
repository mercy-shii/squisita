//business logic
function Delivery(Name,Email){
    this.Name=Name;
    this.Email=Email;
    this.Adress[];

function Delivery(Name,Email){
    this.Name=Name;
    this.Email=Email;
} 
contact.prototype.Name = function(){
    return this.Name + "" +this.Email;
}  
}
//user interface logic
$(document).ready(function(){
    $("form#new-delivery").submit(function(event){
        event.preventDefault();
        var inputtedName = $("input#new-Name").val();
        var inputtedEmail = $("input#new-Email").val();
        var new-delivery = new delivery(inputtedName,inputtedEmail);

        $("ul#contacts")append("<li><span class='contact'"> +newcontact.Name + '' + newcontact.Email "</span><li>");
        $("input#new-Name").val("");
        $("input#new-Email").val("");
    })
    $("#contacts").click(function(){
        ("#show-contact").show();
        ("#shw-contact h2")text (newcontact.Name);
        ("#.Name").text(newcontact.Name);
        ("#.Email").text(newcontact.Email);
    })

})