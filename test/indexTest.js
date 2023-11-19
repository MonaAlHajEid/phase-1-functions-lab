const {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
} = require('../index.js');
const { expect } = require('chai');

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    });
  });

  describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(34, 38)).to.equal(1056);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(34, 42)).to.equal(1584);
    });

    it('returns distance when destination is below start', function() {
      expect(distanceTravelledInFeet(42, 34)).to.equal(1584);
    });
  });

  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(34, 34)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000', function() {
      expect(calculatesFarePrice(34, 32)).to.equal(0.4);
    });

    it('charges 25 dollars for a distance over 2000 feet and under 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 20)).to.equal('cannot travel that far');
    });
  });
});
