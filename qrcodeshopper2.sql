-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: qrcodeshopper
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `postcode` varchar(255) DEFAULT NULL COMMENT 'Postcode',
  `street` varchar(255) DEFAULT NULL COMMENT 'Street',
  `area` varchar(255) DEFAULT NULL COMMENT 'Area',
  `town` varchar(255) DEFAULT NULL COMMENT 'Town',
  `country` varchar(255) DEFAULT NULL COMMENT 'Country',
  `phone` varchar(255) DEFAULT NULL COMMENT 'Contact Number',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'TW10 1BG','20 South Bridge Road','Primrose Hill','Birmingham','England','1111 222333'),(2,'HU10 3RQ','13 Rose Street','Croyden','London','England','4545 768934');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `cardnum` decimal(16,0) DEFAULT NULL COMMENT 'creditcard number',
  `expiry` varchar(20) DEFAULT NULL COMMENT 'expiry date',
  `cvc` int NOT NULL COMMENT 'cvc added',
  `brand` varchar(25) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,4242424242424242,'06/25',123,'Visa','Mr J J Smith'),(2,4000056655665566,'09/30',456,'Visa(debit)','J Smith'),(3,5555555555554444,'06/30',789,'Mastercard','John Smith');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `code` decimal(20,0) DEFAULT NULL COMMENT 'QR code',
  `description` varchar(255) DEFAULT NULL COMMENT 'Product Description',
  `price` decimal(10,2) DEFAULT NULL COMMENT 'Price per unit',
  `thumbnail` varchar(255) DEFAULT NULL COMMENT 'Path to thumnail picture',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,5018374066428,'Milk',2.00,'http://192.168.0.23:3000/images/Milk.png'),(2,5010482558406,'Eggs',3.00,'http://192.168.0.23:3000/images/Eggs.png'),(3,35592397,'Baked Beans',5.00,'http://192.168.0.23:3000/images/BakedBeans.png'),(4,5029054234976,'Toilet roll',10.00,'http://192.168.0.23:3000/images/ToiletRoll.png'),(5,5017689065072,'Oranges',4.45,'http://192.168.0.23:3000/images/Oranges.png'),(6,5054781377474,'Juice',2.55,'http://192.168.0.23:3000/images/Juice.png'),(7,27191149,'Honey',1.45,'http://192.168.0.23:3000/images/Honey.png'),(8,5017689005375,'Spices',3.50,'http://192.168.0.23:3000/images/Spices.png'),(9,5057545619483,'Bread Loaf',1.70,'http://192.168.0.23:3000/images/BreadLoaf.png');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchases` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `item` int DEFAULT NULL COMMENT 'Item ID FK',
  `quantity` decimal(10,0) DEFAULT NULL COMMENT 'How many items purchased',
  `purchased` varchar(10) DEFAULT NULL COMMENT 'When items bought',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 19:17:41
