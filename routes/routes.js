module.exports = (app, fs) => {

    // we've added in a default route here that handles empty routes
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
    app.get("/api/item/", function (req, res) {
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
    // handle the post request for items
    app.post('/api/items', function(req, res) {
        // extrat the list of items from the body
        const items = [req.body];
        //console.log(items);

        //searching the database for the items
        //let sqlquery = "SELECT * FROM items WHERE code IN ('675566776', '5017689065072')";
        let sqlquery = "SELECT * FROM items WHERE code IN ( ? )";

        // execute sql query
        db.query(sqlquery, items, (err, result) => {
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
};