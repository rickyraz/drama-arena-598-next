/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('WALI_SANTRI', 'MASYARAKAT_SEKITAR', 'USTADZ', 'USTADZAH');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "pengguna" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "no_hp" TEXT,
    "posisi" "Role" NOT NULL DEFAULT 'MASYARAKAT_SEKITAR',

    CONSTRAINT "pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suara_pengguna" (
    "id" TEXT NOT NULL,
    "pengguna_id" TEXT NOT NULL,

    CONSTRAINT "suara_pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acara_suara_pengguna" (
    "id" TEXT NOT NULL,
    "suara" INTEGER NOT NULL,
    "catatan" TEXT NOT NULL,
    "suaraPenggunaId" TEXT NOT NULL,
    "acaraId" TEXT NOT NULL,

    CONSTRAINT "acara_suara_pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "konser" (
    "id" TEXT NOT NULL,
    "total_suara" INTEGER NOT NULL,
    "rata_rata_suara" DOUBLE PRECISION NOT NULL,
    "acara_terfavorit" TEXT NOT NULL,

    CONSTRAINT "konser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acara" (
    "id" TEXT NOT NULL,
    "nama_acara" TEXT NOT NULL,
    "penanggung_jawab" TEXT NOT NULL,
    "pemeran" TEXT[],
    "konserId" TEXT NOT NULL,

    CONSTRAINT "acara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acara_jenis_acara" (
    "id" TEXT NOT NULL,
    "acaraId" TEXT NOT NULL,
    "jenisId" TEXT NOT NULL,

    CONSTRAINT "acara_jenis_acara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jenis_acara" (
    "id" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,

    CONSTRAINT "jenis_acara_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_email_key" ON "pengguna"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_no_hp_key" ON "pengguna"("no_hp");

-- CreateIndex
CREATE UNIQUE INDEX "acara_jenis_acara_jenisId_key" ON "acara_jenis_acara"("jenisId");

-- CreateIndex
CREATE UNIQUE INDEX "jenis_acara_jenis_key" ON "jenis_acara"("jenis");

-- AddForeignKey
ALTER TABLE "suara_pengguna" ADD CONSTRAINT "suara_pengguna_pengguna_id_fkey" FOREIGN KEY ("pengguna_id") REFERENCES "pengguna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_suara_pengguna" ADD CONSTRAINT "acara_suara_pengguna_suaraPenggunaId_fkey" FOREIGN KEY ("suaraPenggunaId") REFERENCES "suara_pengguna"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_suara_pengguna" ADD CONSTRAINT "acara_suara_pengguna_acaraId_fkey" FOREIGN KEY ("acaraId") REFERENCES "acara"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara" ADD CONSTRAINT "acara_konserId_fkey" FOREIGN KEY ("konserId") REFERENCES "konser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_jenis_acara" ADD CONSTRAINT "acara_jenis_acara_acaraId_fkey" FOREIGN KEY ("acaraId") REFERENCES "acara"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_jenis_acara" ADD CONSTRAINT "acara_jenis_acara_jenisId_fkey" FOREIGN KEY ("jenisId") REFERENCES "jenis_acara"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
