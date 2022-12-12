exports.Getcart = (req,res,next) => {
    res.render('shop/cart',{
        pageTitle: 'Cart',
        path: './cart',
        formsCSS: true,
        productCSS: true,
        activeAddPorduct: true,
    })
} 