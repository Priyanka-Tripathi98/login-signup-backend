const bcrypt = require("bcryptjs")

const password = "priyanka2345"

async function hashPassword(){
    const salt = await bcrypt.genSalt(10);

    const hashedpass = await bcrypt.hash(password, salt);
    console.log(hashedpass)

    const upass = "priyanka2345"

    const isMatch = await bcrypt.compare(upass,hashedpass)
    console.log(isMatch)
}
hashPassword();

