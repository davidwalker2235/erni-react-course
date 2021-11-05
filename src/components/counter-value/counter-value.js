import './counter-value.css';

function CounterValue({value, color = 'white'}) {
  return (
    <div className={`value-color-${color}`}>{value}</div>
  );
}

export default CounterValue;
