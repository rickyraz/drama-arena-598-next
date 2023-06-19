/*
  Warnings:

  - A unique constraint covering the columns `[acaraId,jenisId]` on the table `acara_jenis_acara` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "jenis_acara_jenis_key";

-- CreateIndex
CREATE UNIQUE INDEX "acara_jenis_acara_acaraId_jenisId_key" ON "acara_jenis_acara"("acaraId", "jenisId");
