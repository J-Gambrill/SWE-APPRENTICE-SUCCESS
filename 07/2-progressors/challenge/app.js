import express from 'express';
import { body, validationResult } from "express-validator";
import _ from 'lodash';

// database and the NobleHouse model
import { db, NobleHouse, Guest } from './db';

// Create the Express app
const app = express();

// Parse JSON bodies
app.use(express.json());

/* 
Query Parameters: The Royal Court is hosting a grand feast and they need a way to display the guests in different categories, such as age, occupation, and status. They have tasked you with creating an application that can filter the guests based on these categories using query parameters.
👇👇👇 YOUR CODE for Query Parameters 👇👇👇
*/
// GET /guests?age=35&occupation=Knight&status=Accepted


/*
Server Side Validation: The Royal Court has become increasingly concerned with the security of their data. Using express-validator, the queen wants you to protect this route by confirming that `name` is not empty and `age` is an integer.
*/
// POST /guests
app.post(
  '/guests',
  // 👇👇👇 YOUR CODE (middleware) for Server Side Validation 👇👇👇


  async (req, res) => {const errors = validationResult(req);
    // 👇👇👇 YOUR CODE (error handling) for Server Side Validation 👇👇👇
    


    const { name, age, occupation, status } = req.body;
    const guest = await Guest.create({ name, age, occupation, status });
    res.send(guest);
  }
);

/*
Pagination: The Royal Court is expanding its operations and the amount of data they need to manage is growing exponentially. They have tasked you with creating an application that can handle pagination of data in a clean and efficient way.
👇👇👇 YOUR CODE for Pagination 👇👇👇
*/


/*
Filtering and Sorting: The Royal Court is interested in tracking the success and failures of their noble houses over time. They have asked you to create an application that can filter and sort the houses based on various criteria, such as wealth, military power, and diplomatic ties.
👇👇👇 YOUR CODE for Filtering and Sorting 👇👇👇
*/


/*
Error Handling with Express: The Royal Court has recently experienced several instances of data corruption and loss due to faulty error handling. They need an application that can handle errors gracefully and prevent data loss. You have been tasked with creating an application that can handle errors with Express.
👇👇👇 YOUR CODE for Error Handling with Express 👇👇👇
*/


/*
404 Handling with Express: The Royal Court is experiencing an increase in attempted data breaches and they are concerned about hackers gaining access to their data. They need an application that can handle 404 errors in a way that does not provide sensitive information to potential attackers. You have been tasked with creating an application that can handle 404 errors with Express.
👇👇👇 YOUR CODE for 404 Handling with Express 👇👇👇
*/










// Start the server
const PORT = process.env.PORT || 3000;
// Export the app. NOTE: Do not start the server with app.listen() here. We will do that in the test file.
export default app;
