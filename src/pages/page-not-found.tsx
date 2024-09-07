import { Link } from 'react-router-dom';
import StressBoy from '../assets/page-not-found.png';
import { HiMiniArrowUpLeft } from "react-icons/hi2";

export default function PageNotFound() {
  return (
    <div className='grid gap-5'>
      <header>
      <h1 className="text-2xl font-medium text-heading">404 - Page Not Found!</h1>
      <h6 className="text-sm text-neutral-500">Explore other pages.</h6>
      </header>
      <img src={StressBoy} alt="stress boy" className='w-44'/>
      <Link className='flex items-center' to="/"><HiMiniArrowUpLeft /> Back</Link>
    </div>
  );
}
