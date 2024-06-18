interface props {
  params: {
    productId: string;
  };
}

export default function ({ params }: props) {
  return <div>product details {params.productId}</div>;
}
