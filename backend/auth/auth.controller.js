const User= require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY='secretkey123456';


exports.createUser= (req, res,next)=>{
    //console.log('XXXX', req.body);
    
    const newUser= {
        name: req.body.name,
        email: req.body.email,
        rol: req.body.rol,
        //sin contraseña = password: req.body.password
        password:bcrypt.hashSync(req.body.password)
    }
    User.create(newUser, (err, user)=>{
        if (err && err.code==11000) return res.status(409).send('El email ya existe');
        if (err) return res.status(500).send('Server error');
        const expiresIn=24 * 60 * 60;
        const accessToken = jwt.sign({id: user.id},
         SECRET_KEY,{
             expiresIn:expiresIn

         });
        // Este user es que se devuelve cuando se guarda en la bd
         const dataUser = {
           name: user.name,
           email: user.email,
           rol: user.rol,
           accessToken: accessToken,
           expiresIn: expiresIn


         }

         //response
         // antes: res.send({ user });
         res.send({ dataUser });
    });
}
exports.loginUser=(req,res,next) => {
  //"rol" : "admin"
    const userData={
        email: req.body.email,
        password: req.body.password 
    }
    User.findOne({email:userData.email} , (err, user)=>{ 
        if (err) return res.status(500).send('Server error!');
        if(!user){
            //email does not exist
           
            res.status(409).send({message:'Something is wrong'});  
          
        } else{
          //User.find({"rol":'Administrador'} && {"email":userData.email})
           
           
             // compara contraseña imgresada con la que está en la bd 
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
          if (resultPassword){
            const expiresIn=24 * 60 * 60;
            const accessToken = jwt.sign({id: user.id},SECRET_KEY, { expiresIn:expiresIn });
            // Este user es que se devuelve cuando se guarda en la bd
         const dataUser = {
            name: user.name,
            email: user.email,
            rol: user.rol,
            accessToken: accessToken,
            expiresIn: expiresIn
          }
 
            res.send({dataUser});
          } else {
            //password wrong 
            res.status(409).send({message:'Something is wrong'});  
          }
        
    }
});
}

