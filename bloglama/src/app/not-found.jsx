import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for doesnt exist.</p>
            <Link href={"/"}>Return to Home</Link>
        </div>
    );
}