const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    catName:{type: String, unique: true, required: true},
    catDesc:{type: String, required: true}
},{timestamps:true});

const subcatSchema = new mongoose.Schema({
    parentCat: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    subcat: {type: String, required: true}
},{timestamps:true});

const catSchema = mongoose.model('Category', categorySchema);
const subSchema = mongoose.model('Subcat', subcatSchema);
module.exports = {catSchema,subSchema}