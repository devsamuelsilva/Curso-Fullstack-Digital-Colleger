import { Outlet } from "react-router-dom";
import { Header } from "../../components/layouts/main/Header/header";
import { Navbar } from "../../components/layouts/main/Sidebar/Sidebar";


export function MainLayout() {
    return(
    <main>
      <Header />
      <section className="min-h-screen flex bg-slate-100">
        <Navbar />
        <div className="p-5">
        <Outlet /> 
        </div>
      </section>
    </main>
    )
}