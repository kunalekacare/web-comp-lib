export const themes = {
  light: 'light',
  dark: 'dark'
} as const;

export const brands = {
  patient: 'patient',
  doctor: 'doctor'
} as const;

export type Theme = typeof themes[keyof typeof themes];
export type Brand = typeof brands[keyof typeof brands];

export function setTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function setBrand(brand: Brand) {
  document.documentElement.setAttribute('data-brand', brand);
  localStorage.setItem('brand', brand);
}

export function getCurrentTheme(): Theme {
  return (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
}

export function getCurrentBrand(): Brand {
  return (document.documentElement.getAttribute('data-brand') as Brand) || 'patient';
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') as Theme || 'light';
  const savedBrand = localStorage.getItem('brand') as Brand || 'patient';
  
  setTheme(savedTheme);
  setBrand(savedBrand);
}
