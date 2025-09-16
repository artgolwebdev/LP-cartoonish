import { Hero } from "./components/Hero";
import { ClassInfo } from "./components/ClassInfo";
import { InstructorBio } from "./components/InstructorBio";
import { CallToAction } from "./components/CallToAction";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClassInfo />
      <InstructorBio />
      <CallToAction />
    </div>
  );
}