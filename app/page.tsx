import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="mb-6 text-5xl font-bold text-gray-900">
                        Inventory Management
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                        Streamline your inventory tracking with our powerful,
                        easy-to-use management system. Track Products, monitor
                        stock levels, and gain valuable insights.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/sign-in"
                            className="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
                        >
                            Sign-In
                        </Link>
                        <Link
                            href=""
                            className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 transition-colors hover:bg-neutral-200"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
