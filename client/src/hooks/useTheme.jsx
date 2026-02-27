import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext/ThemeContext';

const useTheme = () => {
    const all = useContext(ThemeContext);
    return all;
};

export default useTheme;