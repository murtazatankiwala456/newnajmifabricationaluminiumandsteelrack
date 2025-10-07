import MainLogo from "/images/mainlogo.png";
import { ClipLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={MainLogo} alt="main logo" className="w-xl" />
      <ClipLoader color={"#ff4a00"} size={50} aria-label="Loading Spinner" />
    </div>
  );
};
export default Loader;
