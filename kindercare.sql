-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2025 at 12:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kindercare`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `AppointmentID` int(10) NOT NULL,
  `ChildID` int(10) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `AppointmentType` varchar(255) NOT NULL,
  `AppointmentDate` datetime(6) NOT NULL,
  `DoctorName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `child`
--

CREATE TABLE `child` (
  `ChildID` int(10) NOT NULL,
  `UserID` int(10) NOT NULL,
  `ChildName` varchar(255) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Gender` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `growth`
--

CREATE TABLE `growth` (
  `GrowthID` int(10) NOT NULL,
  `ChildID` int(10) NOT NULL,
  `Date` date NOT NULL,
  `Height` decimal(10,0) NOT NULL,
  `Weight` decimal(10,0) NOT NULL,
  `HeadCircumference` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `milestone`
--

CREATE TABLE `milestone` (
  `MilestoneID` int(10) NOT NULL,
  `ChildID` int(10) NOT NULL,
  `Date` date NOT NULL,
  `MilestoneType` varchar(255) NOT NULL,
  `Remark` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `Email`, `Password`, `PhoneNumber`, `DateCreated`) VALUES
(1, '2021859814', '2021859814@student.uitm.edu.my', '$2y$10$DnfaIhEL9jUPYIGoWE5S8eZ6AdH278a0dw9ElU0OL5BWahZzxFIJC', '0123456789', '2025-01-18 10:47:05');

-- --------------------------------------------------------

--
-- Table structure for table `vaccine`
--

CREATE TABLE `vaccine` (
  `VaccineID` int(10) NOT NULL,
  `ChildID` int(10) NOT NULL,
  `Date` date NOT NULL,
  `VaccineType` varchar(255) NOT NULL,
  `Remark` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`AppointmentID`);

--
-- Indexes for table `child`
--
ALTER TABLE `child`
  ADD PRIMARY KEY (`ChildID`);

--
-- Indexes for table `growth`
--
ALTER TABLE `growth`
  ADD PRIMARY KEY (`GrowthID`);

--
-- Indexes for table `milestone`
--
ALTER TABLE `milestone`
  ADD PRIMARY KEY (`MilestoneID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `UserName` (`UserName`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `vaccine`
--
ALTER TABLE `vaccine`
  ADD PRIMARY KEY (`VaccineID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
