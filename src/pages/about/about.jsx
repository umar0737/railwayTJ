import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../src/App.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { getMode } from '../../reducer/railwayData/railwayData';

const About = () => {

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
      
      <section className="about">
        <h2>О Нас</h2>
        <p>
          ОАО «Роҳи оҳани Тоҷикистон» было создано на базе Среднеазиатской железной дороги и образовано как самостоятельное государственное предприятие в соответствии с постановлением Кабинета Министров Республики Таджикистан №594 от 3 декабря 1993 года.
        </p>
        <p>
          На сегодняшний день ОАО «Роҳи оҳани Тоҷикистон» имеет протяженность 680 километров. Имеются международные железнодорожные перевозки из Республики Таджикистан в страны СНГ, Балтии, Иран, Афганистан и Турцию.
        </p>
        <p>
          В структуру железной дороги входят: управление дороги, три отделения дороги - Душанбе, Курган-Тюбе и Худжанд, локомотивное и вагонное депо, дистанции пути и электроснабжения, пассажирское хозяйство, предприятия по ремонту подвижного состава и другие предприятия и организации.
        </p>
        <p>
          Основными задачами ОАО «Роҳи оҳани Тоҷикистон» являются перевозка грузов и пассажиров, обеспечение экспортно-импортных и транзитных перевозок, развитие и модернизация железнодорожной инфраструктуры.
        </p>
        <h3>Наши Преимущества</h3>
        <p>
          - Развитая инфраструктура
        </p>
        <p>
          - Высококвалифицированный персонал
        </p>
        <p>
          - Современные технологии
        </p>
        <p>
          - Надежность и безопасность перевозок
        </p>
        <h3>Наши Ценности</h3>
        <p>
          - Профессионализм и компетентность
        </p>
        <p>
          - Ответственность и надежность
        </p>
        <p>
          - Клиентоориентированность
        </p>
        <p>
          - Инновации и развитие
        </p>
        <h3>Контактная Информация</h3>
        <p>
          Адрес: г. Душанбе, ул. Рудаки 100
        </p>
        <p>
          Телефон: +992 123 456 789
        </p>
        <p>
          Email: info@railway.tj
        </p>
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
}

export default About;
