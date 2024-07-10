import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, toggleMenu } from "./appSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { YOUTUBE_SUGGESTION_API } from "./Constants";

export const useHeadingFunctions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoginToolTipActive, setLoginToolTipActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState();
  const [searchText, setSearchText] = useState("");

  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const handleDarkModeSwitch = () => {
    dispatch(toggleDarkMode());
  };
  const handleHamburgerClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getSuggestions();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + "&q=" + searchText);
    const result = await data.json();
    setSuggestions(result[1]);
  };

  const handleSuggestionClick = async (e) => {
    setShowSuggestion(false);
    setSearchText(e.target.innerText);
  };

  const onSearchBtnClick = async () => {
    if (searchText !== "") {
      navigate(`/search?result=` + searchText);
      setShowSuggestion(false);
    }
  };

  const handleEnterPress = async (e) => {
    if (e.key === "Enter" && searchText !== "") {
      navigate(`/search?result=` + searchText);
      setShowSuggestion(false);
    }
  };
  const handleMouseEnter = () => {
    setLoginToolTipActive(true);
  };

  const handleMouseLeave = () => {
    setLoginToolTipActive(false);
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    isLoginToolTipActive,
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
  };
};
