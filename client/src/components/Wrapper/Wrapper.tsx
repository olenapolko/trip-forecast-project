import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

interface WrapperProps {
    children: ReactNode;
  }

function Wrapper({ children }: WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;