import React from 'react';

const Card = (props) => {

    let {name, age, about, picture} = props.allDatas;
    return (
    <div>
        <section className='mt-14  '>
            <div className="card w-80 bg-slate-200 shadow-xl text-black ">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl h-40 max-w-full" />
                </figure>
                <div className="card-body text-justify">
                    <h2 className="card-title">{name}</h2>
                    <p>{about.slice(0, 100)}</p>
                    
                    <h5 className="text-base font-bold">Time Required : {age} s</h5>
                    <h5 className="text-base font-bold">For Age : {age}-50</h5>
                    <div className="card-actions">
                    <button onClick={() => props.addOnCartByClick(props.allDatas)} className="btn btn-primary w-full ">Add To List</button>
                    </div>
                </div>
            </div>
        </section>


    </div>
    );
};

export default Card;