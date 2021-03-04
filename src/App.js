import { Route, Switch } from "react-router-dom"
import PaletteList from "./PaletteList"
import Palette from "./Palette"
import SingleColorPalette from "./SingleColorPalette"
import NewPaletteForm from "./NewPaletteForm"
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
        render={(routerProps) => (
          <PaletteList palettes={seedPalettes} {...routerProps} />
        )}
      />

      <Route exact path="/palette/new" render={() => <NewPaletteForm />} />

      <Route
        exact
        path="/palette/:id"
        render={(routerProps) => (
          <Palette
            palette={generatePalette(findPalette(routerProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routerProps) => (
          <SingleColorPalette
            colorId={routerProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routerProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  )
}

export default App
