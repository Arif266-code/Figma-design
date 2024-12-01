import link from "next/link";
export default function Maincontent(){
    return(
        <div className="main-content text-center p-80">
        <h5 className="header-tag leading-6 tracking-widest text-base font-bold text-[#23a6f0]">Welcome</h5>
        <h1 className="headline m-40 leading-[5rem] tracking-[0.2em] font-bold text-[#fff] text-[58px]">Selling on the internet like a pro</h1>
        <h4 className="sub-headline mb-10 leading-8 tracking-[0.2em] text-sm text-[#fff]">
          We know how large objects will act, but things on a small scale just do not act that way.
        </h4>
        <div className="cta justify-center cursor-pointer leading-6 tracking-[0.2em] rounded-md font-bold gap-2.5 flex pl-10 pr-4">
          <button className="cta-button primary rounded bg-[#23a6f0] text-[#fff]">Get Quote Now</button>
          <button className="cta-button secondary border rounded border-[#23a6f0] text-[#23a6f0] ">Learn More</button>
        </div>
      </div>
    )}