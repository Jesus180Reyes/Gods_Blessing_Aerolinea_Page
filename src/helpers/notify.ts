import { toast } from "react-toastify";

export const notify = (msg:string) => {
    toast.success(msg,{position:"bottom-right"});
}