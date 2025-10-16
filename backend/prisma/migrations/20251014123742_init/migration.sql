-- CreateTable
CREATE TABLE "Administrator" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distribution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logo_url" TEXT,

    CONSTRAINT "Distribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DownloadLink" (
    "id" SERIAL NOT NULL,
    "distribution_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "DownloadLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CommandCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Command" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "comand_name" TEXT NOT NULL,
    "description" TEXT,
    "example_usage" TEXT,

    CONSTRAINT "Command_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistributionCommand" (
    "distribution_id" INTEGER NOT NULL,
    "comand_id" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "DistributionCommand_pkey" PRIMARY KEY ("distribution_id","comand_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrator_userName_key" ON "Administrator"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "CommandCategory_name_key" ON "CommandCategory"("name");

-- AddForeignKey
ALTER TABLE "DownloadLink" ADD CONSTRAINT "DownloadLink_distribution_id_fkey" FOREIGN KEY ("distribution_id") REFERENCES "Distribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CommandCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributionCommand" ADD CONSTRAINT "DistributionCommand_distribution_id_fkey" FOREIGN KEY ("distribution_id") REFERENCES "Distribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DistributionCommand" ADD CONSTRAINT "DistributionCommand_comand_id_fkey" FOREIGN KEY ("comand_id") REFERENCES "Command"("id") ON DELETE CASCADE ON UPDATE CASCADE;
