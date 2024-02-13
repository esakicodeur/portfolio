import Image from 'next/image';
import React from 'react'

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Tailwind CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Redux" },
    { skill: "Next.js" },
    { skill: "Node.js" },
    { skill: "Mongodb" },
    { skill: "PostgreSQL" },
    { skill: "Prisma" },
    { skill: "Git" },
    { skill: "Github" },
    { skill: "Docker" },
];

function AboutSection() {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to Know me!</h1>
                    <p>
                        {" "}
                        Hi, my name is Alex and I am {" "}
                        <span className='font-bold'>{"highly ambitious"}</span>,
                        <span className='font-bold'>{" self-motivated"}</span>, and
                        <span className='font-bold'>{" driven"}</span>, software engineer based in Los Angeles, CA.
                    </p>
                    <br />
                    <p>
                        I graduated from California State University, Northridge in 2019
                        with a BS in Computer Engineering and have been working in the
                        field ever since.
                    </p>
                    <br />
                    <p>
                        I have a wide range of hobbies and passions that keep me busy.
                        From reading, playing sports, traveling,  to making YouTube videos.
                        I am always seeking new experiences and love to keep myself
                        engaged and learning new things.
                    </p>
                    <br />
                    <p>
                        I believe that you should{" "}
                        <span className='font-bold text-teal-500'>
                            never stop growing
                        </span>{" "}
                        and that&#39;s what I strive to do, I have a passion for 
                        technology and a desire to always push the limits of what is
                        possible. I am excited to see where my career takes me and me
                        always open to new opportunities.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((item, idx) => {
                            return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 font-semibold rounded'>{item.skill}</p>
                        })}
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-1/2'>
                            <Image src="/static_assets.png" alt='' width={400} height={400} />
                        </div>
                        <div className='w-1/2'>
                            <Image src="/react.png" alt='' width={400} height={400} />
                        </div>
                        <div className='w-1/2'>
                            <Image src="/nextjs.png" alt='' width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection