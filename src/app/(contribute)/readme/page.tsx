import Title from '@/component/atom/databayt'
import Block from '@/component/readme/block'
import Section from '@/component/readme/section'
import Link from 'next/link'
import React from 'react'

const Readme = () => {
  return (
    <div className='flex flex-col justify-center items-center py-8 px-40'>
      <div className='justify-start'>
      <Title title='Welcome, Contributors! 👋' />
        <div className='flex flex-col space-y-2 pt-6'>
            
            <p>Thank you for considering contributing to our project! We greatly appreciate your interest and support. Below are some essential resources and information to help you get started:</p>

            <Section
            title='Documentation 📚'
            body='Before diving into the code, make sure to check out our documentation. It provides detailed explanations of our project structure, guidelines, and how to contribute effectively.'
            link='your-documentation-link'
            label='Link to Documentation' 
            />
            <Section
            title='Main Repository 🏠'
            body='Our main repository serves as the central hub for our project. This is where you will find the core codebase and contribute to its development.'
            link='https://github.com/abdout/databayt'
            label='Link to Main Repository ' 
            />
             <Section
            title='Building Blocks 🧱'
            body='In addition to the main repository, we have child repositories dedicated to specific building blocks which serve as integral parts of our overall system. for full detials you may broswe through the following building blocks:'
            />
            <Block />
         
            <h2 className='pt-3'>Get in Touch 📬</h2>
            <p>Have questions, feedback, or need assistance? feel free to <Link className='text-blue-700'  href="your-slack-link">open an issue</Link> or reach out to us on <Link className='text-blue-700'  href="your-slack-link">Discord</Link> or <Link className='text-blue-700'  href="your-slack-link">Email</Link>. </p>
            
            <h2 className='pt-3'>Code of Conduct 🤝</h2>
            <p>We maintain a code of conduct to ensure a welcoming and inclusive environment for all contributors. Please familiarize yourself with our code of conduct and adhere to its principles when interacting with our community.</p>
            <p><a href="your-code-of-conduct-link">Link to Code of Conduct</a></p>

            <h2 className='pt-3'>Thank You! 🙏</h2>
            <p>Once again, thank you for your interest in contributing to our project. Together, we can make something truly amazing</p>
        </div>
        </div>
    </div>
  )
}

export default Readme