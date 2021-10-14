const Joi = require("joi");

const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log(passwordSchema.validate("qweqweq"));

const express = require("express");

const index = express();

index.use("*", (req, res) => {
    console.log("був запит від браузера");
    res.send("<h1>ну це HTML тобі у відповідь</h1>");
});

const listener = index.listen(5500, () => {
    console.log(`Веб-сервер запущеній на порті ${listener.address().port}`);
});