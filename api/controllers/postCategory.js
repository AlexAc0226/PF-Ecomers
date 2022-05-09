const addCategory = require("../services/createCategory");

const createCategory = async (req, res) => {
  try {
    const nameCategory = req.body.nameCategory;
    
    if (!nameCategory) {
      res.status(400).json({
        msg: "Faltan datos...",
      });
    } else {
      await addCategory(nameCategory, req, res);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = createCategory;
