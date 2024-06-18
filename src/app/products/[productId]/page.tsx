interface props {
  params: {
    productId: string;
  };
}

export default function Product({ params }: props) {
  return <div>product details {params.productId}</div>;
}
