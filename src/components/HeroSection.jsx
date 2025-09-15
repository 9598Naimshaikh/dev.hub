import Button from './Button'
import { useContext } from 'react';
import { DataContext } from '../context/UserContext.jsx'

const HeroSection = () => {
    const data = useContext(DataContext);
    return (
        <div className='w-full grid gap-4 text-center justify-center items-center py-4'>
            <div className="profile flex flex-wrap justify-center items-center gap-2">
                <img src={data.image} className='w-10 h-10 shadow-lg shadow-zinc-800 dark:shadow-blue-500 rounded-full' alt={data.name} />
                <h1 className='text-lg font-bold'>Hi, <span className='text-3xl font-extrabold'>👋🏻{data.name}</span></h1>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto my-0'>Website templates for designers, businesses, and personal use</h2>
            <p className='text-lg sm:text-xl md:text-2xl dark:text-zinc-300/90 max-w-xl mx-auto my-0 text-center font-medium tracking-wide'>Build a beautiful site with templates for portfolios, businesses, and more.</p>
            <div>
                <Button className="inline-block">Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection
