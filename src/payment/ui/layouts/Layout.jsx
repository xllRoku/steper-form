import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../molecules/SideBar';

const Layout = () => {
	return (
		<main className='h-screen flex justify-center items-center'>
			<div className='flex  bg-white p-4  rounded-md'>
				<SideBar />
				<div className='pt-8 px-20'>
					<Outlet />
				</div>
			</div>
		</main>
	);
};

export default Layout;
