import React, { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { changeMode, getMode } from '../../reducer/railwayData/railwayData';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Contacts = () => {
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

      <section className={isDarkMode.lightDarkMode == false ? "contacts" : 'contactsDark'}>
        <div className="contactsContainer">
          <h2>Контакты</h2>
          <p>
            Если у вас возникли вопросы или предложения, вы можете связаться с нами по следующим контактным данным:
          </p>
          <div className="contactInfo">
            <div className={isDarkMode.lightDarkMode ? "contactItemDark" : "contactItem"}>
              <h3>Адрес</h3>
              <p>г. Душанбе, ул. Рудаки 100</p>
            </div>
            <div className={isDarkMode.lightDarkMode? "contactItemDark" : "contactItem"}>
              <h3>Телефон</h3>
              <p>+992 93-501-24-93</p>
            </div>
            <div className={isDarkMode.lightDarkMode? "contactItemDark" : "contactItem"}>
              <h3>Email</h3>
              <p>info@railway.tj</p>
            </div>
          </div>
          <div className="map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.287332429606!2d68.7971358774209!3d38.55819951918153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4e8365a37a889d%3A0x5b3cfb43a7bcb8e0!2s38.55819951918153%2C%2068.79932454782089!5e0!3m2!1sen!2s!4v1614763149588!5m2!1sen!2s"
              width="80%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
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
  )
}

export default Contacts