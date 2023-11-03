/*
  Warnings:

  - Added the required column `commodity` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receivingPoint` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sendingPoint` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Invoice` DROP FOREIGN KEY `Invoice_programNo_fkey`;

-- AlterTable
ALTER TABLE `Invoice` ADD COLUMN `commodity` VARCHAR(191) NOT NULL,
    ADD COLUMN `programDate` DATETIME(3) NULL,
    ADD COLUMN `receivingPoint` VARCHAR(191) NOT NULL,
    ADD COLUMN `sendingPoint` VARCHAR(191) NOT NULL;
