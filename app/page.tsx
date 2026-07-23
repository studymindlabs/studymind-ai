import { MainLayout } from "@/components/layout/main-layout";
import { PageContainer } from "@/components/layout/page-container";
import {
  DashboardHeader,
  DashboardOverview,
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
      </PageContainer>
    </MainLayout>
  );
}