import Big from 'big.js';

const GUA_PER_MGUA = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return GUA_PER_MGUA.times(21000000).times(7 / 8);
  }
  if (height < (1 / 12) * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(100).times(7 / 8);
  }
  if (height < 2 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(20).times(7 / 8);
  }
  if (height < 4 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(10).times(7 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(5).times(7 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(2.5).times(7 / 8);
  }

  return GUA_PER_MGUA.times(1.25).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return GUA_PER_MGUA.times(21000000).times(1 / 8);
  }
  if (height < (1 / 12) * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(100).times(1 / 8);
  }
  if (height < 2 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(20).times(1 / 8);
  }
  if (height < 4 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(10).times(1 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(5).times(1 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return GUA_PER_MGUA.times(2.5).times(1 / 8);
  }

  return GUA_PER_MGUA.times(1.25).times(1 / 8);
}
