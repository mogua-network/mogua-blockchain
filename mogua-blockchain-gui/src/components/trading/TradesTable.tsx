import React, { useMemo, ReactNode } from 'react';
import { Table } from '@mogua/core';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { Box } from '@material-ui/core';
import { mojo_to_mogua_string, mojo_to_colouredcoin_string } from '../../util/mogua';
import WalletType from '../../constants/WalletType';

const Amount = styled(Box)`
  white-space: normal;
  overflow-wrap: break-word;
`;

const cols = [
  {
    field: 'side',
    title: <Trans>Side</Trans>,
  },
  {
    field: 'amount',
    title: <Trans>Amount</Trans>,
  },
  {
    field: 'name',
    title: <Trans>Colour</Trans>,
  },
];

type Trade = {
  amount: bigint;
  name: ReactNode;
  type: WalletType;
};

type Props = {
  rows: Trade[];
};

export default function TradesTable(props: Props) {
  const { rows } = props;

  const tableRows = useMemo(
    () =>
      rows.map((row) => {
        const { amount, name, type } = row;
        const humanAmount = amount < 0 ? -amount : amount;
        const displayAmount = type === WalletType.COLOURED_COIN ? mojo_to_colouredcoin_string(humanAmount) : mojo_to_mogua_string(humanAmount);

        return {
          side: amount < 0 ? <Trans>Sell</Trans> : <Trans>Buy</Trans>,
          name: <Amount>{name}</Amount>,
          amount: <Amount>{displayAmount}</Amount>,
        };
      }),
    [rows],
  );

  return <Table cols={cols} rows={tableRows} />;
}
