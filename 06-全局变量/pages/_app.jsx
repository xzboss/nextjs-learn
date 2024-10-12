import "@/styles/globals.css";
import DashboardLayout from "./layout";

export default function App({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
