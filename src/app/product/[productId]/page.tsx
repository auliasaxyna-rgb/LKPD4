import Link from "next/link";

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails({params}: Props) {
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
            <p><Link href='/product'>Kembali ke Product</Link></p>
            <p><Link href='/'>Beranda</Link></p>
        </div>
    );
}