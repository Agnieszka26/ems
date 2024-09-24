import { Container } from '@ems/common-ui';
import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';

export const Layout = () => {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
};
