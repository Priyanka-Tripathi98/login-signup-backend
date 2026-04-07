const User = require("../models/useModels")
const jwt = require("jsonwebtoken")

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body)
    
    const user = await User.findOne({email});
    
      const token = jwt.sign(
        {email : email},
      process.env.SECRET_KEY,
        {expiresIn: "1h"}
      )
    if(!user){
        return res.status(400).json({message: "Users not found"})
    }
     if(user.password !== password) {
    return res.status(400).json({ message: "Invalid Password" });
}
       res.status(200).json({ message: "Login successfully",token });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};