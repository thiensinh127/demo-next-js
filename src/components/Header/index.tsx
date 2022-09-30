import {
  BellOutlined,
  LoginOutlined,
  MessageOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Divider, Dropdown, Input, Layout, Menu, Switch } from 'antd';
import CustomImage from 'atomics/Image';
import { signInWithPopup } from 'firebase/auth';
import { FC } from 'react';
import Logo from '../../../public/images/logo.png';
import { auth, provider } from '../../services/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';

import CustomButton from 'atomics/Button';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import { login, logout, selectUser } from '../../feature/userSlice';

const Header: FC = () => {
  const { Header } = Layout;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  console.log('🚀 ~ user', user);

  const onChange = (checked: boolean) => {};

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(
          login({
            email: res.user.email,
            uid: res.user.uid,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onLogout = () => {
    dispatch(logout());
    auth.signOut();
  };

  const renderAvatar = () => {
    if (user) {
      return <Avatar size="large" src={user?.photoURL} />;
    }
    return <Avatar size="large" icon={<UserOutlined />} />;
  };

  const renderTitleMenu = () => {
    return (
      <div className="titleMenu">
        {renderAvatar()}
        <span>{user ? user?.displayName : 'Name'}</span>
      </div>
    );
  };

  const menu = (
    <Menu>
      <Menu.ItemGroup title={renderTitleMenu()}>
        <Menu.Item>
          Online{' '}
          <Switch className="switch" defaultChecked onChange={onChange} />
        </Menu.Item>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Create Avatar</Menu.Item>
        <Menu.Item>User Setting</Menu.Item>
        <Divider />
        <Menu.Item
          style={{ fontWeight: '500' }}
          icon={<LoginOutlined />}
          onClick={onLogout}
        >
          Log out
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Header className="Header">
      <div className="Header__left">
        <CustomImage src={Logo} alt="logo" width={80} height={80} />
        <Input
          className="Header__left__input"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="Header__right">
        <MessageOutlined />
        <BellOutlined style={{ margin: '0 12px' }} />
        {!user && (
          <>
            <CustomButton onClick={signInWithGoogle} color="#0079d3">
              Log In
            </CustomButton>
            <CustomButton color="#ffffff" backgroundColor="#0079d3">
              <Link href="/register">Sign Up</Link>
            </CustomButton>
          </>
        )}
        <Dropdown
          overlay={menu}
          trigger={['click']}
          placement="bottomRight"
          overlayClassName="containerDropdown"
        >
          <div onClick={(e) => e.preventDefault()}>{renderAvatar()}</div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Header;
