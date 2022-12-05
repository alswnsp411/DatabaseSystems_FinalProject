# DATABASE 생성
CREATE DATABASE DBS_Project;
USE DBS_Project;

CREATE TABLE CUSTOMER
(
    id           INT         NOT NULL AUTO_INCREMENT,
    email        VARCHAR(45) NOT NULL,
    password     VARCHAR(45),
    name         VARCHAR(45) NOT NULL,
    phone_number VARCHAR(45) NOT NULL,
    payment      VARCHAR(45),
    address      VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE SHOPPING_BASKET
(
    cust_id     INT NOT NULL,
    total_price INT DEFAULT 0,
    PRIMARY KEY (cust_id),
    FOREIGN KEY (cust_id) REFERENCES CUSTOMER (id) ON DELETE CASCADE
);

CREATE TABLE CATEGORY
(
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (name)
);

CREATE TABLE PRODUCT
(
    id            INT         NOT NULL AUTO_INCREMENT,
    name          VARCHAR(45) NOT NULL,
    picture       VARCHAR(45) NOT NULL,
    price         INT         NOT NULL DEFAULT 0,
    count         INT         NOT NULL DEFAULT 0,
    information   VARCHAR(4000),
    category_name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_name) REFERENCES CATEGORY (name) ON DELETE CASCADE
);

CREATE TABLE BASKET_PRODUCT_RELATION
(
    cust_id    INT NOT NULL,
    product_id INT NOT NULL,
    my_count      INT DEFAULT 1,
    PRIMARY KEY (cust_id, product_id),
    FOREIGN KEY (cust_id) REFERENCES CUSTOMER (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES PRODUCT (id) ON DELETE CASCADE
);

CREATE TABLE ORDERS
(
    id          INT          NOT NULL AUTO_INCREMENT,
    today_date  DATETIME              DEFAULT CURRENT_TIMESTAMP,
    total_price INT          NOT NULL DEFAULT 0,
    status      VARCHAR(45)           DEFAULT '상품 준비중',
    orderer_id  INT          NOT NULL,
    phone       VARCHAR(20)  NOT NULL,
    payment     VARCHAR(45)  NOT NULL,
    address     VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (orderer_id) REFERENCES CUSTOMER (id) ON DELETE CASCADE
);

CREATE TABLE ORDER_PRODUCT_RELATION
(
    order_id   INT NOT NULL,
    product_id INT NOT NULL,
    count      INT DEFAULT 1,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES ORDERS (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES PRODUCT (id) ON DELETE CASCADE
);

CREATE TABLE CUSTOMER_ORDER_RELATION
(
    cid      INT NOT NULL,
    order_id INT NOT NULL,
    PRIMARY KEY (cid, order_id),
    FOREIGN KEY (cid) REFERENCES CUSTOMER (id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES ORDERS (id) ON DELETE CASCADE
);

# 카테고리 추가
INSERT INTO CATEGORY
VALUES ('도서_음반_DVD');
INSERT INTO CATEGORY
VALUES ('반려동물용품');
INSERT INTO CATEGORY
VALUES ('뷰티');
INSERT INTO CATEGORY
VALUES ('생활용품');
INSERT INTO CATEGORY
VALUES ('스포츠용품');
INSERT INTO CATEGORY
VALUES ('식품');
INSERT INTO CATEGORY
VALUES ('완구_취미');
INSERT INTO CATEGORY
VALUES ('의류');
INSERT INTO CATEGORY
VALUES ('주방용품');
INSERT INTO CATEGORY
VALUES ('홈인테리어');

# CUSTOMER 추가
INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address)
VALUES ('wjdgus@naver.com', '1234', '정현', '0101234', '국민은행', '제주도');
INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address)
VALUES ('tjdals@naver.com', '1234', '성민', '0105678', '신한은행', '청주');
INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address)
VALUES ('alswn@naver.com', '1234', '민주', '0108808', '신한은행', '서울');
INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address)
VALUES ('tkdtn@naver.com', '1234', '상수', '0101356', 'IBK은행', '대구');
INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address)
VALUES ('tmdgus@naver.com', '1234', '승현', '0102328', '국민은행', '경기도');
INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address)
VALUES ('tkddn@naver.com', '1234', '상우', '0104958', '하나은행', '수원');

# SHOPPING_BASKET 추가
INSERT INTO SHOPPING_BASKET(cust_id) VALUES(1);
INSERT INTO SHOPPING_BASKET(cust_id) VALUES(2);
INSERT INTO SHOPPING_BASKET(cust_id) VALUES(3);
INSERT INTO SHOPPING_BASKET(cust_id) VALUES(4);
INSERT INTO SHOPPING_BASKET(cust_id) VALUES(5);
INSERT INTO SHOPPING_BASKET(cust_id) VALUES(6);

# PRODUCT 추가
INSERT INTO PRODUCT(name, picture, price, count, information, category_name)
VALUES ('꼬깔콘', '꼬깔콘 사진', 1000, 10, '상당히 맛있는 꼬깔콘', '식품');
INSERT INTO PRODUCT(name, picture, price, count, information, category_name)
VALUES ('따뜻한 패딩', '따뜻한 패딩 사진', 100000, 30, '귀엽고 따듯한 패딩', '의류');
INSERT INTO PRODUCT(name, picture, price, count, information, category_name)
VALUES ('반려견 털 빗', '반려견 털 빗 사진', 10000, 40, '털이 잘 빗어지는 빗입니다. 아프지 않아요.', '반려동물용품');
INSERT INTO PRODUCT(name, picture, price, count, information, category_name)
VALUES ('손에 무리가 가지 않는 마우스', '마우스 사진', 3000, 10, '손에 무리가 가지 않는 마우스입니다.', '완구_취미');
INSERT INTO PRODUCT(name, picture, price, count, information, category_name)
VALUES ('의류 컨디셔너', '의류 컨디셔너 사진', 300000, 10, '옷 보관에 상당히 좋습니다', '생활용품');

