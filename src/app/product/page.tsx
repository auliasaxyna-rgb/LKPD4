import Link from "next/link";

export default function ProductList() {
    return (
        <div>
            <h1>Product List</h1>
            <Link href='/product/1'>Product 1</Link>
            <br/>
            <Link href='/product/2'>Product 2</Link>
            <br/>
            <Link href='/product/3'>Product 3</Link>
            <br/>
            <br/>
            <Link href='/blogs'>Blog</Link>
            <br/>
            <Link href='/about'>About</Link>
            <br/>
            <Link href='/'>Beranda</Link>
        </div>
    );
}