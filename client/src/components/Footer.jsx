// import React from 'react'
// import { BsRobot } from 'react-icons/bs'

// function Footer() {
//   return (
//     <div className='bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10'>
//       <div className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center'>
//         <div className='flex justify-center items-center gap-3 mb-3'>
//             <div className='bg-black text-white p-2 rounded-lg'><BsRobot size={16}/></div>
//             <h2 className='font-semibold'>InterviewIQ.AI</h2>
//         </div>
//         <p className='text-gray-500 text-sm max-w-xl mx-auto'>
//   AI-powered interview preparation platform designed to improve
//           communication skills, technical depth and professional confidence.
//         </p>


//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
  return (
    // transparent wrapper so the page's dark glow background shows through
    <div className='relative z-10 flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='w-full max-w-6xl bg-white/5 backdrop-blur-xl rounded-[24px] shadow-lg shadow-violet-500/10 border border-white/10 py-8 px-3 text-center text-white'>
        <div className='flex justify-center items-center gap-3 mb-3'>
            <div className='bg-gradient-to-br from-violet-600 to-cyan-500 text-white p-2 rounded-lg shadow-md shadow-violet-500/40'><BsRobot size={16}/></div>
            <h2 className='font-semibold bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent'>InterviewIQ.AI</h2>
        </div>
        <p className='text-gray-400 text-sm max-w-xl mx-auto'>
  AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>


      </div>
    </div>
  )
}

export default Footer
