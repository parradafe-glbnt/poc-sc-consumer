import { Suspense } from "react";
import CtxExtractor from "./components/ctxExtractor";
import ClientComponent from "./components/customHome";
import SCCtxConsumer from "./components/sCctxConsumer";
import RIPLServerComponent from "./components/serverComponent"

export default function Home() {
  return (
    <RIPLServerComponent>
      <div className="flex justify-around">

        {/** CONSUMER CODE & COMPONENTS */}
        <ClientComponent />
        <ClientComponent update={'off'} />
      </div>

      {/** SERVER COMPONENT DEFINITION */}
      <div>
        <Suspense fallback={<p> Loading... </p>}>
          <CtxExtractor>
            <SCCtxConsumer />
          </CtxExtractor>
        </Suspense>
      </div>

    </RIPLServerComponent>
  );
}

/**
 * CONSIDERATIONS
 * 
 * - The component that wants to use this ctx needs to be a CC
 * - Can be a simple wrapper for a SC and pass values as props
 * 
 */

