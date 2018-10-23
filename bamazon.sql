DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(65) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(30,2) NOT NULL,
    stock_quantity INT(30) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Inspiron 15.6 HD Laptop", "Electronics", 309.99, 37),
("ASUS C302CA-DHM4 Chromebook Flip", "Electronics", 47.99, 22),
("Snyder's of Hanover Pretzel Pieces", "Grocery", 11.99, 62),
("Orville Redenbacher's Butter Popcorn", "Grocery", 10.99, 37),
("Rancid - Rancid", "Music", 12.99, 62),
("Transplants -Transplants", "Music", 11.99, 6),
("Detroit: An American Autopsy", "Books", 19.99, 13),
("The Tipping Point", "Books", 12.99, 34),
("Hanes Men's White TAGLESS", "Clothing", 11.99, 78),
("Gold Toe Men's Socks", "Clothing", 10.99, 202);

SELECT * FROM products;