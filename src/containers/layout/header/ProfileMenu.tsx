import { SwitchTheme } from '@/containers/SwitchTheme';
import { useThemeContext } from '@/contexts/ThemeContext';
import { useToggle } from '@/shared/hooks/useToggle';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';

export const ProfileMenu = () => {
  const { palette } = useThemeContext();
  const { state: isOpen, toggle } = useToggle();

  return (
    <nav className="flex items-center">
      <button type="button" onClick={toggle} className="flex items-center flex-row">
        <Bars3Icon className={`h-6 w-6 bg-[${palette.icons.primary}]`} />
        <div className="flex items-center flex-row rounded-2xl bg-white p-1">
          <UserCircleIcon className={`h-6 w-6 bg-[${palette.icons.primary}]`} />
          <span className="text-md font-bold"> Edison</span>
        </div>
      </button>
      <SwitchTheme />
      {isOpen && (
        <aside className={`absolute min-w-10 top-[40px] bg-[${palette.icons.primary}]`}>
          <ul>
            <li>
              <SwitchTheme />
            </li>
            <li>
              <a href="#">Connect Wallet</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </aside>
      )}
    </nav>
  );
};

export default ProfileMenu;
