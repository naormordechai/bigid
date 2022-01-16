import React, { useState, createContext, FC } from 'react';

interface IAppContext {
    loading: boolean;
    setLoading: (isLoading: boolean) => any;
}

const defaultState = {
    loading: false,
    setLoading: () => {}
};

export const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(defaultState.loading);
    return (
		<AppContext.Provider
			value={{
				loading,
				setLoading
			}}
		>
			{children}
		</AppContext.Provider>
	);
};