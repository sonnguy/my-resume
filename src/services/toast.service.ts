import { toast } from "react-toastify";

export const notify = (type: string, message: string) => {
  switch (type) {
    case "error":
      toast.error(message);
      break;
    case "success":
      toast.success(message);
      break;
    case "info":
      toast.info(message);
      break;
    default:
      toast(message);
      break;
  }
};
