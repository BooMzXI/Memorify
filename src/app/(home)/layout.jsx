import "@/app/globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}
