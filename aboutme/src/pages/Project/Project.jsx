import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import parse from 'html-react-parser'

import Menu from "../../components/Menu";
import Footer from '../../components/Footer';
import appleBadge from '../../assets/imgs/apple-store-badge.png';
import googleBadge from '../../assets/imgs/google-play-badge.png';
import Skeleton from './components/Skeleton';
import { GhostButton } from '../../ui/general';

import localesService from '../../core/locales/locales.service';

const Project = () => {
  const { slug } = useParams();
  const [requestData, setRequestData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [newElem, setNewElem] = useState();

  const setSlugByLocale = (slugContext) => {
    const locales = ['en', 'pt-BR'];
    let newSlug = [];
    locales.map((localeStr) => {
      const check = slugContext.includes(localeStr);
      if (check) return newSlug.push(slugContext.replace(localeStr, localesService.getLocale()));
    })

    return newSlug[0];
  }

  const getProjects = () => {
    axios.get('https://content-manager-rt.herokuapp.com/projects/?_locale=all')
      .then((response) => {
        const slugByLocale = setSlugByLocale(slug);
        const data = response.data.find((item) => item.slug === slugByLocale);
        setRequestData(data);
        setNewElem(parse(data.post));
        setIsReady(true);
      });
  }


  const dateFormatter = (dateStr) => {
    const monthNamesBR = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const monthNamesEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = localesService.getLocale() === 'en' ? monthNamesEN[date.getMonth()] : monthNamesBR[date.getMonth()];
    return `${month} ${year}`;
  }

  const RenderExampleButton = () => {

    if (!requestData.ios && !requestData.android && !requestData.web) return <></>

    if (requestData.ios && requestData.android) {
      return (
        <>
          <a href={requestData.ios_url} target="_blank" rel="noreferrer">
            <img className="project-header__badge" src={appleBadge} alt="Download on Apple Store" />
          </a>
          <a href={requestData.ios_android} target="_blank" rel="noreferrer">
            <img className="project-header__badge" src={googleBadge} alt="Download on google play" />
          </a>
        </>
      )
    }

    if (requestData.ios) {
      return (
        <a href={requestData.ios_url} target="_blank" rel="noreferrer">
          <img className="project-header__badge" src={appleBadge} alt="Download on Apple Store" />
        </a>
      )
    }

    if (requestData.android) {
      return (
        <a href={requestData.ios_android} target="_blank" rel="noreferrer">
          <img className="project-header__badge" src={googleBadge} alt="Download on google play" />
        </a>
      )
    }

    return (<GhostButton url={requestData.web_url}/>)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getProjects();
    setSlugByLocale(slug);
  }, []);

  if (!isReady || !requestData) return (<Skeleton />)
  return (
    <div className="App">
      <section className="App__header">
        <Menu />
      </section>
      <section className="project-page">

        <section className="project">

          <section className="project-header">
            <div className='project-header__container'>
              <section className="project-header__info-container">
                <div className="project-header__info">
                  <p className="project-header__title">{requestData.post_title}</p>
                  <div className="project-header__subtitle-cotainer">
                    <p className="project-header__name">{requestData.name}</p>
                    <p className="project-header__date">{dateFormatter(requestData.date)}</p>
                  </div>
                  <p className="project-header__resume">
                    {requestData.description}
                  </p>
                  <div className="project-header__availability">
                    <RenderExampleButton />
                  </div>
                </div>
              </section>

              <section className="project-header__banner">
                <img src={requestData.post_banner.url} alt="project" />
              </section>
            </div>
          </section>

          <main className="project-body">
            {newElem}
            <section className="project-body__footer">
              <div className="project-body__footer-tag">
                <p>Tags:</p>
                <section className="project-body__tags-container">
                  {requestData.tags.map((item) => (
                    <div className="project-body__tag" key={item.id}>
                      <strong className="project-body__tag-text">{item.tag_name}</strong>
                    </div>
                  ))}
                </section>
              </div>
            </section>
          </main>

        </section>

      </section>
      <Footer />
    </div>
  )
}

export default Project;