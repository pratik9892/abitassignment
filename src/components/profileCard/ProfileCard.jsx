import React from 'react'

const ProfileCard = () => {
  return (
    <div className='md:w-[571px] w-full flex  rounded-3xl overflow-hidden md:h-[234px] bg-[url("https://s3-alpha-sig.figma.com/img/bdd1/217e/3c90f0a2a0733a37cfae73337e1beb01?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoYheRDZ28XfJQ90I6Tdd321I5uUHhqZTK-7IpRDNEDNu6CGDN8v6A9CqD6AjE8RitYm5A79NlJ1T9HPXaxQLBxkFFZpaS4dlPfxisIA3HwYd0Zi7PDJ~qeHovTPiiLNR3SejeHbb1YTLSmHV1f6nZkHgdqR6XOinKDqjaeHcLdwDMWmNccZ7F2Ti7o9R7I6ofrfnv~kPv67dRfrDkubwiBeGCNr9wxIkHrWoNyw4-qVLGSHdFvxPgJmpSzq4wULXd-~h3epjNj2fXA8FB3a7DSRa3QdXXOSOA1bQVOdfkfGDEIbjNzjpfThileJoh2M4A1joK6J2A3FAtvlL~03fw__")]'>
        <div className='image h-[234px] w-[234px]'>
            <img 
            src="https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__" 
            alt=""
            className='w-full h-full object-cover'
            />
        </div>
        <div className='px-10 py-7 font-inter flex flex-col items-start justify-between w-[337px] '>
            <div className='flex items-center gap-4 w-full justify-between'>
                <div><h1 className='font-bold text-2xl text-[#000000]'>DAN MACE</h1></div>
                <div><p className='text-[#696969] text-sm font-normal'>/Johny_Films/</p></div>
            </div>
            <div className="bio">
                <h3 className='text-[#696969] font-bold'>Bio</h3>
                <p className='text-[#696969] text-sm font-normal'>Simply a film fan creating original content for YouTube. Let’s Collaborate.</p>
            </div>
            <div className='w-[256px] h-[29px] bg-[#000000] rounded bg-opacity-65 border-[1px] border-[#000000]'>
                <div className='w-[129px] h-[29px] rounded  border-[1px] border-[#000000]  bg-[#EAEAEA] flex items-center justify-center '><h2 className='font-normal text-sm'>Creator</h2></div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard