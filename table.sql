create table product_table(
    product_id int primary key,
    product_name varchar(50),
    product_desc varchar(200),
    product_price float,
    product_image varchar(100),
    product_stock int ,
    product_update Date
);

insert into product_table values(101,'prod1','desc1',1200,'image link1',10,now());
update product_table set product_stock=product_stock-1 where product_id=101;
insert into product_table values(103,'prod3','desc3',1200,'image link3',30,sysdate());
alter table product_table MODIFY product_update DATETIME;
alter table product_table add CHECK(product_stock>-1);
select * from product_table where product_category='tool';
insert into product_table(product_id,product_name,product_desc,product_price,product_image,product_stock,product_category) values(104,'prod4','desc4',200,'image link4',40,'plant');



 desc product_table;
+------------------+--------------+------+-----+-------------------+-------------------+
| Field            | Type         | Null | Key | Default           | Extra             |
+------------------+--------------+------+-----+-------------------+-------------------+
| product_id       | int(11)      | NO   | PRI | NULL              |                   |
| product_name     | varchar(50)  | YES  |     | NULL              |                   |
| product_desc     | varchar(200) | YES  |     | NULL              |                   |
| product_price    | float        | YES  |     | NULL              |                   |
| product_image    | varchar(100) | YES  |     | NULL              |                   |
| product_stock    | int(11)      | YES  |     | NULL              |                   |
| product_update   | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| product_category | varchar(20)  | YES  |     | NULL              |                   |
+------------------+--------------+------+-----+-------------------+-------------------+




select * from product_table;
+------------+--------------+--------------+---------------+---------------+---------------+---------------------+------------------+
| product_id | product_name | product_desc | product_price | product_image | product_stock | product_update      | product_category |
+------------+--------------+--------------+---------------+---------------+---------------+---------------------+------------------+
|        101 | prod1        | desc1        |          1200 | image link1   |             0 | 2019-12-08 00:00:00 | tool             |
|        102 | prod2        | desc2        |          1200 | image link2   |            20 | 2019-12-08 00:00:00 | plant            |
|        103 | prod3        | desc3        |          1200 | image link3   |            30 | 2019-12-08 18:03:20 | pestandfert      |
|        104 | prod4        | desc4        |           200 | image link4   |            40 | 2019-12-08 19:32:10 | plant            |
+------------+--------------+--------------+---------------+---------------+---------------+---------------------+------------------+


create table user_details(
    user_id int primary key,
    user_fname varchar(100),
    user_lname varchar(100),
    user_email varchar(100),
    user_password varchar(100),
    user_phone varchar(20),
    user_registration_date datetime default CURRENT_TIMESTAMP
);


 desc user_details;
+------------------------+--------------+------+-----+-------------------+-------------------+
| Field                  | Type         | Null | Key | Default           | Extra             |
+------------------------+--------------+------+-----+-------------------+-------------------+
| user_id                | int(11)      | NO   | PRI | NULL              |                   |
| user_fname             | varchar(100) | YES  |     | NULL              |                   |
| user_lname             | varchar(100) | YES  |     | NULL              |                   |
| user_email             | varchar(100) | YES  |     | NULL              |                   |
| user_password          | varchar(100) | YES  |     | NULL              |                   |
| user_phone             | varchar(20)  | YES  |     | NULL              |                   |
| user_registration_date | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| role                   | varchar(20)  | YES  |     | NULL              |                   |
+------------------------+--------------+------+-----+-------------------+-------------------+

select * from user_details;
+---------+------------+------------+--------------+---------------+------------+------------------------+-----------+
| user_id | user_fname | user_lname | user_email   | user_password | user_phone | user_registration_date | role      |
+---------+------------+------------+--------------+---------------+------------+------------------------+-----------+
|     101 | fname1     | fname2     | email1@t.com | password1     | 123        | 2019-12-08 19:51:23    | admin     |
|     102 | fname2     | fname2     | email2@t.com | password2     | 456        | 2019-12-08 19:51:52    | orderteam |
|     103 | fname3     | lname3     | email3@t.com | password3     | 789        | 2019-12-08 22:34:38    | admin     |
+---------+------------+------------+--------------+---------------+------------+------------------------+-----------+
alter table user_details add column role varchar(20);

