import { Logout } from "../../api/identityApi";
import "./Header.css";

function Header() {
  const logoutHandler = () => {
    Logout().then((isLoggedOut) => {
      if (isLoggedOut) window.location.reload();
    });
  };

  return (
    <div class="header">
      <button textContent={"Log Out"} onClick={logoutHandler} />
    </div>
  );
}

export default Header;
