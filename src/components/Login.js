import { useSelector, useDispatch } from "react-redux";
import { validateUser } from "../store/action";

export const Login = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const loginDetailHandler = (e) => {
    let loginDetail = e.target.options[e.target.selectedIndex].text;
    dispatch(validateUser(loginDetail));
  };
  return (
    <div className="customDiv">
      <h3>Login Component</h3>
      <hr />
      <select onChange={(e) => loginDetailHandler(e)}>
        {users.map((user, index) => {
          return <option key={index}>{user}</option>;
        })}
      </select>
    </div>
  );
};
