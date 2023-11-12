/*
  Warnings:

  - You are about to drop the `invoice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `invoice` DROP FOREIGN KEY `Invoice_billID_fkey`;

-- DropForeignKey
ALTER TABLE `invoice` DROP FOREIGN KEY `Invoice_firmID_fkey`;

-- DropTable
DROP TABLE `invoice`;

-- CreateTable
CREATE TABLE `Invoice` (
    `invoiceNo` INTEGER NOT NULL,
    `billID` VARCHAR(191) NULL,
    `firmID` VARCHAR(191) NOT NULL,
    `programNo` VARCHAR(191) NOT NULL,
    `programDate` DATETIME(3) NULL,
    `programQuantity` DOUBLE NULL,
    `commodity` VARCHAR(191) NOT NULL,
    `sendingPoint` VARCHAR(191) NOT NULL,
    `receivingPoint` VARCHAR(191) NOT NULL,
    `truckNo` VARCHAR(191) NULL,
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
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_billID_fkey` FOREIGN KEY (`billID`) REFERENCES `Bill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_firmID_fkey` FOREIGN KEY (`firmID`) REFERENCES `Firm`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
