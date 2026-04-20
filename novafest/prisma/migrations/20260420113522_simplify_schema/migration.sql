/*
  Warnings:

  - You are about to drop the `Concert` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `year` to the `Year` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Concert" DROP CONSTRAINT "Concert_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Concert" DROP CONSTRAINT "Concert_dayId_fkey";

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "dayId" INTEGER,
ADD COLUMN     "time" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Year" ADD COLUMN     "year" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Concert";

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE SET NULL ON UPDATE CASCADE;
