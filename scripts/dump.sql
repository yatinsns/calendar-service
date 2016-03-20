CREATE DATABASE IF NOT EXISTS CALENDAR;
USE CALENDAR;

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `id` INTEGER  NOT NULL AUTO_INCREMENT,
  `appId` char(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(512) NOT NULL,
  `intervalStart` DATETIME(0) NOT NULL,
  `intervalEnd` DATETIME(0) NOT NULL,
  INDEX `appIdIndex` (`appId`),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `triggers`;
CREATE TABLE `triggers` (
  `id` INTEGER  NOT NULL AUTO_INCREMENT,
  `eventId` INTEGER NOT NULL,
  `appId` char(36) NOT NULL,
  `triggerTime` DATETIME(0) NOT NULL,
  INDEX `triggerTimeIndex` (`triggerTime`),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
