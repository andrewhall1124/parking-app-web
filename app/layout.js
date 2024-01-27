import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import NavBar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Link from "next/link";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Title",
  description: "Created by Andrew Hall",
};

const routes = [
  {
    title: 'Test',
    href: 'test',
  },
]

function Logo(){
  return(
    <Link href='/'>
      <div className="font-bold">
        Logo
      </div>
    </Link>
  )
}


function Header(){
  return(
    <div className="sticky top-0 flex justify-between p-4 bg-background/50 backdrop-blur-md">
      <Logo/>
      <div className="flex gap-3">
        <NavBar routes={routes}/>
        <ModeToggle/>
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
          defaultTheme="system"
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
