# ImprovedFantasyHockey

<h3>The goal of this project is to create a webapp that will allow users to input all of their fantasy hockey players teams and then 
use a web scraper to grab the current weeks nhl schedule for each team. From here, an algorithm will take a look at each teams games and what positions will be overfilled on some days
and recoomend you a few positions/players to drop and which teams to add players from.</h3>

<ol>
  <li>(Completed)First I need to make a website that will take user inputs for all of the positions.</li>
  <li>Secondly, I need to communicate the user input to the backend.</li>
  <li>Third, I need to use a web scraper to get the current weeks nhl schedule</li>
  <li>Fourth, I need to store this weeks nhl schedule in a database</li>
  <li>Fifth, I need to then figure out what days a person has a overfull lineup</li>
  <li>Sixth, I need to also figure out if the user could gain a few games on off days</li>
  <li>Seventh, I need to then figure out what teams the user can add players from to help their schedule.</li>
  <li>Lastly, I need to then display the results.</li>
</ol>

Use prisma is a backend database connector for node js use this on API.
5$ droplet on digital ocean and setup database MYSQL
Google how to setup digital ocean web server
Google how to setup nginx server on digital ocean.
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04
Can setup docker to have local database for development or I can setup table on sql server with main production and one for testing.
Node.js for backend language and use typescript.
Can also run python script from node and then put info directly into database.

Step 1: Think about database table for players and their positions <br>
Step 2: Have database table for teams <br>
Step 3: Have a database table for games played this week. <br>
Step 4: Home and away team. <br>
Step 5: Database table for players fantasy teams <br>
Step 6: players on current fantasy teams db table <br>
Step 7: 
