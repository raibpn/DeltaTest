// import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getUsers as listUsers } from "../../redux/actions/userActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getUsers = useSelector((state) => state.getUsers);
  const { users, loading, error } = getUsers;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">All Users</h2>
      <div className="homescreen__users">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          users.map((user) => {
            <p>{user.name}</p>
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;