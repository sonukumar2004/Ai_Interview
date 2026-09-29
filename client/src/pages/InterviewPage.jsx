// import React from 'react'
// import { useState } from 'react'
// import Step1SetUp from '../components/Step1SetUp'
// import Step2Interview from '../components/Step2Interview'
// import Step3Report from '../components/Step3Report'

// function InterviewPage() {
//     const [step,setStep] = useState(1)
//     const [interviewData,setInterviewData] = useState(null)

//   return (
//     <div className='min-h-screen bg-gray-50'>
//         {step===1 && (
//             <Step1SetUp onStart={(data)=>{
//                 setInterviewData(data);
//             setStep(2)}}/>
//         )}

//          {step===2 && (
//             <Step2Interview interviewData={interviewData}
//             onFinish={(report)=>{setInterviewData(report);
//                 setStep(3)
//             }}
//             />
//         )}

//           {step===3 && (
//             <Step3Report report={interviewData}/>
//         )}

      
//     </div>
//   )
// }

// export default InterviewPage

import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { BsRobot } from 'react-icons/bs'
import Step1SetUp from '../components/Step1SetUp'
import Step2Interview from '../components/Step2Interview'
import Step3Report from '../components/Step3Report'

const STEPS = ["Setup", "Interview", "Report"]

function InterviewPage() {
    const [step,setStep] = useState(1)
    const [interviewData,setInterviewData] = useState(null)
    const [seconds,setSeconds] = useState(0)

    // session clock: runs only while the interview (step 2) is live
    useEffect(()=>{
        if(step !== 2) return
        const id = setInterval(()=>setSeconds((s)=>s+1),1000)
        return ()=>clearInterval(id)
    },[step])

    const formatTime = (total) => {
        const m = String(Math.floor(total / 60)).padStart(2,"0")
        const s = String(total % 60).padStart(2,"0")
        return `${m}:${s}`
    }

  return (
    <div className='min-h-screen bg-[#0a0a1a] text-white relative overflow-hidden flex flex-col'>

        {/* Glow orbs + subtle grid */}
        <div className='pointer-events-none absolute inset-0 z-0'>
            <div className='absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px]'></div>
            <div className='absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]'></div>
            <div className='absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px]'></div>
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]'></div>
        </div>

        {/* Interview room status bar */}
        <div className='relative z-10 flex justify-center px-4 pt-6'>
            <div className='w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between gap-4 shadow-lg shadow-violet-500/10'>

                <div className='flex items-center gap-3'>
                    <div className='bg-gradient-to-br from-violet-600 to-cyan-500 p-2 rounded-lg shadow-md shadow-violet-500/40'>
                        <BsRobot size={16}/>
                    </div>
                    <div className='hidden sm:block'>
                        <p className='text-sm font-semibold leading-tight'>Interview Room</p>
                        <p className='text-xs text-gray-400 leading-tight'>InterviewIQ.AI</p>
                    </div>
                </div>

                {/* Step progress */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    {STEPS.map((label,index)=>{
                        const number = index + 1
                        const isActive = step === number
                        const isDone = step > number
                        return (
                            <React.Fragment key={label}>
                                <div className='flex items-center gap-2'>
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all
                                        ${isActive ? "bg-gradient-to-br from-violet-600 to-cyan-500 shadow-md shadow-violet-500/50" : ""}
                                        ${isDone ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40" : ""}
                                        ${!isActive && !isDone ? "bg-white/10 text-gray-500" : ""}`}>
                                        {isDone ? "✓" : number}
                                    </div>
                                    <span className={`text-xs sm:text-sm hidden sm:block ${isActive ? "text-white font-medium" : "text-gray-500"}`}>{label}</span>
                                </div>
                                {index < STEPS.length - 1 && (
                                    <div className={`w-6 sm:w-12 h-px ${step > number ? "bg-cyan-400/50" : "bg-white/10"}`}></div>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>

                {/* Live indicator */}
                <div className='flex items-center gap-2 min-w-[90px] justify-end'>
                    {step === 2 ? (
                        <>
                            <span className='relative flex h-2.5 w-2.5'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500'></span>
                            </span>
                            <span className='text-xs font-semibold text-red-400'>LIVE</span>
                            <span className='text-sm font-mono text-cyan-300'>{formatTime(seconds)}</span>
                        </>
                    ) : (
                        <span className='text-xs text-gray-500'>{step === 1 ? "Not started" : "Completed"}</span>
                    )}
                </div>
            </div>
        </div>

        {/* Step content */}
        <motion.div
            key={step}
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.4}}
            className='relative z-10 flex-1'>

            {step===1 && (
                <Step1SetUp onStart={(data)=>{
                    setInterviewData(data);
                    setSeconds(0)
                    setStep(2)}}/>
            )}

            {step===2 && (
                <Step2Interview interviewData={interviewData}
                onFinish={(report)=>{setInterviewData(report);
                    setStep(3)
                }}
                />
            )}

            {step===3 && (
                <Step3Report report={interviewData}/>
            )}

        </motion.div>

    </div>
  )
}

export default InterviewPage
