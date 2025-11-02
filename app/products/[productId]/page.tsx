import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const ProductId = (await params).productId;
  return <div>details about product {ProductId}</div>;
};

export default ProductDetails;
