import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { changeMode, getMode } from "../../reducer/railwayData/railwayData";

const Laws = () => {
  const isDarkMode = useSelector((store) => store.railway.isDarkMode);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMode());
  }, []);
  console.log(isDarkMode.lightDarkMode);
  useEffect(() => {
    document.body.style.backgroundColor =
      isDarkMode.lightDarkMode == false ? "white" : "#1e1e1e";
  }, [isDarkMode]);
  useEffect(() => {
    document.body.style.backgroundColor =
      isDarkMode.lightDarkMode == false ? "white" : "#1e1e1e";
  }, [isDarkMode]);
  return (
    <div>
     <header>
        <div className="header1">
          <div className="leftSideForHeader">
            <h1 className="logo">
              <span className="red">РОҲИ </span>
              <span className="white">ОҲАНИ </span>
              <span className="green">ТОҶИКИСТОН</span>
            </h1>
          </div>
          <div className="rightSideForHeader">

            <DarkModeSwitch
              style={{ padding: "10px", color: "white" }}
              checked={isDarkMode.lightDarkMode}
              onChange={() => dispatch(changeMode(isDarkMode))}
              size={"40px"}
            />
          </div>
        </div>
        <div className="header2">
          <div className="links">
            <Link className="menuItem" to={"/"}>
              <p>Главная</p>
            </Link>
            <Link className="menuItem" to={"/passengers"}>
              <p>Пассажирам</p>
            </Link>
            {/* <Link className="menuItem">
              <p>Грузовые перевозки</p>
            </Link> */}
            <Link className="menuItem" to={"/about"}>
              <p>О Компании</p>
            </Link>
            <Link className="menuItem" to={"/laws"}>
              <p>Законы</p>
            </Link>
            <Link className="menuItem" to={"/contacts"}>
              <p>Контакты</p>
            </Link>
          </div>
        </div>
      </header>

      <section className={isDarkMode.lightDarkMode == false ? "laws" : 'lawsDark'}>
        <div className="lawsContainer">
          <h2>Законы</h2>
          <p>
            Здесь вы можете ознакомиться с основными законами и нормативными
            актами, регулирующими деятельность нашей компании.
          </p>
          <div className={isDarkMode.lightDarkMode == false ? "lawList" : "lawListDark"}>
            <div className={"lawItem"}>
              <h3>
                Закон Республики Таджикистан "О железнодорожном транспорте"
              </h3>
              <p>
                Этот закон регулирует деятельность железнодорожного транспорта в
                Республике Таджикистан, устанавливает правовые, экономические и
                организационные основы функционирования железнодорожного
                транспорта.
              </p>
            </div>
            <div className={"lawItem"}>
              <h3>Устав железнодорожного транспорта Республики Таджикистан</h3>
              <p>
                Устав железнодорожного транспорта определяет правила перевозок
                пассажиров, грузов, багажа и почты железнодорожным транспортом,
                а также основные принципы взаимодействия железнодорожного
                транспорта с другими видами транспорта.
              </p>
            </div>
            <div className={"lawItem"}>
              <h3>
                Правила технической эксплуатации железнодорожного транспорта
                Республики Таджикистан
              </h3>
              <p>
                Правила технической эксплуатации железнодорожного транспорта
                определяют порядок эксплуатации, ремонта и содержания
                железнодорожного пути, подвижного состава, устройств
                сигнализации и связи, энергоснабжения, а также здания и
                сооружения железнодорожного транспорта.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h2>Контакты</h2>
          <p>Адрес: г. Душанбе, ул. Рудаки 100</p>
          <p>Телефон: +992 123 456 789</p>
          <p>Email: info@railway.tj</p>
        </div>
        <div className="footerSection">
          <h2>Полезные ссылки</h2>
          <Link to="/passengers" className="footer-link">Пассажирам</Link>
          <Link to="/freight" className="footer-link">Грузовые перевозки</Link>
          <Link to="/about" className="footer-link">О Компании</Link>
          <Link to="/contacts" className="footer-link">Контакты</Link>
        </div>
        <div className="footerSection">
          <h2>Следите за нами</h2>
          <div className="socialIcons">
            <a href="https://www.facebook.com" className="socialIcon"><FaFacebook /></a>
            <a href="https://www.twitter.com" className="socialIcon"><FaTwitter /></a>
            <a href="https://www.instagram.com" className="socialIcon"><FaInstagram /></a>
            <a href="https://www.linkedin.com" className="socialIcon"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} РОҲИ ОҲАНИ ТОҶИКИСТОН. Все права защищены.</p>
      </div>
    </footer>
    </div>
  );
};

export default Laws;
