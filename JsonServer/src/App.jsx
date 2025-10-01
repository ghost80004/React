import React from "react";
import axios from "axios";
function App() {
  React.useEffect(() => {
    axios.get("http://localhost:4000/users")
    axios.post("http://localhost:4000/users",{name : "Ankit"})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error fetching users:", err);
      });
  }, []);
}
export default App;
