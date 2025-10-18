/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
}


      body {
        font-family: "Inter", sans-serif;
      }
    `}
  />
);

export default Fonts;
