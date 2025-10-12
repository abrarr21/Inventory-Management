import Sidebar from "../component/Sidebar";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar currentPath="/dashboard" />
        </div>
    );
}
