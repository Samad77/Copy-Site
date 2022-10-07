import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import logoImg from '../../images/img1.jpg'
import Cart from '../Cart/Cart';


const Header = (props) => {

    let [items, setItems] = useState([]);
    useEffect( () => {
        fetch('fakeData.json').then(Response => Response.json()).then(items => setItems(items))
    }, [])

    let [carts, setCart] = useState([]);
    let addOnCartByClick = (item) => {
        // console.log(item);
        let newCart = [...carts, item];
        setCart(newCart);
    }

    // let brakes = [
    //     {time: 10},
    //     {time: 20},
    //     {time: 30},
    //     {time: 40},
    //     {time: 50}
    // ];

    return (
        <div className='w-11/12 mx-auto'>
            <div className='mt-14'>
                <h2 className='text-4xl font-sans font-bold'><span className='text-red-600'>S</span><span className='text-green-700'>Y</span><span className='text-blue-600'>L</span><span className='text-yellow-500'>H</span><span className='text-emerald-400'>E</span><span className='text-red-600'>T</span>  <span className='text-blue-600'>G</span><span className='text-green-700'>Y</span><span className='text-violet-700'>M</span></h2>
            </div>

            <div className='w-12/12 flex justify-between '>
                <div className='grid grid-cols-3 gap-4'>
                {
                    items.map(item => <Card allDatas = {item} key = {item._id} addOnCartByClick = {addOnCartByClick}></Card>)
                }
                {/* {
                    items.map(item => console.log(item))
                } */}
                </div>

                    <div className='bg-slate-100 w-3/12 text-black rounded-lg p-8 h-fit'>

                        <Cart cart = {carts}></Cart>

                    </div>
                
            </div>

            <div className='text-white'>

                <h1>Questions</h1>

                <div>
                    <h2 className='text-lg font-bold mb-3 mt-3'>1. how does react work ?</h2>
                    <h2> Ans : React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.</h2>
                </div>

                <div>
                    <h2 className='text-lg font-bold mb-3 mt-3'>2. Difference between component and props ?</h2>
                    <h2> Ans : Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</h2>
                </div>

                <div>
                    <h2 className='text-lg font-bold mb-3 mt-3'>3. The uses of use effect ?</h2>
                    <h2> Ans : The useEffect Hook Usages <br />
                            Side Effect Runs After Every Render. The first is the default case. <br />
                            Side Effect Runs Only Once After Initial Render. <br/>
                            Side Effect Runs After State Value Changes.  <br/>
                            Side Effect Runs After Props Value Change.  <br/>
                            Side Effect Runs After Props and State Value Change. <br/>
                            Side Effect Cleanup.</h2>
                </div>
                
            </div>
        </div>
    );
};

export default Header;