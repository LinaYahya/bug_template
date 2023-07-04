const { join } = require("path");
const express = require("express");
const router = require("./router");

const app = express();

app.set("port", process.env.PORT || 8000);
app.set('view engine', 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "public")));

app.use(router);


module.exports = app;
