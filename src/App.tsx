import About from "./components/About"
import BackToTopButton from "./components/BackToTopButton"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col xl:px-60 xl:py-16 space-y-9 items-center w-full min-h-screen bg-gray-200 dark:bg-gray-900 transition-all">
        <Header />
        <Home />
        <About />
        <Skills />
        <Contact />
        <BackToTopButton />
      </div>
    </ThemeProvider>
  )
}

export default App
