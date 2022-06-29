const homeControllers = require('../app/http/controllers/homeControllers');
function initRoute(app){
app.get('/', homeControllers().index),
app.post('/', homeControllers().categorycon),
app.post('/subcat', homeControllers().newSubCat),
app.get('/subcat',homeControllers().catget)
}

module.exports = initRoute