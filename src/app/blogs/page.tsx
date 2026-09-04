import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <p>Tersedia dua blog:</p>
            <Link href='/blogs/first'>Blog Pertama</Link>
            <br/>
            <Link href='/blogs/second'>Blog Kedua</Link>
        </div>
    );
}
