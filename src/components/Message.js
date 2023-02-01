const Message = ({ sw1, sw2, sw3 }) => {
  if (sw1 && sw2 && sw3) {
    return <div className="message2">Go !</div>;
  }

  return <div className="message">No way !</div>;
};

export default Message;
