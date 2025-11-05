"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  console.log(pathname);
  return (
    <div>
      <h1>
        Review {reviewId} Not Found For the Product {productId}{" "}
      </h1>
      <p>Could Not Found the Requested resource</p>
    </div>
  );
}
