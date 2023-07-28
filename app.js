// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()
const path      = require("path");
const expressLayouts = require("express-ejs-layouts"); 
 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

// Disable caching for the routes
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-store');
    next();
  });

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')


// 👇 Start handling routes here

const index =require('./routes/index.routes')
app.use('/',index);

const charactersRoutes = require('./routes/characters.routes')
app.use('/', charactersRoutes);