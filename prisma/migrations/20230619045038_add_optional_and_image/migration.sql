-- DropForeignKey
ALTER TABLE "acara_jenis_acara" DROP CONSTRAINT "acara_jenis_acara_acaraId_fkey";

-- DropForeignKey
ALTER TABLE "acara_jenis_acara" DROP CONSTRAINT "acara_jenis_acara_jenisId_fkey";

-- DropForeignKey
ALTER TABLE "acara_suara_pengguna" DROP CONSTRAINT "acara_suara_pengguna_acaraId_fkey";

-- DropForeignKey
ALTER TABLE "suara_pengguna" DROP CONSTRAINT "suara_pengguna_pengguna_id_fkey";

-- AlterTable
ALTER TABLE "acara" ADD COLUMN     "image" TEXT,
ALTER COLUMN "nama_acara" DROP NOT NULL,
ALTER COLUMN "penanggung_jawab" DROP NOT NULL;

-- AlterTable
ALTER TABLE "acara_jenis_acara" ALTER COLUMN "acaraId" DROP NOT NULL,
ALTER COLUMN "jenisId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "acara_suara_pengguna" ALTER COLUMN "suara" DROP NOT NULL,
ALTER COLUMN "catatan" DROP NOT NULL,
ALTER COLUMN "suaraPenggunaId" DROP NOT NULL,
ALTER COLUMN "acaraId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "jenis_acara" ALTER COLUMN "jenis" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pengguna" ALTER COLUMN "posisi" DROP NOT NULL;

-- AlterTable
ALTER TABLE "suara_pengguna" ALTER COLUMN "pengguna_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "suara_pengguna" ADD CONSTRAINT "suara_pengguna_pengguna_id_fkey" FOREIGN KEY ("pengguna_id") REFERENCES "pengguna"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_suara_pengguna" ADD CONSTRAINT "acara_suara_pengguna_acaraId_fkey" FOREIGN KEY ("acaraId") REFERENCES "acara"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_jenis_acara" ADD CONSTRAINT "acara_jenis_acara_acaraId_fkey" FOREIGN KEY ("acaraId") REFERENCES "acara"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acara_jenis_acara" ADD CONSTRAINT "acara_jenis_acara_jenisId_fkey" FOREIGN KEY ("jenisId") REFERENCES "jenis_acara"("id") ON DELETE SET NULL ON UPDATE CASCADE;
