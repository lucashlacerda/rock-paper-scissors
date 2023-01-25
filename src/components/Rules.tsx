import rulesImage from '../assets/image-rules.svg';
import closeImage from '../assets/icon-close.svg';

type RulesProps = {
  showing: boolean;
  closeRules: () => void;
};
const Rules = (props: RulesProps) => {
  return (
    <div
      className={` ${
        !props.showing && 'hidden'
      } w-screen relative h-screen bottom-1/2 text-darkText text-3xl font-bold px-10 py-20 flex flex-col justify-between items-center md:w-2/5 md:h-3/6 md:p-8 md:rounded-md bg-white`}
    >
      <div className="justify-center flex md:justify-between md:w-full items-center">
        <h2>RULES</h2>
        <img
          src={closeImage}
          onClick={props.closeRules}
          className="hidden md:block w-6 h-6 cursor-pointer"
          alt=""
        />
      </div>
      <img src={rulesImage} alt="" />
      <img
        src={closeImage}
        onClick={props.closeRules}
        className="mt-5 md:hidden w-6 cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default Rules;
