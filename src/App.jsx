import ImageSide from "./components/ImageSide"
import FormSide from "./components/FormSide"
import Navbar from "./components/Navbar"
import { Box, Stack } from "@mui/material"
import Footer from "./components/Footer"

function App() {
  return (
    <Box>
      {/* <Stack direction={"row"} height={"100vh"} overflow={"hidden"}>
        <ImageSide/>
        <FormSide/>
      </Stack>       */}
      <Stack direction={"column"} width={"100%"} height={"100vh"}>
        <Navbar />
        <Footer />
      </Stack>
    </Box>
  )
}

export default App
