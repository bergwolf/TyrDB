const Database = require('../../../types/Database/Database');
const File = require('../../FsAdapter/File/File');

module.exports = async function createDatabase(tyrInstance, dbName){

    const db = new Database({name:dbName, adapter:this, tyrInstance});
    const path = `${tyrInstance.options.path}/${dbName}/meta.json`;
    console.log('SHould put into', path);
    await File.create(path, db.export());
    return db;
    // await File.ensure(path, db.export());
    // this.store.databases[dbName] = {
    //     db:new Database({name:dbName, adapter:this, tyrInstance}),
    //     collections:{}
    // }
};

/*
async createDatabase(dbName){
        const db = new Database({name:dbName})
        const path = this.path+'/'+dbName+'/db_root.dat';
        await File.ensure(path, db.export());
        return db;
    }
 */