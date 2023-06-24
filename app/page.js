import Navbar from './components/Navbar'
import Hero from './Hero'
import './globals.css'

export default function Home() {
  return (
   <main className="min-h-screen bg-gradient-to-r from-zinc-200 to-purple-200 
   dark:bg-gradient-to-r dark:from-zinc-950 dark:to-purple-950">
      <Navbar/>

      <Hero/> 
 
    </main>
  )
}
