import { Google_Sans_Code, Sarabun } from 'next/font/google'
import './globals.css'
import 'flatpickr/dist/flatpickr.css'
import { SidebarProvider } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'

// Font สำหรับภาษาอังกฤษ
const googleSansCode = Google_Sans_Code({
    subsets: ['latin'],
    variable: '--font-google-sans-code',
})

// Font สำหรับภาษาไทย
const sarabun = Sarabun({
    subsets: ['thai', 'latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-sarabun',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${googleSansCode.variable} ${sarabun.variable} font-sans dark:bg-gray-900`}>
                <ThemeProvider>
                    <SidebarProvider>{children}</SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
