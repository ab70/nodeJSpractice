const { render } = require('express/lib/response');
const {catSchema,subSchema}= require('../../models/category');
// const subcatSchema = require('../../models/category');
function homeControllers(){
	return {
		index(req,res){
			res.render('home');
		},
		async  categorycon(req,res){
			const newCat = new catSchema({
				catName: req.body.catname,
    			catDesc: req.body.catdesc
			})
			try{
				const saveCat = await newCat.save();
				
				res.redirect('/')
			}
			catch(err){
				console.log(err)
				res.redirect('/')
			}
		},

		//posting new sub Category

		async newSubCat(req,res){
			const newSub = new subSchema({
				parentCat: req.body.parid,
				subcat: req.body.subcat
			}) 
			try{
				const savesub = await newSub.save();
				res.redirect('/');
			}
			catch(err){
				console.log(err)
				res.redirect('/');
			}
		},
		// get cat to subcat page
		async catget(req,res){
			try{
				const cat = await catSchema.find();
				res.render('subcat',{cate: cat})
			}
			catch(err){
				res.redirect('/')
				console.log(err);
			} 
		}
	}
}
module.exports = homeControllers