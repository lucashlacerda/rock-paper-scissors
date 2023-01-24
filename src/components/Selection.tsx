import paper from '../assets/icon-paper.svg';
import rock from '../assets/icon-rock.svg';
import scissors from '../assets/icon-scissors.svg';

const Selection = () => {
  return (
    <div className="bg-triangle w-4/5 bg-no-repeat bg-auto bg-center flex-col h-auto px-2 md:w-2/5">
      <div className="top-row flex items-center justify-between">
        <img
          src={paper}
          className="bg-white p-3 border-[12px] rounded-full border-blue-500 md:p-6 md:border-[16px]"
          alt="Paper"
        />
        <img
          src={scissors}
          className="bg-white p-3 border-[12px]  rounded-full md:p-6 md:border-[16px] border-yellow-500"
          alt="Scissors"
        />
      </div>
      <div className=" bottom-row  flex items-center justify-center mt-44">
        <img
          src={rock}
          className="bg-white p-3 border-[12px]  rounded-full md:p-6 md:border-[16px] border-red-500"
          alt="Rock"
        />
      </div>
    </div>
  );
};

export default Selection;

/* 
import paper from '../assets/icon-paper.svg';
import rock from '../assets/icon-rock.svg';
import scissors from '../assets/icon-scissors.svg';

const Selection = () => {
  return (
    <div className="bg-triangle bg-no-repeat bg-auto bg-center flex-col w-1/5 h-auto px-2">
      <div className="top-row flex items-center justify-between">
        <img
          src={paper}
          className="bg-white p-6 rounded-full border-[16px] border-blue-500"
          alt="Paper"
        />
        <img
          src={scissors}
          className="bg-white p-6 rounded-full border-[16px] border-yellow-500"
          alt="Scissors"
        />
      </div>
      <div className=" bottom-row max-w-md flex items-center justify-center mt-44">
        <img
          src={rock}
          className="bg-white p-6 rounded-full border-[16px] border-red-500"
          alt="Rock"
        />
      </div>
    </div>
  );
};

export default Selection;

*/
