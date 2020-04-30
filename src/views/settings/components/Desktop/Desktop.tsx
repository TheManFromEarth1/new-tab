import React, { useState } from "react"
import { observer, useLocalStore } from "mobx-react-lite"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Switch from "@material-ui/core/Switch"
import Divider from "@material-ui/core/Divider"

import Wrapper from "../../Layout/SettingsWrapper"
import Grid from "./Grid"
import IconLayout from "./IconLayout"

import { desktopSettings } from "../../store"
import SettingsTitle from "components/SettingsTitle"

const Desktop = observer(() => {
  const {
    toolbar,
    columns,
    rows,
    toggleToolbar,
    acrylicContextMenu,
    acrylicWallpaperDrawer,
    toggleAcrylicContextMenu,
    toggleAcrylicWallpaperDrawer,
  } = useLocalStore(() => desktopSettings)
  const [gridDialogOpen, setGridDialogOpen] = useState(false)

  return (
    <>
      <Wrapper>
        <List>
          <ListItem button onClick={toggleToolbar}>
            <ListItemText
              primary={chrome.i18n.getMessage("settings_desktop_toolbar")}
              secondary={chrome.i18n.getMessage("settings_desktop_toolbar_secondary")}
            />
            <ListItemSecondaryAction>
              <Switch color="primary" checked={toolbar} onChange={toggleToolbar} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => setGridDialogOpen(true)}>
            <ListItemText
              primary={chrome.i18n.getMessage("settings_desktop_grid")}
              secondary={`${chrome.i18n.getMessage(
                "settings_desktop_grid_columns",
              )}: ${columns} ${chrome.i18n.getMessage("settings_desktop_grid_rows")}: ${rows}`}
            />
          </ListItem>
          <Grid open={gridDialogOpen} onClose={() => setGridDialogOpen(false)} />
        </List>
      </Wrapper>
      <Wrapper>
        <IconLayout />
      </Wrapper>
      <Wrapper>
        <SettingsTitle>{chrome.i18n.getMessage("settings_desktop_effects")}</SettingsTitle>
        <List>
          <ListItem button onClick={toggleAcrylicContextMenu}>
            <ListItemText
              primary={chrome.i18n.getMessage("settings_desktop_acrylic_context_menu")}
            />
            <ListItemSecondaryAction>
              <Switch
                color="primary"
                checked={acrylicContextMenu}
                onChange={toggleAcrylicContextMenu}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={toggleAcrylicWallpaperDrawer}>
            <ListItemText
              primary={chrome.i18n.getMessage("settings_desktop_acrylic_wallpaper_drawer")}
            />
            <ListItemSecondaryAction>
              <Switch
                color="primary"
                checked={acrylicWallpaperDrawer}
                onChange={toggleAcrylicWallpaperDrawer}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Wrapper>
    </>
  )
})

export default Desktop
