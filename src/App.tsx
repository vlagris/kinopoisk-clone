import {RouterProvider} from "react-router-dom";
import {router} from "@/routes";
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
export default App;
