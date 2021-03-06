import {useState, useEffect}  from  'react'

import yelp from '../api/yelp'

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    const serachApi = async (searchterm)=>{
        try {
            
            const response = await yelp.get('/search',{
                params:{
                    limit : 50,
                    term:searchterm,
                    location : 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
   
        } catch (error) {
            setErrorMessage('Something went wrong!')
        }
        
    }
    useEffect(()=>{
        serachApi('pasta')
    },[])
    return [serachApi, results, errorMessage]
}