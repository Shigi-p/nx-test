import React from 'react';
import styled from 'styled-components';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}
export const StyledLink = styled.a`
  color: #5555dd;
`;

const Link = ({ children, ...otherProps }: LinkProps) => {
  return <StyledLink {...otherProps}>{children}</StyledLink>;
};

export default Link;
