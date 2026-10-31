import "./Header.scss";
import HeaderIcon from "../../assets/headerIcon.svg?react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const isAuthanticated = true;
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <HeaderIcon width={43} height={38} />
          <p className="header__logo--title">Awesome Store</p>
        </div>

        {isAuthanticated && (
          <div className="header__list">
          <NavLink 
            to='/users' 
            className={({ isActive }) => (isActive ? 'header__list--link active-link' : 'header__list--link')}
          >
            Users
          </NavLink>
          <NavLink 
            to='/products' 
            className={({ isActive }) => (isActive ? 'header__list--link active-link' : 'header__list--link')}
          >
            Products
          </NavLink>
          <NavLink 
            to='/orders' 
            className={({ isActive }) => (isActive ? 'header__list--link active-link' : 'header__list--link')}
          >
            Orders
            </NavLink>
            <p className="header__list--link">Logout</p>
          <NavLink 
            to='/profile' 
            className={({ isActive }) => (isActive ? 'header__list--link active-link profile active-profile' : 'header__list--link profile')}
          >
            My Profile
          </NavLink>
        </div>
        )}
      </header>
    </>
  );
};
