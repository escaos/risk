import { Layout } from '@/containers/Layout';
import { useFetchTokens } from '@/services/tokens/useFetchTokens';

const Home = () => {
  const result = useFetchTokens();

  return (
    <Layout>
      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Find your match</h2>
        <p className="text-center">
          {result.data?.tokens.map((token) => (
            <div key={token.name}>
              <p>{token.name}</p>
              <p>{token.symbol}</p>
              <p>{token.address}</p>
            </div>
          ))}
        </p>
      </section>
    </Layout>
  );
};

export default Home;
