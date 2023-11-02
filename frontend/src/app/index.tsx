import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/header";
import { ContentContainer } from "../components/content.styled";
import { AppRoutes } from "../routing/routes";
import { HomeScreen } from "./content/home/home-screen";
import { TaskManagerScreen } from "./content/task-manager/task-manager-screen";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStyles } from "../globalStyles";
import { EncryptedNotesScreen } from "./content/encrypted-notes/encrypted-notes-screen";

const queryClient = new QueryClient();

export const App = () => {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <ContentContainer>
          <Routes>
            <Route path={AppRoutes.home.path} element={<HomeScreen />} />
            <Route
              path={AppRoutes.taskManager.path}
              element={<TaskManagerScreen />}
            />
            <Route
              path={AppRoutes.encryptedNotes.path}
              element={<EncryptedNotesScreen />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ContentContainer>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
