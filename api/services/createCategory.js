const Category = require("../models/Category");
const normalizeString = require("../utils/normalizeString");


const addCategory = async(nameCategory, req, res) => {
    try{

        const [newCategory, booCreate] = await Category.findOrCreate({
            where: {
                name: normalizeString(nameCategory),
            },
        });
        
        res.status(200).json({
            msg: "Categoría creada correctamente...",
            newCategory
        });

    }catch(err){
        console.log(err);
    }
}

module.exports = addCategory;