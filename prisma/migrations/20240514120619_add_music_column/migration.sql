/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Music` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Music" DROP COLUMN "createdAt",
ADD COLUMN     "artist" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "composer" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "delete_flag" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "furigana" TEXT NOT NULL DEFAULT '';
