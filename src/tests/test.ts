import Indicators from '../'
import chai from 'chai'
const should = chai.should()
const assert = chai.assert

/**
 * Indicators Class
 */

describe('Indicators', function() {
	var ind: any = null
	var indData: any = null
	before(async function() {
		this.timeout(15000)
		ind = new Indicators()
		indData = await ind.getData({
			ticker: 'SPY',
			exchange: 'AMEX',
			interval: '15min'
		})
  })
	it('Is function', function() {
		Indicators.should.be.a('function')
	})
	it('Returns recommendations', async function() {
		assert.equal(indData.RSI != null, true)
	})
})