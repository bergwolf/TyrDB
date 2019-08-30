// TODO : Directory should be it's own repo in Khal or similar stuff.
const Directory = require('../../FsAdapter/Directory/Directory');
async function connectAdapter(tyrInstance){
  this.setTyrInstance(tyrInstance);

  const {path} = tyrInstance.options;
  if(!path){
    throw new Error("Expected path");
  }
  await Directory.ensure(path);
}
module.exports = connectAdapter