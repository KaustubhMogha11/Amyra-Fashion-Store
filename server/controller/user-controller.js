  
import User from '../models/userSchema.js';

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ name: request.body.name });
        if(exist) {
            return response.status(401).json('User already exist');
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json('has been successfully registered');
        
    } catch (error) {
       console.log('Error: ', error.message);
    }
}
export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.name, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.name} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}
