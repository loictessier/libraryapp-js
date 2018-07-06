const sqlite3 = require("sqlite3");

module.exports.init = function(){
    let db = new sqlite3.Database("models/library.db");
    db.run("CREATE TABLE IF NOT EXISTS Documents(id INTEGER AUTOINCREMENT PRIMARY KEY, name TEXT, author TEXT, year TEXT, type TEXT)");
    db.close();
}

module.exports.insert = function(name, author, year, type){
    let db = new sqlite3.Database("models/library.db");
    let ins = db.prepare("INSERT INTO Documents VALUES(?, ?, ?, ?)");
    ins.run(name, author, year, type);
    ins.finalize();
    db.close();
}

module.exports.selectAll = function(){
    let db = new sqlite3.Database("models/library.db");
    let sql = "SELECT name, author, year, type FROM Documents ORDER BY author, year";
    db.all(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        return rows;
    });
    db.close();
}