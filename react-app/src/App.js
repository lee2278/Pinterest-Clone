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
import ShowPinDetails from "./components/PinDetailsPage/ShowPinDetails";
import ShowCreatedPins from "./components/ManageMyPins/ShowCreatedPins";
import ShowCollections from "./components/UserCollectionsPage/ShowCollections";
import EditCreatedPins from "./components/ManageMyPins/EditCreatedPins";
import ShowBoardDetails from "./components/SingleBoardPage/ShowBoardDetails";
import ShowSavedPins from "./components/ManageMySaves/ShowSavedPins";
import ShowSearches from "./components/LandingPage/ShowSearches";
import AboutPage from "./components/AboutPage/AboutPage";

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
        {!sessionUser ? <ShowSplashPage /> : <ShowPins/>}
      </Route>
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path='/pins/:pinId/edit'>
            <EditCreatedPins/>
          </Route>
          <Route path='/pins/:pinId'>
            <ShowPinDetails/>
          </Route>
          <Route path='/pin-maker'>
            <PinMaker/>
          </Route>
          <Route path='/search/:search'>
            <ShowSearches/>
          </Route>
          <Route path={`/${sessionUser?.username}/created`}>
            <ShowCreatedPins/>
          </Route>
          <Route path={`/${sessionUser?.username}/saved`}>
            <ShowSavedPins/>
          </Route>

          <Route exact path={`/${sessionUser?.username}/boards/:boardId`}>
            <ShowBoardDetails/>
          </Route>
          <Route path={`/${sessionUser?.username}`}>
            <ShowCollections/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
