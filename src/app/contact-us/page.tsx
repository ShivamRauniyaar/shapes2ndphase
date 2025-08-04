// app/contact/page.tsx

import ContactUs from "@/components/Contact/ContactUs";
import { SHAPES_CMS_URL } from "../../../Constant";

export default async function ContactPage() {
  const res = await fetch(`${SHAPES_CMS_URL}constactus`, {
    cache: "no-store",
  });
  const data = await res.json();
  const dynamicContactData = data?.data?.[0];

  return <ContactUs dynamicContactData={dynamicContactData} />;
}
