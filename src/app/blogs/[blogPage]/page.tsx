import Link from "next/link";

type Props = {
    params: {
        blogPage: string
    }
}

export default function BlogPage({params}: Props) {
    return (
        <div>
            <h1>Blog Page: {params.blogPage}</h1>
            <p>Ini halaman {params.blogPage}</p>
            <Link href='/blogs'>Kembali ke Blog</Link>
            <br/>
            <Link href='/'>Beranda</Link>
        </div>
    );
}