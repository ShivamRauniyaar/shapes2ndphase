import React, { Fragment } from "react";

const ImageCatalog2nd = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-13 gap-2 mt-[5rem]">
        <div
          className="col-span-6 "
          style={{
            backgroundImage: `url(/images/newimages/product_catalog/Frame4.png)`,
            width: "100%",
            height: "515px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginTop: "91px",
          }}
        ></div>
        <div
          className="col-span-3 "
          style={{
            backgroundImage: `url(/images/newimages/product_catalog/Frame5.png)`,
            width: "100%",
            height: "515px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="col-span-4 "
          style={{
            backgroundImage: `url(/images/newimages/product_catalog/Frame6.png)`,
            width: "100%",
            height: "515px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginTop: "156px",
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default ImageCatalog2nd;
