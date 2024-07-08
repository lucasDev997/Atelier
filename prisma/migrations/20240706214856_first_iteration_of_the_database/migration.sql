-- CreateTable
CREATE TABLE "administrators" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL DEFAULT 'Rose',
    "password" TEXT NOT NULL DEFAULT '07233010',

    CONSTRAINT "administrators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "is_concluded" BOOLEAN NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "administrators_username_key" ON "administrators"("username");

-- CreateIndex
CREATE UNIQUE INDEX "administrators_password_key" ON "administrators"("password");
