import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "../../../src/App.css";


import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMode,
  getData,
  getMode,
} from "../../reducer/railwayData/railwayData";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Home = () => {
  const dispatch = useDispatch();

  const news = useSelector((store) => store.railway.data);
  const isDarkMode = useSelector((store) => store.railway.isDarkMode);

  useEffect(() => {
    dispatch(getData());
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

      <section
        className={
          isDarkMode.lightDarkMode == false ? "section" : "sectionDark"
        }
      >
        <Swiper
          style={{ backgroundColor: "transparent" }}
          cssMode={true}
          // navigation={true}
          // pagination={true}
          mousewheel={true}
          keyboard={true}
          className={isDarkMode == false ? "mySwiper" : "mySwiperDark"}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://www.railway.tj/images/resized/images/slideshow/01_1200_350.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.railway.tj/images/resized/images/slideshow/s-0_1200_350.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.railway.tj/images/resized/images/slideshow/s-3_1200_350.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.railway.tj/images/resized/images/slideshow/s-5_1200_350.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.railway.tj/images/resized/images/slideshow/s-4_1200_350.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <div
        className={
          isDarkMode.lightDarkMode == false
            ? "newsContainer"
            : "newsContainerDark"
        }
      >
        <div className="divForNewsDivText">
          <div className="newsDivText">
            <p className="newsText">Новости</p>
          </div>
        </div>
        {news.map((el) => (
          <div key={el.id} className="newsItem">
            <div>
              <Link className="linkById" to={el.id}>
                <img className="iconImage" src={el.iconImage} alt="" />
              </Link>
            </div>
            <div className="textInfo">
              <Link className="linkById" to={el.id}>
                <p
                  className={
                    isDarkMode.lightDarkMode == false
                      ? "newsDate"
                      : "newsDateDark"
                  }
                >
                  {el.date}
                </p>
                <h2
                  className={
                    isDarkMode.lightDarkMode == false
                      ? "newsTitle"
                      : "newsTitleDark"
                  }
                >
                  {el.newsDescription}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <main>
        <Marquee className="marquee">
          <Link to={"http://www.visittajikistan.tj/"}>
            <img
              className="imagesForMarquee"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ14KvKqWtj8VZWKc51qNJYoyTzGfg_ZquHqKzyzUOul5NDq6bx"
              alt=""
            />
          </Link>

          <Link to={"https://khovar.tj/rus/"}>
            <img
              className="imagesForMarquee"
              src="https://upload.wikimedia.org/wikipedia/ru/f/f8/NIAT_Khovar.jpg"
              alt=""
            />
          </Link>

          <Link to={"https://prezident.tj/"}>
            <img
              className="imagesForMarquee"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwf8OfB5Dz5n66ZFr_8vv_1mDlNy9gSO1FOdFXsUAkkqeyg5u"
              alt=""
            />
          </Link>
          <Link to={"https://www.mintrans.tj/ru"}>
            <img
              className="imagesForMarquee"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWUyVGmtzFzXwWkLWnzTMQzDZGqG_rmbEe8s8CIXqeUsSavKIj"
              alt=""
            />
          </Link>

          <Link to={"https://www.medt.tj/ru/"}>
            <img
              className="imagesForMarquee"
              src="https://encrypted-tbn0.gstatic.com/bimages?q=tbn:ANd9GcTa6mYXV_nW_OJglo65L0GgBpRgDnMvh8olVixOvSyHBSA5TGQx"
              alt=""
            />
          </Link>

          <Link to={"https://mfa.tj/ru"}>
            <img
              className="imagesForMarquee"
              src="https://www.railway.tj/index.php?option=com_unitehcarousel&task=showimage&img=aW1hZ2VzL3BhcnRuZXJzL21pZC5wbmc=&w=200&h=104&t=exact"
              alt="Сайт не работает"
            />
          </Link>
        </Marquee>
      </main>
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
            <Link to="/passengers" className="footer-link">
              Пассажирам
            </Link>
            <Link to="/freight" className="footer-link">
              Грузовые перевозки
            </Link>
            <Link to="/about" className="footer-link">
              О Компании
            </Link>
            <Link to="/contacts" className="footer-link">
              Контакты
            </Link>
          </div>
          <div className="footerSection">
            <h2>Следите за нами</h2>
            <div className="socialIcons">
              <a href="https://www.facebook.com" className="socialIcon">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" className="socialIcon">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="socialIcon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" className="socialIcon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            &copy; {new Date().getFullYear()} РОҲИ ОҲАНИ ТОҶИКИСТОН. Все права
            защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
