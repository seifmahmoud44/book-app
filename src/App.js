import { useSelector } from "react-redux";
import "./App.css";
import AddForm from "./component/AddForm";
import BookDetails from "./component/BookDetails";
import BookPreview from "./component/BookPreview";

function App() {
  const state = useSelector((state) => state);

  return (
    <>
      {state.erorr && (
        <div class="alert alert-danger" role="alert">
          faild to fetch data
        </div>
      )}
      <div className="container text-center">
        <AddForm />
        <div className="row">
          <div className="col-6">
            <BookDetails />
          </div>
          <div className="col-6">
            <BookPreview />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
