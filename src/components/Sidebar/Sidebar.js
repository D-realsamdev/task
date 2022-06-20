import { BsBellFill, BsCalendar, BsCalendar2CheckFill, BsCameraVideoFill, BsFillBookFill, BsFillHouseDoorFill, BsPerson, BsPersonBadgeFill, BsRecordCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { AiFillBook } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOut, BiUser } from 'react-icons/bi';
import Image from 'react-bootstrap/Image';
import logo from "../../images/LOGO.jpg";
const Sidebar = ({ sideNavLinks }) => {
  let navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("ccAuth")
    // sessionStorage.clear();

    navigate("/login");
  }
  return (
    // <div className={styles.s-layout__sidebar}>
    <div>
      <a
        className={styles.sidebar__trigger}
        href="#0"
        style={{ zIndex: "1000" }}
      >
        <FaBars size={25} />
      </a>

      <nav
        className={styles.sidebar__nav}
        style={{ background: "var(--light-green)", zIndex: "10000" }}
      >
        <ul className={styles.list}>
          <li style={customStyleList}>
                <Image  src={logo} rounded/>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <BsFillHouseDoorFill size={20} color="smokewhite"/>
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <BsPersonBadgeFill size={20} color="smokewhite" />
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <BsBellFill size={20} color="smokewhite" />
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <BsCalendar2CheckFill size={20} color="smokewhite" />
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <BsCameraVideoFill size={20} />
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const customStyleList  = {
  margin: "3em 1em",
}