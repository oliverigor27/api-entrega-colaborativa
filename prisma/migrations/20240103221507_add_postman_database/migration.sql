-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "role" VARCHAR(10) NOT NULL,
    "first_name" VARCHAR(200),
    "last_name" VARCHAR(200),
    "address" VARCHAR(200),
    "city" VARCHAR(100),
    "state" VARCHAR(2),
    "country" VARCHAR(100),
    "id_card" VARCHAR(20),
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "postmen" (
    "_id" TEXT NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "role" VARCHAR(10) NOT NULL,
    "first_name" VARCHAR(200),
    "last_name" VARCHAR(200),
    "address" VARCHAR(200),
    "city" VARCHAR(100),
    "state" VARCHAR(2),
    "country" VARCHAR(100),
    "id_card" VARCHAR(20),
    "vehicleType" VARCHAR(50),
    "rating" DOUBLE PRECISION,
    "deliversMade" INTEGER,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postmen_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "postmen_username_key" ON "postmen"("username");

-- CreateIndex
CREATE UNIQUE INDEX "postmen_email_key" ON "postmen"("email");
