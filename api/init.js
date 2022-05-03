module.exports= function init(){
    
    const user = require("./models/User.js");
    const music = require("./models/Music.js");

    user.belongsToMany(music, { through: "user_music" });
    music.belongsToMany(user, { through: "user_music" });
}