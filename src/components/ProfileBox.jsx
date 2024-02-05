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
import { useMediaQuery } from "@mui/material";
import { ClockLoader } from "react-spinners";

const ProfileBox = () => {
  const { closeSesionHandler } = useCloseSesion();
  const [, , profileInfo, , , loading] = React.useContext(tokenContext);
  const urlImage =
    import.meta.env.VITE_SERVER_URL + `/uploads/${profileInfo?.profilePicture}`;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleImageClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target) &&
      event.target.id !== "profileImage"
    ) {
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

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  {
    return loading ? (
      <div className="flex justify-center items-center mr-14">
        <ClockLoader color="#ccc" size={50} />
      </div>
    ) : (
      <div className="bg-indigo-600 p-4 text-indigo-100 mr-5 rounded-2xl">
        <div className="flex items-center space-x-4">
          <img
            id="profileImage"
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
            src={urlImage}
            alt={profileInfo.user}
            onClick={handleImageClick}
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
                className="mt-1 truncate transition-colors duration-300"
              >
                {!isSmallScreen && (
                  <span
                    className="text-sm font-bold truncate hover:scale-110"
                    style={{ textShadow: "0.5px 0.5px 0.5px rgba(0,0,0,0.4)" }}
                  >
                    {profileInfo.user}
                  </span>
                )}
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
      </div>
    );
  }
};

export default ProfileBox;
