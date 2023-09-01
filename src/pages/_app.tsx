import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from "../redux/store";
import { getCookie } from '@/utils/Cookie';
import { useRouter } from 'next/router';
// import '../app/globals.css'

export default function App({ Component, pageProps,...props }:any) {
  const router = useRouter()
  useEffect(() => {
    try{
      const token = getCookie("token");
      if(!token){
        router.push('/login')
      }
    }catch(err){
      console.log(err)
    }
  }, [])
  

  return <Provider store={store}><Component {...pageProps} /></Provider>
}
