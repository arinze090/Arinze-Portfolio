import { useEffect } from "react";
import "./App.css";
import NormalRoute from "./routes/NormalRoute";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return <NormalRoute />;
}
