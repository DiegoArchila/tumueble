const {body}=require("express-validator");

const validationsCreateUser=[
    
    body("firstName")
        .isEmpty().withMessage("Debes completar el campo \"Nombres\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Nombres\", son de 2 a 128"),
        
    body("lastName")
        .isEmpty().withMessage("Debes completar el campo \"Apellidos\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Apellidos\", son de 2 a 128"),
    
    body("dateBorn")
        .isDate().withMessage("Debes ingresar una fecha valida en \"Fecha nacimiento\" "),
    
    body("gender")
        .isEmpty().withMessage("Debes seleccionar un genero en \"Genero\" "),
        
    body("email")
        .isEmail().withMessage("Debes ingresar un email valido en \"Email\" "),
   
    body("country")
        .isEmpty().withMessage("Debes completar el campo \"País\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"País\", son de 2 a 128"),

    body("province-state")
        .isEmpty().withMessage("Debes completar el campo \"Provincia/Estado\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Provincia/Estado\", son de 2 a 128"),
        
    body("city-town")
        .isEmpty().withMessage("Debes completar el campo \"Ciudad/Pueblo\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Ciudad/Pueblo\", son de 2 a 128"),

    body("address")
        .isEmpty().withMessage("Debes completar el campo \"Dirección\" ")
        .isLength({
            min:2,
            max:512
        }).withMessage("Los caracteres minimos y maximos en el campo \"Dirección\", son de 2 a 512"),
        
    body("address")
        .isEmpty().withMessage("Debes completar el campo \"Dirección\" ")
        .isLength({
            min:2,
            max:512
        }).withMessage("Los caracteres minimos y maximos en el campo \"Dirección\", son de 2 a 512"),
];

module.exports={
    validationsCreateUser
}