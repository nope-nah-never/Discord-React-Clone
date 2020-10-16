import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {selectUser} from "./features/userSlice"
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice"

function App() {
  const dispatch = useDispatch(); // to shoot things into the data layer
  const user = useSelector(selectUser); // this gets the user state from the store


  //the following code adds persistence to the login functionality
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => { //its like a listener for auth change
      if(authUser) {
       //the user is logged in
       dispatch(login({
         uid: authUser.uid,
         photo: authUser.photoURL,
         email: authUser.email,
         displayName: authUser.displayName,
       })
      );
     } else {
       //the user is logged out
       dispatch(logout());
     }
    });
  }, [dispatch]);

  return (
    <div className="app">
     {user ? (
       <>
       <Sidebar />
       <Chat />
       </>
     ) : (
       <Login />
     )}
    </div>
  );

  // return(
  //   <div className="app" >
  //   <Sidebar />
  //   <Chat />
  //   </div>
  // );
}

export default App;
