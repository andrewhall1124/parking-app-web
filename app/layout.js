import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import NavBar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Link from "next/link";
import logo from "@/assets/park-sense.png"
import Image from "next/image";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Parking Sense Web",
  description: "Cooked with Propane",
};

const routes = [
  {
    title: 'Lots',
    href: 'lots',
  },
]

function Logo(){
  return(
    <Link href='/'>
      <div className="text-2xl font-bold">
        <Image
          src={logo}
          height={50}
        />
      </div>
    </Link>
  )
}


function Header(){
  return(
    <div className="sticky top-0 flex gap-8 items-center p-4 shadow-sm">
      <Logo/>
      <div className="flex gap-3">
        <NavBar routes={routes}/>
        {/* <ModeToggle/> */}
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >        
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
