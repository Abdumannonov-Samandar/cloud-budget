
import Logo from '/vite.svg'
import ButtonLogin from '../ButtonLogin'
import NavHeader from '../NavHeader'
import SelectLanguage from '../SelectLanguage'



const Header = () => {
  return (
    <header className="py-[50px]">
    <div className="container px-4 mx-auto max-w-[1140px]">
        <div className="flex items-center justify-between">
            <a href="#">
                <img className="object-cover w-[172px] h-[29px]" src={Logo} alt="logo img"/>
            </a>

            <NavHeader/>

            <div className='flex gap-5'>
            <SelectLanguage />
            <ButtonLogin/>
            </div>
        </div>
    </div>
</header>
)
}

export default Header

