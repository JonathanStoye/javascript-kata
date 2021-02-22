const express = require( 'express' )
const router = express.Router()

router.get( '/', ( req, res ) => {

  res.status( 200 ).send( 'authors' )
} )

router.get( '/:id', ( req, res ) => {
  const { id } = req.params
  res.status( 200 ).send( `author ${ id }` )
} )

module.exports = router