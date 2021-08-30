const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Mogua {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const mogua_formatter = (value, unit) => new Mogua(value, unit);

mogua_formatter.convert = convert;
mogua_formatter.setDisplay = units.setDisplay;
mogua_formatter.setUnit = units.setUnit;
mogua_formatter.getUnit = units.getUnit;
mogua_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const mog_to_mogua = (mog) => {
  return mogua_formatter(Number.parseInt(mog), 'mog').to('mogua').value();
};

export const mogua_to_mog = (mogua) => {
  return mogua_formatter(Number.parseFloat(Number(mogua)), 'mogua')
    .to('mog')
    .value();
};

export const mog_to_mogua_string = (mog) => {
  return mogua_formatter(Number(mog), 'mog').to('mogua').toString();
};

export const mog_to_colouredcoin = (mog) => {
  return mogua_formatter(Number.parseInt(mog), 'mog')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_mog = (colouredcoin) => {
  return mogua_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('mog')
    .value();
};

export const mog_to_colouredcoin_string = (mog) => {
  return mogua_formatter(Number(mog), 'mog').to('colouredcoin').toString();
};
