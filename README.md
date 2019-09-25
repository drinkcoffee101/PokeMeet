# PokeMeet -Match Finder
* A match finding node web application
* Unfortunatly was working as a full app up until the file structure needed to be changed


# Issues/What I learned  

* File structure
    *  Important to define and follow from the get go
    *  Difficult to implement later due to the need of importing and exporting file
* How to deploy to heroku
* How to use mysql as a back-end for an app
    * Succesfully defined a function that used a callback to solve an issue
        * The issue came from a POST on the front-end. I needed to perform a function that would perform a search through the mysql DB and return a 'PokeMatch' using the object passed from the POST. I tried setting the output of the function to a variable but it would return undefined to the front-end. Eventually remembered that the mysql query within the function was asynchronous and thought to try redefining the funciton to take in a callback and call the cb on the value I was trying to return. The cb that was passed in generated the response which then passed to the front-end
    

 

