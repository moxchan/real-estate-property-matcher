"use client";

import { Button, LogoButton } from "@/components/atoms";
import { toast } from "react-toastify";
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { useLocalUserStorage } from "@/@utils/useLocalUser";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./UserSignUpForm.module.css";
import { useAppStore } from "@/stores/useAppStore";

const UserSignUpForm = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const { setLocalUser } = useLocalUserStorage();
  const { setUser } = useAppStore();

  const onSocialsClick = () => {
    toast.error("Oops! Not enough funding error");
  };

  const onContinueClick = () => {
    const newUser = { name: name, savedItems: [] };
    setLocalUser(newUser);
    setUser(newUser);
    router.push("/");
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <LogoButton mode="light" />
        <div className={styles.title}>{"Create Account"}</div>
        <div className={styles.text}>
          {"This is just for us to know who posts listings!"}
        </div>
        <div
          className={styles.inputCluster}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onContinueClick();
            }
          }}
        >
          <input
            className={styles.input}
            type="text"
            placeholder="Your name here..."
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <Button expanded variant="primary" onClick={onContinueClick}>
            Continue
          </Button>
        </div>
        <div className={styles.title}>{"or"}</div>
        <div className={styles.inputCluster}>
          <Button expanded icon={<IconBrandGoogle />} onClick={onSocialsClick}>
            Continue with Google
          </Button>
          <Button
            expanded
            icon={<IconBrandFacebook />}
            onClick={onSocialsClick}
          >
            Continue with Facebook
          </Button>
          <Button expanded icon={<IconBrandApple />} onClick={onSocialsClick}>
            Continue with Apple
          </Button>
        </div>
      </div>
      <div className={styles.privacy}>
        {"We pinky promise we do not steal your data"}
      </div>
    </div>
  );
};

export default UserSignUpForm;
