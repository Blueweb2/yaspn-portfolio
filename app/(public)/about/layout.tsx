import Navbar from "@/components/layout/Navbar"
import ContactSection from "@/components/layout/Footer"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar />
      {children}
      <ContactSection />
    </>
  )
}

export default layout;