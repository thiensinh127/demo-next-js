import type { NextPage } from 'next';
import Header from '../../components/Header';

interface HomeProps {
  children: React.ReactNode;
}
const MainLayout: NextPage<HomeProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <Header />
      </header>
      <div className="container">{children}</div>
    </div>
  );
};

export default MainLayout;
