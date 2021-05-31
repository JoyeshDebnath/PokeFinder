import React, { useState } from 'react';

export default function useLocalStorage(initial_value) {
    const [value, setValue] = useState(initial_value);
     
    return [value, setValue];
} 