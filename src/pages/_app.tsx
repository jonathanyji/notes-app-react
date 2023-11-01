import type { AppProps } from 'next/app'
import NavBar from "@/app/components/nav-bar/nav-bar";
import '@/app/globals.css'

// START Prime React
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import 'primeicons/primeicons.css';
// END Prime React
 
//To define the global layout
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
        <NavBar></NavBar>
        <Component {...pageProps} />
    </PrimeReactProvider>
    );
}