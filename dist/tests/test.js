"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const chai_1 = __importDefault(require("chai"));
const should = chai_1.default.should();
const assert = chai_1.default.assert;
/**
 * Indicators Class
 */
describe('Indicators', function () {
    var ind = null;
    var indData = null;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            ind = new __1.default();
            indData = yield ind.getData({
                ticker: 'SPY',
                exchange: 'AMEX',
                interval: '15min'
            });
        });
    });
    it('Is function', function () {
        __1.default.should.be.a('function');
    });
    it('Returns recommendations', function () {
        return __awaiter(this, void 0, void 0, function* () {
            assert.equal(indData.RSI != null, true);
        });
    });
});
