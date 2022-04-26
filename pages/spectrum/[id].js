import { useRouter } from 'next/router';

const Spectrum = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log('id', id);

  return <p>Spectrum: {id}</p>;
};

export default Spectrum;
