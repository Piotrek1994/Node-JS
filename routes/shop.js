const express = require('express')
const path = require('path')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
	const products = adminData.products
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/',
		productCSS: true,
		productCSS: true,
		activeAddProduct: true
	})
})

module.exports = router
