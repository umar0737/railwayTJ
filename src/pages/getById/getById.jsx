import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../reducer/railwayData/railwayData";
import "../../../src/App.css";
import ImageGallery from "react-image-gallery";
import { FaFacebook, FaInstagram,  FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";



const GetById = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const data = useSelector((store) => store.railway.data);
  let dataById = data?.filter((el) => {
    return el.id == id;
  });

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
     <header>
        <img src="" alt="" />
        <h1 className="logo">
          <span className="red">РОҲИ </span>
          <span className="white">ОҲАНИ </span>
          <span className="green">ТОҶИКИСТОН</span>
        </h1>
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
      <div className="sectionById">
        <div className="boxForSidesById">
          <div className="leftSideForGetById">
            {dataById.map((el, index) => {
              return (
                <div key={index}>
                  <img
                    className="imgById"
                    src={el.iconImage}
                    alt="Главное Изоброжение"
                  />
                </div>
              );
            })}
          </div>
          <div className="rightSideForGetById">
            {dataById.map((el) => {
              return (
                <div key={el.id}>
                  <p className="descriptionById">{el.newsDescription}</p>
                  <p className="dateById">{el.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="fotoGallery">
        {dataById.map((el) => {
          return (
            <div key={el.id}>
              <ImageGallery items={el.imageMoreInfo} />
            </div>
          );
        })}
      </div>
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

export default GetById;
