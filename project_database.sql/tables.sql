--1.User Table
create table user_registration(
    user_id int primary key, -- not null
    user_fname varchar(100),  --not null
    user_lname varchar(100),
    user_email varchar(100),  --not null and unique
    user_password varchar(100), --not null
    user_phone varchar(20),
    user_city varchar(50),   --not null
    user_state varchar(50),  --not null
    user_zip varchar(12),    --not null
    user_country varchar(20),  --not null
    user_addressline1 varchar(100),  --not null
    user_addressline2 varchar(100),    
);

--2.Login table
create table user_login(
    user_id int,
    user_email varchar(30),
    user_password varchar(20),
    user_role varchar(10),
    foreign key(user_id) references user_details(user_id)
);


--3.Product table
create table product_table(
    product_id int primary key, --not null 
    product_category varchar(20),  --not null
    product_name varchar(50), --not null
    product_desc varchar(200), --not null
    product_price float, --not null
    product_image varchar(100), --not null
    product_stock int , --not null
    product_updated Date --not null
);

--4.Order table for user cart
create table orders(
    order_id int primary key,
    user_id int,
    order_date datetime default CURRENT_TIMESTAMP,
    foreign key(user_id) references user_details(user_id),
);

-- 5. Order Details Table 
create table order_details(
    op_id int primary key auto_increment,
    order_id int,
    product_id int,
    quantity int,
    foreign key(dorder_id) references orders_table(order_id),
    foreign key(product_id) references product_table(product_id)
);
