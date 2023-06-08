import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User, createClient } from '@supabase/supabase-js';
import premium from '../img/icons/premium.svg'
import "../css/user/user.css";


export default function Profile() {
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL ?? '', process.env.REACT_APP_SUPABASE_KEY ?? '');
    const [userData, setUserData] = useState<{ [x: string]: any }>({});

    // setUserData({ id: undefined, username: '', biography: '' });

    useEffect(() => {
        async function fetchUser() {
            if (!supabase) return; // Added condition to check if supabase is defined

            const session = await supabase.auth.getSession();

            // Check if the user is not logged in
            if (!session.data.session)
                window.location.href = '/login';

            // If the user is logged in
            if (session.data.session) {
                const user = session.data.session.user;

                let { data, error } = await supabase.from('users').select('*').eq('id', user.id);

                if (error) {
                    console.log(error);
                } else {
                    if (!data || data[0] === undefined) {
                        const newUserData = await createUserData(user);
                        setUserData(newUserData);
                    } else {
                        setUserData(data[0]);
                    }
                }
            }
        }

        async function createUserData(user: User): Promise<{}> {
            let u_name = generateUsername()
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
        fetchUser();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
