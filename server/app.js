const express = require( 'express' )
const app = express()

const rApi = require( './routes/api' )

app.use( express.static( __dirname + '/public' ) )

app.use( '/api/v0', rApi )

app.listen( 3000, () => console.log( 'Library api running on port 3000' ) )
