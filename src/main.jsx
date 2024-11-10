import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { ContextProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins, sans-serif",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </ContextProvider>
  </StrictMode>
);
