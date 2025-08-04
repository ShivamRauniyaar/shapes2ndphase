import { Fragment } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const ReturnRefundPolicy = () => {
  return (
    <Fragment>
      <div id="header" className="relative w-full">
        <Breadcrumb heading="Return & Refund" subHeading="Return & Refund" />
      </div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Return & Refund</h1>

          <p className="mb-4">
            At SHAPES PVT LIMITED customer satisfaction is our top priority. We
            understand that sometimes you may need to return or exchange an
            item. Below are our guidelines to ensure a smooth return process.
          </p>

          <h2 className="text-2xl font-bold mb-2">1. Return Period:</h2>
          <p className="mb-4">
            - Products must be in their original condition, unused, and in the
            original packaging with all the tags intact.
          </p>
          <p className="mb-4">
            - Return shipping costs will be borne by the customer unless the
            item arrived damaged or a wrong item was sent.
          </p>
          <h2 className="text-2xl font-bold mb-2">2. Return Conditions:</h2>

          <p className="mb-4">
            - You can return most products purchased from SHAPES PVT LIMITED
            within 7 days of receiving the item.
          </p>

          <h2 className="text-2xl font-bold mb-2">
            3. Damaged or Wrong Items:
          </h2>
          <p className="mb-4">
            - If you receive a damaged item or a product different from what you
            ordered, please notify us within 48 hours of receiving the item. We
            will arrange for the item to be collected and will either replace
            the item or offer a refund.
          </p>

          <h2 className="text-2xl font-bold mb-2">4. Refunds:</h2>
          <p className="mb-4">
            - Once your return is received and inspected, we will notify you of
            the approval or rejection of your refund.
          </p>
          <p className="mb-4">
            - If approved, your refund will be processed, and a credit will
            automatically be applied to your credit card or original payment
            method within 10 business days.
          </p>
          <h2 className="text-2xl font-bold mb-2">5. Return Process:</h2>

          <p className="mb-4">
            - To initiate a return, please contact our Customer Service team
            providing your order number, the product you wish to return, and the
            reason.
          </p>
          <p className="mb-4">
            - Once your return request is approved, you'll receive step-by-step
            instructions and, if applicable, a prepaid shipping label.
          </p>
          <h2 className="text-2xl font-bold mb-2">6. Return Address:</h2>

          <p className="mb-4">- All returns should be sent to:</p>
          <p className="mb-4">
            * SHAPES PVT LIMITED Returns, plot no.17C,HSIIDC,phase-v,Sector-53,
            Kundli- 131028,sonipat,Haryana,india
          </p>
          <h2 className="text-2xl font-bold mb-2">7. Questions or Concerns:</h2>
          <p className="mb-4">
            - If you have any questions or concerns regarding our return policy,
            please contact our Customer Service team, and we will be more than
            happy to assist you.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ReturnRefundPolicy;
