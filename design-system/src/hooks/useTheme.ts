import { useState, useEffect } from 'react';
import { setTheme, getCurrentTheme, setBrand, getCurrentBrand, Theme, Brand } from '../utils/theme';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getCurrentTheme());
  const [brand, setBrandState] = useState<Brand>(getCurrentBrand());

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  const changeBrand = (newBrand: Brand) => {
    setBrand(newBrand);
    setBrandState(newBrand);
  };

  useEffect(() => {
    // Initialize from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme || 'light';
    const savedBrand = localStorage.getItem('brand') as Brand || 'patient';
    
    setTheme(savedTheme);
    setBrand(savedBrand);
  }, []);

  return { 
    theme, 
    brand, 
    changeTheme, 
    changeBrand,
    isLight: theme === 'light',
    isDark: theme === 'dark',
    isPatient: brand === 'patient',
    isDoctor: brand === 'doctor'
  };
}
