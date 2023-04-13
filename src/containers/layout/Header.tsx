import Logo from './header/Logo';
import ProfileMenu from './header/ProfileMenu';
import { SearchBar } from './header/SearchBar';

export const Header = () => {
  return (
    <header className="flex w-full justify-between p-2">
      <ProfileMenu />
      <Logo />
      <SearchBar />
    </header>
  );
};
