import React from 'react'
import { title } from 'process';
import { AppPropsType } from 'next/dist/shared/lib/utils';

interface propsType {
    title:string;
}

const Heading:React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4x1 pb-8'>
        <p className='border-b-4 inline-block pb-2'>{title}</p>
      
    </div>
  )
}
export default Heading
