import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logoDaka from "../static/images/LogoDakaSeFeliz.png";
import logoAvatar from "../static/images/avatarTortuga.png";
import { useNavigate } from "react-router-dom";

const pages = ["CREAR UN NUEVO USUARIO", "ADMINISTRAR", "SUCURSAL: VALENCIA"]; // Elementos de la lista
const settings = ["Perfil", "Cuenta", "Panel", "Cerrar sesión"]; // Configuraciones de la lista

const bol = false;

function Nav() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavigate = (event) => {
    navigate(`/${event.target.innerText}`.toLocaleLowerCase());
  };
  const dakaTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#1b3e90",
      },
    },
  });

  return (
    <ThemeProvider theme={dakaTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button onClick={handleNavigate}>
              <img
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                src={logoDaka}
                style={{ height: 50, marginRight: 20 }}
                alt="logoDakaSeFeliz"
              />
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleNavigate}
                  sx={{
                    my: 1,
                    color: "#1b3e90",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir Ajustes">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar
                    alt="Avatar"
                    src="{logoAvatar}"
                    style={{ height: 40, width: 40, background: "#00C040" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography style={{ color: "#1b3e90" }} textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Nav;