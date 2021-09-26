import React from 'react';

const Card = () => {
    return (
    <div className='bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src='https://robohash.org/tests?200x200'/>
        <div>
            <h2> Jane doe</h2>
            <p>email: miha.miha@gmail.com</p>
        </div>
    </div>
    );
}

export default Card;