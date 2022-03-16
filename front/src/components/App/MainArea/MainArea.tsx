import Button from "../../UI/Button/Button"
import ReactLogo from "../../UI/ReactLogo/ReactLogo"
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import Header from "../../UI/Header/Header";
import { APP_PAGE } from "../App"
import { MainPageStyled } from "./MainPage.styled"


const MainArea = () => {

  return (
    <div>
      <MainPageStyled>
        <Header/>
      <header className="App-header">
        <ReactLogo />
        <RouteLink to={APP_PAGE.SALES}>
          <Button title="Panel sprzedaży" />
        </RouteLink>
        <RouteLink to={APP_PAGE.MAINTENANCE} >
          <Button title="Panel administracyjny" />
        </RouteLink>
        <RouteLink to={APP_PAGE.STATISTICS}>
          <Button title="Statystyki" />
        </RouteLink>
        <RouteLink to={APP_PAGE.HELP}>
          <Button title="Pomoc" />
        </RouteLink>

      </header>
      </MainPageStyled>
    </div>

  )
}

export default MainArea
