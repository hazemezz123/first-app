import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>The Product Review </h1>
      <p>The Product id {productId}</p>
      <p>The Review id {reviewId}</p>
    </>
  );
}
