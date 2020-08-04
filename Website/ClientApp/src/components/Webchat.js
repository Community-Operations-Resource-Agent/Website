import ReactWebChat, {
  createDirectLine,
  createStore,
  createStyleSet,
} from "botframework-webchat";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { ReactComponent as WebChatBtn } from "../assets/WebChatBtn.svg";
import styles from "./WebChat.module.css";

export const WebChat = ({ onFetchToken, styleSet, store, token, user }) => {
  console.log("user", user);
  console.log("token", token);
  const directLine = useMemo(
    () =>
      createDirectLine({
        token,
      }),
    [token]
  );

  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  return token && user ? (
    <ReactWebChat
      directLine={directLine}
      userID={user}
      store={store}
      styleSet={styleSet}
    />
  ) : (
    <Spinner></Spinner>
  );
};

export const MinimizeWebChat = () => {
  const store = useMemo(
    () =>
      createStore({}, ({ dispatch }) => (next) => (action) => {
        if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
          dispatch({
            type: "WEB_CHAT/SEND_EVENT",
            payload: {
              name: "webchat/join",
              value: {
                language: window.navigator.language,
              },
            },
          });
        } else if (action.type === "DIRECT_LINE/INCOMING_ACTIVITY") {
          if (action.payload.activity.from.role === "bot") {
            setNewMessage(true);
          }
        }
        return next(action);
      }),
    []
  );

  const styleSet = useMemo(
    () =>
      createStyleSet({
        sendBoxBorderTop: "solid 1px #04bfd8",
        backgroundColor: "White",
        bubbleBackground: "#0a1624",
        bubbleTextColor: "White",
        bubbleBorderRadius: 5,
        bubbleFromUserBackground: "#04bfd8",
        bubbleFromUserTextColor: "White",
        bubbleFromUserBorderRadius: 5,
        hideUploadButton: true,
      }),
    []
  );

  const [loaded, setLoaded] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const handleFetchToken = useCallback(async () => {
    let { conversationId } = sessionStorage;

    if (conversationId) {
      const res = await fetch(
        `https://directline.botframework.com/v3/directline/conversations/${conversationId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res.json();
      setToken(result);
    }
    if (!token) {
      const res = await fetch("/keys/directlinetoken", { method: "POST" });
      const { secretToken, userID } = await res.json();

      // sessionStorage.setItem("conversationId", result.);
      setToken(secretToken);
      setUser(userID);
    }
  }, [setToken, token]);

  const handleMaximizeButtonClick = useCallback(async () => {
    setLoaded(true);
    setMinimized(false);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  const handleMinimizeButtonClick = useCallback(() => {
    setMinimized(true);
    setNewMessage(false);
  }, [setMinimized, setNewMessage]);

  return (
    <div className={styles.webChat}>
      {minimized && (
        <WebChatBtn
          className={styles.maximize}
          title='Web Chat'
          alt='Web Chat Button'
          onClick={handleMaximizeButtonClick}>
          {newMessage && (
            <span className='ms-Icon ms-Icon--CircleShapeSolid red-dot' />
          )}
        </WebChatBtn>
      )}
      {loaded && (
        <div
          className={`${styles.chatContainer} ${
            minimized ? styles.hide : ""
          } h-50 w-50`}>
          <header className={`${styles.chatHeader} text-light `}>
            <h1 className={styles.title}>CORAbot Chat</h1>
            <Button
              as='span'
              className={styles.minimize}
              onClick={handleMinimizeButtonClick}>
              _
            </Button>
          </header>
          <WebChat
            className='react-web-chat'
            onFetchToken={handleFetchToken}
            store={store}
            styleSet={styleSet}
            token={token}
            user={user}
          />
        </div>
      )}
    </div>
  );
};

export default MinimizeWebChat;
