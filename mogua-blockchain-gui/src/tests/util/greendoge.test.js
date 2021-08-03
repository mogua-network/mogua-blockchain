const mogua = require('../../util/mogua');

describe('mogua', () => {
  it('converts number mog to mogua', () => {
    const result = mogua.dog_to_greendoge(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mog to mogua', () => {
    const result = mogua.dog_to_greendoge('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mog to mogua string', () => {
    const result = mogua.dog_to_greendoge_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mog to mogua string', () => {
    const result = mogua.dog_to_greendoge_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number mogua to mog', () => {
    const result = mogua.greendoge_to_dog(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string mogua to mog', () => {
    const result = mogua.greendoge_to_dog('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mog to colouredcoin', () => {
    const result = mogua.dog_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mog to colouredcoin', () => {
    const result = mogua.dog_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mog to colouredcoin string', () => {
    const result = mogua.dog_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mog to colouredcoin string', () => {
    const result = mogua.dog_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mog', () => {
    const result = mogua.colouredcoin_to_dog(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mog', () => {
    const result = mogua.colouredcoin_to_dog('1000');

    expect(result).toBe(1000000);
  });
});
