type ScoreBoardProps = {
  score: number;
};

const ScoreBoard = (props: ScoreBoardProps) => {
  return (
    <div className="flex justify-between mt-8 w-4/5 items-center px-5 py-3 md:w-3/5 md:h-32 border-solid border-2 rounded-md border-headerOutline">
      <h3 className="text-2xl leading-5 md:text-3xl text-white font-semibold md:leading-8">
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h3>
      <div className="score bg-white px-4 md:px-8 flex-col items-center justify-center rounded-md">
        <h5 className="text-scoreText font-semibold md:text-lg">Score</h5>
        <h5 className="text-3xl md:text-5xl font-semibold text-center text-darkText md:py-1.5">
          {props.score}
        </h5>
      </div>
    </div>
  );
};

export default ScoreBoard;
