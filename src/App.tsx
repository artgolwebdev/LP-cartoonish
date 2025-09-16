import { Hero } from "./components/Hero";
import { ClassInfo } from "./components/ClassInfo";
import { InstructorBio } from "./components/InstructorBio";
import { CallToAction } from "./components/CallToAction";
import { LoadingScreen } from "./components/LoadingScreen";
import { useLoading } from "./hooks/useLoading";

export default function App() {
  const { isLoading, handleLoadingComplete } = useLoading();

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Hero />
        <ClassInfo />
        <InstructorBio />
        <CallToAction />
      </div>
    </div>
  );
}