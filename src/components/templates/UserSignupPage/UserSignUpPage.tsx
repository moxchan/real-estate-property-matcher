import { UserSignUpForm } from "@/components/molecules";

import styles from "./UserSignUpPage.module.css";

const UserSignUpPage = () => {
  return (
    <div className={styles.root}>
      <UserSignUpForm />
    </div>
  );
};

export default UserSignUpPage;
