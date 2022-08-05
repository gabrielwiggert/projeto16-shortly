CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL UNIQUE,
	"password" varchar(30) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);