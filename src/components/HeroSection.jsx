
import ButtonSignUp from "./ButtonSignUp"


const HeroSection = () => {
  return (
    <section className="pt-[140px] pb-[187px]">
        <div className="container px-4 mx-auto max-w-[1140px]">
            <div className="flex flex-col items-center text-center gap-[39px]">
                <h1 className="uppercase font-bold text-[72px] leading-[86px] tracking-[5%] text-white">CloudBudget</h1>
                <p className="font-semibold text-[24px] max-w-[540px] px-12 items-center leading-[36px] text-white">Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of 
                Up to €4.99</p>
                <ButtonSignUp/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection