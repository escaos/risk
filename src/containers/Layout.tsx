import { ReactNode } from 'react';

import { useThemeContext } from '@/contexts/ThemeContext';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { palette } = useThemeContext();

  return (
    <main
      className={`flex min-w-screen min-h-screen flex-col items-center justify-between bg-[${palette.primary.main}]`}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
};
