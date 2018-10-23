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
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts();
});
// Show inventory
function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
        }
        inquireForPurchase();

    });
}
//Prompt Customer
function inquireForPurchase() {
    inquirer.prompt([

        {
            name: "ID",
            type: "input",
            message: "What is the ID of the product you wish to purchase?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "How many would you like to purchase?"
        },

    ]).then(function (answers) {
        //Set input as var
        var quantityOrdered = answers.Quantity;
        var IDOdrered = answers.ID;
        purchaseFromDatabase(IDOdrered, quantityOrdered);
    });
};

function purchaseFromDatabase(ID, quantityOrdered) {
    //check quantity  
    connection.query('SELECT * FROM products WHERE item_id = ' + ID, function (error, response) {
        if (error) {
            console.log(error)
        };

        //if in stock
        if (quantityOrdered <= response[0].stock_quantity) {
            //cost
            var totalCost = response[0].price * quantityOrdered;
            //user output
            console.log("Your order will ship");
            console.log("Your total cost for " + quantityOrdered + " " + response[0].product_name + " is " + totalCost);
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantityOrdered + ' WHERE item_id = ' + ID);
        } else {
            console.log("Insufficient quantity!");
        };
        displayProducts();
    });


};