// import json server and store in a variable
const jsonserver = require('json-server')


// create server
const mediaPlayerServer = jsonserver.create()


// create middleware to convert json format to js
const middleware = jsonserver.defaults()


// import db, json file
const router = jsonserver.router("db.json")


// set port for the server 
const PORT = 4005 || process.env.PORT


// server uses the middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


// listen() - to listen  whether server is receiving any responce 
mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number  ${PORT}`);
})