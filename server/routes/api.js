const express = require( 'express' )
const router = express.Router()
const books = require( './books' )
const authors = require( './authors' )
const magazines = require( './magazines' )

router.use( '/books', books )
router.use( '/authors', authors )
router.use( '/magazines', magazines )

module.exports = router