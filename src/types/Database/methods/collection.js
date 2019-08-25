const Collection = require('../../Collection/Collection')

async function collection(collectionName){
  let coll = null;
  const instance = this.getTyrInstance();
  if (!instance.databases[this.name]) {
    throw new Error('Invalid database')
  }
  const adaper = this.getAdapter();
  if(!instance.databases[this.name].collections[collectionName]){
      const coll = await adaper.findOrCreateCollection(instance, this.name, collectionName)
      instance.databases[this.name].collections[collectionName] = {
        collection:coll,
        documents:{}
      }
      return coll;
  }
  return instance.databases[this.name].collections[collectionName].collection;
};
module.exports = collection;