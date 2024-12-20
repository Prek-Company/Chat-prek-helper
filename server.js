const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('Новое подключение');
    ws.on('message', (message) => {
        console.log('Получено сообщение:', message);
    });
});

console.log('Сервер работает на порту 8080');