import { CtxExtractorFn } from "./ctxExtractor";

export default function FNCtxConsumer() {
    const data = CtxExtractorFn();

    return (
        <h3>{JSON.stringify(data)}</h3>
    )
}