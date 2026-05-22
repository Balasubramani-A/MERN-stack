const {format} = require('date-fns');

const now = new Date();
const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate);