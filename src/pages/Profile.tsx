import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User, createClient } from '@supabase/supabase-js';
import ENV from '../env';

import "../css/profile/profile.css";


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
                        if(error){
                            setUserData(createUserData());
                        }
                        setUserData(userData[0]);
                    }
                }
            }
        }

        async function createUserData(): Promise<{ id: string | undefined; username: string; biography: string; }>{
            const { data, error } = await supabase
            .from('users')
            .insert([
                { id: user?.id, username: generateUsername(), biography: '' },
            ]);
            return { id: user?.id, username: generateUsername(), biography: '' };
        }
        
        fetchUser();
    }, [supabase, user]);

    function generateUsername() {
        return 'user_' + Math.random().toString(36).substring(2, 20) + Math.random().toString(36).substring(2, 20);
    }

    // Generate informations to visualize
    let isPremium;
    userData.isPremium ? isPremium = <div className="info membership"> Premium Account </div> : isPremium = <></>;
    
    let biography;
    if(userData.biography === '')
        biography = <i style={{ color: '#666' }}>Non sappiamo nulla di <span style={{ fontWeight: 700 }}>{userData.username}</span></i>
    else
        biography = userData.biography; 

    return (
        <>
            <Navbar />
            <main className='column no-overflow' style={{ paddingTop: "4rem" }}>
                <section className='profile-banner' style={{ padding: "3rem" }}>
                    <div className="profile-pic"></div>
                    <section className="user-info">
                        <div className="info username">{userData.username}</div>
                        <div className="info bio"> {biography} </div>
                        {isPremium}
                    </section>
                </section>

            </main>
        </>
    );
}
