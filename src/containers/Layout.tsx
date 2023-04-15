import clsx from 'clsx';
import { ReactNode } from 'react';

import { useThemeContext } from '@/contexts/ThemeContext';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { palette } = useThemeContext();
  const bg = `bg-${palette.primary.main}`;

  console.log('🚀 ~ file: Layout.tsx:16 ~ Layout ~ bg:', bg);
  return (
    <main
      className={clsx('flex min-w-screen min-h-screen flex-col items-center justify-between', bg)}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
};
