module.exports={
    validateUserAdmin: (req, res, next) => {
        if(req.session.user!=undefined && (req.session.admin!=undefined && req.session.admin===true)){
            next();
        } else {
            res.redirect("/");
        }
    }
}