/*
  Warnings:

  - Added the required column `isPublic` to the `Snippets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Snippets" ADD COLUMN     "isPublic" BOOLEAN NOT NULL;
