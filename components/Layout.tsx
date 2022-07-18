import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="mx-auto px-8 lg:px-16 py-16">{children}</div>;
};

export default Layout;
