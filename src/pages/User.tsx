import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js';

import premium from '../img/icons/premium.svg'
import "../css/user/user.css";


export default function Userpage() {
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL ?? '', process.env.REACT_APP_SUPABASE_KEY ?? '');

    const { username } = useParams();
    
    const [userData, setUserData] = useState<{[x: string]: any}>({});
    
    // setUserData({id: undefined, username: '', biography: '' });

    useEffect(() => {
        async function fetchUser() {
            let { data: userData, error } = await supabase.from('users').select()//.eq('username', username?.trim().toLowerCase());
            
            if (error){
                // error message
            }

            if(userData){
                setUserData(userData);
            }
            console.log(userData);
        }
        
        fetchUser();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Generate informations to visualize
    let isPremium;
    userData.isPremium ? isPremium = <img className="info membership" alt='Premium logo' title='Premium Account' src={premium} /> : isPremium = <></>;
    
    let biography;
    if(userData.biography === '')
        biography = <i style={{ color: '#666' }}>Non sappiamo nulla di <span style={{ fontWeight: 700 }}>{userData.username}</span></i>
    else
        biography = userData.biography; 
    console.log(userData)
    return (
        <>
            <Navbar />
            <section className='column no-overflow bg-black' style={{ paddingTop: "4rem" }}>
                <section className='profile-banner' style={{ padding: "3rem" }}>
                    <div className="profile-pic"></div>
                    <section className="user-info">
                        <div className="info username">{userData.name}{isPremium}</div>
                        <div className="info bio"> {biography} </div>
                    </section>
                </section>

            </section>
        </>
    );
}
