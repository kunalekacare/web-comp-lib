import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';
import * as themeUtils from '../../utils/theme';

// Mock the theme utilities
jest.mock('../../utils/theme', () => ({
  setTheme: jest.fn(),
  getCurrentTheme: jest.fn(),
  setBrand: jest.fn(),
  getCurrentBrand: jest.fn(),
}));

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

describe('useTheme', () => {
  const mockSetTheme = themeUtils.setTheme as jest.MockedFunction<typeof themeUtils.setTheme>;
  const mockGetCurrentTheme = themeUtils.getCurrentTheme as jest.MockedFunction<typeof themeUtils.getCurrentTheme>;
  const mockSetBrand = themeUtils.setBrand as jest.MockedFunction<typeof themeUtils.setBrand>;
  const mockGetCurrentBrand = themeUtils.getCurrentBrand as jest.MockedFunction<typeof themeUtils.getCurrentBrand>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetCurrentTheme.mockReturnValue('light');
    mockGetCurrentBrand.mockReturnValue('patient');
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(result.current.brand).toBe('patient');
    expect(result.current.isLight).toBe(true);
    expect(result.current.isDark).toBe(false);
    expect(result.current.isPatient).toBe(true);
    expect(result.current.isDoctor).toBe(false);
  });

  it('should initialize with values from localStorage', () => {
    localStorageMock.getItem
      .mockReturnValueOnce('dark') // theme
      .mockReturnValueOnce('doctor'); // brand

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light'); // Initial state before useEffect
    expect(result.current.brand).toBe('patient'); // Initial state before useEffect
  });

  it('should change theme when changeTheme is called', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeTheme('dark');
    });

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
    expect(result.current.theme).toBe('dark');
    expect(result.current.isLight).toBe(false);
    expect(result.current.isDark).toBe(true);
  });

  it('should change brand when changeBrand is called', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeBrand('doctor');
    });

    expect(mockSetBrand).toHaveBeenCalledWith('doctor');
    expect(result.current.brand).toBe('doctor');
    expect(result.current.isPatient).toBe(false);
    expect(result.current.isDoctor).toBe(true);
  });

  it('should initialize with custom values', () => {
    mockGetCurrentTheme.mockReturnValue('dark');
    mockGetCurrentBrand.mockReturnValue('doctor');

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(result.current.brand).toBe('doctor');
    expect(result.current.isLight).toBe(false);
    expect(result.current.isDark).toBe(true);
    expect(result.current.isPatient).toBe(false);
    expect(result.current.isDoctor).toBe(true);
  });

  it('should provide correct boolean helpers', () => {
    mockGetCurrentTheme.mockReturnValue('dark');
    mockGetCurrentBrand.mockReturnValue('doctor');

    const { result } = renderHook(() => useTheme());

    expect(result.current.isLight).toBe(false);
    expect(result.current.isDark).toBe(true);
    expect(result.current.isPatient).toBe(false);
    expect(result.current.isDoctor).toBe(true);
  });

  it('should handle multiple theme changes', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
    expect(mockSetTheme).toHaveBeenCalledWith('dark');

    act(() => {
      result.current.changeTheme('light');
    });

    expect(result.current.theme).toBe('light');
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('should handle multiple brand changes', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeBrand('doctor');
    });

    expect(result.current.brand).toBe('doctor');
    expect(mockSetBrand).toHaveBeenCalledWith('doctor');

    act(() => {
      result.current.changeBrand('patient');
    });

    expect(result.current.brand).toBe('patient');
    expect(mockSetBrand).toHaveBeenCalledWith('patient');
  });

  it('should return all expected properties', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toHaveProperty('theme');
    expect(result.current).toHaveProperty('brand');
    expect(result.current).toHaveProperty('changeTheme');
    expect(result.current).toHaveProperty('changeBrand');
    expect(result.current).toHaveProperty('isLight');
    expect(result.current).toHaveProperty('isDark');
    expect(result.current).toHaveProperty('isPatient');
    expect(result.current).toHaveProperty('isDoctor');
  });

  it('should call theme utilities correctly', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeTheme('dark');
      result.current.changeBrand('doctor');
    });

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
    expect(mockSetBrand).toHaveBeenCalledWith('doctor');
  });
});
