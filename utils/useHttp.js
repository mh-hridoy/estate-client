import { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd'
import { useSelector } from 'react-redux'


const useHttp = (fetchNow, url, method, body) => {
    const [isLoading, setIsLoading] = useState(false)
    const token = useSelector((state) => state.user.token)


    useEffect(() => {
        if (fetchNow) {
            // console.log(body)
            const fetchData = async () => {
                try {
                    setIsLoading(true)
                    await axios[method](url, body, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }, withCredentials: true
                    })
                    message.success('Updated Successfully!')
                    setIsLoading(false)

                } catch (err) {
                    console.log(err)
                    message.error('Something went wrong!')
                    setIsLoading(false)
                }

            };
            fetchData();
        }
    }, [fetchNow]);

    return { isLoading };
};

export default useHttp;
