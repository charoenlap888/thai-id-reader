const legacyEncoding = require('legacy-encoding');


const thai2unicode = buffer =>  Buffer.from(legacyEncoding.decode(buffer,'tis-620')).toString('utf-8');
module.exports = thai2unicode;