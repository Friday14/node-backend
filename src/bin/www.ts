import {app} from '../app'
import {dbClient} from "../db";
import * as http from 'http';

const port = process.env.APP_PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function onError() {

}

async function onListening() {
    try {
        await dbClient.connect();
    } catch (err) {
        console.error('Database connect failed');
        console.error(err);
    }
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}