import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Header = () => {

    
  return (
    <div className='w-full font-inter md:flex md:items-center flex items-center justify-between md:justify-between  md:px-36  px-10 md:h-[110px] h-[80px] bg-[url("https://s3-alpha-sig.figma.com/img/bdd1/217e/3c90f0a2a0733a37cfae73337e1beb01?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoYheRDZ28XfJQ90I6Tdd321I5uUHhqZTK-7IpRDNEDNu6CGDN8v6A9CqD6AjE8RitYm5A79NlJ1T9HPXaxQLBxkFFZpaS4dlPfxisIA3HwYd0Zi7PDJ~qeHovTPiiLNR3SejeHbb1YTLSmHV1f6nZkHgdqR6XOinKDqjaeHcLdwDMWmNccZ7F2Ti7o9R7I6ofrfnv~kPv67dRfrDkubwiBeGCNr9wxIkHrWoNyw4-qVLGSHdFvxPgJmpSzq4wULXd-~h3epjNj2fXA8FB3a7DSRa3QdXXOSOA1bQVOdfkfGDEIbjNzjpfThileJoh2M4A1joK6J2A3FAtvlL~03fw__")]'>
        <div className="log h-[29px] w-[46px] ">
            <h1 className='font font-bold text-2xl'>aBit</h1>
        </div>
        <div className="navItems md:flex md:items-center md:justify-between md:gap-5 hidden">
            <button className='h-[39px] w-[139px] rounded-3xl border-2 border-[#764CC2] text-[#764CC2] flex items-center justify-center'>
                <p className='text-center font-semibold text-xs'>Share new video</p>
            </button>
            <div className='w-[28px] h-[28px] text-white cursor-pointer'>
                <img src="https://s3-alpha-sig.figma.com/img/e429/0fe3/3cf727787d97b30f43e9d5d593811c05?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FD-7ktgCPAxgnBXWLdPcAswLkzSr4-NglEIuZyuwCsujs-agfOQf50gXBK2MG6lVSmyguIvqEZjZaRuTBOdpZ~T6YYrxb7nCWAyf1ISGqPlV5sL7ppfVamowAew00q94Ui1X2PwhRHgXG8xzmtMwRAbDcKAzy2J8kbMtrVfYUeRAjyzSY8GIVjIFfy6hr-3uFkzJTOUJGFu27OR8Zs5asOCXueWy1RLsp~TTYIwp0a2DeZOm15EYaWYM46A~IIiwmqQmhSHAkFkhhoihJfZV3JARWa4ErGhPVvpc3ztEza~S-DF9SnnylSjxaXlIUwVTQCQWCkxgjcwfwckkOwDlZw__" alt="" />
            </div>
            <div className='w-[28px] h-[28px] text-white cursor-pointer'>
                <img src="https://s3-alpha-sig.figma.com/img/d4b0/9a75/31214bab4d4da0e74f722e59ea7df6a7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbFeCPbV9IvtDXl01Uoj5liGX88oN979CTaO6Wqhr5ne~MKiZWhhP0Pc6TnpxrYDQBBZez2ejb3HaJ-ds8bt3~~MkWCoMz8n3KNp6Yi6Hx3rNpAYnvBGwXDdQ~WggD3QfuD9NjSVIkucrNZkbJJu4wORM53C1UgdbVMxs~JETXxVOG5dhuN2iOL9xJQQ26ml9Lud-mQYaS4cx-m1ZFqdkGALylLMJiKcxl9xhmxpQqEO7TwIDpO~ptGt~7r0fU16KFQylmdmJjwwWJm5Mcfmn5M~TkKiteY2WMcN8d~90j~lin1fsirdTgvZ4plopR2x4kf8RzusM8SJa~qlh-S9BQ__" alt="" />
            </div>
            <div className='w-[28px] h-[28px] text-white rounded-full border-[1px] border-black overflow-hidden cursor-pointer'>
                <img src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__" alt="" />
            </div>
            <div className='w-[24px] h-[24px] cursor-pointer'>
                <img src="https://s3-alpha-sig.figma.com/img/77f1/bcd4/30c1e1ab750b92d3674e360cc2c1876a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvElHSjz04rxGzEzXgxMQ4GrYe3T1w4C9pMaKzb1B3xgkzeiyrh8efLpJv8a~Y9G3MYG0YI689vc86FMqR~hf5CqsYpgGrNENkQj80emt~0cwmv2t9ypCOZatIn8aH8Hs7l9oSOo3ZstDn6~-hXC~Xvbiwcj6QETE5q2NB6cjmtM6Q6an88jqPkXAmJ1u1EpRBpy2FA~txeVuwchaq42jttBBsLhkZmfDWmOO8LnDzicOefUrEc6~xDBSwhtzqxHIzGeY2ZHa6UW~uJ-yd2-ecIvej~YOWo0C9lmBqmHaPYuVTVPcPfYUcHaL7RmEXOiS6iaBxOJJZm7XbZMrK6ypw__" alt="" />
            </div>
        </div>
        <div className='md:hidden'>
            ≡
        </div>
    </div>
  )
}

export default Header