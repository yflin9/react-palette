import { Route, Switch } from "react-router-dom"
import PaletteList from "./PaletteList"
import Palette from "./Palette"
import seedPalettes from "./seedPalettes"
import { generatePalette } from "./colorHelpers"

function App() {
  const findPalette = (id) => {
    return seedPalettes.find((palette) => palette.id === id)
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedPalettes} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routerProps) => (
          <Palette
            palette={generatePalette(findPalette(routerProps.match.params.id))}
          />
        )}
      />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedPalettes[3])} />
    // </div>
  )
}

export default App
