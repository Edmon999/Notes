export interface ITestProps {
  color: string;
}

const Test: React.FC<ITestProps> = ({ color }) => {
  return <div>child is {color} color</div>;
};

export default Test;
