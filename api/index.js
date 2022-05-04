const app = require("./app")
const sequelize =require('./db') 



app.listen(3001, () => {
  sequelize
    .sync({ force: false })
    .then(console.log("Conectado a la base de datos"))
    .catch((e) => console.log(e));
});
