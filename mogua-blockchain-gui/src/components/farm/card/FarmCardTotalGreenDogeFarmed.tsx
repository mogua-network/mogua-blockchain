import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { mog_to_mogua } from '../../../util/mogua';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardTotalMoGuaFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalMoGuaFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return mog_to_mogua(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total MoGua Farmed</Trans>}
      value={totalMoGuaFarmed}
      loading={loading}
    />
  );
}
