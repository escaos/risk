import { useThemeContext } from '@/contexts/ThemeContext';
import { THEME_LIGHT } from '@/contexts/themeContext/themeConstants';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useThemeContext();

  const isLightTheme = theme === THEME_LIGHT;

  return (
    <div className="flex items-center justify-center space-x-2 relative">
      <MoonIcon
        className={`absolute left-4 w-6 h-6 text-gray-400 ${isLightTheme ? 'hidden' : ''}`}
      />
      <div
        className={`bg-gray-300 rounded-full p-1 w-16 h-[32px] flex items-center cursor-pointer transition-colors ${
          isLightTheme ? 'justify-start' : 'justify-end'
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white shadow-md ${isLightTheme ? 'ml-1' : 'mr-1'} `}
        />
      </div>
      <SunIcon
        className={`absolute right-4 w-4 h-6 text-yellow-400 ${isLightTheme ? '' : 'hidden'}`}
      />
    </div>
  );
};
