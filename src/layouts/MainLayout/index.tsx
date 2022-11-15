import type { NextPage } from 'next';
import Header from '../../components/Header';

interface HomeProps {
  children: React.ReactNode;
}
const MainLayout: NextPage<HomeProps> = ({ children }) => {
  return (
    <div
      className="main-layout"
      style={{ position: 'absolute', width: '100%', height: '100vh' }}
    >
      <header>
        <Header />
      </header>
      <div className="container">{children}</div>
    </div>
  );
};

export default MainLayout;
