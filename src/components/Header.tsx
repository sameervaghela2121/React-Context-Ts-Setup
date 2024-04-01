import { NavLink, useNavigate } from 'react-router-dom'
import { useAppState } from '../context';

const Header = () => {
  const { isLoggedIn, logout } = useAppState("auth");
  const { changeLanguage, lang } = useAppState("global");

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/")
    logout()
  }

  const onLanguageChangeHandler = (lang: string) => {
    changeLanguage(lang)
  }

  return (
    <div>
      <NavLink to="/"><button>Home</button></NavLink>&nbsp;&nbsp;
      <NavLink to="/about"><button>About</button></NavLink>&nbsp;&nbsp;
      <NavLink to="/secured-page"><button>Secured Page</button></NavLink>&nbsp;&nbsp;
      {!isLoggedIn ? <NavLink to="/login"><button>Login</button></NavLink> : <button onClick={onLogout}>Logout</button>}
      &nbsp;&nbsp;

      <select value={lang} onChange={(e) => onLanguageChangeHandler(e.target.value)}>
        <option value={"en"}>English</option>
        <option value={"hi"}>Hindi</option>
      </select>
    </div>
  )
}

export default Header