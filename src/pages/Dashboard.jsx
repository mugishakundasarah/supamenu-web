import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button"

import Card from "../components/Card"
import "../styles/Dashboard.css"



const Dashboard = ()  => {
    const Data = [
        {
            image: "/Registration.svg",
            title: "Step 1",
            description: "Register your restaurant"
        },
        {
            image: "/Food.svg",
            title: "Step 2",
            description: "Create your restaurant profile and create menu items"
        },
        {
            image: "/Order History.svg",
            title: "Step 3",
            description: "Start receiving orders"
        }
    ]
    return (
        <div className='h-[100vh]'>
            <div className='bg-black w-[100%] h-[50%] flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className="flex ml-4 my-4">
                        <h1 className="font-bold text-5xl text-white">Supa</h1>
                        <h1 className='text-yellow text-5xl font-bold'>Menu</h1>
                    </div>
                    <div className='flex w-[20em] justify-around'>
                        <SearchIcon className='text-white'/>
                        <NotificationsIcon className='text-white'/>
                        <div className='h-[1.5em] w-[0.1em] bg-white'></div>
                        <p className='text-white'>Jacque Kagabo</p>
                        <AccountCircleIcon className='text-white'/>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-20 w-[100%]'>
                    <p className='text-white text-4xl font-bold'>Register your restaurant on SupaMenu</p>
                    <p className='text-white text-xl mt-4 w-[34%]'>for free and get more revenue!</p>
                    <div className='flex justify-center gap-6 mt-12'>
                        <Button variant="contained" className='text-white' style={{color: 'white', borderColor: 'white', textTransform: 'capitalize'}}>Register your Restaurant</Button>
                        <Button variant="outlined" style={{color: 'white', borderColor: 'white', textTransform: 'capitalize'}}>Restaurant already registered? Signin</Button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[50%] bg-[url('/howItWorksBg.svg')] bg-no-repeat bg-contain ">
                <h1 className='font-bold text-4xl pt-10 text-center'>How it works</h1>
                <div className="flex justify-center gap-40 items-center">
                    {
                        Data.map((step) => <Card image={step.image} title={step.title} description={step.description}/>)
                    }
                </div>
            </div>
            {/* <img src='/howItWorksBg.svg' className='w-[100%] absolute'/> */}
            {/* <div className="bg-[url('/howItWorksBg.svg')] bg-no-repeat bg-center bg-contain h-[50%] w-[100%]">

            </div> */}
        </div>
    )
}

export default Dashboard