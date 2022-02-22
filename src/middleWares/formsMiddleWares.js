const { body, check }=require("express-validator");
const req = require("express/lib/request");

const validationsCreateUser=[

    check('firstName')
        .notEmpty().withMessage("Debes completar el campo \"Nombres\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Nombres\", son de 2 a 128"),
        
    check("lastName")
        .notEmpty().withMessage("Debes completar el campo \"Apellidos\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Apellidos\", son de 2 a 128"),
    
    check("dateBorn")
        .isDate().withMessage("Debes ingresar una fecha valida en \"Fecha nacimiento\" "),
    
    check("gender")
        .notEmpty().withMessage("Debes seleccionar un genero en \"Genero\" "),
        
    check("email")
        .isEmail().withMessage("Debes ingresar un email valido en \"Email\" "),
   
    check("country")
        .notEmpty().withMessage("Debes completar el campo \"País\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"País\", son de 2 a 128"),

    check("province_state")
        .notEmpty().withMessage("Debes completar el campo \"Provincia/Estado\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Provincia/Estado\", son de 2 a 128"),
        
    check("city_town")
        .notEmpty().withMessage("Debes completar el campo \"Ciudad/Pueblo\" ")
        .isLength({
            min:2,
            max:128
        }).withMessage("Los caracteres minimos y maximos en el campo \"Ciudad/Pueblo\", son de 2 a 128"),

    check("address")
        .notEmpty().withMessage("Debes completar el campo \"Dirección\" ")
        .isLength({
            min:2,
            max:512
        }).withMessage("Los caracteres minimos y maximos en el campo \"Dirección\", son de 2 a 512"),check("password")
        .notEmpty().withMessage("Debes completar el campo \"Contraseña\" ")
        .isLength({
            min:10,
            max:64
        }).withMessage("Los caracteres minimos y maximos en el campo \"Contraseña\", son de 10 a 64")
        .isStrongPassword({
            minLength:10,
            minUppercase:1,
            minNumbers:2
        }).withMessage("Se debe ingresar minimo: 10 caracteres, 1 letra mayuscula, 2 números. En el campo \"Contraseña\"")
        .equals("passwordTry").withMessage("Las contraseñas en los campos de \"Contraseña\" deben coincidir ")
];


module.exports={
    validationsCreateUser
}