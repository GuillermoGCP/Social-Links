import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PropTypes from "prop-types";
import React from "react";
import { tokenContext } from "../contexs/tokenContext";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function OwnRatingBox({ link }) {
  const { votedByLoggedUser, individualRatings, voterUserIds } = link;
  const [, , profileInfo] = React.useContext(tokenContext);

  const userIdIndex = voterUserIds.findIndex((id) => {
    return id === profileInfo.id;
  });
  let userVote;
  if (userIdIndex !== -1) {
    userVote = individualRatings[userIdIndex];
  } else {
    userVote = 1;
  }

  return (
    <>
      {votedByLoggedUser === 1 ? (
        <>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={userVote ?? 1} color="secondary">
              <StarBorderIcon />
            </StyledBadge>
          </IconButton>
          <p>Tu votación</p>
        </>
      ) : (
        <p>Aún no has votado este link</p>
      )}
    </>
  );
}
OwnRatingBox.propTypes = {
  link: PropTypes.object,
};
