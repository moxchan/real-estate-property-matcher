"use client";

import { useLocalUserStorage } from "@/@utils/useLocalUser";
import { UserProfilePage, UserSignUpPage } from "@/components/templates";

const ProfilePage = () => {
  const { getLocalUser } = useLocalUserStorage();

  const user = getLocalUser();

  return <div>{user ? <UserProfilePage /> : <UserSignUpPage />}</div>;
};

export default ProfilePage;
