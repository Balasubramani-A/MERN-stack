const {format} = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid}\t${message}\n`;            

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'event.log'), logItem);
        console.log("Log event recorded:", logItem);
    } catch (err) {
        console.error("Error logging event:", err);
    }
};

module.exports = logEvents;

const uniqueId = uuid();
console.log("Generated UUID:", uniqueId);

const now = new Date();
const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate);


