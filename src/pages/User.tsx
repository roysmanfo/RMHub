import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { User, createClient } from '@supabase/supabase-js';

import premium from '../img/icons/premium.svg'
import "../css/user/user.css";


export default function Userpage() {
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL ?? '', process.env.REACT_APP_SUPABASE_KEY ?? '');

    const { username } = useParams();
    
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<{[x: string]: any}>({});
    
    // setUserData({id: undefined, username: '', biography: '' });

    useEffect(() => {
        async function fetchUser() {
            if(user === null){
                const { data: { user } } = await supabase.auth.getUser();
                setUser(user ?? null);
                if (user !== null){
                    let { data: userData, error } = await supabase.from('users').select('*').eq('username', username?.toLowerCase());
                    if (userData){
                        console.log(userData)
                        console.log(error)
                        if(error || userData[0] === undefined){
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
    }, [supabase, user, username]);

    function generateUsername() {
        return 'user_' + Math.random().toString(36).substring(2, 20) + Math.random().toString(36).substring(2, 20);
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
