import React from 'react';

import Menu from "../../components/Menu";
import Footer from '../../components/Footer';
import projectImage from '../../assets/imgs/teste-pj.jpeg';
import test from '../../assets/imgs/teste-2.jpeg';
import testBadge from '../../assets/imgs/demo-badge.png';
import testBadge2 from '../../assets/imgs/apple-store-badge.png';
import testBadge3 from '../../assets/imgs/google-play-badge.png';

const Project = () => {
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
                <p className="project-header__title">Site institucional</p>
                <div className="project-header__subtitle-cotainer">
                  <p className="project-header__name">Rodobravo Transportes</p>
                  <p className="project-header__date">Julho 2018</p>
                </div>
                <p className="project-header__resume">
                  Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, 
                  que um alcoolatra anonimis.Interessantiss quisso pudia ce receita de bolis, 
                  mais bolis eu num gostis.Todo mundo vê os porris que eu tomo, mas ninguém vê os 
                  tombis que eu levo!Diuretics paradis num copo é motivis de denguis.
                </p>
                <div className="project-header__availability">
                  <img className="project-header__badge" src={testBadge} alt="badge blabla" />
                  {/* <img className="project-header__badge" src={testBadge2} alt="badge blabla" /> */}
                  {/* <img className="project-header__badge" src={testBadge3} alt="badge blabla" /> */}
                </div>
              </div>
            </section>

            <section className="project-header__banner">
              <img src={projectImage} alt="project" />     
            </section>
          </div>
        </section>

        <main className="project-body">
          <p className="project-body__title">Desenvolvimento</p>
          <p  className="project-body__paragraph">
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.
            Si num tem leite então bota uma pinga aí cumpadi!Interessantiss quisso pudia ce receita de bolis, 
            mais bolis eu num gostis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!

            Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Interagi no mé, cursus quis, vehicula ac 
            nisi.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.A ordem dos tratores não altera o pão duris.
          </p>

          <img src={test} className="project-body__first-screen" alt="teste" />
        </main>

      </section>

      </section>
      <Footer />
    </div>
  )
}

export default Project;