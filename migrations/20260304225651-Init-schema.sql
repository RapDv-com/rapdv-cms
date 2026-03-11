-- UP
CREATE TABLE IF NOT EXISTS `logs` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `title` TEXT, `type` VARCHAR(255), `description` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `files` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `key` VARCHAR(255) UNIQUE, `isPublic` TINYINT(1) DEFAULT 0, `data` LONGBLOB, `s3Key` VARCHAR(255), `name` VARCHAR(255), `storageType` VARCHAR(255), `encoding` VARCHAR(255), `mimetype` VARCHAR(255), `size` BIGINT, `md5` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `image_files` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `key` VARCHAR(255) UNIQUE, `nameDisplayed` VARCHAR(255), `fileId` CHAR(36), `isPublic` TINYINT(1) DEFAULT 0, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`fileId`) REFERENCES `files` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS `systems` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `isSetupFinished` TINYINT(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `users` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `email` VARCHAR(255) UNIQUE, `emailVerified` TINYINT(1) DEFAULT 0, `emailVerificationCode` VARCHAR(255), `verificationCodeEmailSentDate` DATETIME, `password` VARCHAR(255), `failedLoginAttempts` INTEGER DEFAULT 0, `lastFailedLoginAttempt` DATETIME, `loginProviders` JSON DEFAULT ('[]'), `firstName` VARCHAR(255), `lastName` VARCHAR(255), `photoId` CHAR(36), `status` VARCHAR(255) DEFAULT 'Live', `notes` TEXT, `role` VARCHAR(255) DEFAULT 'User', `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`photoId`) REFERENCES `image_files` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS `user_sessions` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `userId` CHAR(36), `sessionId` VARCHAR(255) UNIQUE, `ip` VARCHAR(255), `userAgent` VARCHAR(255), `expiresDate` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS `posts` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `key` VARCHAR(255) UNIQUE, `title` TEXT, `description` TEXT, `content` TEXT, `publishedDate` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `comments` (`id` CHAR(36) NOT NULL DEFAULT (UUID()), `content` TEXT, `postId` CHAR(36), `authorId` CHAR(36), `publishedDate` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`), FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);

-- DOWN
DROP TABLE IF EXISTS `comments`;
DROP TABLE IF EXISTS `posts`;
DROP TABLE IF EXISTS `user_sessions`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `systems`;
DROP TABLE IF EXISTS `image_files`;
DROP TABLE IF EXISTS `files`;
DROP TABLE IF EXISTS `logs`;
