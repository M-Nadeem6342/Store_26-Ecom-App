
    //   bcrypt is a react library used to encrypted the password and makes password more strong
import bcrypt, { compare } from 'bcrypt'


export const hashPassword = async(password) =>{
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
};


// now compare the password with hashedPassword 

export const comparePassword = async (password,hashedPassword) =>{
    return bcrypt.compare(password, hashedPassword)
}