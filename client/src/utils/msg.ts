import { delMsg, setMsgs } from "../redux/slicers/msgSlice";

export const addMsg = async (
  dispatch: (
    action: ReturnType<typeof setMsgs> | ReturnType<typeof delMsg>,
  ) => void,
  msg: string,
) => {
  dispatch(setMsgs(msg));

  setTimeout(() => {
    dispatch(delMsg(msg));
  }, 2_000);
};
