/*
  Warnings:

  - Added the required column `content` to the `Snippets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Snippets" ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "isPublic" SET DEFAULT false;
