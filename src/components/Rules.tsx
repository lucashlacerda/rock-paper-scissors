import rulesImage from '../assets/image-rules.svg';
import closeImage from '../assets/icon-close.svg';
const Rules = () => {
  return (
    <div className="w-screen text-darkText text-3xl font-bold h-screen px-10 py-20 flex flex-col justify-between items-center md:w-2/5 md:h-3/6 md:p-8 md:rounded-md bg-white">
      <div className="justify-center flex md:justify-between md:w-full items-center">
        <h2>RULES</h2>
        <img src={closeImage} className="hidden md:block w-6 h-6" alt="" />
      </div>
      <img src={rulesImage} alt="" />
      <img src={closeImage} className="md:hidden w-6" alt="" />
    </div>
  );
};

export default Rules;
