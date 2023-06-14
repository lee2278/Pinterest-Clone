import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ShowPins from "./components/LandingPage/ShowPins";
import ShowSplashPage from "./components/LandingPage/ShowSplashPage";
import PinMaker from "./components/PinMakerPage/PinMaker";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

	const sessionUser = useSelector(state => state.session.user);


  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route exact path='/'>
        {sessionUser ? <ShowPins/> : <ShowSplashPage />}
      </Route>
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/pin-maker'>
            <PinMaker/>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
