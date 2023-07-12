import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { ContentContainer } from "../components/content.styled";
import { AppRoutes } from "../routing/routes";
import { HomeScreen } from "./content/home/home-screen";
import { TaskManagerScreen } from "./content/task-manager/task-manager-screen";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStyles } from "../globalStyles";

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
          </Routes>
        </ContentContainer>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
