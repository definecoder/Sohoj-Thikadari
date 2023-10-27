-- DropForeignKey
ALTER TABLE `Invoice` DROP FOREIGN KEY `Invoice_billID_fkey`;

-- AlterTable
ALTER TABLE `Invoice` MODIFY `billID` VARCHAR(191) NULL,
    MODIFY `truckNo` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_billID_fkey` FOREIGN KEY (`billID`) REFERENCES `Bill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
