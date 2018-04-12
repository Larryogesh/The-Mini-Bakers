function Order(first, last, email, phonenumber, type, flavour, quantity, destination) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phoneNumber = phonenumber;
  this.type = type;
  this.flavour = flavour;
  this.quanity = quantity;
  this.destination = destination;
}
Order.prototype.fullOrder = function() {
  return 'first name: ' + this.firstName + ", " + 'last name : ' + this.lastName + ", " + this.email + ", " + this.phoneNumber + ", " + this.type + ", " + this.flavour + ", " + this.quantity;
}
$(document).ready(function() {
  var myArr = [];
  var contact = {};
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#order").empty();
    var inputtedFirstName = $("input.new-first-name").val();
    var inputtedLastName = $("input.new-last-name").val();
    var inputtedeMail = $("input.new-email").val();
    var inputtedPhoneNumber = $("input.new-phone-number").val();
    var inputtedType = $("input.new-type").val();
    var inputtedFlavour = $("input.new-flavour").val();
    var inputtedQuantity = $("input.new-quantity").val();
    var inputtedDestination = $("input.new-destination").val();
    contact = new Order(inputtedFirstName, inputtedLastName, inputtedeMail, inputtedPhoneNumber, inputtedType, inputtedFlavour, inputtedQuantity, inputtedDestination)
    myArr.push(contact);
    for(i = 0; i < myArr.length; i++) {
      $("#order").append("<ul>" + "<li>" + "First Name : " + myArr[i].firstName + "<li>" + "Last Name : " + myArr[i].lastName + "<li>" + "E-mail : " + myArr[i].email + "<li>" + "Phone Number : " + myArr[i].phoneNumber +
        "<li>" + "Type : " + myArr[i].type + "<li>" + "Flavour : " + myArr[i].flavour + "<li>" + "Destination : " + myArr[i].destination);
    }
  });
  $(".order").last().click(function() {

    $("#show-order").show();
    $(".first-name").text(newOrder.firstName);
    $(".last-name").text(newOrder.lastName);
    $(".email").text(newOrder.eMail);
    $(".phone-number").parseInt(newOrder.phoneNumber);
    $(".type").text(newOrder.type);
    "<li>" + "First Name : " + myArr[i].firstName + $(".flavour").text(newOrder.flavour);
    $(".quantity").text(newOrder.quantity);
    $(".destination").text(newOrder.destination);
    newOrder.forEach(function(order) {
      $("ul#order").append("<li>" + address.fullOrder() + "</li>");
    });
  });
});