let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100,
};

const getPercent = (decimal) => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const SKiDayCounter = ({ goal, powder, total }) => {
  return (
    <section>
      <div>
        Ski Days<p> Total Goal: {goal} </p>
        <p> Total Powder: {powder}</p>
        <p> Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

class Message extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
      </div>
    );
  }
}
