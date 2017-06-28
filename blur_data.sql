-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2017 at 06:54 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blur_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart_js`
--

CREATE TABLE `chart_js` (
  `id` int(11) NOT NULL,
  `labels` varchar(10) NOT NULL,
  `mlabels` varchar(100) NOT NULL,
  `data` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fileupload`
--

CREATE TABLE `fileupload` (
  `id` int(11) NOT NULL,
  `contant` text NOT NULL,
  `str_con` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sample_table`
--

CREATE TABLE `sample_table` (
  `id` int(6) UNSIGNED NOT NULL,
  `Rangees` varchar(30) NOT NULL,
  `aa` int(11) DEFAULT NULL,
  `bb` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `smarttable`
--

CREATE TABLE `smarttable` (
  `id` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `smarttable`
--

INSERT INTO `smarttable` (`id`, `firstName`, `lastName`, `username`, `email`, `age`) VALUES
(1, 'asd', 'asd', 'asd', 'asd@asd.com', 12),
(2, 'dfg', 'dfg', 'dfg', 'dfg@dfg.com', 25),
(3, 'qwe', 'qwe', 'qwe', 'qwe@qwe.com', 45),
(4, 'yui', 'yui', 'yui', 'yui@yui.com', 55),
(5, 'sdf', 'sdf', 'sdf', 'sdf', 23);

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `status` int(11) NOT NULL,
  `group` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`id`, `name`, `status`, `group`) VALUES
(21, '123132', 1, 1),
(22, 'hkjhkjhk', 1, 1),
(23, '567567', 1, 3),
(24, 'Anmol', 1, 2),
(25, 'Bilel', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart_js`
--
ALTER TABLE `chart_js`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fileupload`
--
ALTER TABLE `fileupload`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sample_table`
--
ALTER TABLE `sample_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `smarttable`
--
ALTER TABLE `smarttable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart_js`
--
ALTER TABLE `chart_js`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `fileupload`
--
ALTER TABLE `fileupload`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `sample_table`
--
ALTER TABLE `sample_table`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `smarttable`
--
ALTER TABLE `smarttable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
