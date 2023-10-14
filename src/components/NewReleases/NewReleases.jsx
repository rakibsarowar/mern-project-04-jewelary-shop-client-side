import React, { useEffect, useState } from 'react';
import SingleReleaseItem from '../SingleReleaseItem/SingleReleaseItem';

const NewReleases = () => {

    const [jewelrys, setJewelrys] = useState([]);


    useEffect(() => {
        fetch(`https://jewelry-pink.vercel.app/jewelrys?limit=10`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setJewelrys(result)
            });

    }, []);
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold mt-32 pb-6 text-center'>New Releases</h1>
            <p className='text-center mb-16'>Wanna make your partner happy? Lets drive and find out best.</p>

            <div className='grid grid-cols-4 gap-4 px-8'>
                {
                    jewelrys?.map((jewelry, index) => <SingleReleaseItem
                        key={index}
                        jewelry={jewelry}
                    ></SingleReleaseItem>
                    )
                }
            </div>
        </div>
    );
};

export default NewReleases;