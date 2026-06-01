CREATE TABLE if not exists users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name varchar(255),
    email varchar(255),
    passwords VARCHAR(255),
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE if not exists food_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    types_name VARCHAR(255),
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE if not exists foods (
    id INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(255),
    imageUrl varchar(255),
    price FLOAT,
    descriptions varchar(255) DEFAULT "Still no information",
    deletedBy INT NOT NULL DEFAULT 0,
    types_id INT,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (types_id) REFERENCES food_types(id)
);

CREATE TABLE if not exists restaurants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    res_name VARCHAR(255),
    imageUrl VARCHAR(255),
    descriptions VARCHAR(255) DEFAULT "still no information",
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE if not exists orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userID INT,
    foodID INT,
    amount INT,
    codes VARCHAR(255),
    arr_sub_id VARCHAR(255),
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (foodID) REFERENCES foods(id)
);

CREATE TABLE if not exists food_subs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sub_name VARCHAR(255),
    sub_price FLOAT,
    foodID INT,
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (foodID) REFERENCES foods(id)
);

CREATE TABLE if not exists like_res (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userID INT,
    resID INT,
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (resID) REFERENCES restaurants(id)
);

CREATE TABLE if not exists rate_res (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userID INT,
    resID INT,
    amount INT,
    date_rate DATETIME,
    deletedBy INT NOT NULL DEFAULT 0,
    isDeleted TINYINT(1) NOT NULL DEFAULT 0,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT Current_timestamp,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (resID) REFERENCES restaurants(id)
);


INSERT into users (full_name,email,passwords) VALUES
('Nguyen Van Bay','cr7@gmail.com','kocowworldcup'),
('Ly Thap Phong','m10@gmail.com','goat'),
('Phung Thanh Do','dochet1989@gmail.com','Anhtaodo'),
('Tran Manh Quang','npc@gmail.com','quang2019'),
('Jeffrey Epstein','jeffreyepstein@gmail.com','jeffrey123'),
('Elon Musk','elonmusk@gmail.com','spacex2024'),
('Bill Gates','billgates@gmail.com','microsoft2024'),
('Donald Trump','donaldtrump@gmail.com','trump2024'),
('Barack Obama','barackobama@gmail.com','obama2024'),
('Stephen Hawking','stephenhawking@gmail.com','physics2024');

INSERT into food_types (types_name) VALUES
('Fast Food'),
('Vegan'),
('Desserts'),
('Beverages'),
('Seafood'),
('Grilled'),
('Salads'),
('Soups'),
('Pasta'),
('Sushi');

INSERT into foods (food_name, types_id) VALUES
('Burger', 1),
('Salad', 7),
('Sushi Roll', 10),
('Pasta Carbonara', 8),
('Tacos', 4),
('Sushi Bowl', 10),
('Vegan Burger', 2),
('Miso Soup', 9),
('Chocolate Cake', 3),
('Green Tea Latte', 5);

INSERT into restaurants (res_name) VALUES
('Pizza Palace'),
('Sushi World'),
('Burger Barn'),
('Pasta House'),
('Vegan Delight'),
('Seafood Shack'),
('Grill Master'),
('Salad Stop'),
('Soup Station'),
('Dessert Haven');

INSERT into food_subs (sub_name, sub_price, foodID) VALUES
('Extra Cheese', 1.50, 1),
('Avocado', 2.00, 2),
('Spicy Mayo', 0.75, 3),
('Garlic Bread', 3.00, 4),
('Sour Cream', 0.50, 5),
('Extra Wasabi', 0.80, 6),
('Vegan Cheese', 2.50, 7),
('Tofu', 1.20, 8),
('Whipped Cream', 1.00, 9),
('Boba Pearls', 1.50, 10);

INSERT into orders (userID, foodID, amount, codes, arr_sub_id) VALUES
(1, 1, 2, 'ORD123', '1,3'),
(2, 3, 1, 'ORD124', '2'),
(3, 5, 4, 'ORD125', '5,6'),
(4, 2, 1, 'ORD126', ''),
(5, 4, 3, 'ORD127', '4'),
(6, 6, 2, 'ORD128', '7'),
(7, 8, 1, 'ORD129', '8'),
(8, 9, 5, 'ORD130', '9'),
(9, 10, 2, 'ORD131', '10'),
(10, 1, 1, 'ORD132', '');

INSERT into like_res (userID, resID) VALUES
(1, 8),
(1, 5),
(1, 6),
(1, 9),
(2, 3),
(2, 8),
(2, 2),
(3, 6),
(4, 5),
(5, 4),
(6, 7),
(7, 6),
(8, 9),
(9, 5),
(10, 5),
(1, 1),
(2, 5),
(3, 2),
(4, 9),
(5, 7),
(6, 3),
(7, 8),
(8, 4),
(9, 1),
(10, 6),
(1, 10),
(2, 7),
(3, 9),
(4, 1),
(5, 2),
(6, 5),
(7, 3),
(8, 7),
(9, 10),
(10, 8),
(1, 4),
(2, 1),
(3, 8),
(4, 6),
(5, 9),
(6, 2),
(7, 5),
(8, 1),
(9, 3),
(10, 9),
(1, 7),
(2, 4),
(3, 5),
(4, 2),
(5, 8);

INSERT into rate_res (userID, resID, amount, date_rate) VALUES
(1, 2, 5, '2024-01-15 12:30:00'),
(2, 3, 4, '2024-01-16 13:45:00'),
(3, 1, 3, '2024-01-17 14:20:00'),
(4, 5, 5, '2024-01-18 15:10:00'),
(5, 4, 2, '2024-01-19 16:00:00'),
(6, 7, 4, '2024-01-20 17:25:00'),
(7, 6, 5, '2024-01-21 18:30:00'),
(8, 9, 3, '2024-01-22 19:15:00'),
(9, 8, 4, '2024-01-23 20:05:00'),
(10, 10, 5, '2024-01-24 21:40:00');


--5 nguoi like nhieu cuu hang nhieu nhat
SELECT 
    users.id, 
    users.full_name, 
    users.email, 
    COUNT(like_res.resID) AS total_likes
FROM users
JOIN like_res ON users.id = like_res.userID
GROUP BY users.id
ORDER BY total_likes DESC
LIMIT 5;

--tim kiem 2 cua hang duoc like nhieu nhat
SELECT 
    restaurants.res_name, 
    COUNT(like_res.resID) AS total_likes
FROM restaurants
JOIN like_res ON restaurants.id = like_res.resID
GROUP BY restaurants.id
ORDER BY total_likes DESC
LIMIT 2;


--tim nguoi dat hang nhieu nhat
SELECT 
    users.id, 
    users.full_name, 
    users.email, 
    COUNT(orders.id) AS total_orders
FROM users
JOIN orders ON users.id = orders.userID
GROUP BY users.id
ORDER BY total_orders DESC
LIMIT 1;
--tim kiem nguoi khong hoat dong
SELECT 
    users.id, 
    users.full_name, 
    users.email
FROM users
LEFT JOIN orders ON users.id = orders.userID
LEFT JOIN like_res ON users.id = like_res.userID
LEFT JOIN rate_res ON users.id = rate_res.userID
WHERE orders.userID IS NULL 
  AND like_res.userID IS NULL 
  AND rate_res.userID IS NULL;

