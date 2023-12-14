CREATE TABLE "koalas" (
  "id" serial primary key,
  "name" varchar(80) not null,
 "gender" varchar(10) not null,
 "age" NUMERIC not null,
  "transferReady" boolean not null,
  "notes" varchar(150)
  );

INSERT INTO "koalas" ("name", "gender", "age", "transferReady", "notes")
VALUES 
('Scotty', 'M', 4, True, 'Born in Guatemala'),
('Jean', 'F', 5, True, 'Allergic to lots of lava'),
('Ororo', 'F', 7, False, 'Loves listening to Paula Abdul'),
('Charlie', 'M', 9, True, 'Favorite band is Nirvana');

SELECT * FROM "koalas" ORDER BY "id";