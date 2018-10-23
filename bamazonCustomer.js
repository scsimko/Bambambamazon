//Dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");

// Data base
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"

});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();
  });
    // Show inventory
    function displayProducts() {
        connection.query("SELECT * FROM products", function(err, res) {
          for(var i = 0; i<res.length;i++){
          console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
          } 
         // inquireForPurchase();
      
        });
    }