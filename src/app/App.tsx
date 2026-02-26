import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "@/app/components/HomePage";
import { CaseStudy } from "@/app/components/CaseStudy";
import { SurveyApp } from "@/app/survey/SurveyApp";
import { AdminPage } from "@/app/admin/AdminPage";
import { InitiativePage } from "@/app/components/InitiativePage";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/survey" element={<SurveyApp />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/initiative" element={<InitiativePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}