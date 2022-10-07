import React from 'react';
import logoImg from '../../images/img1.jpg'
import { setOnLocalStorage } from '../Storage';

const Cart = (props) => {
    let {cart} = props;
    // console.log(cart);

    let totalTime = 0;
    for(let product of cart){
        
         totalTime = totalTime + product.age;
    }

    let brakesTime = [
        {time: 10},
        {time: 20},
        {time: 30},
        {time: 40},
        {time: 50}
    ]


    return (
        <div>
            <section className='flex items-center '>
              <div>
                <img src={logoImg} alt="" className='w-16 h-16 rounded-full'/>
              </div>
                    <div className='ml-2'>
                        <h2 className='text-lg'>Abdus Samad</h2>
                        <h2 className='text-sm'>Bangladesh, Sylhet</h2>
                    </div>
            </section>
                <section className='bg-slate-400 flex p-4 justify-evenly mt-5 rounded-lg'>
                            <div className='mt-5  '>
                                <h2 className='font-semibold text-lg text-center'>90<sub>Kg</sub></h2>
                                <h2 className='font-semibold text-lg'>Weight</h2>
                            </div>
                            <div className='mt-5  '>
                                <h2 className='font-semibold text-lg text-center'>26<sub>Year</sub></h2>
                                <h2 className='font-semibold text-lg'>Year</h2>
                            </div>
                            <div className='mt-5  '>
                                <h2 className='font-semibold text-lg text-center'>6.5<sub>inch</sub></h2>
                                <h2 className='font-semibold text-lg'>Height</h2>
                                {/* <h2 className='font-semibold text-lg'>{props.cart.length}</h2> */}
                            </div>
                </section>
                
                <h2 className='text-2xl mt-5 font-extrabold'>Exercise Details</h2>

                <section className='flex justify-between my-4'>
                    {brakesTime.map(item =>  <ShowBreak time = {item.time}></ShowBreak>)}
                </section>

                <section className='bg-slate-400 flex p-4 justify-evenly mt-5 rounded-lg text-left'>
                        <h2>ExerCise Time {totalTime} Seconds</h2>
                </section>

                <section className='bg-slate-400 flex p-4 justify-evenly mt-5 rounded-lg text-left'>
                        <h2 >Break Time</h2>
                        <h2 id = 'breakButton'>0 Seconds</h2>
                </section>
                <button className='bg-teal-800 w-full mt-4 px-7 py-4 text-white rounded-lg font-bold'>
                    Activity Completed
                </button>
        </div>
    );
};

let setOnBreak = (time) => {
    console.log(time);
    setOnLocalStorage(time);
    let breakButton = document.getElementById('breakButton');
    breakButton.innerText = '';
    breakButton.innerText = time;

}



let ShowBreak = (props) => {
    return (
        <div> 
            <button className='bg-cyan-800 text-white p-2 rounded-full h-12 w-12' onClick={() => setOnBreak(props.time)} >{props.time}</button>
        </div>
    )
}

export default Cart;