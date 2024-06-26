import React from 'react';
import ImageGridDisplay from '../components/ImageGridDisplay';

// Import images from the local directory
import image1 from '../resources/images/im11.jpeg';
import image2 from '../resources/images/im2.jpeg';
import image3 from '../resources/images/im3.jpeg';
import image4 from '../resources/images/im4.jpeg';
import image5 from '../resources/images/im5.jpeg';
import image6 from '../resources/images/im6.jpeg';
import image7 from '../resources/images/im7.jpeg';
import image8 from '../resources/images/im8.jpeg';
import image9 from '../resources/images/im9.jpeg';
import image10 from '../resources/images/im10.jpeg';

function Gallery() {
    // Create an array of imported images
    let firstBlockImages = [
        {src: image1, title: 'Winter 2015'},
        {src: image2, title: 'Our Engagement - September 2022'},
        {src: image3, title: 'Summer 2023'},
        {src: image4, title: 'Lucy & Mike\'s Wedding 2023'},
        {src: image5, title: 'Hogmanay 2022'},
    ];

    let secondBlockImages = [
        {src: image6, title: 'Summer 2019'},
        {src: image7, title: 'Tarragona 2019'},
        {src: image8, title: 'Grad Ball 2019'},
        {src: image9, title: 'Loch Lomond January 2018' },
        {src: image10, title: 'Simon & Rebecca\'s wedding 2017'},
    ];

    return (
        <div className="container text-start row">
            <div><h1>Gallery</h1></div>
            <ImageGridDisplay mainImage={"left"} images={firstBlockImages} modalId="imageModal1"/>
            <ImageGridDisplay mainImage={"right"} images={secondBlockImages} modalId="imageModal2"/>
        </div>
    );
}

export default Gallery;
