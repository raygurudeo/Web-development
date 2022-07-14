import React from 'react'
import data from './data'

const CricketerList = ({cricProperty}) => {
    return (
        <>
           {cricProperty.map((cricketer) => {
               const {id, name, age, country, role, image} = cricketer;
               return (
                   <article key={id} className='person'>
                   <img src={image} alt={name} />
                   <div>
                       <h3 style={{color: "lightskyblue", marginBottom: "0px"}}>{name}</h3>
                       <p>{age} years</p>
                       <p>{role}</p>
                       <p>{country}</p>
                   </div>
               </article>
               );
           })}
        </>
    );
};

export default CricketerList;