insert into user_details(user_id,user_fname,user_lname,user_email,user_password,user_phone,role) values(103,'fname3','lname3','email3@t.com','password3','789','admin');

create table user_address(
    address_id int primary key auto_increment,
    user_id int,
    user_city varchar(50),
    user_state varchar(50),
    user_zip varchar(12),
    user_country varchar(20),
    user_addressline1 varchar(100),
    user_addressline2 varchar(100),
    foreign key(user_id) references user_details(user_id)
);
desc user_address;
+-------------------+--------------+------+-----+---------+----------------+
| Field             | Type         | Null | Key | Default | Extra          |
+-------------------+--------------+------+-----+---------+----------------+
| address_id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| user_id           | int(11)      | YES  | MUL | NULL    |                |
| user_city         | varchar(50)  | YES  |     | NULL    |                |
| user_state        | varchar(50)  | YES  |     | NULL    |                |
| user_zip          | varchar(12)  | YES  |     | NULL    |                |
| user_country      | varchar(20)  | YES  |     | NULL    |                |
| user_addressline1 | varchar(100) | YES  |     | NULL    |                |
| user_addressline2 | varchar(100) | YES  |     | NULL    |                |
| address_type      | varchar(20)  | YES  |     | billing |                |
+-------------------+--------------+------+-----+---------+----------------+

select * from user_address;
select * from user_address;
+------------+---------+-----------+------------+----------+--------------+-------------------+-------------------+--------------+
| address_id | user_id | user_city | user_state | user_zip | user_country | user_addressline1 | user_addressline2 | address_type |
+------------+---------+-----------+------------+----------+--------------+-------------------+-------------------+--------------+
|          1 |     101 | city1     | state1     | 123      | country1     | addressline 1     | addressline 2     | billing      |
|          2 |     102 | city2     | state2     | 456      | country2     | addressline 2     | addressline 2     | billing      |
|          3 |     101 | city1     | state3     | 789      | country1     | addressline 3     | addressline 3     | shipping     |
+------------+---------+-----------+------------+----------+--------------+-------------------+-------------------+--------------+
insert into user_address values(1,101,'city1','state1','123','country1','addressline 1','addressline 2');
alter table user_address add column address_type varchar(20);

insert into user_address values(1,101,'city1','state1','123','country1','addressline 1','addressline 2','shipping');
alter table user_address modify address_type varchar(20) default 'billing';


//kindly verify below tables 

create table orders_table(
    order_id int primary key,
    user_id int,
    order_date datetime default CURRENT_TIMESTAMP,
    foreign key(user_id) references user_details(user_id)
);
desc orders_table;
+------------+----------+------+-----+-------------------+-------------------+
| Field      | Type     | Null | Key | Default           | Extra             |
+------------+----------+------+-----+-------------------+-------------------+
| order_id   | int(11)  | NO   | PRI | NULL              |                   |
| user_id    | int(11)  | YES  | MUL | NULL              |                   |
| order_date | datetime | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------+----------+------+-----+-------------------+-------------------+

insert into orders_table(order_id,user_id) values(1,101);

select * from orders_table;
+----------+---------+---------------------+
| order_id | user_id | order_date          |
+----------+---------+---------------------+
|        1 |     101 | 2019-12-08 20:38:57 |
|        2 |     102 | 2019-12-08 20:39:21 |
+----------+---------+---------------------+


create table order_product_table(
    op_id int primary key auto_increment,
    order_id int,
    product_id int,
    quantity int,
    foreign key(order_id) references orders_table(order_id),
    foreign key(product_id) references product_table(product_id)
);

desc order_product_table;
+-------------------+---------+------+-----+---------+-------+
| Field             | Type    | Null | Key | Default | Extra |
+-------------------+---------+------+-----+---------+-------+
| op_id             | int(11) | NO   | PRI | NULL    |       |
| order_id          | int(11) | YES  | MUL | NULL    |       |
| product_id        | int(11) | YES  | MUL | NULL    |       |
| quantity          | int(11) | YES  |     | NULL    |       |
| single_prod_price | int(11) | YES  |     | NULL    |       |
+-------------------+---------+------+-----+---------+-------+




