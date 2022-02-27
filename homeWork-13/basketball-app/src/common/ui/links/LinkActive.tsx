import styled from "styled-components"
import { Link, useMatch, useResolvedPath,} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const LinkHover = styled.div`
  :hover {
    color: #FF5761;
  }
`

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <LinkHover>
        <Link 
          style={{ 
            fontFamily: 'Avenir',
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "19px",
            textDecoration: "underline",
            color:" #E4163A",
          }}
          to={to}
          {...props}
        >
          {children}
        </Link> 
        {match}
    </LinkHover>
  )
}

