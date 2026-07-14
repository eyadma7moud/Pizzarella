import { useState } from "react";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-sm flex-col items-center gap-4 py-10 text-center animate-fadeIn"
    >
      <p className="font-heading text-xl font-bold text-charcoal">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field text-center"
      />

      {username !== "" && (
        <div className="animate-fadeIn">
          <button className="btn-primary" type="submit">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
