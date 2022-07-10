import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="mx-auto p-16 min-h-screen">{children}</div>;
};

export default Layout;
