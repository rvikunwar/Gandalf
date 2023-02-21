import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ImageProp = Record<string, ReturnType<typeof require>>

export type RootStackParamList = {
    ProfessionalManagement: undefined;
};

export type ProfManagementProps = NativeStackScreenProps<RootStackParamList, 'ProfessionalManagement'>;