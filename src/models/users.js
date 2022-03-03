/*IMPORTS*/
const users = "../databases/business/users.json";
const { toObject, createJSON, encrypt, comparePassword } = require("../lib/formats.js");


/*FUNCTIONS*/
const getData = () => {
    return toObject(users);
}

const getAlls = () => {
    return getData();
}

const findByPk = (id) =>{
    let allsUsers=getAlls();
    let user=allsUsers.find(u=>u.id===id);
    return user;
}

const findByEmail = (email) =>{
    let allsUsers=getAlls();
    let user=allsUsers.find(u=>u.email===email);
    return (user!=undefined) ? true:false;
}

/**
 * Search a user by field
 * @param {*} field field or property of user
 * @param {*} text text from field to compare
 * @returns object user 
 */
const findByField = (field, text) =>{
  
        let allsUsers=getAlls();
        let userField=allsUsers.find(u=>u[field]===text);

        return userField;   

}

const getNewId=()=>{
    
    let allsUsers=getAlls();
    let lastID = allsUsers.pop();
    let index=0

    if (lastID!=undefined) {
        index=(lastID.id + 1)  
    }

    return index; 
}


/**
 * Validated if the user is admin
 * @param {Object} user Object user expected
 * @returns true if the user is admin, or a object error in case negative. 
 */
const update = async (user)=>{

    let allsUsers=getAlls();
    allsUsers[user.id]=user;

    createJSON(allsUsers,users);

    if(user==allsUsers[user.id]) {
        console.log("El usuario ", allsUsers[user.id].email, "se ha modificado")
        return true;
    } else {
        throw new Error("No se ha podido modificar el usuario", user.email)
    }    
}

/**
 * Validated if the user is admin
 * @param {Object} user Object user expected
 * @returns true if the user is admin, or a object error in case negative. 
 */
const isAdmin= async(id) => {
    try {
        let user=findByPk(id); 
        if(user=undefined && user.isAdmin!=undefined && user.isAdmin===true){
            return true;
        } else{
            return false;
        }
    } catch (error) {
        throw error;
    }
}

/**
 * create user
 * @param {Object} user Object with structs from user to create 
 * @returns true if of user is created, or a object error in case negative.
 */
const create = (user)=>{
    try {

        let allsUsers=getAlls();
    
        user.id=getNewId();
        user.password=encrypt(user.password);
        user.passwordTry="";

        allsUsers.push(user);

        createJSON(allsUsers,users);

        user=findByPk(getNewId()-1);
        
        if (user!=undefined) {
            console.log("Se ha creado el usuario", user.email, "sastifactoriamente!");
            return true;
        } else {
            throw new Error("Ha ocurrido un error al crear el usuario");
        }

    } catch (error) {
        throw error;
    }
    
}


/**
 * Validate if the password is great.
 * First validate the email, before the password
 * @param {*} inputEmail identifiquer of the user 
 * @param {*} password password ingresed
 */
const validateUser = (inputEmail, password) =>{

    console.log("Function ValidateUser at Users.js", inputEmail,", PWD", password);

    let user=findByField("email",inputEmail);
    console.log("Usuario por field email:", user);

    if(user!=undefined &&
        (user.email===inputEmail && 
        comparePassword(password, user.password))){
            return true;
    } else{
            return false;
    }
}

module.exports= {
    getAlls,
    findByEmail,
    findByPk,
    findByField,
    update,
    create,
    isAdmin,
    validateUser    
}