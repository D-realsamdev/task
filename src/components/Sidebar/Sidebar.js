import { FaBars } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import logo from "../../images/LOGO.jpg";
import home from "../../images/HOME ICON.png";
import profile from "../../images/PROFILE.png";
import notification from "../../images/NOTIFICATION.png";
import statistics from "../../images/STATISTICS.png";
import schedule from "../../images/SCHEDULE.png";
import recording from "../../images/RECORDED CLASS.png";
import liveVideo from "../../images/LIVE VIDEO.png";
import avatar from "../../images/ACCOUNT.png";
import volume from "../../images/VOLUME 2.png";
const Sidebar = () => {
  // let navigate = useNavigate();

  // const logOut = () => {
  //   sessionStorage.removeItem("ccAuth")
  //   // sessionStorage.clear();

  //   navigate("/login");
  // }
  return (
    // <div className={styles.s-layout__sidebar}>
    <div>
      <a
        className={styles.sidebar__trigger}
        href="#0"
        style={{ zIndex: "1000" }}
      >
        <FaBars size={25} style={{textAlign: "right"}} />
      </a>

      <nav
        className={styles.sidebar__nav}
        style={{ background: "var(--light-green)", zIndex: "10000" }}
      >
        <ul className={styles.list}>
          <li style={customStyleListLg}>
                <Image style={{borderRadius:"20%"}} src={logo} rounded/>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={home} rounded/>
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={profile} rounded/>
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={notification} rounded/>
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={statistics} rounded/>
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={schedule} rounded/>
              </Link>
          </li>
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={recording} rounded/>
              </Link>
          </li>
          
          <li style={customStyleList}>
              <Link to="#">
                <Image  src={liveVideo} rounded/>
              </Link>
          </li>
          <li style={customStyleListVo}>
              <Link to="#">
                <Image  src={volume} rounded/>
              </Link>
          </li>
          <li style={customStyleListAv}>
              <Link to="#">
                <Image  src={avatar} rounded/>
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const customStyleList  = {
  margin: "2em 1.5em",
}
const customStyleListLg  = {
  margin: "2em 1em",
}
const customStyleListVo  = {
  margin: "1em 1em",
}
const customStyleListAv  = {
  margin: "2em 1em",
}