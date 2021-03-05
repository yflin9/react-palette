import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import PaletteList from "./PaletteList"
import Palette from "./Palette"
import SingleColorPalette from "./SingleColorPalette"
import NewPaletteForm from "./NewPaletteForm"
import seedPalettes from "./seedPalettes"
import { generatePalette } from "./colorHelpers"

function App() {
  const [palettes, setPalettes] = useState(seedPalettes)

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id)
  }
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => (
          <PaletteList palettes={palettes} {...routerProps} />
        )}
      />

      <Route
        exact
        path="/palette/new"
        render={(routerProps) => (
          <NewPaletteForm savePalette={savePalette} {...routerProps} />
        )}
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
