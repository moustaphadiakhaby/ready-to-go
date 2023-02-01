const Switch = ({ bgcolor, bgcolor2, click, click2 }) => {
  return (
    <div className="interrupter">
      <div onClick={click} className={bgcolor}>
        ON
      </div>
      <div onClick={click2} className={bgcolor2}>
        OFF
      </div>
    </div>
  );
};

export default Switch;
