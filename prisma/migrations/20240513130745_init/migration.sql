-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);
