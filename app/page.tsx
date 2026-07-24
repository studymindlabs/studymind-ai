import { MainLayout } from "@/components/layout/main-layout";
import { PageContainer } from "@/components/layout/page-container";

import {
  DashboardHeader,
  DashboardOverview,
  ProgressSection,
  ActivitySection,
  ContinueLearning,
  AiTutor,
} from "@/components/features/dashboard";

export default function HomePage() {
  return (
    <MainLayout>
      <PageContainer>
        <DashboardHeader
          title="Dashboard"
          subtitle="Welcome back! Continue your learning journey."
        />

        <DashboardOverview />

        <div className="mt-8">
          <ProgressSection />
        </div>

        <div className="mt-10">
          <ActivitySection />
        </div>

        <div className="mt-10">
          <ContinueLearning />
        </div>
      </PageContainer>
    </MainLayout>
  );
}