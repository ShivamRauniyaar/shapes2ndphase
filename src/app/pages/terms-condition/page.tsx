import { Fragment } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <div id="header" className="relative w-full">
        <Breadcrumb
          heading="Terms & Conditions"
          subHeading="Terms & Conditions"
        />
      </div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

          <p className="mb-4">
            This privacy policy sets out how our website uses and protects any
            information that you give us when you use this website.
          </p>

          <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
          <p className="mb-4">
            Welcome to SHAPES! These Terms and Conditions govern your use of our
            website, products, and services. By accessing or purchasing from
            SHAPES, you agree to be bound by these terms. If you do not agree,
            please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mb-2">2. Orders & Payments</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              All orders are subject to availability and confirmation of
              payment.
            </li>
            <li>
              We reserve the right to cancel or refuse any order at our
              discretion.
            </li>
            <li>Payment must be completed before order processing begins.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">3. Shipping & Delivery</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Estimated delivery times are provided at checkout but are not
              guaranteed.
            </li>
            <li>
              We are not responsible for delays caused by carriers or customs.
            </li>
            <li>
              Any additional duties or taxes for international orders are the
              customer’s
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">4. Returns & Refunds</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Items must be returned in original condition within 7 days for a
              refund or exchange.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">
            5. Product Information & Accuracy
          </h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              We strive to provide accurate product descriptions and images, but
              we do not guarantee that all information is error-free.
            </li>
            <li>Colors may vary slightly due to screen settings.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">6. User Conduct</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              You agree to use our website and services for lawful purposes
              only.
            </li>
            <li>
              You may not engage in activities that could damage our reputation,
              security, or operations.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">7. Intellectual Property</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              All content, logos, and designs on SHAPES are the property of
              SHAPES and protected by copyright and trademark laws.
            </li>
            <li>
              You may not use, reproduce, or distribute our content without
              permission.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">
            8. Limitation of Liability
          </h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              SHAPES is not liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              website.
            </li>
            <li>
              Our liability is limited to the amount paid for the product in
              question.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">9. Changes to Terms</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              We reserve the right to modify these Terms and Conditions at any
              time.
            </li>
            <li>
              Continued use of our services after updates constitutes acceptance
              of the new terms.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">10. Contact Information</h2>

          <p className="mb-4">
            For any questions regarding these terms, please contact us at
            info@shapesproducts.in
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicy;
