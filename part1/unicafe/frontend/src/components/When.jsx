const When = ({ truthy, children, fallback = null }) =>
  truthy ? children : fallback;
export default When;
