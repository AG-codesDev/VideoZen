import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { auth, provider } from "../../Utils/firebase.utils";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useHeadingFunctions } from "../../Utils/useHeadingFunction";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utils/logintDetailsSlice";

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });

const Heading = () => {
  const [photoURL, setPhotoURL] = useState(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const {
    isDarkModeActive,
    handleDarkModeSwitch,
    handleHamburgerClick,
    suggestions,
    showSuggestion,
    handleSuggestionClick,
    onSearchBtnClick,
    handleEnterPress,
    searchText,
    setSearchText,
    setShowSuggestion,
  } = useHeadingFunctions();

  const dispatch = useDispatch();

  const InputElement = useRef();
  const hamBurger = useRef();
  const Icon = useRef();
  const handleSmallSearchClick = () => {
    InputElement.current.classList.toggle("hidden");
    InputElement.current.classList.add("flex");
    hamBurger.current.classList.remove("hidden");
    Icon.current.classList.toggle("hidden");
  };

  // FIREBASE LOGIN
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // console.log("signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  // signout
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // on authstate change handle
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // this will be called whenever user signs in/ singns up
      if (user) {
        const uid = user.uid;

        //when user signs in, add user detail in redux store
        dispatch(addUser({ name: user.displayName, photo: user.photoURL }));
        setIsUserSignedIn(true);
      } else {
        // this will be called whenever user logut
        dispatch(removeUser());
        setIsUserSignedIn(false);
      }
    });
  }, []);

  const userData = useSelector((store) => store.loginInfo.info);
  useEffect(() => {
    if (userData) {
      setPhotoURL(userData.photo);
    }
  }, [userData]);
  return (
    <div
      className={`${
        isDarkModeActive ? "bg-zinc-900" : "bg-white"
      } flex flex-col p-3 justify-between shadow-md lg:p-3 fixed top-0 w-full z-10`}
    >
      <div className="headeronly flex justify-between w-full">
        <div className="logo-hamburger flex items-center ">
          <div ref={hamBurger}>
            <GiHamburgerMenu
              className={` ${
                isDarkModeActive
                  ? "text-white lg:hover:bg-black"
                  : "text-black lg:hover:bg-gray-200"
              } text-4xl cursor-pointer rounded-full font-extrabold p-2 lg:mr-4 transition-all`}
              onClick={() => handleHamburgerClick()}
            />
          </div>
          <div className="flex" ref={Icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5667/5667341.png"
              alt=""
              className=" h-8 lg:h-10  cursor-pointer"
            />
            <span
              className={`${
                isDarkModeActive ? "text-white" : "text-black"
              } font-LilitaOne lg:text-2xl text-xl mt-1 flex lg:flex-col flex-row items-center gap-1 lg:gap-0`}
            >
              <span>VideoZen</span>
              <span className="text-xs font-Pacifico"> - by Apurva Gaurav</span>
            </span>
          </div>
        </div>
        <div
          className="searchBar-voiceassistant lg:flex lg:w-1/2 items-center hidden justify-center"
          ref={InputElement}
        >
          <input
            type="text"
            placeholder="Search"
            className={`${
              isDarkModeActive ? "bg-zinc-900 text-white" : "bg-white"
            } border-2 border-gray-300 w-full rounded-l-full py-[0.4rem] px-3`}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onKeyDown={(e) => handleEnterPress(e)}
            onMouseEnter={() => setShowSuggestion(true)}
            onMouseLeave={() => setShowSuggestion(false)}
          />
          <IoIosSearch
            className=" bg-gray-200 text-[2.5rem] py-1 px-2 rounded-r-full hover:cursor-pointer active:bg-black active:text-white transition-all"
            onClick={onSearchBtnClick}
          />
          <MdKeyboardVoice className=" bg-gray-200 text-[2.5rem] p-2 ml-5 rounded-full hidden lg:block" />
        </div>
        <div className="darkmode-login justify-around lg:gap-6  flex items-center">
          <FaSearch
            className={` ${
              isDarkModeActive ? "text-white" : ""
            } text-lg mr-2 lg:hidden`}
            onClick={handleSmallSearchClick}
          />
          <div className="darkModeIcon">
            {isDarkModeActive ? (
              <MdOutlineDarkMode
                className="text-[1.6rem] lg:text-3xl cursor-pointer text-white"
                onClick={() => handleDarkModeSwitch()}
              />
            ) : (
              <MdDarkMode
                className="text-[1.6rem] lg:text-3xl cursor-pointer "
                onClick={() => handleDarkModeSwitch()}
              />
            )}
          </div>

          {isUserSignedIn && (
            <div className="profile-pic">
              <img
                src={photoURL}
                className="rounded-full h-10 w-10"
                alt="profilepic"
              />
            </div>
          )}

          {!isUserSignedIn ? (
            <button
              className="bg-green-600 text-white hidden lg:block p-2 text-sm font-medium rounded-md"
              onClick={handleSignIn}
            >
              <span className="flex gap-2 items-center">
                <span>Login</span>
                <span>
                  <FaUserCircle size={20} />
                </span>
              </span>
            </button>
          ) : (
            <button
              className="bg-red-600 text-white p-2 text-sm font-medium rounded-md"
              onClick={handleSignOut}
            >
              <span className="flex gap-1 items-center">
                <span>Logout</span>
                <span>
                  <IoMdLogIn size={20} />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>

      <div
        className={` ${
          isDarkModeActive ? "bg-zinc-900 text-white" : "bg-white"
        } suggestions hidden lg:block lg:ml-[26rem] w-full lg:w-[40rem] shadow-xl rounded-md absolute top-12`}
        onMouseLeave={() => setShowSuggestion(false)}
        onMouseEnter={() => setShowSuggestion(true)}
      >
        {showSuggestion &&
          suggestions.map((suggestion) => (
            <Link
              to={`/search?result=` + suggestion}
              onClick={handleSuggestionClick}
              key={suggestion}
            >
              <p
                className={` ${
                  isDarkModeActive ? "hover:bg-zinc-700" : "hover:bg-gray-100"
                } my-2 p-2 hover:bg-gray-100 hover:cursor`}
              >
                <span className="flex items-center gap-2">
                  <CiSearch className="mt-1" />
                  {suggestion}
                </span>
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Heading;
