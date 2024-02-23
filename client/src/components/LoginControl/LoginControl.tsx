import React from 'react';
import { useAuth } from 'src/context/AuthContext'; 
import googleIcon from "../../assets/images/google.svg";
import styles from './LoginControl.module.css'

interface LoggedInUserIconProps {
  pictureUrl: string;
}

const AuthorizeIcon = () => (
  <img className={`${styles.userImg} ${styles.userUnauthorized}`} src={googleIcon} alt="Google icon" />
);

const LoggedInUserIcon: React.FC<LoggedInUserIconProps> = ({ pictureUrl }) => (
  <img className={`${styles.userImg} ${styles.userAuthorized}`} src={pictureUrl} alt="User icon" />
);

const LoginControl: React.FC = () => {
  const { user, login, logout } = useAuth();

  const handleIconClick = () => user ? logout() : login();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.iconWrapper} onClick={handleIconClick}>
        {user ? <LoggedInUserIcon pictureUrl={user.picture} /> : <AuthorizeIcon />}
      </div>
    </div>
  );
};

export default LoginControl;
