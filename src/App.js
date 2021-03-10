import { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import PaletteList from "./PaletteList"
import Palette from "./Palette"
import SingleColorPalette from "./SingleColorPalette"
import NewPaletteForm from "./NewPaletteForm"
import seedPalettes from "./seedPalettes"
import { generatePalette } from "./colorHelpers"

function App() {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"))

  const [palettes, setPalettes] = useState(savedPalettes || seedPalettes)

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id)
  }
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }
  const saveToLocalStorage = (palettes) => {
    localStorage.setItem("palettes", JSON.stringify(palettes))
  }

  useEffect(() => {
    saveToLocalStorage(palettes)
  }, [palettes])

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
          <NewPaletteForm
            palettes={palettes}
            savePalette={savePalette}
            {...routerProps}
          />
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
