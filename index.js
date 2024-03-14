const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
// endpoint
const protocol = "http";
const host = "localhost";
const port = 3000; // try 5000 if any troubles
const prefix = "api"
const baseurl = `${protocol}://${host}:${port}`
const url = `${baseurl}/${prefix}`


// CONNECTION TO DB

// MIDDLEWARE

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// bounce anything hitting the base without the prefix
app.all("/", (req, res) => {
    res.status(403);
    res.json({ error: `Public API endpoints are available at: ${url}` })
});

// ROUTER

// a middleware function with no mount path => code executed for every request
router.use((req, res, next) => {
    console.log([
            Date.now(), 
            'request',
            req.method, 
            req.originalUrl,
        ].join(' : '))
    next()
    /* oooh, can I postlog, to include the response code? test: will control come back to this process after calling `next()`? */ 
    console.log([
            Date.now(), 
            'response', 
            req.method,  // why doesn't res.method have this?
            res.statusCode,  // this doesn't work for some errors?
            res.statusMessage,  // blanks?
            // res.json(),  // friggin' "[object Object]" again. Even `.json()` doesn't know it's JSON?
            JSON.stringify(res.json()),  // goddamn "[object Object]". Why doesn't `.json()` know it's JSON?
        ].join(' : '))
})


// ROUTES

// ...

app.all((req, res) => {  // catch-all
    console.error(err.stack);
    res.status(404)
    res.json({ error: `Resource not found. [AL2]` });
})


// ERROR HANDLING / endware

app.use((err, req, res, next) => {
    // handle 404's
    console.error(err.stack);
    res.status(404)
    res.json({ error: `Resource not found. [US]` });
});



// GO / LISTEN

app.listen(port, () => {
    console.log(`Server listening at:  ${url}`);
});
