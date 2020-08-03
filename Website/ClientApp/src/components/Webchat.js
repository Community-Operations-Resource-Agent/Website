import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactWebChat, {
    createDirectLine,
    createStore,
    createStyleSet,
} from "botframework-webchat";

import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import styles from "./WebChat.module.css";
import { ReactComponent as WebChatBtn } from "../assets/WebChatBtn.svg";



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

    /* <div className={`${className || ""} connect-spinner`}>
          <div className="content">
            <div className="icon">
              <span className="ms-Icon ms-Icon--Robot" />
            </div>
            <p>Please wait while we are connecting.</p>
          </div>
        </div>
         */
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
        }
        if (!token) {
            const res = await fetch("/keys/directlinetoken", { method: "POST" });
            const result = await res.json();
            const { secretToken, userID } = result;
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
                <Button className={styles.maximize} onClick={handleMaximizeButtonClick}>
                    {/*TODO: style this svg to be a FAB and remove text <WebChatBtn title="web chat  button" />*/}
                    Web Chat

                    {newMessage && (
                        <span className="ms-Icon ms-Icon--CircleShapeSolid red-dot" />
                    )}
                </Button>
            )}
            {loaded && (
                <div
                    className={`${styles.chatBox} ${
                        minimized ? styles.hide : ""
                        } h-50 w-50`}
                        tabIndex="0"
                >
                    <header className={`${styles.chatHeader} text-light `} >
                        <h1 className={styles.title}>CORAbot Chat</h1>
                        <Button
                            as="span"
                            className={styles.minimize}
                            onClick={handleMinimizeButtonClick}
                        >
                            _
                        </Button>
                    </header>
                    <WebChat
                        className="react-web-chat"
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
