import * as React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}


// markup
const IndexPage = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <main style={pageStyles}>
          <title>Home Page</title>
          <h1 style={headingStyles}>
            Welcome
            <br />
            <span style={headingAccentStyles}>— to baby WOGUE World!! </span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
          <p style={paragraphStyles}>
            A place of <code style={codeStyles}>happiness & death!</code> {" "}
            <span role="img" aria-label="smiley emoji">
            😥 
            </span>
          </p>
          <p>     
            <a href="https://github.com/alex285/baby-wogue-world">On Github</a>
          </p>
        </main>
      </Box>
    </Container>
  )
}

export default IndexPage
