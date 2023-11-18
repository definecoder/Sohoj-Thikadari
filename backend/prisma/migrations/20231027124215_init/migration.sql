/*
  Warnings:

  - You are about to drop the column `neg_no` on the `Firm` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Firm` DROP COLUMN `neg_no`,
    ADD COLUMN `regNo` VARCHAR(191) NULL;
