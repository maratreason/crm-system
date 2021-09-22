"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { model } = require("mongoose");
const keys_1 = require("../config/keys");
const User = model("users");
const options = {
    // Говорим стратегии о том, что будем брать токен, который в header
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys_1.keys.jwt,
};
exports.default = (passport) => {
    passport.use(new JwtStrategy(options, async (payload, done) => {
        try {
            const user = await User.findById(payload.userId).select("email id");
            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
        catch (e) {
            console.log(e);
        }
    }));
};
