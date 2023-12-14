import Advantages from '@/components/Advantages'
import AdvantagesMobil from '@/components/AdvantagesMobil'
import YogaComponent from '@/components/Yoga'
import YogaCenter from '@/components/YogaCenter'
import YogaClasses from '@/components/YogaClasses'

export default function Home() {
  return (
    <main>
      <YogaComponent />
      <YogaCenter />
      <div className='hidden sm:block'>
        <Advantages />
      </div>
      <div className='sm:hidden'>
        <AdvantagesMobil />
      </div>
      <YogaClasses />
    </main>
  )
}
