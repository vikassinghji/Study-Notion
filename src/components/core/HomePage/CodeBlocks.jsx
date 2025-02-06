import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import CTAButton from './Button';
import { TypeAnimation } from 'react-type-animation';
import BackgroundGradient from './BackgroundGradient';

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, codeColor, bgColor
}) => {
  return (
    <div className={` h-full lg:flex ${position} my-20 justify-between gap-10 h-auto w-full`}>
            {/*Section 1*/}
        <div className='lg:w-[50%] flex flex-col gap-8 p-10 w-full lg:p-0 h-full'>
            {heading}
            <div className='text-richblack-300 font-bold '>
                {subheading}
            </div>
    
            <div className='flex gap-7 mt-7'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex gap-2 items-center'>
                        {ctabtn1.btnText}
                        <FaArrowRight/>
                    </div>
                </CTAButton>
    
                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                        {ctabtn2.btnText}
                </CTAButton>
            </div>
    
    
        </div>

        {/* code section */}
        <div className='lg:flex flex-row  text-10[px] lg:w-[50%] py-4 relative lg:p-0 w-full shadow-md shadow-richblack-800 pt-4 h-[300px]'> 
        {/*HW -> BG gradient*/}
        <BackgroundGradient color1={bgColor} color2={"#000814"} className="absolute left-[-50px] top-[-100px]" />

        <div className=' w-full h-full absolute flex top-0 left-0 lg:px-0 px-3'>
        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
        </div>

        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 h-full`}>
           <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
           />
        </div>
        </div>

        </div>
        
    </div>
  )
}

export default CodeBlocks;
