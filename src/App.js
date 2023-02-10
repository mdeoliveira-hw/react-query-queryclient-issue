import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePokemon } from "react-query-issue-lib";


const Pokemon = () => {
  const { data } = usePokemon()

  return (
    <p>{JSON.stringify(data)}</p>
  )
}

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={defaultQueryClient}>
      <Pokemon />
    </QueryClientProvider>
  )
}

export default App;
