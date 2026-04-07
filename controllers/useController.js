const User = require("../models/useModels")

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body
        console.log(req.body)
        
        if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
}
        const user = new User({
            name,
            email,
            password,
            confirmPassword
        })
        await user.save();
        
       res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};