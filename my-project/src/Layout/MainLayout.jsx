
import Header from '../Components/Header';
import LeftSide from '../Components/LeftSide';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>

            {/* Header section */}
            <section>
                <Header></Header>
            </section>

            {/* Main Section */}

            <main className='grid md:grid-cols-12 grid-cols-1 gap-3 mt-5'>
                <aside className='col-span-3'>
                    <LeftSide></LeftSide>
                </aside>

                <aside className='col-span-6'>
                     <Outlet></Outlet>
                </aside>

                <aside className='col-span-3'>This is right side</aside>
            </main>



        </div>
    );
};

export default MainLayout;