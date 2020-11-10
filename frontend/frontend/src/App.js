import React, { Component } from 'react';

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
    return( 
      <div className="App">
        <ul>
          {/* リストの数だけループ */}
          {this.state.userdatas.map(userdata =>(
            <li key={userdata.name}>
              <Item userdata={userdata} />
              {/* 子コンポーネントの呼び出し */}
            </li>
           ))}
        </ul>
      </div>
    );
  }
}

//子コンポーネント（リスト１セット分）
const Item = props => (
  <span>
    {props.userdata.name}:{props.userdata.hp}
  </span>
)
