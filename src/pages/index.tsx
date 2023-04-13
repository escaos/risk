import { Layout } from '@/containers/Layout';
import { useFetchTokens } from '@/services/tokens/useFetchTokens';

const Home = () => {
  const result = useFetchTokens();
  console.log('🚀 ~ file: index.tsx:9 ~ Home ~ result:', result);

  return (
    <Layout>
      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Find your match</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, nisl nec ultricies
          lacinia, nisl nisl aliquet nisl, nec tincidunt nisl lorem nec nisl. Nulla facilisi. Nulla
          facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Nulla facilisi. Nulla facilisi. Nulla
        </p>
      </section>
    </Layout>
  );
};

export default Home;
