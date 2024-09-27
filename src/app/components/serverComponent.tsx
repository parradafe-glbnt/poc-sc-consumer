'use server'
import ClientContext from "./clientComponent";


/** SERVER COMPONENT */

export default async function RIPLServerComponent({ children }: any) {
  const userData = await getSparseUser();
  
  return <ClientContext user={userData}>
    {children}
  </ClientContext>;
}



/** SERVER ACTIONS */

async function getSparseUser() {
  return { name: 'Daniel', lastName: 'Parra' };
}
export async function getLoadedUser(userId: string) {
  return { name: 'Felipe', lastName: 'Salamanca', id: userId }; //This is another rest api endpoint
}