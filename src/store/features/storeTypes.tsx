
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
    user: UserDetailProps | null,
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

export interface UserProps{
    userId: number,
    userRole: number
}

interface SkillProps {
    id: number,
    profileId: number,
    skillId: number,
    skill?: {
        id?: number,
        name?: string,
        skillRole?: string
    }
}

interface QualificationProps{
    id: number,
    profileId: number,
    qualificationId: number,
    qualification: {
        id?: number,
        value?: string
    }
}

interface UserBasicProps{
    id: number,
    firstName: string,
    lastName?: string,
    email: string,
    contact: null| string,
    role: number,
    isActive: boolean,
    isVerified: boolean,
    userSecretKey: string,
    isProfileVerified: boolean,
    createdAt: string
}

export interface Job {
    id: number;
    jobName: string;
    projectName: string;
    action: string;
}

export interface UserDetailProps{
    id?: number,
    hourlyRate?: number,
    availability?: number,
    profilePicture?: null|string,
    currentRole?: string,
    linkedinURL?: null | string,
    workExperience?: number,
    aboutMe: string,
    userId: number,
    applyAs: number,
    about?: string;
    foundedin?: string;
    companyName?: string;
    skill?: SkillProps[],
    qualification: QualificationProps[],
    user?: UserBasicProps,
    customSkill?: string[],
    jobApplication?: Job[]
}

