import React, { Component } from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


//親コンポーネント
export default class App extends Component {
  //コンストラクタ
  constructor(){
    super();
    //stateの初期化
    this.state = {
      userdatas:[],
    };
  }

  //初回renderメソッド実行後に実行されるメソッド
  componentDidMount(){
    //Django APIの呼び出し
    fetch('http://127.0.0.1:8000/api/v1/app/')
    .then(responce => responce.json())
    // stateの更新
    .then(json => this.setState({ userdatas: json }))
    .catch(err => console.log(err));
  }

  //　仮想DOMの構築（必須メソッド）
  render(){
    const style = {
      align:"left"
    }
    return( 
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={style}>名前</TableCell>
              <TableCell style={style}>HP</TableCell>
              <TableCell style={style}>攻撃</TableCell>
              <TableCell style={style}>防御</TableCell>
              <TableCell style={style}>反撃</TableCell>
              <TableCell style={style}>移動範囲</TableCell>
              <TableCell style={style}>攻撃範囲</TableCell>
              <TableCell style={style}>視界</TableCell>
              <TableCell style={style}>説明</TableCell>
              <TableCell style={style}>特殊１</TableCell>
              <TableCell style={style}>特殊２</TableCell>
              <TableCell style={style}>特殊３</TableCell>
              <TableCell style={style}>特殊４</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* リストの数だけループ */}
            {this.state.userdatas.map(userdata =>(
              <TableRow key={userdata.name}>
                <TableCell component="th" scope="row">
                  {userdata.name}
                </TableCell>
                <TableCell align="left">
                  {userdata.hp}
                </TableCell>
                <TableCell align="left">
                  {userdata.attack}
                </TableCell>
                <TableCell align="left">
                  {userdata.defence}
                </TableCell>
                <TableCell align="left">
                  {userdata.counter}
                </TableCell>
                <TableCell align="left">
                  {userdata.move}
                </TableCell>
                <TableCell align="left">
                  {userdata.range}
                </TableCell>
                <TableCell align="left">
                  {userdata.site}
                </TableCell>
                <TableCell align="left">
                  {userdata.text}
                </TableCell>
                <TableCell align="left">
                  {userdata.special1}
                </TableCell>
                <TableCell align="left">
                  {userdata.special2}
                </TableCell>
                <TableCell align="left">
                  {userdata.special3}
                </TableCell>
                <TableCell align="left">
                  {userdata.special4}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
