import { SERVICE } from './enums';
import { ComplaintRegistry } from './Façade';

const registery = new ComplaintRegistry();

console.log(registery.register('Oleh', SERVICE, 'unavailable'));
