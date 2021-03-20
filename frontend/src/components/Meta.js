import { Helmet } from "react-helmet";
import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={"description"} content={description} />
      <meta name={"keywords"} content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Kuponify - Create and manage discount coupons for your online store",
  description: "Create and manage discount coupons for your online store",
  keywords: "coupons,discounts,e-commerce",
};

export default Meta;
