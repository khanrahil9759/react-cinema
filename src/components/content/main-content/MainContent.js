import React, { useState } from 'react';

import SlideShow from '../slide-show/SlideShow'
import Paginate from '../paginate/Paginate';
import './MainContent.scss';

const MainContent = () => {
    const images = [
        {
            url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ];

    const [currentPage, setCurrentPage] = useState(1)

    const paginate = (type) => {
        if (type === 'prev' && currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        } else {
            setCurrentPage((prev) => prev + 1)
        }
    }

    return (
        <div className="main-content">
            <SlideShow images={images} auto={true} showArrows={true} />
            <div className="grid-movie-title">
                <div className="movieType">Now Playing</div>
                <div className="paginate">
                    <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
                </div>
            </div>
            {/* display grid component */}
        </div>
    );
};

export default MainContent;