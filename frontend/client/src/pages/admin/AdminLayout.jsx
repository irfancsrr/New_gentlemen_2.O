import { NavLink, Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BarChart3, Boxes, ClipboardList, LogOut, ArrowLeftCircle } from "lucide-react";
import { logoutUser } from "../../features/auth/authSlice";

const navItems = [
  { label: "Analytics", to: "/admin", icon: BarChart3, end: true },
  { label: "Products", to: "/admin/products", icon: Boxes },
  { label: "Orders", to: "/admin/orders", icon: ClipboardList },
];

const AdminLayout = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col lg:flex-row  min-h-screen bg-cream/30 dark:bg-charcoal">
      <aside className=" w-full lg:w-64 shrink-0 flex-col border-r border-hairline bg-ivory p-6 dark:border-hairline-dark dark:bg-charcoal lg:flex">
        <Link to="/" className="font-display text-2xl tracking-tightest">
          NEW GENTLEMEN
        </Link>
        <span className="mt-1 text-xs text-stone">Admin Panel</span>

        <nav className="mt-10 flex lg:flex-col lg:gap-1  flex-row gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-ink text-ivory dark:bg-cream dark:text-ink"
                    : "text-ink/70 hover:bg-ink/5 dark:text-cream/70 dark:hover:bg-cream/10"
                }`
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1">
          <Link
            to="/"
            className="flex items-center gap-3  rounded-lg px-4 py-6 text-sm font-medium text-ink/70 hover:bg-ink/5 dark:text-cream/70 dark:hover:bg-cream/10"
          >
            <ArrowLeftCircle size={16} />
            Back to Store
          </Link>
          <button
            onClick={() => dispatch(logoutUser())}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden p-6 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
