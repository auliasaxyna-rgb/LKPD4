import Link from "next/link"

type ReviewProps = {
    params: {
        productId: string,
        reviewId: string
    }
}

export default function ReviewDetail({params}: ReviewProps) {
    return (
        <div>
            <h1>Review {params.reviewId} for Product {params.productId}</h1>
            <p><Link href='/product'>Kembali ke Product</Link></p>
            <p><Link href='/'>Beranda</Link></p>
        </div>
    )
}