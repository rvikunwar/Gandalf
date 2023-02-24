export interface authStateProps {
    auth: boolean, 
    name: string | null,
    email: string | null,
    phoneNumber: number | null,
    address: string | null,
    profile: string | null,
    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    message: string | undefined,
}

export interface loginProps {
    email: string,
    password: string,
};