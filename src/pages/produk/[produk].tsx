
import DetailProduk from '../../views/DetailProduct';
import { ProductType } from '../../types/Product.type';

interface ProdukDetailPageProps {
  product: ProductType | null;
}

export default function ProdukDetailPage({ product }: ProdukDetailPageProps) {
  if (!product) return <div>Produk tidak ditemukan.</div>;
  return <DetailProduk product={product} />;
}

export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${apiUrl}/api/produk/${params.produk}`);
  const response = await res.json();

  return {
    props: {
      product: response && response.id ? response : null,
    },
  };
}
