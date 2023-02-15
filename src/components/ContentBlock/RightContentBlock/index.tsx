import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
} from "./styles";
import { Button } from "../../../common/Button";
import Input from "../../../common/Input";
import { useState, useEffect } from "react";

const RightBlock = ({
  title,
  content,
}: ContentBlockProps) => {

  const [searchActivity, setActivity] = useState("")
  const [rows, setRows] = useState([
      createData(0, "Ayush", 24, 2, ["soccer", "basketball", "baseball"]),
      createData(1, "Bob", 13, 3, ["hockey", "basketball", "baseball"]),
      createData(2, "James", 30, 1, ["soccer", "cricket", "baseball"]),
      createData(3, "Alex", 18, 4, ["running", "basketball", "baseball"]),
      createData(4, "Rachel", 22, 5, ["soccer", "tennis", "baseball"]),
  ])

  const [view, setView] = useState(rows);

  const [searchActivityResult, setSearchActivityResult] = useState(0)

  useEffect(() => {
    setView(rows)
  }, [rows]);
  

  const handleSubmit = () => {
    var count = 0
    rows.map(row => {
      if (row["activities"].includes(searchActivity.toLowerCase())) {
        count += 1
      }
    })

    setSearchActivityResult(count)
  }

  function newFilterName(e){
    var searchedVal = e.target.value
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setView(filteredRows);
  }

  function newFilterActivity(e){
    var searchedVal = e.target.value
    var filteredRows: any = []

    rows.map(row => {
      if (row["activities"].some(activity=>activity.includes(searchedVal))) {
        filteredRows.push(row)
      }
    })

    setView(filteredRows);
  }

  function createData(
    index: number,
    name: string,
    age: number,
    rating: number,
    activities: string[],
    ) {
    return { index, name, age, rating, activities };
  }

  const updateRatingAlgorithm = (deletedRating: number) => {
    var newRows: any = []

    rows.map(row => {
      if (row.rating > deletedRating) {
        row.rating = row.rating - 1;
      }
      newRows.push(row)
    })

    setRows(newRows)
  }

  const removePlayer = (index) => {
    var deletedRating = rows.filter(row => {
      return row.index === index
    })[0].rating

    updateRatingAlgorithm(deletedRating)

    setRows(rows.filter(function( obj ) {
      return obj.index !== index;
    }))
  }


  const TableOfUsers = () => {
    return (
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Rating</TableCell>
                  <TableCell align="right">Activities</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {view.map((row) => (
                  <TableRow
                      key={row.index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                      <TableCell component="th" scope="row">
                      <a onClick={()=> removePlayer(row.index)}>Delete me</a>
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.rating}</TableCell>
                      <TableCell align="right">{row.activities.map(activity => {
                        return (
                          <div>
                            <span>{activity}</span><br/>
                          </div>
                        )
                      })}</TableCell>
                  </TableRow>
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
      );
  }

  return (
    <RightBlockContainer>
      <Fade direction="right">
          <h6>{title}</h6>
          <Content>{content}</Content>
          <Input value={searchActivity} name={"Search Activity"} onChange={(e) => setActivity(e.target.value)}></Input>
          <Button key={"send"}
              fixedWidth={true}
              onClick={handleSubmit}>
                Get Activity Count
          </Button><br/>
          <span>The number of members with this activity is: {searchActivityResult}</span><br/>
          <Input name={"Filter By Name"} onChange={newFilterName}></Input><br/>
          <Input name={"Filter By Activity"} onChange={newFilterActivity}></Input><br/>
          <TableOfUsers/>              
      </Fade>
    </RightBlockContainer>
  );
};

export default RightBlock;
