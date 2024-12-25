import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const loggedUserAtom = atomWithStorage("loggedUser", {});
