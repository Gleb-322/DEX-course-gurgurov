import styled from "styled-components"

const Link = styled.a`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #E4163A;
`

const LinkActive = () => {
  return (
    <div>
        <Link href='#'>Link</Link>
    </div>
  )
}

export {LinkActive}