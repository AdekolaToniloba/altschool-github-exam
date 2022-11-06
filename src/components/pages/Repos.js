import React from "react";

const Repos = ({ repos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {repos.map((repo) => (
        <li key={repo.id} className="list-group-item">
          {repo.name}
        </li>
      ))}
    </ul>
  );
};

export default Repos;
