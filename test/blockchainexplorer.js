'use strict';

var _ = require('lodash');
var chai = require('chai');
var sinon = require('sinon');
var should = chai.should();
var BlockchainExplorer = require('../lib/blockchainexplorer');
var Constants = require('../lib/common/constants');

describe('Blockchain explorer', function() {
  describe('#constructor', function() {
    it('should return a blockchain explorer with basic methods', function() {
      var exp = new BlockchainExplorer({
        provider: 'explorer',
        network: Constants.LIVENET,
      });
      should.exist(exp);
      exp.should.respondTo('broadcast');
      exp.should.respondTo('getUtxos');
      exp.should.respondTo('getTransactions');
      exp.should.respondTo('getAddressActivity');
      exp.should.respondTo('estimateFee');
      exp.should.respondTo('initSocket');
      var exp = new BlockchainExplorer({
        provider: 'explorer',
        network: Constants.LIVENET,
      });
      should.exist(exp);
    });
    it('should fail on unsupported provider', function() {
      (function() {
        var exp = new BlockchainExplorer({
          provider: 'dummy',
        });
      }).should.throw('not supported');
    });
  });
});
