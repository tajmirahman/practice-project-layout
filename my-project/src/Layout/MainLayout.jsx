
import Header from '../Components/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import LeftSide from '../Components/LeftSide';
import Loadin from '../Components/Loadin';

const MainLayout = () => {
    const {state}=useNavigation();

    console.log(import.meta.env.VITE_SOME_KEY)

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
                    
                  {state == "loading" ? <Loadin /> : <Outlet></Outlet>}  
                </aside>

                <aside className='col-span-3'>This is right side</aside>
            </main>



        </div>
    );
};

export default MainLayout;