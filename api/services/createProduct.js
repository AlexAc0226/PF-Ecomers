const Product = require("../models/Product");
const Category = require("../models/Category");

const normalizeString = require("../utils/normalizeString");

const addProduct = async (product, req, res) => {
  try {
    const newProduct = await Product.create({
      name: normalizeString(product.name),
      price: product.price,
      rating: product.rating,
      stock: product.stock,
      description: product.description,
      img: product.img,
    });

    const [identCategory, boolCreate] = await Category.findOrCreate({
      where: {
        name: normalizeString(product.category),
      },
    });

    await newProduct.addCategory(identCategory);

    res.status(201).json({
      msg: "Producto creado",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = addProduct;
