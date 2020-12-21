const {ObjectID} = require('mongodb');
const createmMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const {client:  MongoClient,closeConnectionFn} = await 
    createMongoClient();
    const Products = MongoClient.collection('products');
    const {id} = req.params;
    const {client:  MongoClient,closeConnectionFn} = await 
    createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.findOneAndDelete({ _id: ObjectID(id)});
    closeConnectionFn();
    context.res ={
        status:200,
        body: res,
    }
    };
