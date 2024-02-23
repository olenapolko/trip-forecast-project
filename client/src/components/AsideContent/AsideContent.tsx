import styles from './AsideContent.module.css'

interface AsideContentProps {
    children: React.ReactNode; 
  }
  
export const AsideContent: React.FC<AsideContentProps> = ({ children }) => {
    return <aside className={styles.aside}>{children}</aside>;
};