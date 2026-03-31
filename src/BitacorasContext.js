import React, { createContext, useState } from 'react';

export const BitacoraContext = createContext();

export const BitacoraProvider = ({ children }) => {
    const [bitacoras, setBitacoras] = useState([
        { id: 1, numero: 1, estado: "Aprobada" },
        { id: 2, numero: 2, estado: "Aprobada" },
        { id: 3, numero: 3, estado: "Aprobada" },
    ]);

    const agregarBitacora = (nuevaBitacora) => {
        setBitacoras(prev => [...prev, { ...nuevaBitacora, id: Date.now().toString(), estado: "Pendiente" }]);
    };

    const eliminarBitacora = (id) => {
        setBitacoras((prev) => prev.filter(b => b.id !== id));
    };

    return (
        <BitacoraContext.Provider value={{ bitacoras, agregarBitacora, eliminarBitacora }}>
            {children}
        </BitacoraContext.Provider>
    );
};