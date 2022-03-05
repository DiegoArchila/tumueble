module.exports={
    /**
     * Validate if the user is logged
     * @param {*} req 
     * @param {*} res 
     * @param {*} next If is true will next or will redirectionate to home
     */
    validateUser: (req, res, next) => {
        if(req.session.user!=undefined){
            next();
        } else {
            res.redirect("/");
        }
    }
}