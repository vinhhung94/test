import { describe, it } from "node:test";
import { orderArray } from '../index' 
import {unOrderFlight} from '../constant';
const assert = require('assert');
describe('Test Key', () => {
    describe('orderFlight', () => {
        it('should order flight', (done) => {
            const order = orderArray(unOrderFlight);
            return order;
        })
    })
})

