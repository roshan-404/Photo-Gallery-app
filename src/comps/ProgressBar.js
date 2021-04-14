import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({file , setFile}) => {
    // eslint-disable-next-line
    const { url , progress } = useStorage(file);


    useEffect(() => {
        if (url) {
            
            setFile(null)
        }
        // eslint-disable-next-line
    }, [url])
    

    return (
        <motion.div className="progress-bar" 
            initial={{ width: 0}}
            animate={{ width: progress + "%"}}
        ></motion.div>
    )
}

export default ProgressBar;

