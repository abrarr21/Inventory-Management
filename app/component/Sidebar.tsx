import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar({
    currentPath = "/dashboard",
}: {
    currentPath: string;
}) {
    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
        { name: "Inventory", href: "/inventory", icon: Package },
        { name: "Add Product", href: "/add-product", icon: Plus },
        { name: "Settings", href: "/settings", icon: Settings },
    ];
    return (
        <div className="fixed top-0 left-0 z-10 min-h-screen w-64 bg-gray-900 p-6 text-white">
            <div className="mb-8">
                <div className="flex items-center space-x-3">
                    <BarChart3 className="h-8 w-8" />
                    <span className="text-lg font-bold">Inventory App</span>
                </div>
            </div>

            <nav>
                <div className="space-y-2 text-sm font-semibold text-gray-400 uppercase">
                    Inventory
                </div>
                {navigation.map((item, key) => {
                    const IconComponent = item.icon;
                    const isActive = currentPath === item.href;
                    return (
                        <Link
                            href={item.href}
                            key={key}
                            className={`flex items-center space-x-3 rounded-lg px-3 py-2 ${isActive ? "bg-purple-100 text-gray-800" : "text-gray-300 hover:bg-gray-800"}`}
                        >
                            <IconComponent className="h-5 w-5" />
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="absolute right-0 bottom-0 left-0 border-t border-gray-700 p-6">
                <div className="flex items-center justify-between">
                    <UserButton showUserInfo />
                </div>
            </div>
        </div>
    );
}
