// import React from 'react';

// const MyPage = () => {
//   return (
//     <div>
//       <h2>My Page</h2>
//       <p>This is the contact page content.</p>
//     </div>
//   );
// };

// export default MyPage;

import React, {useState, useEffect} from "react";

function MyPage() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    fetch("/api/hello")
        .then((res) => {return res.json();})
        .then((data) => {setMsg(data);})
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default MyPage;