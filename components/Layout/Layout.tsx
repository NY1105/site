import Footer from './Footer'
import Navbar from './Navbar'
type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>
const Layout = ({ children }: ComponentWithChildProps) => {
  return (
    <>
      <div
        id="layout"
        className="min-w-screen flex min-h-screen flex-col overflow-y-auto "
      >
        <Navbar />
        <div
          id="main-content"
          className="my-4 flex-1 px-6 py-2 sm:px-12 md:px-16 lg:px-20 "
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
