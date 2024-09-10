import React, { createContext, useState, ReactNode } from 'react';

interface UserProfile {
    firstName: string;
    lastName: string;
}

interface UserProfileContextType {
    userProfile: UserProfile;
    setUserProfile: (profile: UserProfile) => void;
}

const defaultProfile: UserProfile = {
    firstName: '',
    lastName: '',
};

export const UserProfileContext = createContext<UserProfileContextType>({
    userProfile: defaultProfile,
    setUserProfile: () => {},
});

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userProfile, setUserProfile] = useState<UserProfile>(defaultProfile);

    return (
        <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
            {children}
        </UserProfileContext.Provider>
    );
};