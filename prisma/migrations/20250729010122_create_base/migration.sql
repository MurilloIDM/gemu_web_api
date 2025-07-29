-- CreateEnum
CREATE TYPE "moviment_type" AS ENUM ('INPUT', 'OUTPUT');

-- CreateTable
CREATE TABLE "bank" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "code" VARCHAR(10) NOT NULL,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moviment" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "period" VARCHAR(25),
    "pay_date" DATE NOT NULL,
    "value" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "type" "moviment_type" NOT NULL,
    "bankId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "moviment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_email_key" ON "account"("email");

-- AddForeignKey
ALTER TABLE "moviment" ADD CONSTRAINT "moviment_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moviment" ADD CONSTRAINT "moviment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
