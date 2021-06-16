import { Document, Schema, Model, model, Error } from "mongoose";
import bcrypt from "bcrypt-nodejs";

export interface IUser extends Document {
    username: string;
    password: string;
}

export const userSchema: Schema = new Schema({
    username: String,
    password: String,
});


userSchema.pre<IUser>("save", function save(next) {
    const user = this;

    bcrypt.genSalt(10, (err: Error, salt: string) => {
        if (err) { return next(err); }
        bcrypt.hash(this.password, salt, (err: Error, hash: string) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

// userSchema.methods.comparePassword = (candidatePassword: string, callback: any) => {
//     bcrypt.compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
//         callback(err, isMatch);
//     });
// };

export const User: Model<IUser> = model<IUser>("User", userSchema);