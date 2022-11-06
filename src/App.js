import React, { useState, useEffect } from "react";
import Repos from "./components/pages/Repos";
import ReactPaginate from "react-paginate";
import Pagination from "./components/Pagination";
import axios from "axios";
import Error from "./components/Error-404";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

// function App() {
//   return (
//     <div className="main">
//       <Navbar />;
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/repos" element={<Repos />} />
//           <Route path="/error" element={<Error />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.github.com/users/AdekolaToniloba/repos?per_page=100"
      );
      setRepos(res.data);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  function throwError() {
    throw Error();
  }

  console.log(repos);

  // Get Current Posts
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const changePage = ({ selected }) => {
    setCurrentPage = selected;
  };

  return (
    <div className="container mt-5">
      <h1>All My Repositories</h1>
      <button className="btn-error" onClick={throwError}>
        Throw Error
      </button>
      <Repos repos={currentRepos} loading={loading} />
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={Repos.length}
        paginate={paginate}
      />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={changePage}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        reposPerPage={reposPerPage}
        totalRepos={Repos.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
