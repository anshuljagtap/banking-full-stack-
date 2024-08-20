import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Anshul' ,lastName: 'Jagtap', email: 'anshul@coding.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Access and mange your account amd transactions efficiently"
            />

            <TotalBalanceBox

            accounts= {[]}
            totalBanks={1}
            totalCurrentBalance = {1250.35}
            
            
            />

        </header>

        RECENT TRANSACTIONS
      </div> 

      <RightSidebar 

      user = {loggedIn}
      transactions = {[]}
      banks={[{currentBalance: 123.45} ,{currentBalance: 678.90} ]}
      
      />
    </section>
  )
}

export default Home