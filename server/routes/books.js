const express = require( 'express' )
const router = express.Router()
const CSVToJSON = require( 'csvtojson' )

router.get( '/', ( req, res ) => {
  CSVToJSON( { delimiter: ';' } ).fromFile( 'data/books.csv' )
    .then( books => {
      res
        .set( 'Content-Type', 'application/json' )
        .status( 200 )
        .json( books )
    } ).catch( err => {
      res.status( 500 ).send( 'err books' )
    } )
} )

router.get( '/:id', ( req, res ) => {
  const { id } = req.params
  CSVToJSON( { delimiter: ';' } ).fromFile( 'data/books.csv' )
    .then( books => {
      res
        .status( 200 )
        .set( 'Content-Type', 'application/json' )
        .json( books[ 0 ] )
    } ).catch( err => {
      res.status( 500 ).send( 'err books' )
    } )
} )

module.exports = router