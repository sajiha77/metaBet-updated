import React, { useEffect } from "react";
import DXYComponent from "../Components/DXY/DXYComponent";

const DXYPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DXYComponent />
      {/* <DXYContainer>
        {Dxy_data.map((item, index) => {
          return (
            <FeaturedBanners
              id={item.id}
              key={index}
              data_name={item.data_name}
              background_img={item.background_img}
              route_path={item.route_path}
              btn_name={item.btn_name}
              innerData={item.innerData}
            />
          );
        })}
      </DXYContainer> */}
      {/* {isDesktop && <AirdropFooterBanner />} */}
    </>
  );
};

export default DXYPage;
