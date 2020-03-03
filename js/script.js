var Squisita = function (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}
$(document).ready(function () {



  $('#BA').click(function () {
    var size = $('#sell1 option:selected').val();
    var crust = $('#sell2 option:selected').val();
    var toppings = $('#sell3 option:selected').val();

    var newpizza = new Squisita(size, crust, toppings);


    switch (newpizza.size) {
      case "small":
        price = 700
        break;
      case "medium":
        price = 1500
        break;
      case "large":
        price = 2400
        break;
    }

    switch (newpizza.crust) {
      case "stuffed":
        newprice = price + 400
        break;
      case "cripsy":
        newprice = price + 350
        break;
      case "Gluten-free":
        newprice = price + 500
    }

    $('.pizza-size').text(newpizza.size);
    $('.pizza-crust').text(newpizza.crust);
    $('.pizza-toppings').text(newpizza.toppings);
    $('.pizza-price').text(newprice);

    $('#pick-up').click(function () {
      alert('come pick your order at our location')
    })

    $("#delivery").click(function () {
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


  })

  $('#check-out').click(function () {
    alert('Thank you for shopping with us.We will deliver your order in a few')

  })










$('#CB').click(function () {
  var size = $('#sell4 option:selected').val();
  var crust = $('#sell5 option:selected').val();
  var toppings = $('#sell6 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})

$('#WP').click(function () {
  var size = $('#sell7 option:selected').val();
  var crust = $('#sell8 option:selected').val();
  var toppings = $('#sell9 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})

$('#HP').click(function () {
  var size = $('#sell10 option:selected').val();
  var crust = $('#sell11 option:selected').val();
  var toppings = $('#sell12 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})
$('#TP').click(function () {
  var size = $('#sell13 option:selected').val();
  var crust = $('#sell14 option:selected').val();
  var toppings = $('#sell15 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})

$('#DP').click(function () {
  var size = $('#sell16 option:selected').val();
  var crust = $('#sell17 option:selected').val();
  var toppings = $('#sell18 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})

$('#VP').click(function () {
  var size = $('#sell19 option:selected').val();
  var crust = $('#sell20 option:selected').val();
  var toppings = $('#sell21 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})

$('#GP').click(function () {
  var size = $('#sell22 option:selected').val();
  var crust = $('#sell23 option:selected').val();
  var toppings = $('#sell24 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);
  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')


})

$('#CP').click(function () {
  var size = $('#sell25 option:selected').val();
  var crust = $('#sell26 option:selected').val();
  var toppings = $('#sell27 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})

$('#YP').click(function () {
  var size = $('#sell19 option:selected').val();
  var crust = $('#sell20 option:selected').val();
  var toppings = $('#sell21 option:selected').val();

  var newpizza = new Squisita(size, crust, toppings);


  switch (newpizza.size) {
    case "small":
      price = 700
      break;
    case "medium":
      price = 1500
      break;
    case "large":
      price = 2400
      break;
  }

  switch (newpizza.crust) {
    case "stuffed":
      newprice = price + 400
      break;
    case "cripsy":
      newprice = price + 350
      break;
    case "Gluten-free":
      newprice = price + 500
  }

  $('.pizza-size').text(newpizza.size);
  $('.pizza-crust').text(newpizza.crust);
  $('.pizza-toppings').text(newpizza.toppings);
  $('.pizza-price').text(newprice);

  $('#pick-up').click(function () {
    alert('come pick your order at our location')
  })

  $("#delivery").click(function () {
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


})

$('#check-out').click(function () {
  alert('Thank you for shopping with us.We will deliver your order in a few')



})
  






})