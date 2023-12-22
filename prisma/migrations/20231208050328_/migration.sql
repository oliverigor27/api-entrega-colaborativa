-- AlterTable
ALTER TABLE "receivers" ADD COLUMN     "address" VARCHAR(200),
ADD COLUMN     "city" VARCHAR(100),
ADD COLUMN     "country" VARCHAR(100),
ADD COLUMN     "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" VARCHAR(200),
ADD COLUMN     "id_card" VARCHAR(20),
ADD COLUMN     "last_name" VARCHAR(200),
ADD COLUMN     "state" VARCHAR(2),
ADD COLUMN     "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP;

-- DropEnum
DROP TYPE "userrole";
