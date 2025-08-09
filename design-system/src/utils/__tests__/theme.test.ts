import { setTheme, setBrand, getCurrentTheme, getCurrentBrand, initializeTheme, themes, brands, type Theme, type Brand } from '../theme';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock document.documentElement
const documentElementMock = {
  setAttribute: jest.fn(),
  getAttribute: jest.fn(),
};
Object.defineProperty(document, 'documentElement', {
  value: documentElementMock
});

describe('Theme Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    documentElementMock.getAttribute.mockReturnValue(null);
  });

  describe('Constants', () => {
    it('should have correct theme values', () => {
      expect(themes.light).toBe('light');
      expect(themes.dark).toBe('dark');
    });

    it('should have correct brand values', () => {
      expect(brands.patient).toBe('patient');
      expect(brands.doctor).toBe('doctor');
    });
  });

  describe('setTheme', () => {
    it('should set theme attribute and localStorage', () => {
      setTheme('dark');
      
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    });

    it('should work with light theme', () => {
      setTheme('light');
      
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
    });
  });

  describe('setBrand', () => {
    it('should set brand attribute and localStorage', () => {
      setBrand('doctor');
      
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-brand', 'doctor');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('brand', 'doctor');
    });

    it('should work with patient brand', () => {
      setBrand('patient');
      
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-brand', 'patient');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('brand', 'patient');
    });
  });

  describe('getCurrentTheme', () => {
    it('should return theme from document attribute', () => {
      documentElementMock.getAttribute.mockReturnValue('dark');
      
      const result = getCurrentTheme();
      
      expect(documentElementMock.getAttribute).toHaveBeenCalledWith('data-theme');
      expect(result).toBe('dark');
    });

    it('should return light as default when no theme is set', () => {
      documentElementMock.getAttribute.mockReturnValue(null);
      
      const result = getCurrentTheme();
      
      expect(result).toBe('light');
    });
  });

  describe('getCurrentBrand', () => {
    it('should return brand from document attribute', () => {
      documentElementMock.getAttribute.mockReturnValue('doctor');
      
      const result = getCurrentBrand();
      
      expect(documentElementMock.getAttribute).toHaveBeenCalledWith('data-brand');
      expect(result).toBe('doctor');
    });

    it('should return patient as default when no brand is set', () => {
      documentElementMock.getAttribute.mockReturnValue(null);
      
      const result = getCurrentBrand();
      
      expect(result).toBe('patient');
    });
  });

  describe('initializeTheme', () => {
    it('should initialize theme and brand from localStorage', () => {
      localStorageMock.getItem
        .mockReturnValueOnce('dark') // theme
        .mockReturnValueOnce('doctor'); // brand
      
      initializeTheme();
      
      expect(localStorageMock.getItem).toHaveBeenCalledWith('theme');
      expect(localStorageMock.getItem).toHaveBeenCalledWith('brand');
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-brand', 'doctor');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('brand', 'doctor');
    });

    it('should use defaults when localStorage is empty', () => {
      localStorageMock.getItem.mockReturnValue(null);
      
      initializeTheme();
      
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
      expect(documentElementMock.setAttribute).toHaveBeenCalledWith('data-brand', 'patient');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('brand', 'patient');
    });
  });
});
