import { useFetchTokens } from '@/services/tokens/useFetchTokens';
import { Inter } from 'next/font/google';

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const result = useFetchTokens();
  console.log('🚀 ~ file: index.tsx:9 ~ Home ~ result:', result);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className={`${inter.className} text-4xl font-bold`}>Match</h1>
        <>search</>
        <>profileMenu</>
      </header>

      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Find your match</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, nisl nec ultricies
          lacinia, nisl nisl aliquet nisl, nec tincidunt nisl lorem nec nisl. Nulla facilisi. Nulla
          facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Nulla facilisi. Nulla facilisi. Nulla
        </p>
      </section>
    </main>
  );
};

export default Home;
