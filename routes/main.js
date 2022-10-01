module.exports = function(app) {
    // ALL THE ENDPOINTS DEFINED HERE
    // at the base API url
    app.get('/', (req, res) => {
        res.send('welcome to the development api-qrserver');
    });
    // return all items in the db as json string 
    app.get('/api/items', (req, res) => {
        // query database to get all the foods
        let sqlquery = "SELECT * FROM items";

        // execute sql query
        db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect("/");
        }
        res.json(result);
        });
    });
    // return all cards in the db as json string 
    app.get('/api/cards', (req, res) => {
        // query database to get all the foods
        let sqlquery = "SELECT * FROM cards";

        // execute sql query
        db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect("/");
        }
        res.json(result);
        });
    });
    // return all addresses in the db as json string 
    app.get('/api/addresses', (req, res) => {
        // query database to get all the foods
        let sqlquery = "SELECT * FROM addresses";

        // execute sql query
        db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect("/");
        }
        res.json(result);
        });
    });
    // return item with a particular qr code
    app.get("/api/item", (req, res) => {
        //searching in the database
        let code = ['%'+req.query.code+'%'];
        let sqlquery = "SELECT * FROM items WHERE code LIKE ?";

        // execute sql query
        db.query(sqlquery, code, (err, result) => {
            if (err) {
                return console.error("Error with the keyword "
                    + req.query.keyword + "error: "+ err.message);
                res.redirect("/");
            }else{
                // if no results found just return an empty json string
                if (result.length ==0) {
                    console.log("No items found with the keyword " + req.query.code);
                }
                res.json(result);
            }
        });
    });
    // handle the PublishableKey request
    app.get('/api/pubkey', (req, res) => {
        //just get the key and return as a JSON object
        result = { "publishableKey" : `${process.env.PUBLISHABLE_KEY}`};
        res.json(result);
    });
    // handle the post request for items
    app.post('/api/items', (req, res) => {
        // extract the list of items from the body
        const items = [req.body];
        //console.log(items);

        //searching the database for the items
        let sqlquery = "SELECT * FROM items WHERE code IN ( ? )";

        // execute sql query
        db.query(sqlquery, items, (err, result) => {
            if (err) {
                return console.error("Error with the keyword "
                    + req.query.keyword + "error: "+ err.message);
                res.redirect("/");
            } else {
                // if no results found just return an empty json string
                if (result.length ==0) {
                    console.log("No items found with the keyword " + req.query.code);
                }
                res.json(result);
            }
        });
    });
    // handle the payment intent request from the app
    app.post('/api/create-payment-intent', async (req, res) => {
    try {
        // just console.log the body
        console.log('PAYMENT INTENT REQUESTED');
        // extract the list of items from the body
        const [items,...rest] = [req.body];
        //console.log(items.amount);
        //process the request
        const paymentIntent = await stripe.paymentIntents.create
        ({
            amount: items.amount,
            currency: items.currency,
            payment_method_types: [items.paymentMethodType],
        });
        //console.log(paymentIntent);

        const clientSecret = paymentIntent.client_secret;
        console.log(clientSecret);

        res.json({
            clientSecret: clientSecret,
        });
        } catch (err) {
            console.log(err.message);
            res.json({ error: err.message });
        }
    });
    // END OF ENDPOINT DEFINITION
}