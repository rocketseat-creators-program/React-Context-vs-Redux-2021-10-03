import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";

const headerProps = { text: "I'm styled!" };

const scope = { styled, headerProps };

const code = `
  const Header = styled.div\`
    color: palevioletred;
    font-size: 18px;
  \`

  render(<Header>{headerProps.text}</Header>)
`;

const LiveCode = () => (
  <LiveProvider code={code} scope={scope} noInline={true}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default LiveCode;
