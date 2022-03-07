import React, { Suspense, lazy } from 'react';
import BannerImageBlur from './BannerImageBlur';


const Banner = () => {
    const BannerImage = lazy(() => import('./BannerImage'));

    return(
        <>  
            <header className='page-header'>
                <div className="mackbook"></div>
                <div className="logo"></div>
                <div className="mask"></div>
                <div className="overlay"></div>
                <Suspense fallback={<BannerImageBlur />}>
                    <BannerImage />
                </Suspense>
            </header>

        </>
    );
}

export default Banner;