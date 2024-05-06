import { Server } from './Server';
import { aws } from './Decorator';

const server = aws(new Server('12.34.23.56', 8080));

console.log('server', server);
