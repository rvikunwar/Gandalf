import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined;
    MainScreen: NavigatorScreenParams<BottomTabParamList>;
    Profile: undefined;
    BusinessDetail: { userId: number, userRole: number };
    ProfessionalDetail: { userId: number, userRole: number };
};


//Tab navigation
export type BottomTabParamList = {
  Professional: NavigatorScreenParams<ProfStackParamList>;
  Business: NavigatorScreenParams<BusinessStackParamList>;
};


//Professional screen/tab
export type ProfStackParamList = {
  ProfessionalManagement: undefined;
};


//Business screen/tab
export type BusinessStackParamList = {
  BusinessManagement: undefined;
};


export type ProfessionalScreenNavigationProp = CompositeScreenProps<
  NativeStackScreenProps<ProfStackParamList>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, 'Professional'>,
    NativeStackScreenProps<RootStackParamList, "ProfessionalDetail">
  >
>;


export type BusinessScreenNavigationProp = CompositeScreenProps<
  NativeStackScreenProps<BusinessStackParamList>,
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, 'Business'>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type ProfessionalScreenRouteProp = RouteProp<RootStackParamList, 'ProfessionalDetail'>;

export type BusinessScreenRouteProp = RouteProp<RootStackParamList, 'BusinessDetail'>;

