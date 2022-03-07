import React from 'react';
import Skeleton from 'react-loading-skeleton'

import Menu from "../../../../components/Menu";
import Footer from '../../../../components/Footer';

const ProjectSkeleton = () => {
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
                  <p className="project-header__title"><Skeleton /></p>
                  <div className="project-header__subtitle-cotainer">
                    <p className="project-header__name"><Skeleton width="200px"/></p>
                    <p className="project-header__date"><Skeleton width="50px"/></p>
                  </div>
                  <p className="project-header__resume">
                    <Skeleton count={6} />
                  </p>
                  <div className="project-header__availability">
                    
                  </div>
                </div>
              </section>

              <section className="project-header__banner">
              </section>
            </div>
          </section>

          <main className="project-body">
            <div className="project-body__paragraph">
              <Skeleton count={15} />
            </div>
          </main>

        </section>

      </section>
      <Footer />
    </div>
  );
}

export default ProjectSkeleton;