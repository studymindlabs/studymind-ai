import { MainLayout } from "@/components/layout/main-layout";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button/button";

export default function HomePage() {
  return (
    <MainLayout>
      <PageContainer>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome to StudyMind AI
            </h1>

            <p className="mt-2 text-gray-400">
              AI Powered Learning Platform for Bangladesh
            </p>
          </div>

          <Button>
            Get Started
          </Button>
        </div>
      </PageContainer>
    </MainLayout>
  );
}