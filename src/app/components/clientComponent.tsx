'use client';

import { createContext, useState } from 'react';

export const UserContext = createContext({
  user : {name : String, lastName : String},
  load: () => {}
});

export default function ClientContext({ user, children }:any) {
    const [data, setData] = useState(user);

    const ops = {
      user : data,
      load(newData:any){
        setData(newData);
      }
    }

  return (
    <UserContext.Provider value={ops}>
      {children}
    </UserContext.Provider>
  );
}
