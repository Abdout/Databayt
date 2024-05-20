import React from 'react';
import { ComponentConfig } from './try';

export interface ComponentProps {
  size?: string;
  color?: string;
}

export interface ContextType {
  selectedComponent: string;
  componentConfig: ComponentConfig | null;
  props: ComponentProps;
  selectComponent: (componentName: string, newProps: ComponentProps) => void;
  activeProp: string | null;
  setActiveProp: (prop: string | null) => void;
}

export const ComponentContext = React.createContext<ContextType>({
  selectedComponent: '',
  componentConfig: null,
  props: {},
  selectComponent: () => {},
  activeProp: null,
  setActiveProp: () => {},
});
