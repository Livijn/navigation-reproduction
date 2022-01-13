import { RootStackParamList } from '@/navigation/RootStackNavigator';
import React from 'react';
import { SharedParamList } from '@/navigation/SharedNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, SharedParamList {}
  }
}

export interface ComponentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
