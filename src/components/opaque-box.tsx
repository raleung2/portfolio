import { ReactNode } from 'react';

interface OpaqueBoxProps {
  children?: ReactNode;
}

const OpaqueBox: React.FC<OpaqueBoxProps> = ({ children }) => {
  return (
    <div id='opaque-box' className='w-5/6 lg:w-2/3 h-auto rounded-3xl bg-slate-700 mx-4 my-4'>
      <div id='box-shadow-container' className='grid lg:grid-cols-4 lg:grid-rows-1'>
        {children}
      </div>
    </div>
  );
};

export default OpaqueBox;
