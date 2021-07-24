import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <h1>HEADER</h1>
            <Image 
            className="object-contain"
            src="/img/hulu-white.png" 
            alt="hulu-image" 
            width={200} 
            height={100}/>
        </header>
    )
}

export default Header
