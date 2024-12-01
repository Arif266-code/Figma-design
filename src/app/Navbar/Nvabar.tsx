import link from "next/link";
export default function Navbar(){
    return(
      
        <nav className="navbar flex justify-between items-center pl-[16px] pt-[20px] ">
        <div className="navbar-brand leadi t-xl leading-8 tracking-widest font-bold text-[#fff]">BrandName</div>
        <ul className="navbar-links cursor-pointer leading-6 tracking-[0.2em] text-sm font-bold flex gap-x-5 text-[#fff]">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="navbar-actions leading-5 tracking-[0.2em] font-bold text-sm text-[#fff] gap-x-11 items-center flex">
          <span>Login</span>
          <button className="join-button hover:bg-[#0088cc] leading tracking-[0.2em] font-bold text-sm rounded-md cursor-pointer px-4 bg-[#23a6f0]">JOIN US</button>
        </div>
      </nav>
      
    );
  };
  