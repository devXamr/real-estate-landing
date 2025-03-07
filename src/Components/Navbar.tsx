export default function Navbar(){
   return <div className='flex text-white justify-between max-w-[80%] mx-auto mt-6'>
       <div>Logo</div>
       <div className='flex gap-10'>
           <div>Home</div>
           <div>About</div>
           <div>Mission</div>
           <div>Team</div>
           <div>Blog</div>
       </div>
       <button className='bg-white/20 border px-5 py-2 -mt-2'>Register</button>
   </div>
}