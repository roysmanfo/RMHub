import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User } from '@supabase/supabase-js';
import premium from '../img/icons/premium.svg'
import "../css/user/user.css";
import supabase, { user } from '../conf/supabase';
import usermanager from '../conf/userdata';


export default function Profile() {
    const [userData, setUserData] = useState<{ [x: string]: any }>({});

    // setUserData({ id: undefined, username: '', biography: '' });

    useEffect(() => {
        async function fetchUser() {

            // Check if the user is not logged in
            if (!user)
                window.location.replace('/login');

            // If the user is logged in            
            setUserData(usermanager.userdata || {});

            if (!usermanager.userdata) {
                const newUserData = await createUserData(usermanager.user);
                setUserData(newUserData ?? {});
            }

        }

        async function createUserData(user: User | null): Promise<{ id: string, username: string, name: string, biography: string, isPremium: boolean, points: number, suspended: boolean; } | null> {
            let u_name = generateUsername();
            if (user) {

                const newUserData = { id: user.id, username: u_name, name: u_name, biography: '', isPremium: false, points: 0, suspended: false }
                const { data, error } = await supabase
                    .from('users')
                    .insert([
                        newUserData,
                    ]);
                if (data) { }
                if (error) { }
                return newUserData;
            }
            return null;
        }
        fetchUser();

    }, [userData]);

    function generateUsername() {
        return 'user_' + Math.random().toString(36).substring(2, 20);
    }



    // Generate informations to visualize
    let isPremium;
    userData.isPremium ? isPremium = <img className="info membership" alt='Premium logo' title='Premium Account' src={premium} /> : isPremium = <></>;

    let biography;
    if (userData.biography === '')
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
