import useSeo from '../hooks/use-seo';

const SeoComponent = () => {
  const { SeoComponent: SeoElement } = useSeo();
  return <SeoElement />;
};

export default SeoComponent; 