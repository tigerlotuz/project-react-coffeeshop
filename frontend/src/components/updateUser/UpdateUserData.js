import { setCurrentUser } from "../../actions/currentUser";
import { useDispatch, useSelector } from "react-redux";

const UpdateUserData = () => {
  const user = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  if(user.isLoggedin){
    fetch(`http://localhost:8080/api/users/${user.user.email}`)
      .then((res) => res.json())
      .then((data) => dispatch(setCurrentUser(data)));
  }
};

export default UpdateUserData;
