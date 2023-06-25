import Navbar from './components/Navbar'
import Hero from './Hero'
import './globals.css'

export default function Home() {
  return (
   <main className="min-h-screen bg-stone-300 dark:bg-stone-600">
      <Navbar/>

      <Hero/> 
 
    </main>
  )
}
