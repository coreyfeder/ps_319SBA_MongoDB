const express = require("express")
// const fs = require('fs')

const app = express()
const router = express.Router()

// this endpoint
const protocol = "http"
const host = "localhost"
const port = 3000  // try 5000 if any troubles
const prefix = "api"
const baseurl = `${protocol}://${host}:${port}`
const url = `${baseurl}/${prefix}`


// CONNECTION TO DB

// MongoDB
const mongoAppId = 0
const mongoApiVersion = 0
const mongoBaseUrlGlobal = `https://data.mongodb-api.com/app/${"<App ID>"}/endpoint/data/${"<API_Version>"}`
const mongoBaseUrlLocal = `https://${"<Region>"}.${"<Cloud>"}.data.mongodb-api.com/app/${"<App ID>"}/endpoint/data/${"<API Version>"}`
const mongoDataSource
const mongoDatabase
const mongoCollection
const mongoFilter
const mongoProjection
const mongo
/* 
https://data.mongodb-api.com/app/myapp-abcde/endpoint/data/v1/action/insertOne
https://data.mongodb-api.com/app/<App ID>/endpoint/data/<API Version>
https://<Region>.<Cloud>.data.mongodb-api.com/app/<App ID>/endpoint/data/<API Version>
https://data.mongodb-api.com/app/<App ID>/endpoint/data/<API Version>


curl -s "https://data.mongodb-api.com/app/myapp-abcde/endpoint/data/v1/action/findOne" \
  -X POST \
  -H "Accept: application/json" \
  -H "apiKey: TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6" \
  -d '{
    "dataSource": "mongodb-atlas",
    "database": "sample_mflix",
    "collection": "movies",
    "filter": {
      "title": "The Matrix"
    }
  }'

Yiwen
try fs.writeFile('./data/post.js', ...) 
barles
fs...that requires an import right?
yes, fs = require('fs'), thanks @Yiwen !

*/

// MIDDLEWARE

app.use(express.json())


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

app.route('/name_of_your_endpoint')
    .all((req, res, next) => {
        // code in this section will be executed 
        // no matter which HTTP verb was used
    })
    .get((req, res, next) => {
        // GET = change nothing, just hand back information
    })
    .post((req, res, next) => {
        // POST = insert something new
    })
    /* 
    .patch((req, res, next) => {
        // PATCH = update part of an existing thing
    })
    .put((req, res, next) => {
        // PUT = replace an existing thing
    })
     */
    .delete((req, res, next) => {
        // DELETE = remove some data
    })


// ERROR HANDLING / endware
//   If a call made it this far, something was wrong with it.

// bounce anything hitting the base without the prefix
app.all("/", (req, res) => {
    res.status(403);
    res.json({ error: `Public API endpoints are available at: ${url}` })
});

// "anything else"
app.all((req, res) => {
    console.error(err.stack);
    res.status(404).json({ error: `Resource not found.` });
})
/* 
    Is there any difference between 
        app.all((req, res) => ...
    and 
        app.use((err, req, res, next) => ...
    ?  Are they both catch-alls? Are there more ways? Is there a "best" way?
 */
// this is functionally identical to `app.all((req, res) => ...`, right?


// GO / LISTEN

app.listen(port, () => {
    console.log(`Server listening at:  ${url}`);
});
