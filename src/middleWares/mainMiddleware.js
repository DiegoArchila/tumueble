

module.exports={
    validateSesion:async(req,res, next) =>{
        try {
            if(req.session.user!=undefined){
                return await next();
            } else {
                return await res.redirect("/");
            }
        } catch (error) {
            throw error;
        }
    }
}