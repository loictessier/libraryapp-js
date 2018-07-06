const sqlite3 = require("sqlite3");

module.exports.init = function(query){
    let db = new sqlite3.Database("models/library.db");
    db.run("CREATE TABLE IF NOT EXISTS Documents(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT, year TEXT, type TEXT)", function(){
        query();
    });
    db.close();
}

module.exports.insert = function(name, author, year, type){
    let db = new sqlite3.Database("models/library.db");
    let ins = db.prepare("INSERT INTO Documents(name, author, year, type) VALUES(?, ?, ?, ?)");
    ins.run(name, author, year, type);
    ins.finalize();
    db.close();
}

module.exports.selectAll = function(display){
    let db = new sqlite3.Database("models/library.db");
    let sql = "SELECT id, name, author, year, type FROM Documents ORDER BY author, year";
    db.all(sql, (err, rows) => {
      if(err) {
          throw err;
      }
      display(JSON.stringify(rows));
    });
    db.close();
}
