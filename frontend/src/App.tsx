import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return(
    <>
      <ToastContainer />
      <Header />
      <main>
        <section>
          <div id="sales">
            <div className="dsmeta-container">
              <SalesCard />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
