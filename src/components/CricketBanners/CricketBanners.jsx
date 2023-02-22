import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CricketBannersContainer } from "./CricketBanners.styles";

const CricketBanners = (props) => {
  const navigate = useNavigate();
  console.log("object", props.innerData_1);

  return (
    <a
      onClick={() =>
        navigate(props.inner_route_path, { state: props.innerData_1 })
      }
    >
      <CricketBannersContainer
        background={props.background_img}
      ></CricketBannersContainer>
    </a>
  );
};

export default CricketBanners;
