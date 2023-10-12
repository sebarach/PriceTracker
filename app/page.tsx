import HeroCarousel from '@/components/HeroCarousel'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
const page = () => {
  return (
   <>
   <section className="px-6 md:px-20 py-24">
    <div className="flex max-xl:flex-col gap-16">
      <div className="flex flex-col justify-center">
        <p className="small-text">
          Comienza buscando aca:
          <Image 
          src="/assets/icons/arrow-right.svg"
          alt='arrow-right'
          width={16}
          height={16}
          />
        </p>
        <h1 className='head-text'>
          Descubre el poder de la 
          <span className='text-primary'> Aplicacion</span>
        </h1>
        <p className='mt-6'>
        Aplicacion para poder trackear momentaneamente tasas de creditos hipotecarios
        </p>
        <SearchBar/>
      </div>
      <HeroCarousel />
    </div>
   </section>

    <section className='trending-section'>
    <h2 className='section-text'>
      Trending
    </h2>
    <div className='flex flex-wrap gap-x-8 gap-y-16'>
      {['Apple','Mac','Xiaomi'].map((producto)=>(
      <div>{producto}</div>
      ))}
    </div>
    </section>
   
   </>
  )
}

export default page