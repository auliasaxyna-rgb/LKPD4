import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>Ini halaman tentang kami</p>
            <Link href='/'>Beranda</Link>
        </div>
    );
}