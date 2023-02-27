
export interface authStateProps {
    auth?: boolean, 
    token: string,
    id: null| number,
    firstName: string,
    lastName: string,
    email: string | null,
    contact: string | number,
    createdAt: string,
    isActive: boolean,
    isProfileVerified: boolean, 
    isVerified: boolean, 
    isFetching?: boolean,
    isSuccess?: boolean,
    isError?: boolean,
    message?: string | undefined,
}

export interface userProps {
    id: number,
    firstName: string,
    lastName: string,
    email: string | null,
    contact: string | number,
    role: number | undefined,
    createdAt: string,
    isActive: boolean,
    isProfileVerified: boolean, 
    isVerified: boolean,
    userSecretKey: string,
}

export interface userStateProps {
    professionals: userProps[],
    business: userProps[],
    isFetching?: boolean,
    isSuccess?: boolean,
    isError?: boolean,
    message?: string | undefined,
}

export interface loginProps {
    email: string,
    password: string,
};

export interface SerializedError {
    message:  string | undefined;
}