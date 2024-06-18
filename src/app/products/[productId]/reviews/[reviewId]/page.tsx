interface props {
  params: {
    productId: string;
    reviewId: string;
  };
}
export default function Review({ params }: props) {
  return (
    <h1>
      this is review number {params.reviewId} for product {params.productId}
    </h1>
  );
}
