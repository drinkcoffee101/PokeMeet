USE pokeTrainers_db;

-- Insert rows into table 'pokeTrainers_db'
INSERT INTO trainers
( -- columns to insert data into
 matchName, img, attr
)
VALUES
( 
 'Brock', '"\app\data\img\brock.jpg"', '0,3,0,4,0,0,1,0,3,2,4'
),
( 
 'Misty', '"\app\data\img\misty.jpg"', '3,0,1,2,3,4,3,2,3,2,4'
),
( 
 'Ash', '"\app\data\img\ash.jpg"', '1,4,3,2,0,2,1,0,0,3,1'
),
( 
 'Gary', '"\app\data\img\gary.jpg"', '4,2,0,0,4,2,0,4,1,2,3'
),
( 
 "Ash's Mom", '"\app\data\img\AshMom.jpg"', '4,3,4,1,4,0,2,0,1,1,2'
),
( 
 'Professor Oak', '"\app\data\img\oak.jpg"', '4,3,3,3,0,0,3,3,1,2,4'
),
( 
 'Jessie', '"\app\data\img\jessie.jpg"', '3,4,3,3,4,2,0,3,0,1,4'
),
( 
 'Erika', '"\app\data\img\erika.jpg"', '4,3,3,2,0,1,3,0,0,2,1'
),
( 
 'Claire', '"\app\data\img\clair.jpg"', '2,1,0,3,2,4,4,4,4,1,3'
),
( 
 'James', '"\app\data\img\james.jpg"', '3,4,4,2,1,2,0,0,0,3,2'
);

INSERT INTO questions (question)
VALUES ('How badly do you want to be the best that every was?'),('You lose pokemon battles a lot (like a lot), do you give up and try something else?'),('You like to grow your hair out long'),('Are you afraid of death?'),('Do you care about carbs?'),('Is climate change real?'),('Do you believe in dinosaurs ?'),('Would you ever shoplift?'),('Do you believe in ghosts?'),('Do you believe in the seattle freeze?');