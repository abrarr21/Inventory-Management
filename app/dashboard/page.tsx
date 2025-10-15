import { prisma } from "@/lib/prisma";
import Sidebar from "../component/Sidebar";
import getCurrentUser from "@/lib/auth";
import { TrendingUp } from "lucide-react";

export default async function DashboardPage() {
    const user = await getCurrentUser();
    const userId = user.id;

    const [totalProduct, lowStock, allProduct] = await Promise.all([
        prisma.product.count({ where: { userId } }),
        prisma.product.count({
            where: { userId, lowStockAt: { not: null }, quantity: { lte: 5 } },
        }),
        prisma.product.findMany({
            where: { userId },
            select: { price: true, quantity: true, createdAt: true },
        }),
    ]);

    const totalValue = allProduct.reduce(
        (sum, product) =>
            sum + Number(product.price) * Number(product.quantity),
        0,
    );
    console.log(totalValue);

    const recent = await prisma.product.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 5,
    });
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar currentPath="/dashboard" />
            <main className="ml-64 p-8">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Dashboard
                            </h1>
                            <p className="text-sm text-gray-500">
                                Welcome Back! Here is an overview of your
                                inventory.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="rounded-lg border border-gray-300 bg-white p-6">
                        <h2 className="mb-6 text-lg font-semibold text-gray-900">
                            Key Metrics
                        </h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">
                                    {totalProduct}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Total Product
                                </div>
                                <div className="mt-1 flex items-center justify-center">
                                    <span className="test-xs text-green-600">
                                        +{totalProduct}
                                    </span>
                                    <TrendingUp className="ml-1 h-3 w-3 text-green-600" />
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">
                                    ${Number(totalValue).toFixed(0)}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Total Value
                                </div>
                                <div className="mt-1 flex items-center justify-center">
                                    <span className="test-xs text-green-600">
                                        +{Number(totalValue).toFixed(0)}
                                    </span>
                                    <TrendingUp className="ml-1 h-3 w-3 text-green-600" />
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">
                                    {lowStock}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Low Stock
                                </div>
                                <div className="mt-1 flex items-center justify-center">
                                    <span className="test-xs text-green-600">
                                        +{totalProduct}
                                    </span>
                                    <TrendingUp className="ml-1 h-3 w-3 text-green-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
