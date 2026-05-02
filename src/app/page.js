import Banner from "@/components/banner/Banner";
import LearningTips from "@/components/learning tips/LearningTips";
import PopularCourses from "@/components/popularCourses/PopularCourses";
import TopInstructor from "@/components/topInstructor/TopInstructor";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <TopInstructor></TopInstructor>
    </div>
  );
}
