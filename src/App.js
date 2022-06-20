import Routing from "./Routing";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import toast, { Toaster} from "react-hot-toast";
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Routing />
    </QueryClientProvider>
    <div><Toaster/></div>
    </>
  );
};

export default App;