import logo from './logo.svg';
import './App.css';
import Card from './Card';
import data from './data';

function cardx(value, index, array){  //is k andr 2 parameter hota h
  return (
    <Card 
      imgsrc = {value.imgsrc}
      title = {value.title}
      sname = {value.sname}
      link = {value.link}
    /> 
  );
}

function App() {
  return (
    <>
    {/* yaha props chala rha hun */}

    {/* yaha main array k object ko index ko call kr rha hun */}
    

    {/* <Card 
      imgsrc = {data[1].imgsrc}
      title = {data[1].title}
      sname = {data[1].sname}
      link = {data[1].link}
    />

    <Card 
      imgsrc = {data[2].imgsrc}
      title = {data[2].title}
      sname = {data[2].sname}
      link = {data[2].link}
    /> */}



    {/* yahi chiz ab map method me krne ka to aur fir bar bar likhne ki zrurt nhi hogi car aur us k properties ko*/}

    {/* map method ko call kiya */}

    {data.map(cardx)} 
    
  </>
  );
}

export default App;
