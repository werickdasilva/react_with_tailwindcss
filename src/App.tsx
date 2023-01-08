import { CardImage } from "./uis/CardImage";
import { Footer } from "./uis/Footer";
import { Grid } from "./uis/Grid";
import { Lists } from "./uis/Lists";
import { Navbar } from "./uis/Navbar";

export default function App() {
  return (
    <>
    <Navbar />
      <div className="md:container mx-auto">
        <h1 className="main-title underline">React with TailWindCss</h1>
        <Grid />
        <Lists />
        <CardImage />
      </div>
        <Footer />
    </>
  )
}