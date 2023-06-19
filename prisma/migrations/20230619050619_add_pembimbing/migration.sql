/*
  Warnings:

  - You are about to drop the column `image` on the `acara` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "acara" DROP COLUMN "image",
ADD COLUMN     "images" TEXT,
ADD COLUMN     "pembimbing" TEXT;
