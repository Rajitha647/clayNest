const express = require("express");
const { 
  addproduct, 
  getProducts, 
  deleteproducts, 
  updateproducts, 
  getproductbycategory, 
  findByid ,
  totalproduct
} = require("../control/prdctCtrl");
const uploads = require("../multerfiles/uploads");

const router = express.Router();

router.post("/addproduct", uploads.single("image"), addproduct);

router.get("/getProducts", getProducts);

router.get("/findByid/:id", findByid);

router.get('/getproductbycategory/:category', getproductbycategory);
router.get('/totalproduct',totalproduct)
router.delete("/deleteproducts/:id", deleteproducts);

router.put("/updateproducts/:id", uploads.single("image"), updateproducts);

module.exports = router;
