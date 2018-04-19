const assert = require('assert')
const SSRD = require('../middleware/ssrd')

// Get enviroment in the .env
require('dotenv').config()

describe('SSRD API', () => {
  describe('/getChain', () => {
    it('Should return a chain with only the genesis block', () => {
      const req = {}
      SSRD.getChain(req, {}, () => {
        const chain = req.responseValue.chain
        assert.equal(chain.length, 1)
      })

    })
  })
  describe('/mine', () => {
    it('Should mine a new block to add into the chain', () => {
      const req = {}
      SSRD.mine(req, {}, () => {
        SSRD.getChain(req, {}, () => {
          const chain = req.responseValue.chain
          assert.equal(chain.length, 2)
        })
      })
    })
  })
  describe('/transaction/new', () => {
    it('Should add the new transaction to the next mining', () => {
      const req = {
        body: {
          verifier: 'verifier1',
          derbyGirl: 'derbyGirl2',
          item: "10-4 in 2:10 or less"
        }
      }
      SSRD.newTransaction(req, {}, () =>{
        SSRD.mine(req, {}, () => {
          SSRD.getChain(req, {}, () => {
            const chain = req.responseValue.chain
            const transactions = chain.slice(-1)[0].transactions
            assert.equal(transactions[0].verifier, 'verifier1')
          })
        })
      })
    })
  })
})
