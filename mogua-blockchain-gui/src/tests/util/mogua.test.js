const mogua = require('../../util/mogua');

describe('mogua', () => {
  it('converts number mojo to mogua', () => {
    const result = mogua.mojo_to_mogua(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to mogua', () => {
    const result = mogua.mojo_to_mogua('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to mogua string', () => {
    const result = mogua.mojo_to_mogua_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to mogua string', () => {
    const result = mogua.mojo_to_mogua_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number mogua to mojo', () => {
    const result = mogua.mogua_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string mogua to mojo', () => {
    const result = mogua.mogua_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = mogua.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = mogua.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = mogua.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = mogua.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = mogua.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = mogua.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
