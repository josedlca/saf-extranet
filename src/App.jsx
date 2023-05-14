import ImageSide from "./components/ImageSide"
import FormSide from "./components/FormSide"
import Navbar from "./components/Navbar"
import { Box, Stack } from "@mui/material"

function App() {
  return (
    <Box>
      {/* <Stack direction={"row"} height={"100vh"} overflow={"hidden"}>
        <ImageSide/>
        <FormSide/>
      </Stack>       */}
      <Stack direction={"row"}>
        <Navbar />
      </Stack>
    </Box>
  )
}

export default App
