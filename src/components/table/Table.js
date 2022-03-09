import React, { useState, useEffect } from "react";
import styles from "./table.module.css";
import Data from "./tableData";
import Button from "@mui/material/Button";
import Poper from "./poper/Poper";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Table() {
  const [users, setUsers] = useState([]);
  const CollectionRef = collection(db, "tableData");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(CollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  console.log(users);

  return (
    <div className={styles.table_screen}>
      <div className={styles.table_container}>
        <div className={styles.table_header}>
          <div className={styles.title_div}>
            <h3>New Arrivals</h3>
            <p>More than 400+ new members</p>
          </div>
          <div className={styles.table_btn_container}>
            {" "}
            <Button variant="contained">Create</Button>
            <Poper />
            {/* <button className={styles.btn_CreateReport}> Create</button> */}
          </div>
        </div>

        <table>
          <tr>
            <th>Products</th>
            <th>Earnings</th>
            <th>Commission</th>
            <th>Company</th>
            <th>Ratting</th>
            <th></th>
          </tr>
          {Data.map((item) => {
            return (
              <tr>
                <td>
                  <div className={styles.prodcut_column}>
                    <img src={item.imgUrl} />
                    <div>
                      <h5> {item.name}</h5>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>{item.earnings}</h5>
                  <h6>{item.ernStatus}</h6>
                </td>
                <td>
                  <h5>{item.commission}</h5>
                  <h6>{item.commStatus}</h6>
                </td>
                <td>
                  <h5>{item.company}</h5>
                  <h6>{item.designation}</h6>
                </td>
                <td>
                  <h5>{item.ratings}</h5>
                  <h6>{item.ratStatus}</h6>
                </td>
                <td>
                  <button className={styles.viewOffer_btn}>View Offer</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Table;

// function Poper() {
//   return (
//     <PopupState variant="popover" popupId="demo-popup-popover">
//       {(popupState) => (
//         <div>
//           <Button
//             variant="contained"
//             color="warning"
//             {...bindTrigger(popupState)}
//           >
//             Create
//           </Button>
//           <Popover
//             {...bindPopover(popupState)}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "center",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "center",
//             }}
//           >
//             <Typography sx={{ p: 2 }}>
//               <div className={styles.createReport_form}>
//                 <input type="text" placeholder="Enter Name" />
//                 <input type="text" placeholder="Title" />
//                 <input type="text" placeholder="Erning" />
//                 <input type="text" placeholder="" />
//                 <input type="text" placeholder="Enter Name" />
//               </div>
//             </Typography>
//           </Popover>
//         </div>
//       )}
//     </PopupState>
//   );
// }
