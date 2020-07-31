import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import FriendCard from './FriendCard'

const Main = (props) => {

    let [allFriendsArray, setAllFriendsArray] = useState([])

    useEffect( () => {
        Axios.get(`${process.env.REACT_APP_API}/api/users`)
        .then(allFriends => {
            console.log('these are all the users', allFriends.data)
            setAllFriendsArray(allFriends.data)
        })
        .catch(err => console.log(err))
    }
        , [])

    const mappedFriends = allFriendsArray.map((friend) => {
        return (
            <div key={friend._id}>
                <FriendCard friend={friend} user={props.user} />
            </div>)
    })
    return (
            <div >
                <div className="newBodyBackground">
                        <section className="mainboxouter">
                            {mappedFriends}

                        </section>
                    </div>
            </div>
    )
}

export default Main;