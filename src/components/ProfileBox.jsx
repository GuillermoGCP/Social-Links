import React from "react";
import { Link } from "react-router-dom";
import { tokenContext } from "../contexs/tokenContext";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import useCloseSesion from "../hooks/useCloseSesion";

const ProfileBox = () => {
  const { closeSesionHandler } = useCloseSesion();
  const [, , profileInfo] = React.useContext(tokenContext);
  const urlImage =
    import.meta.env.VITE_SERVER_URL + `/uploads/${profileInfo?.profilePicture}`;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <header className="bg-indigo-600 p-4 text-white mr-5 rounded-2xl">
      {profileInfo && Object.values(profileInfo).length > 0 && (
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src={urlImage}
            alt={profileInfo.user}
          />
          <div className="relative flex flex-col items-start">
            <div className="relative">
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                size="small"
                variant="none"
                className="mt-1 truncate"
              >
                <span className="text-lg font-bold truncate">
                  {profileInfo.user}
                </span>
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link to="/dashboard">Mi perfil</Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link to="/dashboard/profileEdit">
                              Editar perfil
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={(handleClose, closeSesionHandler)}>
                            Cerrar sesión
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ProfileBox;
