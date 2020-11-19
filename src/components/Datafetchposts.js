import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import axios from "axios";
import { Display, Input, Button, Title, Empha } from "./Designstyled";
import { UseroneContext, UsertwoContext } from "../App";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "fetch_failed":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};
function Datafetchposts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const userone = useContext(UseroneContext);
  const usertwo = useContext(UsertwoContext);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        dispatch({ type: "fetch_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "fetch_failed" });
      });
  }, [idButton]);

  const handleClick = useCallback(() => {
    setIdButton(id);
  }, [id]);

  return (
    <div>
      <div className="app">
        <header>
          <h1>
            {userone} {usertwo}
          </h1>
        </header>
      </div>
      <Display>
        <Input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          ref={inputRef}
        />
        <Button primary onClick={handleClick}>
          Click
        </Button>
        <Empha>
          <em>Change the number then click</em>
        </Empha>
        <Title>
          <strong>Title:</strong> {state.loading ? "Loading" : state.post.title}
        </Title>

        <Title>
          <strong>Body: </strong>
          {state.loading ? "Loading" : state.post.body}
          {state.error ? state.error : null}
        </Title>
      </Display>
    </div>
  );
}

export default Datafetchposts;
