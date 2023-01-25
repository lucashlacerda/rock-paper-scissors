type RulesButtonProps = {
  handleClick: () => void;
  showing: boolean;
};

const RulesButton = (props: RulesButtonProps) => {
  return (
    <div
      className={`${
        props.showing && 'hidden'
      } w-screen justify-center mb-6 flex md:justify-end md:mr-10`}
    >
      <button
        onClick={props.handleClick}
        className="text-white text-lg border-solid border-2 rounded-lg border-white px-8 py-1"
      >
        Rules
      </button>
    </div>
  );
};

export default RulesButton;
