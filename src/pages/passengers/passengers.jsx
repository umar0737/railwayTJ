import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../../src/App.css'

import { useDispatch, useSelector } from 'react-redux'
import { getMode } from '../../reducer/railwayData/railwayData'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const Passengers = () => {
  const [datesComing, setDatesComing] = useState([])
  const [datesGoing, setDatesGoing] = useState([])
  const passengerNote =  [
    'Пассажиры обязаны: Бережно относиться к имуществу железнодорожного транспорта. Соблюдать чистоту на вокзалах и в поездах. Соблюдать правила пожарной безопасности. Выполнять указания сотрудников железнодорожного транспорта по вопросам обеспечения безопасности движения поездов. Не допускать действий, которые могут повлечь за собой несчастные случаи или аварии.',
    'Пассажирам запрещается: Проникать в технические зоны железнодорожного транспорта. Проходить по железнодорожным путям в неустановленных местах. Находиться на территории железнодорожного транспорта в состоянии алкогольного или наркотического опьянения. Курить на территории железнодорожного транспорта и в поездах.',
    'При обнаружении подозрительных предметов или лиц, а также в случае возникновения чрезвычайной ситуации необходимо немедленно сообщить сотрудникам железнодорожного транспорта или полиции.',
  ];
  const isDarkMode = useSelector((store) => store.railway.isDarkMode);
  const dispatch = useDispatch()
  async function get() {
    try {
      let { data } = await axios.get("http://localhost:3000/data")
      setDatesComing(data.datesComing)
      setDatesGoing(data.datesGoing)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {get(), dispatch(getMode())}, [] )
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
      <div className={"scheduleContainer"}>
      <h2 className={isDarkMode.lightDarkMode == false ? "scheduleTitle" : "scheduleTitleDark"}>Расписание поездов</h2>
      <div className={isDarkMode.lightDarkMode == false ? "scheduleSection" : "scheduleSectionDark"}>
        <h3 className={isDarkMode.lightDarkMode == false ? "sectionTitle" : "sectionTitleDark"}>Отправления</h3>
        <table className={isDarkMode.lightDarkMode == false ? "scheduleTable" : "scheduleTableDark"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Маршрут</th>
              <th>Дни</th>
              <th>Время</th>
            </tr>
          </thead>
          <tbody>
            {datesGoing.map((trip, index) => (
              <tr key={index}>
                <td>{trip.id || 'N/A'}</td>
                <td>{trip.location}</td>
                <td>{trip.days}</td>
                <td>{trip.times}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={isDarkMode.lightDarkMode == false ? "scheduleSection" : "scheduleSectionDark"}>
        <h3 className={isDarkMode.lightDarkMode == false ? "scheduleTitle" : "scheduleTitleDark"}>Прибытия</h3>
        <table className={isDarkMode.lightDarkMode == false ? "scheduleTable" : "scheduleTableDark"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Маршрут</th>
              <th>Дни</th>
              <th>Время</th>
            </tr>
          </thead>
          <tbody>
            {datesComing.map((trip, index) => (
              <tr key={index}>
                <td>{trip.id}</td>
                <td>{trip.location}</td>
                <td>{trip.days}</td>
                <td>{trip.times}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  

    <div className={isDarkMode.lightDarkMode == false ? "noteContainer" : "noteContainerDark"}>
        <h2 className={isDarkMode.lightDarkMode == false ? "noteTitle" : "noteTitleDark"}>Памятка для пассажиров</h2>
        <div className={isDarkMode.lightDarkMode == false ? "noteContent" : "noteContentDark"}>
          {passengerNote.map((note, index) => (
            <div key={index} className={isDarkMode.lightDarkMode == false ? "noteItem" : "noteItemDark"}>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </div>
      
        <div className={isDarkMode.lightDarkMode == false ? "travelRulesContainer" : "travelRulesContainerDark"} >
        <h2 className={isDarkMode.lightDarkMode == false ? "sectionTitle" : "sectionTitleDark"} >Правила проезда детей</h2>
        <div className={isDarkMode.lightDarkMode == false ? "ruleItem" : "ruleItemDark"} >
          <h3>1. Бесплатный проезд</h3>
          <p>С одним пассажиром может ехать бесплатно один ребенок в возрасте не старше 5 лет, если он не занимает отдельного спального места.</p>
          <p>Детям в возрасте не старше 5 лет, проезжающим с взрослыми пассажирами в поездах дальнего следования без занятия спального места, необходимо оформлять проездной документ без места и без взимания платы.</p>
        </div>
        <div className={isDarkMode.lightDarkMode == false ? "ruleItem" : "ruleItemDark"} >
          <h3>2. Оформление проездного документа</h3>
          <p>Оформление детского проездного документа без места производится по предъявлении свидетельства о рождении ребенка или заграничного паспорта родителя, в который вписан и с которым следует ребенок.</p>
          <p>Для занятия отдельного места ребенку в возрасте до 5 лет необходимо приобрести детский проездной документ. Провозная плата для детского проездного документа составляет около 35% от полного тарифа.</p>
        </div>
        <div className={isDarkMode.lightDarkMode == false ? "ruleItem" : "ruleItemDark"} >
          <h3>3. Проезд с несколькими детьми</h3>
          <p>При следовании с пассажиром более одного ребенка до 5 лет, а также на каждого ребенка от 5 до 10 лет приобретается детский проездной документ. Для детей старше 10 лет приобретается проездной документ за полную стоимость.</p>
        </div>
        <div className={isDarkMode.lightDarkMode == false ? "ruleItem" : "ruleItemDark"} >
          <h3>4. Проезд без сопровождения</h3>
          <p>Дети до 10 лет без сопровождения взрослых к проезду не допускаются, за исключением учащихся, пользующихся железнодорожным транспортом для посещения школы.</p>
          <p>Дети, следующие без сопровождения и оказавшиеся без проездных документов, должны быть переданы в ближайший отдел транспортной милиции.</p>
        </div>
        <div className={isDarkMode.lightDarkMode == false ? "ruleItem" : "ruleItemDark"} >
          <h3>5. Проезд в поездах дальнего следования</h3>
          <p>Бесплатно - для детей до 5 лет без занятия отдельного места (1 ребенок на 1 пассажира), билет оформляется.</p>
          <p>В соответствии с тарифом - для детей от 5 до 10 лет.</p>
          <p>Не допускается проезд детей до 10 лет в поездах дальнего следования без сопровождения взрослых, за исключением случаев проезда учащихся, пользующихся железнодорожным транспортом для посещения общеобразовательных учреждений.</p>
          <p>Возраст ребенка определяется на день начала поездки. Если в день отправления поезда ребенку исполняется 10 лет, то на него оформляется проездной документ (билет) по тарифу на перевозку детей.</p>
          <p>При посадке детей в возрасте до 14 лет в поезда дальнего следования необходимо предъявить подлинник свидетельства о рождении или его нотариально заверенную копию.</p>
          <p>При посадке школьников по льготным проездным документам необходимо предъявить также справку из общеобразовательных учреждений очной формы обучения, подтверждающих обучение в этом учреждении.</p>
          <p>Справка должна содержать ФИО ученика, реквизиты и юридический адрес школы, номер и дату. Справка должна быть заверена печатью школы и подписью руководителя учебного учреждения либо лица, его замещающего.</p>
        </div>
        <div className={isDarkMode.lightDarkMode == false ? "ruleItem" : "ruleItemDark"} >
          <h3>6. Проезд в пригородных поездах</h3>
          <p>Бесплатно для детей до 5 лет.</p>
          <p>В соответствии с тарифом - для детей от 5 до 7 лет.</p>
          <p>На детей старше 7 лет оформляется проездной документ (билет) по тарифу на перевозку взрослого пассажира.</p>
          <p>Проезд детей в возрасте до 7 лет в поездах пригородного сообщения без сопровождения взрослых не допускается.</p>
          <p>Если в день отправления поезда ребенку исполняется 7 лет, то на него оформляется проездной документ (билет) по тарифу на перевозку детей.</p>
          <p>При проезде в пригородных поездах с указанием мест на ребенка не старше 5 лет оформляется безденежный проездной документ.</p>
          <p>Если при проезде в пригородном поезде с указанием мест ребенок не старше 5 лет занимает отдельное место, на него оформляется проездной документ по тарифу на перевозку детей.</p>
        </div>
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
  )
}

export default Passengers