type ScoreBoardProps = {
  score: number;
};

const ScoreBoard = (props: ScoreBoardProps) => {
  return (
    <div className="flex justify-between items-center px-5 py-3 max-w-2xl border-solid border-2 rounded-md border-headerOutline">
      <h3 className="text-4xl text-white font-semibold leading-8">
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h3>
      <div className="score bg-white px-8 flex-col items-center justify-center rounded-md">
        <h5 className=" text-scoreText font-semibold text-lg">Score</h5>
        <h5 className="text-5xl font-semibold text-center text-darkText py-1.5">
          {props.score}
        </h5>
      </div>
    </div>
  );
};

export default ScoreBoard;
