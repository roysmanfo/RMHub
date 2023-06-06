import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User, createClient } from '@supabase/supabase-js';
import ENV from '../env';

import premium from '../img/icons/premium.svg'
import "../css/user/user.css";


export default function Profile() {
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<{[x: string]: any}>({});
    
    // setUserData({id: undefined, username: '', biography: '' });

    useEffect(() => {
        async function fetchUser() {
            if(user === null){
                const { data: { user } } = await supabase.auth.getUser();
                setUser(user ?? null);
                if (user !== null){
                    let { data: userData, error } = await supabase.from('users').select('*').eq('id', user?.id);
                    if (userData){                                                
                        if(error || userData[0] === undefined){                            
                            setUserData(createUserData(user));
                                                      
                        }
                        setUserData(userData[0]);
                    }
                }
            }
        }

        async function createUserData(user: User): Promise<{}>{
            let u_name = generateUsername()
            const newUserData = { id: user.id, username: u_name, name: u_name, biography: '', isPremium: false, points: 0, suspended: false }
            const { data, error } = await supabase
            .from('users')
            .insert([
                newUserData,
            ]);            
            return newUserData;
        }
        fetchUser();
    }, [supabase, user]);

    function generateUsername() {
        return 'user_' + Math.random().toString(36).substring(2, 20);
    }

    // Generate informations to visualize
    let isPremium;
    userData.isPremium ? isPremium = <img className="info membership" alt='Premium logo' title='Premium Account' src={premium} /> : isPremium = <></>;
    
    let biography;
    if(userData.biography === '')
        biography = <i style={{ color: '#666' }}>Non sappiamo nulla di <span style={{ fontWeight: 700 }}>{userData.username}</span></i>
    else
        biography = userData.biography; 

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
