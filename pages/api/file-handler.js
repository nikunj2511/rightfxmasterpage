const multer  = require('multer')
const storage = multer.memoryStorage();
module.exports = {
    // TODO add file max filter
    // TODO allow only specific files
    uploadInMemory: multer({ storage }),
  };