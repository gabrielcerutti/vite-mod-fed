import { atom, useAtom } from "jotai";

const sessionAtom = atom('');

const useSession = () => useAtom(sessionAtom);

export default useSession;