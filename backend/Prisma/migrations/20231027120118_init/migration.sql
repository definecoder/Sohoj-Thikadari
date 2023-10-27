-- CreateTable
CREATE TABLE `Firm` (
    `id` VARCHAR(191) NOT NULL,
    `neg_no` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `proprietor` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `tradeLicense` VARCHAR(191) NULL,
    `userID` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bill` (
    `id` VARCHAR(191) NOT NULL,
    `firmID` VARCHAR(191) NOT NULL,
    `billNo` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `commodity` VARCHAR(191) NULL,
    `submittedTo` VARCHAR(191) NULL,
    `govtBillNo` VARCHAR(191) NULL,
    `govtBillDate` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Program` (
    `programNo` INTEGER NOT NULL,
    `programDate` DATETIME(3) NULL,
    `programQuantity` DOUBLE NULL,
    `commodity` VARCHAR(191) NOT NULL,
    `sendingPoint` VARCHAR(191) NOT NULL,
    `receivingPoint` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`programNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `invoiceNo` INTEGER NOT NULL,
    `billID` VARCHAR(191) NOT NULL,
    `firmID` VARCHAR(191) NOT NULL,
    `programNo` INTEGER NOT NULL,
    `truckNo` INTEGER NULL,
    `sendingDate` DATETIME(3) NOT NULL,
    `sendingNetSlack` INTEGER NOT NULL,
    `sendingNetQuantity` DOUBLE NOT NULL,
    `sendingGrossQuantity` DOUBLE NOT NULL,
    `receivingDate` DATETIME(3) NULL,
    `receivingNetSlack` INTEGER NULL,
    `receivingGrossSlack` INTEGER NULL,
    `receivingNetQuantity` DOUBLE NULL,
    `receivingGrossQuantity` DOUBLE NULL,
    `shortage` DOUBLE NULL,
    `distance` DOUBLE NULL,
    `pricePerTon` DOUBLE NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`invoiceNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Firm` ADD CONSTRAINT `Firm_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_firmID_fkey` FOREIGN KEY (`firmID`) REFERENCES `Firm`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_billID_fkey` FOREIGN KEY (`billID`) REFERENCES `Bill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_firmID_fkey` FOREIGN KEY (`firmID`) REFERENCES `Firm`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_programNo_fkey` FOREIGN KEY (`programNo`) REFERENCES `Program`(`programNo`) ON DELETE RESTRICT ON UPDATE CASCADE;
