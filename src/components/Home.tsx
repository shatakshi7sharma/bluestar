import { removeCookie } from '@/utils/Cookie';
import { useRouter } from 'next/router'
import * as React from 'react';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  const router = useRouter();

  return (
    <div>
      Welcome to dashboard
      <button 
        onClick={()=>{
          removeCookie("token")
          router.push('/login')

        }}
        className = " bg-red-500 text-white py-2 rounded hover:bg-red-600 p-5 m-5">
        Log out
      </button>
    </div>
  );
}
