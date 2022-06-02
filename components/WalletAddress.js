import PropTypes from 'prop-types';
import { useEnsLookup } from 'wagmi';
import { trimAddress } from '../utils/address';

export const WalletAddress = ({ address }) => {
  const [{ data, isLoading }] = useEnsLookup({
    address,
  });

  if (data && !isLoading) {
    return <>{data}</>;
  }

  return <>{trimAddress(address)}</>;
};

WalletAddress.propTypes = {
  address: PropTypes.string.isRequired,
};
