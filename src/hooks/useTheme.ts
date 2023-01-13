import { useContext } from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';

const useTheme = () => {
  // const [isDark, toggleTheme] = useThemeManager();
  const theme = useContext(StyledThemeContext);
  return { isDark: true, theme, toggleTheme: () => {
    console.info('TODO')
  } };
};

export default useTheme;
