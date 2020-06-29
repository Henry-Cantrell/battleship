let truthObj = () => {

    let toggle = true;
  
    let toggleFalse = () => {
      toggle = false;
    };
  
    let toggleTrue = () => {
      toggle = true;
    };

    return {toggle, toggleFalse, toggleTrue}
  };
  
  module.exports = truthObj;
  