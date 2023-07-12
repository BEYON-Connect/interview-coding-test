import { NavLink } from "react-router-dom";
import {
  Divider,
  HeaderContainer,
  NavigationContainer,
  TitleContainer,
} from "./header.styled";
import { AppRoutes } from "../routing/routes";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Header = () => {
  const routes = Object.values(AppRoutes);

  return (
    <HeaderContainer>
      <TitleContainer>
        <h1 style={{ flexGrow: 1 }}>Beyon Connect Coding Test</h1>
        <Logo />
      </TitleContainer>
      <NavigationContainer>
        {routes.map(({ name, path }) => (
          <NavLink key={path} to={path}>
            {name}
          </NavLink>
        ))}
      </NavigationContainer>
      <Divider />
    </HeaderContainer>
  );
};
