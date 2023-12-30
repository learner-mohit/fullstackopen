const When = ({ truthy, children, fallback = null }) => {
  return truthy ? children : fallback;
};
export default When;
