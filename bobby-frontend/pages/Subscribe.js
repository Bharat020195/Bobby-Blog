import React, { useState } from 'react';
import axios from 'axios'; 
import '../app/globals.css';
import Header from '../app/Header';
import Footer from '../app/footer';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'Firstname') setFirstName(value);
        if (name === 'Lastname') setLastName(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:1337/api/subscribers', {
              data :{
                FirstName,
                LastName,
                email
            }
            
            });
            alert('Thank you for Subscribing');
            setEmail('');
            setFirstName('');
            setLastName('');
        } catch (error) {
            alert('Please enter valid details')
            console.error('Error submitting subscriber:', error);
        }
    }

    return (
        <div className='bg-[#FFE3E3] space-y-14 '>
            <Header />

            <div className='flex justify-center text-4xl font-bold pt-32 '>Subscriber Details</div>
            <form className='flex flex-col items-center text-lg space-y-10 pb-36 mx-10 ' onSubmit={onSubmit}>
                <div>
                    First Name: <input type='text' name='Firstname' placeholder='First Name' value={FirstName} onChange={onChange} className='w-96 h-14 rounded-md px-4' />
                </div>
                <div>
                    Last Name: <input type='text' name='Lastname' placeholder='Last Name' value={LastName} onChange={onChange} className='w-96 h-14 rounded-md px-4' />
                </div>
                <div>
                    Email address: <input type='email' name='email' placeholder='Email address' value={email} onChange={onChange} className='w-96 h-14 rounded-md px-4' />
                </div>
                <div className='p-2 bg-[#FFA2A6] h-12 w-44 text-center rounded-2xl hover:text-white'>
                    <button type='submit'>Subscribe</button>
                </div>
            </form>

          
            <Footer />
        </div>
    
    );
}

export default Subscribe;
