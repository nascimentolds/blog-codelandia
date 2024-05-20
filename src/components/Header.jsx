import logo from "../assets/images/logo.svg";
import { CgSearch } from "react-icons/cg"


export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Codelândia Logo" />
      <div className="header__input-container">
        <CgSearch className="header__icon-search" />
        <input
          className="header__input"
          type="text"
          placeholder="Pesquisar no blog"
        />
      </div>
    </div>
  );
}
