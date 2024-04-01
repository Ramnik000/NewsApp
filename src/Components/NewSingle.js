import React from "react";

const NewSingle = ({ item }) => (
  <div className='col-lg-4 col-md-6 mb-4'>
    <div className='card h-100'>
      <img src={item.urlToImage} className='card-img-top' alt={item.title}></img>
      <div className='card-body'>
        <h5 className='card-title'>{item.title}</h5>
        <p className='card-text'>{item.description}</p>
        <a href={item.url} target='_blank' rel='noreferrer' className='btn btn-primary'>Read More</a>
      </div>
    </div>
  </div>
);

export default NewSingle;
