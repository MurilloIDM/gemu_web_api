/*
  Warnings:

  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `moviment` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MovimentType" AS ENUM ('INPUT', 'OUTPUT');

-- DropForeignKey
ALTER TABLE "moviment" DROP CONSTRAINT "moviment_accountId_fkey";

-- DropForeignKey
ALTER TABLE "moviment" DROP CONSTRAINT "moviment_bankId_fkey";

-- DropTable
DROP TABLE "account";

-- DropTable
DROP TABLE "bank";

-- DropTable
DROP TABLE "moviment";

-- DropEnum
DROP TYPE "moviment_type";

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(70) NOT NULL,
    "code" VARCHAR(10) NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moviment" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "period" VARCHAR(25),
    "pay_date" DATE NOT NULL,
    "value" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "type" "MovimentType" NOT NULL,
    "bankId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Moviment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- AddForeignKey
ALTER TABLE "Moviment" ADD CONSTRAINT "Moviment_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moviment" ADD CONSTRAINT "Moviment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
