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

  userIdIndex = voterUserIds
    ? voterUserIds.findIndex((id) => {
        return id === profileInfo.id;
      })
    : null;
  userVote = individualRatings ? individualRatings[userIdIndex] : null;
  return (
    <div className="row-span-3 text-center">
      {link.ownerId !== profileInfo.id ? (
        <>
          {votedByLoggedUser ? (
            <div className="pt-1 ">
              <p className="font-medium text-slate-600">Tu votación</p>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={userVote} color="secondary">
                  <StarBorderIcon style={{ fontSize: 40 }} />
                </StyledBadge>
              </IconButton>
            </div>
          ) : (
            <p className="text-center mt-6 font-medium text-slate-600">
              Vota este link
            </p>
          )}
        </>
      ) : (
        <>
          <p className="font-medium text-slate-600">Tu link</p>
          <IconButton aria-label="cart">
            <StyledBadge>
              <VerifiedIcon style={{ fontSize: 40 }} />
            </StyledBadge>
          </IconButton>
        </>
      )}
    </div>
  );
}

OwnRatingBox.propTypes = {
  link: PropTypes.object,
};
