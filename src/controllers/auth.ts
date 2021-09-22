import {RequestHandler} from "express";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import {keys} from "../config/keys";
import User from "../models/User";
const errorHandler = require("../utils/errorHandler");

export const login: RequestHandler = async function (req, res) {
    const {email, password} = req.body;
    const candidate = await User.findOne({email});

    if (candidate) {
        // Проверка пароля, пользователь существует
        // Проверяем введенный пароль и захешированный пароль у candidate
        const passwordResult = bcrypt.compareSync(password, candidate.password);
        if (passwordResult) {
            // Генерируем токен, пароли совпали
            // expiresIn: 1 час
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id,
            }, keys.jwt, {expiresIn: 60 * 60});

            res.status(200).json({
                token: `Bearer ${token}`
            });
        } else {
            // Пароли не совпали
            res.status(401).json({
                message: "Неверный пароль"
            })
        }
    } else {
        // Пользователя нет, ошибка
        res.status(404).json({
            message: "Пользователь с таким email не найден."
        })
    }
};

export const register: RequestHandler = async function (req, res) {
    const {email, password} = req.body;
    const candidate = await User.findOne({email});

    if (candidate) {
        // Пользователь существует, нужно отправить ошибку
        res.status(409).json({
            message: "Такой email уже занят.",
        });
    } else {
        // Создать пользователя

        // Генерируем соль
        const salt = bcrypt.genSaltSync(10);
        // хэшируем пароль
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({email, password: hashedPassword});

        try {
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            errorHandler(res, err);
        }
    }
};
