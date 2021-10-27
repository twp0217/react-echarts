import React from 'react';
import { EChartsContextProps } from './interface';

const EChartsContext = React.createContext<EChartsContextProps>({});

export const EChartsContextProvider = EChartsContext.Provider;

export default EChartsContext;
