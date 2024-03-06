import { useSelector } from "react-redux";
const Total = () => {
  const total = useSelector((state) => state.total);
  const loginDetail = useSelector((state) => state.loginDetail);
  return (
    <div className="customDiv">
      <h3>Total Component - user = {loginDetail}</h3>
      <hr />
      <h2>Total : {total}</h2>
    </div>
  );
};
export default Total;
