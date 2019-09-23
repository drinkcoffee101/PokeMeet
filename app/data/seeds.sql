USE pokeTrainers_db;

-- Insert rows into table 'pokeTrainers_db'
INSERT INTO trainers
( -- columns to insert data into
 matchName, img, attr
)
VALUES
( 
 'Brock', "brock.jpg", '5,3,5,4,5,5,1,5,3,2,4'
),
( 
 'Misty', "misty.jpg", '3,5,1,2,3,4,3,2,3,2,4'
),
( 
 'Ash', "ash.jpg", '1,4,3,2,5,2,1,5,5,3,1'
),
( 
 'Gary', "gary.jpg", '4,2,5,5,4,2,5,4,1,2,3'
),
( 
 "Ash's Mom", "AshMom.jpg", '4,3,4,1,4,5,2,5,1,1,2'
),
( 
 'Professor Oak', "oak.jpg", '4,3,3,3,5,5,3,3,1,2,4'
),
( 
 'Jessie', "jessie.jpg", '3,4,3,3,4,2,5,3,5,1,4'
),
( 
 'Erika', "erika.jpg", '4,3,3,2,5,1,3,5,5,2,1'
),
( 
 'Claire', "clair.jpg", '2,1,5,3,2,4,4,4,4,1,3'
),
( 
 'James', "james.jpg", '3,4,4,2,1,2,0,0,0,3,2'
);

INSERT INTO questions (question)
VALUES ('How badly do you want to be the best that every was?'),('You lose pokemon battles a lot (like a lot), do you give up and try something else?'),('You like to grow your hair out long'),('Are you afraid of death?'),('Do you care about carbs?'),('Is climate change real?'),('Do you believe in dinosaurs ?'),('Would you ever shoplift?'),('Do you believe in ghosts?'),('Do you believe in the seattle freeze?');