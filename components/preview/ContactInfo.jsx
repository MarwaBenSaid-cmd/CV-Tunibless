import React from "react";

const ContactInfo = ({
  mainclass,
  linkclass,
  teldata,
  emaildata,
  addressdata,
  telicon,
  emailicon,
  addressicon,
  cvLanguage
}) => {
  const t = {
    en: {
      phone: "Phone Number",
      email: "Email Address",
      address: "Address"
    },
    de: {
      phone: "Telefonnummer",
      email: "E-Mail-Adresse",
      address: "Adresse"
    }
  };

  return (
    <div className={mainclass}>
      <a
        className={linkclass}
        aria-label={t[cvLanguage]?.phone || t.en.phone}
        href={`tel:${teldata}`}
      >
        {telicon}  {teldata}
      </a>
      <a
        className={linkclass}
        aria-label={t[cvLanguage]?.email || t.en.email}
        href={`mailto:${emaildata}`}
      >
        {emailicon} {emaildata}
      </a>
      <address
        aria-label={t[cvLanguage]?.address || t.en.address}
        className={linkclass + " not-italic"}
      >
        {addressicon} {addressdata}
      </address>
    </div>
  );
};

export default ContactInfo;