import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import "emoji-mart/css/emoji-mart.css"
import { Picker } from "emoji-mart"

const SavePaletteDialog = ({
  handleChange,
  validation,
  addNewPalette,
  resetForm,
  showEmoji,
  handleSaveEmoji,
}) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    resetForm()
    setOpen(false)
  }

  const handleSave = () => {
    addNewPalette()
  }

  const handleSelect = (emoji) => {
    handleSaveEmoji(emoji.native)
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={showEmoji}>
        <DialogTitle id="pick-emoji-title">Chosse a palette Emoji</DialogTitle>
        <Picker onSelect={handleSelect} />
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Chosse a palette name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To save this palette, please enter a unique palette name!
          </DialogContentText>
          <TextField
            autoFocus
            error={validation.error}
            margin="dense"
            label={validation.label}
            helperText={validation.helperText}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SavePaletteDialog
