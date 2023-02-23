import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
    Login: undefined;
    MainScreen: undefined;
    Profile: undefined;
    // ProfessionalManagement: undefined;
};

// Define the navigation props for the Native Stack Navigator
export type StackNavProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};


/**
 * Professional screen
 */
export type ProfStackParamList = {
  ProfessionalManagement: undefined;
};

export type ProfStackNavProps<T extends keyof ProfStackParamList> = {
  navigation: NativeStackNavigationProp<ProfStackParamList, T>;
  route: RouteProp<ProfStackParamList, T>;
};


export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

// Define the screens and their respective 
// parameters for the Native Stack Navigator
type ProfessionalStackParamList = {
    ProfessionalManagement: undefined;
};

// Define the screens and their respective 
// parameters for the Bottom Tab Navigator
type BottomTabParamList = {
    ProfessionalManagement: undefined;
    BussinessManagement: undefined;
};

// Combine both StackParamList and BottomTabParamList into one NavigatorParamList
type NavigatorParamList = ProfessionalStackParamList & BottomTabParamList;



// Define the navigation props for the Bottom Tab Navigator
type BottomTabNavProps<T extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<BottomTabParamList, T>;
  route: RouteProp<BottomTabParamList, T>;
};