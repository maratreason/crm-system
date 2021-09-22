const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {model} = require("mongoose");
import {keys} from "../config/keys";

const User = model("users");

const options = {
    // Говорим стратегии о том, что будем брать токен, который в header
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt,
};

export default (passport: any) => {
    passport.use(
        new JwtStrategy(options, async (payload: any, done: any) => {
            try {
                const user = await User.findById(payload.userId).select(
                    "email id",
                );

                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        }),
    );
};
