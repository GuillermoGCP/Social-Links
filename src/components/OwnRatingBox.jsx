import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
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

  let userIdIndex;
  let userVote;
  // if (!votedByLoggedUser) {
  //   console.log("NO, Tiene", userVote);
  // } else {
  //   userIdIndex = voterUserIds.findIndex((id) => {
  //     return id === profileInfo.id;
  //   });
  //   userVote = individualRatings[userIdIndex];
  //   console.log("Tiene", userVote);
  // }

  userIdIndex = voterUserIds.findIndex((id) => {
    return id === profileInfo.id;
  });
  userVote = individualRatings[userIdIndex];
  return (
    <div className="flex items-center">
      {link.ownerId !== profileInfo.id ? (
        <>
          {votedByLoggedUser ? (
            <div className="flex items-center gap-2">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={userVote} color="secondary">
                  <StarBorderIcon />
                </StyledBadge>
              </IconButton>
              <p className="text-center">Tu votación</p>
            </div>
          ) : (
            <p className="text-center">Aún no has votado este link</p>
          )}
        </>
      ) : (
        <>
          <IconButton aria-label="cart">
            <StyledBadge>
              <VerifiedIcon />
            </StyledBadge>
          </IconButton>
          <p className="text-center">Tu link</p>
        </>
      )}
    </div>
  );
}

OwnRatingBox.propTypes = {
  link: PropTypes.object,
};
