const express = require( 'express' )
const router = express.Router()

router.get( '/', ( req, res ) => {

  res.status( 200 ).send( 'magazine' )
} )

router.get( '/:id', ( req, res ) => {
  const { id } = req.params
  res.status( 200 ).send( `magazine ${ id }` )
} )

module.exports = router