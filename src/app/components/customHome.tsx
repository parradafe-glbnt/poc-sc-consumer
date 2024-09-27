'use client';
import { useContext } from 'react';
import { UserContext } from './clientComponent';
import { getLoadedUser } from './serverComponent';

export default function ClientComponent({ update }: any) {
  const data = useContext(UserContext);

  const LoadUser = async () => {
    data.load(await getLoadedUser('123'));
  }

  return (
    <div className='border-2 rounded-md p-4 flex-1'>
      <p>{data.user.name}</p>
      <p>{data.user.lastName}</p>
      {update !== 'off' &&
        <>
          <hr />
          <button  className='border-2 rounded-md bg-zinc-400 p-2 mt-4' onClick={LoadUser}>Update Data</button>
        </>
      }
    </div>
  );
}
