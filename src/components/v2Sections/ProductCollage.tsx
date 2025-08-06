import React, { Fragment } from "react";

const ProductCatalog = () => {
  return (
    <Fragment>
      <section className=" min-h-screen">
        <h5 className="text-[24px] items-center text-center">
          A cutlery line that balances form, function, and finesse --
          thoughtfully designed to complement both everyday service and elevated
          experiences.
        </h5>

        <div className="grid grid-cols-13 gap-2 mt-[5rem]">
          <div
            className="col-span-3 "
            style={{
              backgroundImage: `url(/images/newimages/product_catalog/Frame1.png)`,
              width: "100%",
              height: "515px",
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "91px",
            }}
          ></div>
          <div
            className="col-span-6 "
            style={{
              backgroundImage: `url(/images/newimages/product_catalog/Frame2.png)`,
              width: "100%",
              height: "515px",
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="col-span-4 "
            style={{
              backgroundImage: `url(/images/newimages/product_catalog/Frame3.png)`,
              width: "100%",
              height: "515px",
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "156px",
            }}
          ></div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductCatalog;
