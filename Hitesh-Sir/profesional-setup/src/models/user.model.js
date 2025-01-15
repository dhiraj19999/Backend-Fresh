import mongoose from 'mongoose';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
/* role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },*/
    
    
    const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
       
        lowercase: true,
        index: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        
        
    },
  fullname:{
        type: String,
        required: true,
        
        trim: true,
       
        index: true,
      
    },
    avatar:{
        type: String,
       required: true,
    },
    coverImage:{
        type: String,
       
    },
    watchHistory:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    password:{ 
        type: String,
        required: [true, 'Password is required'],
    },
   
    refreshToken:{
        type: String,
    },
},
{
    timestamps: true
}
);

userSchema.pre('save', async function(next){  // database me change hone se pahle ye run hoga , if condition
                                             // isliye becuz user jab modify req dega tabhi ye middelware run hoga
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken= function(){
    return jwt.sign({id: this._id,email:this.email,username:this.username,fullname:this.fullname}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'});
};
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign({id: this._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'});
};

export const User= mongoose.model('User', userSchema);