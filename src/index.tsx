import ReactDOM from "react-dom/client";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(<SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />);
