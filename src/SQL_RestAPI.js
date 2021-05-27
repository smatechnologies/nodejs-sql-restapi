/*
Simple nodejs script to setup a local RESTapi that points to a
SQL database.

author: Bruce Jernell/SMA Technologies
v 1.0
*/

var express = require('express'); // npm install express
const sql = require("msnodesqlv8"); // npm install msnodesqlv8
var app = express();

//Parameters for SQL login
var loginserver = process.argv[2]
var logindb = process.argv[3]
var loginuser = process.argv[4] 
var loginpw = process.argv[5]

//Setup SQL configuration
var sqlConfig = `Driver=SQL Server Native Client 11.0;Server=${loginserver};Database=${logindb};UID=${loginuser};PWD=${loginpw};`

app.use(express.json());

//Basic call to ensure the API is up
app.get('/', function(req, res) {
    res.json({"message": "Welcome to SQL API!"});
});

app.get('/<getpath>/:name', function (req, res) {
    sql.query(sqlConfig, `select * from dbo.<table> where name = '${req.params.name}'`, (err, rows) => {
                if(err) 
                {
                    console.log(err);
                    res.status(401).json(err);
                }
                else
                {
                    res.status(200);
                    res.json(rows);
                }
            });
});

app.post('/<postpath>', function (req, res) {
    sql.query(sqlConfig, `exec dbo.<table> @clientid = ${req.body.clientid},@filename = '${req.body.filename}',@processed = ${req.body.processed}`, (err, rows) => {
                if(err) 
                {
                    console.log(req.body);
                    console.log(err);
                    res.status(411).json(err);
                }
                else
                {
                    res.status(200);
                    res.json(rows);
                }
            });
});

app.put('/<putpath>/:id', function (req, res) {
    sql.query(sqlConfig, `update dbo.<table>
                          set Processed = ${req.body.Processed}
                          where id = ${req.params.id}`, (err, rows) => {
                if(err) 
                {
                    console.log(req.body);
                    console.log(err);
                    res.status(411).json(err);
                }
                else
                {
                    res.status(200);
                    res.json(rows);
                }
            });
});

// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});
