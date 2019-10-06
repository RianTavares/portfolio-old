import React, {useState, useEffect} from "react";
import BannerTop from '../components/Banner';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Posts from '../components/Posts';
import Jobs from '../components/Jobs';
import Skills from '../components/Skills';
import PostImg1 from '../assets/imgs/rm-mini.jpg';
import l from '../components/LenguageSwitcher/lenguage';
import eu from '../assets/imgs/rian-tavares.png';
import edglobo from '../assets/imgs/globo.png';

function App() {

  const [selectedLenguage, setLenguage] = useState(0);

  useEffect(()=>{
    const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
    setLenguage(localStorageVar);
  },[])

  return (
    <div className="App">
      <section className="App__header">
        <div className="App__header__lenguage">
          <button id="brazil" onClick={() => { setLenguage(0); localStorage.setItem('lenguage_rt', 0)}}></button>
          <button id="england" onClick={() => { setLenguage(1); localStorage.setItem('lenguage_rt', 1)}}></button>
          <button id="germany" onClick={() => { setLenguage(2); localStorage.setItem('lenguage_rt', 2)}}></button>
        </div>
        <BannerTop />
      </section>
      <section className="page-content">
        <section className="section pattern-margin first">
          <h1 className="section__title whoami">{l[selectedLenguage].section1.title}</h1>
          <div className="section__desk">
            <div className="section__desk__img">
              <img src={eu} alt={"Rian Tavares"} />
            </div>
            <p className="section__desk__text">{l[selectedLenguage].section1.aboutme}</p>
          </div>
          <Social />
        </section>
        <section className="section sec-posts"> 
        <div className="sec-posts__bg">
            <h1 className="section__title title-posts">{l[selectedLenguage].section2.title}</h1>
            <p className="pattern-margin">{l[selectedLenguage].section2.description}</p>
            <Posts 
              img={PostImg1} 
              about={"RM Mini 3"} 
              ptitle={l[selectedLenguage].section2.pub1.pubTitle}
              ptext={l[selectedLenguage].section2.pub1.pubText}
              pbutton={l[selectedLenguage].section2.button}
              purl={l[selectedLenguage].section2.pub1.url}
            />
            <Posts 
              img={PostImg1} 
              about={"RM Mini 3"} 
              ptitle={l[selectedLenguage].section2.pub1.pubTitle}
              ptext={l[selectedLenguage].section2.pub1.pubText}
              pbutton={l[selectedLenguage].section2.button}
              purl={l[selectedLenguage].section2.pub1.url}
            />
            <Posts 
              img={PostImg1} 
              about={"RM Mini 3"} 
              ptitle={l[selectedLenguage].section2.pub1.pubTitle}
              ptext={l[selectedLenguage].section2.pub1.pubText}
              pbutton={l[selectedLenguage].section2.button}
              purl={l[selectedLenguage].section2.pub1.url}
            />
          </div>
        </section>
        <section className="section sec-jobs">
          <div className="sec-jobs__content">
            <div className="sec-jobs__content__bg">
              <h1 className="section__title title-green">{l[selectedLenguage].section3.title}</h1>
              <div className="sec-jobs__content__bg__itens pattern-margin">
                <Jobs
                  photo={edglobo}
                  details={l[selectedLenguage].section3.job1.details}
                />
                <Jobs
                  photo={edglobo}
                  details={l[selectedLenguage].section3.job1.details}
                />
                <Jobs
                  photo={edglobo}
                  details={l[selectedLenguage].section3.job1.details}
                />
                <Jobs
                  photo={edglobo}
                  details={l[selectedLenguage].section3.job1.details}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section sec-schools sec-skills pattern-margin last">
          <div className="sec-schools__container ">
            <div className="sec-schools__education">
              <h1 className="section__title">EDUCAÇÃO</h1>
              <ul>
                <li className="first-li">educacao one</li>
                <li>educacao two</li>
                <li>educacao three</li>
                <li>educacao for</li>
              </ul>
            </div>

            <div className="sec-skills__list">
              <h1 className="sec-skills__list__title">HABILIDADES</h1>
              <Skills
                skill={l[selectedLenguage].section5.skill1.skill}
                level={l[selectedLenguage].section5.skill1.level}
                label={l[selectedLenguage].section5.skill1.label}
              />
              <Skills
                skill={l[selectedLenguage].section5.skill2.skill}
                level={l[selectedLenguage].section5.skill2.level}
                label={l[selectedLenguage].section5.skill2.label}
              />
              <Skills
                skill={l[selectedLenguage].section5.skill3.skill}
                level={l[selectedLenguage].section5.skill3.level}
                label={l[selectedLenguage].section5.skill3.label}
              />
              <Skills
                skill={l[selectedLenguage].section5.skill4.skill}
                level={l[selectedLenguage].section5.skill4.level}
                label={l[selectedLenguage].section5.skill4.label}
              />
                
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
