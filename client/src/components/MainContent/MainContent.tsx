interface MainContentProps {
  children: React.ReactNode; 
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return <section>{children}</section>;
};