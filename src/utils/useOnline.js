import { useState , useEffect} from "react";

export default  useOnline =() =>{
    const [isOnline, setOnline] = useState(true);

    useEffect(() => {

        const handleOnline = (event) => {
            console.log('online listener', event);
            setOnline(true);
        };

        const handleOffline = (event) => {
            console.log('online listener', event);
            setOnline(false);
        };

        window.addEventListener('online', handleOnline);

        window.addEventListener('offline', handleOffline);
        
       return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('online', handleOffline);

       }
    }, []);

    return isOnline;
}